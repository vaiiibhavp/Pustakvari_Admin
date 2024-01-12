import { Box, Button, Container, Typography } from '@mui/material'
import React, { useState } from 'react'
import CommonTable from '../../Component/Table/Table'
import { SubscriptionTablesColumn, usersSuperAdminTablesColumn } from '../Utils/constant';
import { AppStrings, colorCodes } from '../../Helper/Constant';
import SubscriptionModal from './SubscriptionModal';

const Subscription = () => {
    const [isOpenSunscriptionPlanModal, setIsOpenSubscriptionPlanModal] = useState(false)
    const [isEditRecord, setIsEditRecord] = useState({})
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
                    <Button onClick={() => {
                        setIsEditRecord({})
                        setIsOpenSubscriptionPlanModal(true)
                    }} sx={{ background: colorCodes?.PRIMARY_COLOR, color: "#fff" }}>+{AppStrings?.add_plans}</Button>
                </Box>
            </Box>
            <CommonTable columns={SubscriptionTablesColumn} data={data} rowSelect={() => console.log("row selected")} editRecord={(e) => {
                setIsEditRecord({ id: 1, title: "Lakhan" })
                setIsOpenSubscriptionPlanModal(true)
            }} showSubscription={() => console.log("show subscription")} />
            <SubscriptionModal isModalOpen={isOpenSunscriptionPlanModal} setIsModalOpen={setIsOpenSubscriptionPlanModal} isEditRecord={isEditRecord} />
        </Container>
    )
}

export default Subscription
