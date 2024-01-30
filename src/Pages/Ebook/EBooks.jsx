import { Box, Button, Container, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography, useTheme } from '@mui/material'
import React, { useState } from 'react'
import { ebooksTablesColumn } from '../Utils/constant'
import CommonTable from '../../Component/Table/Table'
import { AppStrings, colorCodes } from '../../Helper/Constant'
import EbookModal from './EbookModal'
import CategoryPopover from './CategoryPopover'
import CategoryModal from './CategoryModal'
import Searchbar from '../../Component/Searchbar'

const EBooks = () => {

    const theme = useTheme();

    const [isOpenEbookModal, setIsOpenEbookModal] = useState(false);
    const [isCatgoryModalOpen, setIsCategoryModalOpen] = useState(false)
    const [isCategoryEditRecord, setIscatgoryEditRecord] = useState({})
    const [isEditable, setIsEditable] = useState({});

    const [isPopOver, setIsPopOver] = useState(null);

    const handleOpenCategory = (event) => {
        setIsPopOver(event.currentTarget);
    };

    const handleClose = () => {
        setIsPopOver(null);
    };

    const open = Boolean(isPopOver);
    const id = open ? 'simple-popover' : undefined;


    let InstituteUserData = [11, 2]



    return (
        <Container maxWidth="xl">
            <Box pb={2} mx={1} sx={{ display: "flex", flexDirection: "column", justifyContent: "space-between" }}>

                <Typography variant='h5' pb={1}>{AppStrings?.e_books}</Typography>
                <Box display={"flex"} sx={{ justifyContent: "space-between" }}>
                    <Box>
                        <Button sx={{ background: colorCodes.SECONDARY_COLOR, color: "#fff", marginRight: "10px" }}>{AppStrings?.all_e_books}</Button>
                        <Button aria-describedby={id} onClick={handleOpenCategory} sx={{ background: "#fffffff", border: `1px solid ${colorCodes?.GRAY_SHAD_400}`, color: colorCodes?.GRAY_SHAD_400 }}>{AppStrings?.all_categories}</Button>
                    </Box>
                    <Box sx={{ display: "flex", gap: 1 }}>
                        <Searchbar onSearch={(e) => console.log("hello", e)} />
                        <Button onClick={() => {
                            setIsEditable({});
                            setIsOpenEbookModal(true);
                        }} variant="contained">+{AppStrings?.add_e_book}</Button>
                    </Box>
                </Box>
            </Box>

            <Paper sx={{ width: "100%" }}>
                <TableContainer sx={{ maxHeight: 440 }}>
                    <Table stickyHeader aria-label="sticky table">
                        <TableHead>
                            <TableRow>
                                <TableCell style={{ minWidth: "60px" }}>Sr No</TableCell>
                                <TableCell align="center" style={{ minWidth: "150px" }}>
                                    {AppStrings?.e_books}
                                </TableCell>
                                <TableCell align="center" style={{ minWidth: "100px" }}>
                                    {AppStrings?.Category}
                                </TableCell>

                                <TableCell align="center" style={{ minWidth: "120px" }}>
                                    {AppStrings?.author_Name}
                                </TableCell>
                                <TableCell align="center" style={{ minWidth: "180px" }}>
                                    {AppStrings?.type || "Type"}
                                </TableCell>
                                <TableCell align="center" style={{ minWidth: "180px" }}>
                                    {AppStrings?.takeAction}
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
                                            <TableCell align="center">{row?.fullName}</TableCell>
                                            <TableCell align="center">{row?.mobileNo}</TableCell>

                                            <TableCell align="center">{row?.emailId}</TableCell>

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
                                                    {row?.activeStatus ? AppStrings?.subscribed : AppStrings?.unsubscribed}
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

            <EbookModal isOpenEbookModal={isOpenEbookModal}
                setIsOpenEbookModal={setIsOpenEbookModal}
                isEditableRecord={isEditable} />

            <CategoryPopover id={id} open={open} isPopOver={isPopOver} handleClose={handleClose}
                onEditHandler={() => {
                    setIscatgoryEditRecord({ id: 2 })
                    setIsCategoryModalOpen(true);
                    setIsPopOver(null)
                }} handleOpenCategoryModal={() => {
                    setIscatgoryEditRecord({})
                    setIsCategoryModalOpen(true);
                    setIsPopOver(null)
                }} />
            <CategoryModal isOpenCategoryModal={isCatgoryModalOpen}
                setIsOpenCategoryModal={setIsCategoryModalOpen}
                isEditableRecord={isCategoryEditRecord} />
        </Container>
    )
}

export default EBooks
