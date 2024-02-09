import { Box, Button, Container, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow, Typography, useTheme } from '@mui/material'
import React, { useEffect, useState } from 'react'
import CommonTable from '../../Component/Table/Table'
import { SubscriptionTablesColumn, usersSuperAdminTablesColumn } from '../Utils/constant';
import { AppStrings, colorCodes } from '../../Helper/Constant';
import BorderColorOutlinedIcon from "@mui/icons-material/BorderColorOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";

import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline"; // Import the icon you want to use
import SubscriptionModal from './SubscriptionModal';
import Searchbar from '../../Component/Searchbar';
import useSubscription from '../../Hooks/Subscription';
import ShowsMessageModal from '../../Component/ShowMessageModal';
import DeleteModal from '../../Component/DeleteModal';



const Subscription = () => {

    const { getSubscriptonList, deleteSubscription } = useSubscription();
    const theme = useTheme()
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);

    const [takeDeleteConfirmationOpen, setTakeDeleteConfirmation] = useState(false)
    const [deletionRecord, setDeletionRecord] = useState({})

    const [subscriptionData, setSubscriptionData] = useState({
        subscriptionList: [],
        globalData: [],
        showSuccessModal: false,
        message: "",
    })

    const [isOpenSunscriptionPlanModal, setIsOpenSubscriptionPlanModal] = useState(false)
    const [isEditRecord, setIsEditRecord] = useState({})


    useEffect(() => {
        getSubscriptonList().then((res) => {
            setSubscriptionData((prev) => ({ ...prev, subscriptionList: res.data || [], globalData: res?.data || [] }))

        }).catch((error) => {
            console.log(error);
        })
    }, [isOpenSunscriptionPlanModal])

    const onRemoveHandler = () => {
        if (deletionRecord?._id) {
            deleteSubscription(deletionRecord?._id).then((res) => {
                let filternewData = subscriptionData?.subscriptionList?.filter((item) => {
                    return item._id !== deletionRecord?._id
                })
                setSubscriptionData((prev) => ({
                    ...prev, subscriptionList: filternewData
                }))
                setTakeDeleteConfirmation(false);
            }).catch((error) => {
                console.log(error);
            })
        }
    }

    const onSearch = (value) => {

        if (value) {
            const data = subscriptionData?.globalData?.filter((e) => {
                return e?.subscriptionName?.toLowerCase()?.includes(value?.toLowerCase());
            });
            setSubscriptionData((prev) => ({ ...prev, subscriptionList: data }))
        } else {
            // getUserList();
            setSubscriptionData((prev) => ({ ...prev, subscriptionList: subscriptionData.globalData }))

        }
    }

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };





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
                                <TableCell style={{ minWidth: "80px" }}>{AppStrings?.sNo}</TableCell>
                                <TableCell align="keft" style={{ minWidth: "150px" }}>
                                    {AppStrings?.subscription_Name}
                                </TableCell>
                                <TableCell align="left" style={{ minWidth: "100px" }}>
                                    {AppStrings?.Duration}
                                </TableCell>
                                <TableCell align="center" style={{ minWidth: "150px" }}>
                                    {AppStrings?.rate}                                </TableCell>
                                <TableCell align="center" style={{ minWidth: "120px" }}>
                                    {AppStrings?.features}
                                </TableCell>
                                <TableCell align="center" style={{ minWidth: "120px" }}>
                                    {AppStrings?.takeAction}
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {subscriptionData?.subscriptionList?.length > 0 ?
                                subscriptionData?.subscriptionList
                                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                    .map((subscription, idx) => {
                                        let { _id, duration, features, rate, subscriptionName, created_at, updated_at } = subscription;
                                        return (
                                            <TableRow key={_id}>
                                                <TableCell align="center" component="th" scope="row">
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
                                                            onClick={() => {
                                                                setTakeDeleteConfirmation(true)
                                                                setDeletionRecord(subscription)
                                                                //  onRemoveHandler(_id)
                                                            }}
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
                                                {AppStrings?.no_data_available}
                                            </Typography>
                                        </Box>
                                    </TableCell>
                                </TableRow>
                            }
                        </TableBody>
                    </Table>
                </TableContainer>
                <TablePagination
                    rowsPerPageOptions={[10, 25, 100]}
                    component="div"
                    count={subscriptionData?.subscriptionList?.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />
            </Paper>
            <SubscriptionModal isModalOpen={isOpenSunscriptionPlanModal} subscriptionData={subscriptionData} setSubscriptionData={setSubscriptionData} setIsModalOpen={setIsOpenSubscriptionPlanModal} isEditRecord={isEditRecord} setIsEditRecord={setIsEditRecord} />
            <ShowsMessageModal isOpen={subscriptionData.showSuccessModal} setIsOpen={setSubscriptionData} message={subscriptionData?.message} />

            <DeleteModal
                message={"Are you sure  you want to delete the subscription?"}
                onCancelDeleteHandler={() => {
                    setTakeDeleteConfirmation(false);
                    setDeletionRecord({});
                }}
                onDeleteHandler={() => {
                    onRemoveHandler();
                    setDeletionRecord({});
                }}
                open={takeDeleteConfirmationOpen} setIsOpen={setTakeDeleteConfirmation} />

        </Container>
    )
}

export default Subscription
