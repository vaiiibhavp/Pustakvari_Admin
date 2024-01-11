import { Box, Button, Container, Typography } from '@mui/material'
import React from 'react'
import CommonTable from '../../Component/Table/Table'
import { SubscriptionTablesColumn, usersSuperAdminTablesColumn } from '../Utils/constant';
import { AppStrings, colorCodes } from '../../Helper/Constant';

const Subscription = () => {
    const data = [
        { Subscription_Name: 'John Doe', Features: "500 ebooks", Rate: "500", Duration: "Monthly" },
        { Subscription_Name: 'lakhan dev', Features: "500 ebooks", Rate: "500", Duration: "Monthly" },
        // Add more rows as needed
    ];
    return (
        <Container maxWidth="xl">
            <Box pb={2} mx={1} sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>

                <Typography variant='h5'>{AppStrings?.subscription}</Typography>
                <Box>
                    <Button sx={{ background: colorCodes?.PRIMARY_COLOR, color: "#fff" }}>+{AppStrings?.add_plans}</Button>
                </Box>
            </Box>
            <CommonTable columns={SubscriptionTablesColumn} data={data} rowSelect={() => console.log("row selected")} editRecord={(e) => console.log("e", e)} showSubscription={() => console.log("show subscription")} />
        </Container>
    )
}

export default Subscription
