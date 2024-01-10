import { Container, Grid, Typography } from '@mui/material'
import React from 'react'
import AppWidgetSummary from '../../Component/app/AppWidgetSummary'



const Dashboard = () => {
    return (
        <Container maxWidth="xl">
            <Typography variant="h4" sx={{ mb: 3 }}>
                Hi, Welcome Back
            </Typography>

            <Grid container spacing={3}>
                <Grid item xs={12} sm={6} md={3}>
                    <AppWidgetSummary
                        title="Total Users"
                        total={300}
                    // icon={<PiUsersThreeBold style={{ fontSize: '24px' }} />}
                    />
                </Grid>

                <Grid item xs={12} sm={6} md={3}>
                    <AppWidgetSummary
                        title="Total Experts"
                        total={200}
                        color="info"
                    // icon={<FaChalkboardTeacher style={{ fontSize: '24px' }} />}
                    />
                </Grid>

                <Grid item xs={12} sm={6} md={3}>
                    <AppWidgetSummary
                        title="Total Parents"
                        total={100}
                        color="warning"
                    // icon={<RiParentLine style={{ fontSize: '24px' }} />}
                    />
                </Grid>

                <Grid item xs={12} sm={6} md={3}>
                    <AppWidgetSummary
                        title="Total Students"
                        total={200}
                        color="success"
                    // icon={<PiStudentBold style={{ fontSize: '24px' }} />}
                    />
                </Grid>

                <Grid item xs={12} md={8} lg={8}>
                    {/* <AppWebsiteVisits
                        title="Community Expansion Report"
                        subheader=""
                        chartLabels={Array.from({ length: 12 }, (_, i) => `0${i + 1}/01/2023`)}
                        chartData={[
                            {
                                name: 'Users Added',
                                type: 'line',
                                fill: 'solid',
                                color: '#3B7D10',
                                data: [12, 12, 14, 65, 74, 32, 45, 23, 23, 89, 87],
                            },
                        ]}
                    /> */}
                </Grid>


            </Grid>

        </Container>
    )
}

export default Dashboard