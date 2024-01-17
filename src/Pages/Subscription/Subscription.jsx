import { Box, Button, Container, Typography } from '@mui/material'
import React, { useState } from 'react'
import CommonTable from '../../Component/Table/Table'
import { SubscriptionTablesColumn, usersSuperAdminTablesColumn } from '../Utils/constant';
import { AppStrings, colorCodes } from '../../Helper/Constant';
import SubscriptionModal from './SubscriptionModal';
import Searchbar from '../../Component/Searchbar';

const Subscription = () => {
    const [isOpenSunscriptionPlanModal, setIsOpenSubscriptionPlanModal] = useState(false)
    const [isEditRecord, setIsEditRecord] = useState({})
    const data = [
        { S: 1, Subscription_Name: 'John Doe', Features: "500 ebooks", Rate: "500", Duration: "Monthly" },
        { S: 2, Subscription_Name: 'lakhan dev', Features: "500 ebooks", Rate: "500", Duration: "Monthly" },
        // Add more rows as needed
    ];
    return (
        <Container maxWidth="xl">
            <Box pb={2} mx={1} sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>

                <Typography variant='h5'>{AppStrings?.subscription}</Typography>
                <Box sx={{ display: "flex", gap: 1 }}>
                    <Searchbar onSearch={(e) => console.log("hello", e)} />
                    <Button onClick={() => {
                        setIsEditRecord({})
                        setIsOpenSubscriptionPlanModal(true)
                    }} variant='contained'>+ {AppStrings?.add_plans}</Button>
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
