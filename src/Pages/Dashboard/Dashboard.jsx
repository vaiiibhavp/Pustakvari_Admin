import { Container, Grid, Typography } from '@mui/material'
import React from 'react'
import AppWidgetSummary from '../../Component/app/AppWidgetSummary'
import { AppStrings, colorCodes, dashboardWidgetData } from '../../Helper/Constant'
import AppWebsiteVisits from '../../Component/app/AppWebSiteVisitor'



const Dashboard = () => {


    return (
        <Container maxWidth="xl">
            <Typography variant="h4" sx={{ mb: 3 }}>
                {AppStrings?.welcome_message}
            </Typography>

            <Grid container spacing={3}>
                {dashboardWidgetData && dashboardWidgetData.map((menuItemDashboard) => {
                    return (
                        <Grid key={menuItemDashboard.id} item xs={12} sm={6} md={3}>
                            <AppWidgetSummary item={menuItemDashboard}
                                title="Total Users"
                                total={300}

                            />
                        </Grid>
                    )
                })}



                <Grid item xs={12} md={8} lg={8}>
                    <AppWebsiteVisits
                        title="Community Expansion Report"
                        subheader=""
                        type="bar"
                        widthlarge="true"
                        Colors={[colorCodes?.SECONDARY_COLOR_300, colorCodes?.SECONDARY_COLOR_500, colorCodes?.SECONDARY_COLOR_100]}
                        chartLabels={Array.from({ length: 8 }, (_, i) => `0${i + 1}/01/2023`)}
                        chartData={[
                            {
                                name: "PRODUCT A",
                                data: [44, 55, 41, 67, 22, 43, 21, 49],
                            },

                        ]}
                    />
                </Grid>

                <Grid item xs={12} md={4} lg={4}>
                    <AppWebsiteVisits
                        title="Community Expansion Report"
                        subheader=""
                        type="pie"
                        Colors={["#52cc91", "#ff5630", "#ffab00", "#1877f2", "#00b8d9"]}
                        chartLabels={['Team A', 'Team B', 'Team C', 'Team D', 'Team E']}
                        chartData={[44, 55, 13, 43, 22]}
                    />
                </Grid>

                <Grid item xs={12} md={4} lg={4}>
                    <AppWebsiteVisits
                        title="Community Expansion Report"
                        subheader=""
                        type="donut"
                        Colors={["#a3c9fa", "#4692f5"]}

                        chartLabels={Array.from({ length: 2 }, (_, i) => `0${i + 1}/01/2023`)}
                        chartData={[222, 767]}
                    />
                </Grid>

                <Grid item xs={12} md={8} lg={8}>
                    <AppWebsiteVisits
                        title="Community Expansion Report"
                        subheader=""
                        type="bar"
                        Colors={[colorCodes?.SECONDARY_COLOR_300, colorCodes?.SECONDARY_COLOR_500, colorCodes?.SECONDARY_COLOR_100]}
                        chartLabels={Array.from({ length: 8 }, (_, i) => `0${i + 1}/01/2023`)}
                        chartData={[
                            {
                                name: "PRODUCT A",
                                data: [44, 55, 41, 67, 22, 43, 21, 49],
                            },
                            {
                                name: "PRODUCT B",
                                data: [13, 23, 20, 8, 13, 27, 33, 12],
                            },
                            {
                                name: "PRODUCT C",
                                data: [11, 17, 15, 15, 21, 14, 15, 13],
                            },
                        ]}
                    />
                </Grid>








            </Grid>

        </Container>
    )
}

export default Dashboard