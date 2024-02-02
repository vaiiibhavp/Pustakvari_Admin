import React from 'react'

const SuperAdminTable = () => {
    return (
        <Paper sx={{ width: "100%" }}>
            <TableContainer sx={{ maxHeight: 440 }}>
                <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                        <TableRow>
                            <TableCell style={{ minWidth: "80px" }}>Sr No</TableCell>
                            <TableCell align="center" style={{ minWidth: "150px" }}>
                                {AppStrings?.user_Name}
                            </TableCell>
                            <TableCell align="center" style={{ minWidth: "100px" }}>
                                {AppStrings?.Contact}
                            </TableCell>
                            <TableCell align="center" style={{ minWidth: "150px" }}>
                                {AppStrings?.institute_user}
                            </TableCell>
                            <TableCell align="center" style={{ minWidth: "120px" }}>
                                {AppStrings?.email}
                            </TableCell>
                            <TableCell align="center" style={{ minWidth: "200px" }}>
                                {AppStrings?.Account_created_on}
                            </TableCell>
                            <TableCell align="center" style={{ minWidth: "180px" }}>
                                {AppStrings?.last_login}
                            </TableCell>
                            <TableCell align="center" style={{ minWidth: "100px" }}>
                                {AppStrings?.status}
                            </TableCell>
                            <TableCell align="center" style={{ minWidth: "100px" }}>
                                {AppStrings?.deactivate}
                            </TableCell>
                            <TableCell align="center" style={{ minWidth: "150px" }}>
                                {AppStrings?.takeAction}                </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {userData?.length > 0 ? userData
                            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                            .map((row, idx) => {
                                return (
                                    <TableRow key={row?.id}>
                                        <TableCell component="th" scope="row">
                                            {idx + 1}
                                        </TableCell>
                                        <TableCell align="center">{row?.fullName}</TableCell>
                                        <TableCell align="center">{row?.mobileNo}</TableCell>
                                        <TableCell align="center">
                                            {row?.is_instituteUser}
                                        </TableCell>
                                        <TableCell align="center">{row?.emailId}</TableCell>
                                        <TableCell align="center">{row?.created_at}</TableCell>
                                        <TableCell align="center">{row?.Last_Login}</TableCell>
                                        <TableCell align="center">
                                            <Button
                                                sx={{
                                                    background: theme.palette?.grey[300],
                                                    color: theme.palette?.grey[600],
                                                    textDecoration: "none",
                                                    borderRadius: "20px",
                                                    padding: "0 16px",
                                                    "&.active": {
                                                        color: "text.primary",
                                                        bgcolor: "action.selected",
                                                        fontWeight: "fontWeightBold",
                                                    },
                                                }}
                                            >
                                                {row?.activeStatus ? "Active" : "Inactive"}
                                            </Button>
                                        </TableCell>
                                        <TableCell align="right">
                                            <Switch
                                                value={row?._id}
                                                // checked={}
                                                defaultChecked={row?.activeStatus}
                                                color="secondary"
                                                onChange={(e) => {

                                                    handleCheckStatus(e.target.value, row?.activeStatus)
                                                }}
                                            />
                                        </TableCell>
                                        <TableCell align="right" style={{ minWidth: "200px" }}>
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
                                                        setIsEditable(row);
                                                        setIsUserModalOpen(true);
                                                    }}
                                                >
                                                    <BorderColorOutlinedIcon size="medium" />
                                                </Button>
                                                {/* <Button
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
                        onClick={() => onRemoveHandler(row._id)}
                      > <DeleteOutlineOutlinedIcon size="medium" /></Button> */}
                                            </Box>
                                        </TableCell>
                                    </TableRow>
                                );
                            }) :
                            <TableRow>
                                <TableCell colSpan={12} align="center">
                                    <Box sx={{ padding: "20px 0" }}>
                                        <ErrorOutlineIcon fontSize="large" sx={{ color: theme.palette.grey[500] }} />
                                        <Typography sx={{ color: theme.palette.grey[400] }} mt={1} mb={4}>
                                            {AppStrings?.no_data_available}
                                        </Typography>
                                    </Box>
                                </TableCell>
                            </TableRow>}
                    </TableBody>
                </Table>
            </TableContainer>
            <TablePagination
                rowsPerPageOptions={[10, 25, 100]}
                component="div"
                count={userData.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />
        </Paper>
    )
}

export default SuperAdminTable
