import { Box, Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography, useTheme } from '@mui/material';
import React from 'react'
import { AppStrings } from '../../Helper/Constant';
import { accoundCreatedDate } from '../../Helper/utils/formatTime';

const InstitutesUsers = ({ InstituteUserData }) => {
    const theme = useTheme()
    return (
        <Paper sx={{ width: "100%" }}>
            <TableContainer sx={{ maxHeight: 440 }}>
                <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                        <TableRow>
                            <TableCell style={{ minWidth: "60px" }}>Sr No</TableCell>
                            <TableCell align="center" style={{ minWidth: "150px" }}>
                                {AppStrings?.user_Name}
                            </TableCell>
                            <TableCell align="center" style={{ minWidth: "100px" }}>
                                {AppStrings?.Contact}
                            </TableCell>

                            <TableCell align="center" style={{ minWidth: "120px" }}>
                                {AppStrings?.email}
                            </TableCell>
                            <TableCell align="center" style={{ minWidth: "200px" }}>
                                {AppStrings?.Account_created_on}
                            </TableCell>
                            <TableCell align="center" style={{ minWidth: "180px" }}>
                                {AppStrings?.subscription}
                            </TableCell>

                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {InstituteUserData?.length > 0 ? InstituteUserData
                            // .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                            .map((row, idx) => {
                                return (
                                    <TableRow key={row?.id}>
                                        <TableCell component="th" scope="row">
                                            {idx + 1}
                                        </TableCell>
                                        <TableCell align="left">
                                            <Box
                                                sx={{
                                                    display: "flex",
                                                    gap: 1,
                                                    alignItems: "center",
                                                }}
                                            >  <Box>
                                                    <img
                                                        src={
                                                            row?.userImage
                                                                ? row.userImage
                                                                : "https://tse4.mm.bing.net/th?id=OIP.Bl6dInu-pv4nnfv-QAxgSwHaHa&pid=Api&P=0&h=180"
                                                        }
                                                        alt=""
                                                        style={{
                                                            width: "40px",
                                                            minWidth: "40px",
                                                            height: "40px",
                                                        }}
                                                    />
                                                </Box>
                                                {row?.fullName} </Box></TableCell>
                                        <TableCell align="left">{row?.mobileNo}</TableCell>

                                        <TableCell align="left">{row?.emailId}</TableCell>
                                        <TableCell align="center">{accoundCreatedDate(row?.created_at)}</TableCell>
                                        <TableCell align="center">
                                            <Button
                                                sx={{
                                                    width: "100px",
                                                    background: !row?.is_active
                                                        ? theme.palette?.secondary?.lighter
                                                        : theme.palette?.info?.lighter,
                                                    color: !row?.is_active
                                                        ? theme.palette?.secondary.main
                                                        : theme.palette?.info.main,
                                                    // background: theme.palette?.grey[300],
                                                    // color: theme.palette?.grey[600],
                                                    textDecoration: "none",
                                                    borderRadius: "8px",
                                                    padding: "3px 20px",
                                                    "&.active": {
                                                        color: "text.primary",
                                                        bgcolor: "action.selected",
                                                        fontWeight: "fontWeightBold",
                                                    },
                                                }}
                                            >
                                                {!row?.is_active ? "Subscribed" : " Unsubscribed "}
                                            </Button>
                                        </TableCell>


                                    </TableRow>
                                );
                            }) :
                            <TableRow>
                                <TableCell colSpan={12} align="center">
                                    <Box sx={{ padding: "20px 0" }}>
                                        {/* <ErrorOutlineIcon fontSize="large" sx={{ color: theme.palette.grey[500] }} /> */}
                                        <Typography sx={{ color: theme.palette.grey[400] }} mt={1} mb={4}>
                                            {AppStrings?.no_data_available}
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
    )
}

export default InstitutesUsers
