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
    TablePagination,
    TableRow,
    Typography,
    useTheme,
} from "@mui/material";
import BorderColorOutlinedIcon from "@mui/icons-material/BorderColorOutlined";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import React, { useState } from 'react'
import { QuizTablesColumn } from '../Utils/constant'
import CommonTable from '../../Component/Table/Table'
import { AppStrings, colorCodes } from '../../Helper/Constant'
import { useNavigate } from 'react-router-dom'
import Searchbar from '../../Component/Searchbar'
import useQuiz from '../../Hooks/Quiz'
import { useEffect } from 'react'
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";

import { accoundCreatedDate } from '../../Helper/utils/formatTime'


const Quiz = () => {

    const [quizDataState, setQuizDataState] = useState({
        allQuizRecords: [],
        globalQuizRecords: []
    });

    let theme = useTheme();
    const { getAllQuizes, deleteQuizRecord } = useQuiz();
    const navigate = useNavigate();

    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);
    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    }





    useEffect(() => {
        getAllQuizes().then((res) => {
            if (res.status === 200) {
                setQuizDataState((prev) => ({ ...prev, allQuizRecords: res.data || [], globalQuizRecords: res.data || [] }))
            }
        })
    }, [])

    let { allQuizRecords } = quizDataState;

    const onRemoveHandler = (id) => {
        deleteQuizRecord(id).then((res) => {
            let filternewData = allQuizRecords?.filter((item) => {
                return item._id !== id
            })
            setQuizDataState((prev) => ({ ...prev, allQuizRecords: filternewData }))
        }).catch((error) => {
            console.log(error);
        })
    }


    return (
        <Container maxWidth="xl">
            <Box pb={2} mx={1} sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>

                <Typography variant='h5'>{AppStrings?.Quiz}</Typography>
                <Box sx={{ display: "flex", gap: 1 }}>
                    <Searchbar onSearch={(e) => console.log("hello", e)} />
                    <Button onClick={() => navigate("/createquize")} sx={{ background: colorCodes?.PRIMARY_COLOR, color: "#fff" }}>+{AppStrings?.add_quize}</Button>
                </Box>
            </Box>


            <Paper sx={{ width: "100%" }}>
                <TableContainer sx={{ maxHeight: 440 }}>
                    <Table stickyHeader aria-label="sticky table">
                        <TableHead sx={{ background: theme.palette.grey[700] }}>
                            <TableRow sx={{ background: "gray" }}>
                                <TableCell style={{ minWidth: "80px" }}>
                                    {AppStrings?.sNo}
                                </TableCell>
                                <TableCell align="keft" style={{ minWidth: "150px" }}>
                                    {AppStrings?.QuizName || "Quiz Name"}
                                </TableCell>
                                <TableCell align="left" style={{ minWidth: "100px" }}>
                                    {AppStrings?.No_Of_questIon || "NO of Question"}
                                </TableCell>
                                <TableCell align="center" style={{ minWidth: "180px" }}>
                                    {AppStrings?.Solved_by_No_of_users || "Solved By No of users"}{" "}
                                </TableCell>

                                <TableCell align="center" style={{ minWidth: "100px" }}>
                                    {AppStrings?.takeAction}
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {allQuizRecords?.length > 0 ? (
                                allQuizRecords
                                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                    .map((QuizName, idx) => {
                                        let {
                                            _id,
                                            quizName,
                                            description,
                                            solveByUser,
                                            questionCount
                                        } = QuizName;
                                        return (
                                            <TableRow key={_id}>
                                                <TableCell component="th" scope="row">
                                                    {idx + 1}
                                                </TableCell>
                                                <TableCell align="left" >
                                                    {quizName}
                                                </TableCell>
                                                {/* <TableCell align="left">{""}</TableCell> */}
                                                <TableCell align="center">{questionCount}</TableCell>

                                                <TableCell align="center">{solveByUser}</TableCell>


                                                <TableCell align="center" style={{ minWidth: "200px" }}>
                                                    <Box>
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
                <TablePagination
                    rowsPerPageOptions={[10, 25, 100]}
                    component="div"
                    count={allQuizRecords?.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />
            </Paper>

        </Container>
    )
}

export default Quiz
