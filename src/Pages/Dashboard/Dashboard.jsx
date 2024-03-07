import { Container, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import AppWidgetSummary from "../../Component/app/AppWidgetSummary";
import {
    AppStrings,
    colorCodes,
    dashboardWidgetData,
} from "../../Helper/Constant";
import glassmessage from "../../Assets/Images/glassMessage.svg";
import userGlass from "../../Assets/Images/glass_users.svg";
import rupees from "../../Assets/Images/rupee.svg";
import bookframe from "../../Assets/Images/booksFrame.svg";
import AppWebsiteVisits from "../../Component/app/AppWebSiteVisitor";
import waveHandIcon from "../../Assets/Images/waving-hand.svg";
import { useSelector } from "react-redux";
import useDashboard from "../../Hooks/Dashboard";

const Dashboard = () => {
    const [dashboardData, setDashboardData] = useState({
        Data: {},
    });

    const {
        user: { userInfo },
    } = useSelector((state) => state?.AuthUser);

    let InstituteAdmin = userInfo?.userType === "INSTITUTE" ? true : false;

    const { getDashboardData } = useDashboard();

    useEffect(() => {
        getDashboardData(userInfo)
            .then((res) => {
                if (res.status === 200) {
                    setDashboardData((prev) => ({
                        ...prev,
                        Data: res.data,
                    }));
                }
            })
            .catch((err) => {
                console.log(err, "err");
            });
    }, []);

    let { instituteData, superAdminData } = dashboardData?.Data;



    const dashboardWidgetData = [
        {
            id: 1,
            title: AppStrings.monthly_subscription,
            total: InstituteAdmin ? instituteData?.dd || 0 : superAdminData?.dd || 0,
            img: rupees,
        },
        {
            id: 2,
            title: AppStrings.total_user,
            total: InstituteAdmin ? instituteData?.instituteUserCount : superAdminData?.totalUser,
            img: userGlass,
        },
        {
            id: 3,
            title: AppStrings.newly_e_books,
            total: InstituteAdmin ? instituteData?.eBookCount : superAdminData?.eBookCount,
            img: bookframe,
        },
        {
            id: 4,
            title: AppStrings.total_institutes,
            total: InstituteAdmin ? instituteData?.totalInstitute : superAdminData?.totalInstitute,
            img: glassmessage,
        },
    ];



    return (
        <Container maxWidth="xl" sx={{ padding: "0 0 40px 0" }}>
            <Typography
                variant="h4"
                sx={{ mb: 3, display: "flex", alignItems: "center", gap: 1 }}
            >
                {AppStrings?.welcome_message}{" "}
                <img
                    src={waveHandIcon}
                    alt="hand"
                    style={{ width: "20px", height: "20px" }}
                />
            </Typography>

            <Grid container spacing={3}>
                {dashboardWidgetData &&
                    dashboardWidgetData.slice(0, !InstituteAdmin ? dashboardWidgetData?.length : dashboardWidgetData?.length - 1).map((menuItemDashboard) => {
                        return (
                            <Grid key={menuItemDashboard.id} item xs={12} sm={6} md={3}>
                                <AppWidgetSummary
                                    item={menuItemDashboard}
                                    title="Total Users"
                                    total={300}
                                />
                            </Grid>
                        );
                    })}

                {!InstituteAdmin && (
                    <Grid item xs={12} md={8} lg={8}>
                        <AppWebsiteVisits
                            title="Users"
                            subheader=""
                            type="bar"
                            legendPosition={false}
                            widthlarge="true"
                            subtext={
                                AppStrings?.Add_new_subscription_plans ||
                                "Newly Added Users (+43%) than last year"
                            }
                            Colors={[
                                colorCodes?.SECONDARY_COLOR_300,
                                colorCodes?.SECONDARY_COLOR_500,
                                colorCodes?.SECONDARY_COLOR_100,
                            ]}
                            chartLabels={superAdminData?.lastYearUserGraphData?.map((item) => {
                                return item.month
                            }) || []}
                            chartData={[
                                {
                                    name: "Users",
                                    data: superAdminData?.lastYearUserGraphData?.map((item) => {
                                        return item.count
                                    }) || [],
                                },
                            ]}
                        />
                    </Grid>
                )}

                {!InstituteAdmin && (
                    <Grid item xs={12} md={4} lg={4}>
                        <AppWebsiteVisits
                            title="Top 5 categories"
                            doNotlabel={true}
                            subheader=""
                            garphLable={false}
                            legendPosition={false}
                            subtext={"Users reading this categories books most"}
                            type="pie"
                            Colors={["#52cc91", "#ff5630", "#ffab00", "#1877f2", "#00b8d9"]}
                            chartLabels={superAdminData?.peiChartData?.map((item) => {
                                return item._id
                            }) || []}
                            chartData={superAdminData?.peiChartData?.map((item) => {
                                return item?.count
                            }) || []}
                        />
                    </Grid>
                )}

                <Grid item xs={12} md={4} lg={4}>
                    <AppWebsiteVisits
                        title="Active Deactive users"
                        subheader=""
                        legendPosition={false}
                        type="donut"
                        Colors={["#a3c9fa", "#4692f5"]}
                        chartLabels={["Active users", "Deactive users"]}
                        chartData={InstituteAdmin ? [instituteData?.instituteInactiveUserCount || 0, instituteData?.instituteActiveUserCount || 0] : [superAdminData?.inactiveUserCount || 0, superAdminData?.activeUserCount || 0]}
                    />
                </Grid>

                <Grid item xs={12} md={8} lg={8}>
                    <AppWebsiteVisits
                        title="Subscription Buying users"
                        subheader=""
                        type="bar"
                        legendPosition={true}
                        Colors={[
                            colorCodes?.SECONDARY_COLOR_300,
                            colorCodes?.SECONDARY_COLOR_500,
                            colorCodes?.SECONDARY_COLOR_100,
                        ]}
                        chartLabels={Array?.from(
                            { length: 12 },
                            (_, i) => `0${i + 1}/01/2024`
                        )}
                        chartData={[
                            {
                                name: AppStrings?.subscriptionLabel_1,
                                data: [44, 55, 41, 67, 22, 43, 21, 49, 22, 43, 21, 49],
                            },
                            {
                                name: AppStrings?.subscriptionLabel_2,
                                data: [13, 23, 20, 8, 13, 27, 33, 12, 22, 43, 21, 49],
                            },
                            {
                                name: AppStrings?.subscriptionLabel_3,
                                data: [11, 17, 15, 15, 21, 14, 15, 13, 22, 43, 21, 49],
                            },
                        ]}
                    />
                </Grid>
            </Grid>
        </Container>
    );
};

export default Dashboard;
