import { Box, Button, Container, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography, useTheme } from '@mui/material'
import React, { useEffect, useState } from 'react'
import CommonTable from '../../Component/Table/Table'
import { SubscriptionTablesColumn, usersSuperAdminTablesColumn } from '../Utils/constant';
import { AppStrings, colorCodes } from '../../Helper/Constant';
import BorderColorOutlinedIcon from "@mui/icons-material/BorderColorOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";

import SubscriptionModal from './SubscriptionModal';
import Searchbar from '../../Component/Searchbar';
import useSubscription from '../../Hooks/Subscription';

import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline"; // Import the icon you want to use


const Subscription = () => {

    const { getSubscriptonList, deleteSubscription } = useSubscription();
    const theme = useTheme()

    const [subscriptionData, setSubscriptionData] = useState({
        subscriptionList: [],
    })

    const [isOpenSunscriptionPlanModal, setIsOpenSubscriptionPlanModal] = useState(false)
    const [isEditRecord, setIsEditRecord] = useState({})


    useEffect(() => {
        getSubscriptonList().then((res) => {
            setSubscriptionData((prev) => ({ ...prev, subscriptionList: res.data || [] }))

        }).catch((error) => {
            console.log(error);
        })
    }, [isOpenSunscriptionPlanModal])

    const onRemoveHandler = (id) => {
        console.log(id);
        deleteSubscription(id).then((res) => {
            console.log(res, "ress");
            let filternewData = subscriptionData?.subscriptionList?.filter((item) => {
                return item._id !== id
            })
            setSubscriptionData((prev) => ({
                ...prev, subscriptionList: filternewData
            }))
        }).catch((error) => {
            console.log(error);
        })
    }

    const onSearch = (e) => {
        // if (e?.length > 0) {

        //     const filteredSubscriptionList = subscriptionData?.subscriptionList?.filter((item) => {
        //         return item.subscriptionName.toLowerCase().includes(e.toLowerCase());
        //     });
        //     setSubscriptionData((prev) => ({
        //         ...prev, subscriptionList: filteredSubscriptionList
        //     }))
        // } else {
        //     setSubscriptionData((prev) => ({
        //         ...prev
        //     }))
        // }
    }








    return (
        <Container maxWidth="xl">
            <Box pb={2} mx={1} sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>

                <Typography variant='h5'>{AppStrings?.subscription}</Typography>
                <Box sx={{ display: "flex", gap: 1 }}>
                    <Searchbar onSearch={onSearch} />
                    <Button onClick={() => {
                        setIsEditRecord({ id: null })
                        setIsOpenSubscriptionPlanModal(true)
                    }} variant='contained'>+ {AppStrings?.add_plans}</Button>
                </Box>
            </Box>
            <Paper sx={{ width: "100%" }}>
                <TableContainer sx={{ maxHeight: 440 }}>
                    <Table stickyHeader aria-label="sticky table">
                        <TableHead sx={{ background: theme.palette.grey[700] }}>
                            <TableRow sx={{ background: "gray" }}>
                                <TableCell style={{ minWidth: "80px" }}>Sr No</TableCell>
                                <TableCell align="keft" style={{ minWidth: "150px" }}>
                                    Subscription Name
                                </TableCell>
                                <TableCell align="left" style={{ minWidth: "100px" }}>
                                    Features
                                </TableCell>
                                <TableCell align="center" style={{ minWidth: "150px" }}>
                                    Rate                                </TableCell>
                                <TableCell align="center" style={{ minWidth: "120px" }}>
                                    Duration
                                </TableCell>
                                <TableCell align="center" style={{ minWidth: "120px" }}>
                                    Take Actions
                                </TableCell>

                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {subscriptionData?.subscriptionList?.length > 0 ?
                                subscriptionData?.subscriptionList
                                    // .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                    .map((subscription, idx) => {
                                        console.log(subscription, "ddd");
                                        let { _id, duration, features, rate, subscriptionName, created_at, updated_at } = subscription;
                                        return (
                                            <TableRow key={_id}>
                                                <TableCell component="th" scope="row">
                                                    {idx + 1}
                                                </TableCell>
                                                <TableCell align="left">{subscriptionName}</TableCell>
                                                <TableCell align="left">
                                                    {features}
                                                </TableCell>
                                                <TableCell align="center">{rate}</TableCell>
                                                <TableCell align="center">{duration?.duration}</TableCell>

                                                <TableCell align="center" style={{ minWidth: "200px" }}>
                                                    <Box>
                                                        <Button
                                                            sx={{
                                                                margin: " 0 10px",
                                                                background: theme.palette?.primary?.lighter,
                                                                color: theme.palette?.primary.main,
                                                                "&.active": {
                                                                    color: "text.primary",
                                                                    bgcolor: "action.selected",
                                                                    fontWeight: "fontWeightBold",
                                                                },
                                                            }}
                                                            onClick={() => {
                                                                setIsEditRecord(subscription);
                                                                setIsOpenSubscriptionPlanModal(true);
                                                            }}
                                                        >
                                                            <BorderColorOutlinedIcon size="medium" />                                                        </Button>
                                                        <Button
                                                            sx={{
                                                                margin: " 0 10px",
                                                                background: theme.palette?.secondary?.lighter,
                                                                color: theme.palette?.secondary.main,
                                                                "&.active": {
                                                                    color: "text.secondary",
                                                                    bgcolor: "action.selected",
                                                                    fontWeight: "fontWeightBold",
                                                                },
                                                            }}
                                                            onClick={() => onRemoveHandler(_id)}
                                                        > <DeleteOutlineOutlinedIcon size="medium" /></Button>
                                                    </Box>
                                                </TableCell>
                                            </TableRow>
                                        );
                                    }) : <TableRow>
                                    <TableCell colSpan={6} align="center">
                                        <Box sx={{ padding: "20px 0" }}>
                                            <ErrorOutlineIcon fontSize="large" sx={{ color: theme.palette.grey[500] }} />
                                            <Typography sx={{ color: theme.palette.grey[400] }} mt={1} mb={4}>
                                                No data available
                                            </Typography>
                                        </Box>
                                    </TableCell>
                                </TableRow>}
                        </TableBody>
                    </Table>
                </TableContainer>
                {/* <TablePagination
                    rowsPerPageOptions={[10, 25, 100]}
                    component="div"
                    count={userData.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                /> */}
            </Paper>
            <SubscriptionModal isModalOpen={isOpenSunscriptionPlanModal} subscriptionData={subscriptionData} setSubscriptionData={setSubscriptionData} setIsModalOpen={setIsOpenSubscriptionPlanModal} isEditRecord={isEditRecord} />
        </Container>
    )
}

export default Subscription
