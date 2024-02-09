import {
    Box,
    Button,
    Container,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TablePagination,
    TableRow,
    Typography,
    useTheme,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { ebooksTablesColumn } from "../Utils/constant";
import CommonTable from "../../Component/Table/Table";
import BorderColorOutlinedIcon from "@mui/icons-material/BorderColorOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";

import { AppStrings, colorCodes } from "../../Helper/Constant";
import EbookModal from "./EbookModal";
import CategoryPopover from "./CategoryPopover";
import CategoryModal from "./CategoryModal";
import Searchbar from "../../Component/Searchbar";
import useEbookApis from "../../Hooks/Ebook";
import ShowsMessageModal from "../../Component/ShowMessageModal";
import DeleteModal from "../../Component/DeleteModal";

const EBooks = () => {
    const theme = useTheme();

    const [booksState, setBooksState] = useState({
        bookList: [],
        globalbookList: [],
        showSuccessModal: false,
        message: "",
    });

    const { getBooksList, deleteBookRecord } = useEbookApis();

    const [isOpenEbookModal, setIsOpenEbookModal] = useState(false);
    const [isCatgoryModalOpen, setIsCategoryModalOpen] = useState(false);
    const [isCategoryEditRecord, setIscatgoryEditRecord] = useState({});
    const [isEditable, setIsEditable] = useState({});

    const [isPopOver, setIsPopOver] = useState(null);
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);
    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };
    const [takeDeleteConfirmationOpen, setTakeDeleteConfirmation] = useState(false)
    const [deletionRecord, setDeletionRecord] = useState({})

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };


    const handleOpenCategory = (event) => {
        setIsPopOver(event.currentTarget);
    };

    const handleClose = () => {
        setIsPopOver(null);
    };

    const open = Boolean(isPopOver);
    const id = open ? "simple-popover" : undefined;

    let InstituteUserData = [11, 2];

    useEffect(() => {
        getBooksList()
            .then((res) => {
                setBooksState((prev) => ({
                    ...prev,
                    bookList: res.data || [],
                    globalbookList: res.data || [],
                }));
            })
            .catch((err) => {
                console.log(err);
            });
    }, [setIsOpenEbookModal]);

    let { bookList } = booksState;

    const onRemoveHandler = () => {
        if (deletionRecord?._id) {
            deleteBookRecord(deletionRecord?._id).then((res) => {
                let filternewData = bookList?.filter((item) => {
                    return item._id !== deletionRecord?._id
                })
                setTakeDeleteConfirmation(false);
                setBooksState((prev) => ({ ...prev, bookList: filternewData }))
            }).catch((error) => {
                console.log(error);
            })
        }
    }

    return (
        <Container maxWidth="xl">
            <Box
                pb={2}
                mx={1}
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                }}
            >
                <Typography variant="h5" pb={1}>
                    {AppStrings?.e_books}
                </Typography>
                <Box display={"flex"} sx={{ justifyContent: "space-between" }}>
                    <Box>
                        <Button
                            sx={{
                                background: colorCodes.SECONDARY_COLOR,
                                color: "#fff",
                                marginRight: "10px",
                            }}
                        >
                            {AppStrings?.all_e_books}
                        </Button>
                        <Button
                            aria-describedby={id}
                            onClick={handleOpenCategory}
                            sx={{
                                background: "#fffffff",
                                border: `1px solid ${colorCodes?.GRAY_SHAD_400}`,
                                color: colorCodes?.GRAY_SHAD_400,
                            }}
                        >
                            {AppStrings?.all_categories}
                        </Button>
                    </Box>
                    <Box sx={{ display: "flex", gap: 1 }}>
                        <Searchbar onSearch={(e) => console.log("hello", e)} />
                        <Button
                            onClick={() => {
                                setIsEditable();
                                setIsOpenEbookModal(true);
                            }}
                            variant="contained"
                        >
                            +{AppStrings?.add_e_book}
                        </Button>
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
                            {bookList?.length > 0 ? (
                                bookList
                                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                    .map((row, idx) => {
                                        let {
                                            authorName,
                                            bookImage,
                                            bookLanguage,
                                            bookName,
                                            bookPdf,
                                            bookType,
                                            category,
                                            created_at,
                                            updated_at,
                                            _id,
                                        } = row;
                                        return (
                                            <TableRow key={row?.id}>
                                                <TableCell align="center" component="th" scope="row">
                                                    {idx + 1}
                                                </TableCell>
                                                <TableCell align="center">
                                                    <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
                                                        <Box>
                                                            <img src={bookImage ? bookImage : "https://tse3.mm.bing.net/th?id=OIP.M-oyJjMArCOCU2z4bjLkjgAAAA&pid=Api&P=0&h=180"} alt="" style={{ width: "40px", height: "40px" }} />
                                                        </Box>
                                                        {bookName}
                                                    </Box></TableCell>
                                                <TableCell align="left">{category?.categoryName}</TableCell>

                                                <TableCell align="left">{authorName}</TableCell>

                                                <TableCell align="center">
                                                    {bookType?.ebookType}
                                                    {/* <Button
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
                                                        {row?.activeStatus
                                                            ? AppStrings?.subscribed
                                                            : AppStrings?.unsubscribed}
                                                    </Button> */}
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
                                                                setIsEditable(row);
                                                                setIsOpenEbookModal(true);
                                                            }}
                                                        >
                                                            <BorderColorOutlinedIcon size="medium" />
                                                        </Button>
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
                                                                setDeletionRecord(row)
                                                            }}
                                                        > <DeleteOutlineOutlinedIcon size="medium" /></Button>
                                                    </Box>
                                                </TableCell>
                                            </TableRow>
                                        );
                                    })
                            ) : (
                                <TableRow>
                                    <TableCell colSpan={12} align="center">
                                        <Box sx={{ padding: "20px 0" }}>
                                            {/* <ErrorOutlineIcon fontSize="large" sx={{ color: theme.palette.grey[500] }} /> */}
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
                <TablePagination
                    rowsPerPageOptions={[10, 25, 100]}
                    component="div"
                    count={bookList.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />
            </Paper>

            <EbookModal
                isOpenEbookModal={isOpenEbookModal}
                setIsOpenEbookModal={setIsOpenEbookModal}
                setBooksState={setBooksState}
                isEditableRecord={isEditable}
            />

            <CategoryPopover
                id={id}
                open={open}
                isPopOver={isPopOver}
                handleClose={handleClose}
                onEditHandler={(item) => {
                    setIscatgoryEditRecord(item);
                    setIsCategoryModalOpen(true);
                    setIsPopOver(null);
                }}
                handleOpenCategoryModal={() => {
                    setIscatgoryEditRecord({});
                    setIsCategoryModalOpen(true);
                    setIsPopOver(null);
                }}
            />
            <CategoryModal
                isOpenCategoryModal={isCatgoryModalOpen}
                setIsOpenCategoryModal={setIsCategoryModalOpen}
                setBooksState={setBooksState}
                isEditableRecord={isCategoryEditRecord}
            />
            <ShowsMessageModal isOpen={booksState.showSuccessModal} setIsOpen={setBooksState} message={booksState?.message} />


            <DeleteModal
                message={"Are you sure  you want to delete the E-book?"}
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
    );
};

export default EBooks;
