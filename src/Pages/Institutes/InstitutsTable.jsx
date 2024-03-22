
import { Box, Button, Switch, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography, useTheme } from '@mui/material';
import React from 'react'
import { AppStrings } from '../../Helper/Constant';
import { accoundCreatedDate } from '../../Helper/utils/formatTime';
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline"; // Import the icon you want to use
import { useNavigate } from 'react-router-dom';
import BorderColorOutlinedIcon from "@mui/icons-material/BorderColorOutlined";



const InstitutsTable = ({ userData, page, rowsPerPage, handleCheckStatus, setIsEditable, setIsInstituteModalOpen }) => {
    let theme = useTheme();
    const navigate = useNavigate();
    return (
        <TableContainer sx={{ maxHeight: 440 }}>
            <Table stickyHeader aria-label="sticky table">
                <TableHead sx={{ background: theme.palette.grey[700] }}>
                    <TableRow sx={{ background: "gray" }}>
                        <TableCell align="center" style={{ minWidth: "80px" }}>
                            {AppStrings?.sNo}
                        </TableCell>
                        <TableCell align="center" style={{ minWidth: "150px" }}>
                            {AppStrings?.institute_name}
                        </TableCell>
                        <TableCell align="center" style={{ minWidth: "100px" }}>
                            {AppStrings?.contact_no}
                        </TableCell>
                        <TableCell align="center" style={{ minWidth: "180px" }}>
                            {AppStrings?.email}{" "}
                        </TableCell>
                        <TableCell align="center" style={{ minWidth: "180px" }}>
                            {AppStrings?.Account_created_on}
                        </TableCell>
                        <TableCell align="center" style={{ minWidth: "100px" }}>
                            {AppStrings?.status}
                        </TableCell>

                        <TableCell align="center" style={{ minWidth: "100px" }}>
                            {AppStrings?.Total_users}
                        </TableCell>
                        <TableCell align="center" style={{ minWidth: "80px" }}>
                            {AppStrings?.deactivate}
                        </TableCell>
                        <TableCell align="center" style={{ minWidth: "100px" }}>
                            {AppStrings?.takeAction}
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {userData?.length > 0 ? (
                        userData
                            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                            .map((institute, idx) => {
                                let {
                                    _id,
                                    emailId,
                                    instituteName,
                                    is_active,
                                    instituteImage,
                                    mobileNo,
                                    created_at,
                                    studentCount,
                                } = institute;
                                return (
                                    <TableRow key={_id}>
                                        <TableCell component="th" align="center" scope="row">
                                            {idx + 1}
                                        </TableCell>
                                        <TableCell
                                            align="left"
                                            onClick={() =>
                                                navigate(`/institute/${_id}`, { state: institute })
                                            }
                                        >

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
                                                            instituteImage
                                                                ? instituteImage
                                                                : "https://tse3.mm.bing.net/th?id=OIP.nzmvYPuJavbTzDLL4AGaFgAAAA&pid=Api&P=0&h=180"
                                                        }
                                                        alt=""
                                                        style={{ minWidth: "40px", width: "40px", height: "40px" }}
                                                    />
                                                </Box>
                                                {instituteName}
                                            </Box>
                                        </TableCell>
                                        <TableCell align="left">{mobileNo}</TableCell>
                                        <TableCell align="left">{emailId}</TableCell>
                                        <TableCell align="center">
                                            {accoundCreatedDate(created_at)}
                                        </TableCell>

                                        <TableCell align="center">
                                            <Button
                                                sx={{
                                                    width: "100px",
                                                    margin: "0 10px",
                                                    px: 3,
                                                    borderRadius: "8px",
                                                    background: !is_active
                                                        ? theme.palette?.secondary?.lighter
                                                        : theme.palette?.grey[300],
                                                    color: !is_active
                                                        ? theme.palette?.secondary.main
                                                        : theme.palette?.grey[600],
                                                    "&.active": {
                                                        color: "text.primary",
                                                        bgcolor: "action.selected",
                                                        fontWeight: "fontWeightBold",
                                                    },
                                                }}
                                            >
                                                {!is_active ? "Deactive" : "Active"}
                                            </Button>
                                        </TableCell>
                                        <TableCell align="center">{studentCount}</TableCell>
                                        <TableCell align="center">
                                            <Switch
                                                value={_id}
                                                defaultChecked={!is_active}
                                                onChange={(e) => {
                                                    handleCheckStatus(e.target.value, is_active);
                                                }}
                                                color="secondary"
                                            />
                                        </TableCell>

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
                                                        setIsEditable(institute);
                                                        setIsInstituteModalOpen(true);
                                                    }}
                                                >
                                                    <BorderColorOutlinedIcon size="medium" />{" "}
                                                </Button>
                                            </Box>
                                        </TableCell>
                                    </TableRow>
                                );
                            })
                    ) : (
                        <TableRow>
                            <TableCell colSpan={12} align="center">
                                <Box sx={{ padding: "20px 0" }}>
                                    {/* <ErrorOutlineIcon
                                        fontSize="large"
                                        sx={{ color: theme.palette.grey[500] }}
                                    /> */}
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
    )
}

export default InstitutsTable
