import {
    Box,
    Button,
    Container,
    Paper,
    Switch,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Typography,
    useTheme,
} from "@mui/material";
import React, { useState } from "react";
import { AppStrings } from "../../Helper/Constant";
import BorderColorOutlinedIcon from "@mui/icons-material/BorderColorOutlined";

import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import { accoundCreatedDate } from "../../Helper/utils/formatTime";
import Searchbar from "../../Component/Searchbar";

const PaymentTracking = () => {
    const [isUserModalOpen, setIsUserModalOpen] = useState(false)
    const [isEditable, setIsEditable] = useState({})
    const theme = useTheme()
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);
    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    const userData = [
        // {
        //     _id: 2,
        //     fullName: "lakhan Nemane",
        //     is_active: true,
        // }
    ];
    return (
        <Container maxWidth="xl">
            <Box pb={2} mx={1} sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>

                <Typography variant='h5'>Payment Tracking</Typography>
                <Box sx={{ display: "flex", gap: 1 }}>
                    {/* <Searchbar onSearch={(e) => console.log("hello", e)} /> */}

                </Box>
            </Box>
            <Paper sx={{ width: "100%" }}>
                <TableContainer sx={{ maxHeight: 440 }}>
                    <Table stickyHeader aria-label="sticky table">
                        <TableHead>
                            <TableRow>
                                <TableCell align="center" style={{ minWidth: "70px" }}>
                                    Sr No
                                </TableCell>
                                <TableCell align="center" style={{ minWidth: "150px" }}>
                                    {AppStrings?.user_Name}
                                </TableCell>
                                <TableCell align="center" style={{ minWidth: "100px" }}>
                                    {AppStrings?.contact_nos || "Transaction ID"}
                                </TableCell>

                                <TableCell align="center" style={{ minWidth: "120px" }}>
                                    {AppStrings?.emailss || "Amount"}
                                </TableCell>
                                <TableCell align="center" style={{ minWidth: "200px" }}>
                                    {AppStrings?.Account_created_ons || "Date"}
                                </TableCell>
                                <TableCell align="center" style={{ minWidth: "240px" }}>
                                    {AppStrings?.CurrentSubscriptisson || "Time"}
                                </TableCell>
                                <TableCell align="center" style={{ minWidth: "100px" }}>
                                    {AppStrings?.status}
                                </TableCell>

                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {userData?.length > 0 ? (
                                userData
                                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                    .map((row, idx) => {

                                        return (
                                            <TableRow key={row?.id}>
                                                <TableCell align="center" component="th" scope="row">
                                                    {idx + 1}
                                                </TableCell>
                                                <TableCell align="left">
                                                    <Box
                                                        sx={{
                                                            display: "flex",
                                                            gap: 1,
                                                            alignItems: "center",
                                                        }}
                                                    >
                                                        <Box>
                                                            <img
                                                                src={

                                                                    "https://tse4.mm.bing.net/th?id=OIP.Bl6dInu-pv4nnfv-QAxgSwHaHa&pid=Api&P=0&h=180"
                                                                }
                                                                alt=""
                                                                style={{ width: "40px", height: "40px" }}
                                                            />
                                                        </Box>
                                                        {row?.fullName}
                                                    </Box>
                                                </TableCell>
                                                <TableCell align="center">{row?.mobileNo}</TableCell>

                                                <TableCell align="left">{row?.emailId}</TableCell>
                                                <TableCell align="center">
                                                    {accoundCreatedDate(row?.created_at)}
                                                </TableCell>
                                                <TableCell align="center">
                                                    {accoundCreatedDate(row?.created_at)}
                                                </TableCell>
                                                {/* <TableCell align="center">{row?.Last_Login}</TableCell> */}
                                                <TableCell align="center">
                                                    <Button
                                                        sx={{
                                                            width: "100px",
                                                            background: row?.is_active
                                                                ? theme.palette?.success?.lighter
                                                                : theme.palette?.warning?.lighter,
                                                            color: row?.is_active
                                                                ? theme.palette?.success.main
                                                                : theme.palette?.warning?.main,
                                                            textDecoration: "none",
                                                            borderRadius: "8px",
                                                            padding: "3px 16px",
                                                            "&.active": {
                                                                color: "text.primary",
                                                                bgcolor: "action.selected",
                                                                fontWeight: "fontWeightBold",
                                                            },
                                                        }}
                                                    >
                                                        {row?.is_active ? "Successful" : "Pending"}
                                                    </Button>
                                                </TableCell>



                                            </TableRow>
                                        );
                                    })
                            ) : (
                                <TableRow>
                                    <TableCell colSpan={12} align="center">
                                        <Box sx={{ padding: "20px 0" }}>
                                            <ErrorOutlineIcon
                                                fontSize="large"
                                                sx={{ color: theme.palette.grey[500] }}
                                            />
                                            <Typography
                                                sx={{ color: theme.palette.grey[400] }}
                                                mt={1}
                                                mb={4}
                                            >
                                                {AppStrings?.no_data_available}
                                            </Typography>
                                        </Box>
                                    </TableCell>
                                </TableRow>
                            )}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Paper>

        </Container>
    )
}

export default PaymentTracking;
