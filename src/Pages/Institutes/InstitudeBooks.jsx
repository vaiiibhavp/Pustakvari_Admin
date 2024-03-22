import { Box, Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography, useTheme } from '@mui/material';
import React, { useEffect } from 'react'
import { AppStrings } from '../../Helper/Constant';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import useInstitues from '../../Hooks/Institutes';
import { useState } from 'react';

const InstitutesBooks = ({ InstituteBookData  }) => {
    const { getInstituteBookList , assignInstituteBook, deleteInstituteBook } = useInstitues();
    const [instituteBook, setInstituteBook] = useState([])
    const theme = useTheme()
    const {id} = useParams();

    useEffect(() => {
        fetchData()
    }, [])
    
    const fetchData = () => {
        getInstituteBookList(id).then((res) => {
            setInstituteBook(res.data || [])
        }).catch((error) => {
            console.log(error);
        });
    }
    
    const handleClick = (bId) => {
        assignInstituteBook(id,bId).then((res) => {
            if (res.status === 200) {
                toast.dismiss();
                toast.success(res.message, { autoClose: 1000 });
                fetchData()
            }
        })
        .catch((error) => {
            console.log(error);
        });
    }
    

    const handleClickRemove = (bId) => {
        deleteInstituteBook(id,bId).then((res) => {
            if (res.status === 200) {
                toast.dismiss();
                toast.success(res.message, { autoClose: 1000 });
                fetchData()
            }
        })
        .catch((error) => {
            console.log(error);
        });
    }


    return (
        <Paper sx={{ width: "100%" }}>
            <TableContainer sx={{ maxHeight: 440 }}>
                <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                        <TableRow>
                            <TableCell style={{ minWidth: "60px" }}>Sr No</TableCell>
                            <TableCell align="center" style={{ minWidth: "150px" }}>
                                {AppStrings?.e_books}
                            </TableCell>
                            <TableCell align="left" style={{ minWidth: "100px" }}>
                                {AppStrings?.Category}
                            </TableCell>

                            <TableCell align="left" style={{ minWidth: "120px" }}>
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
                        {InstituteBookData?.length > 0 ? InstituteBookData
                            .map((row, idx) => {
                                let {
                                    authorName,
                                    bookImage,
                                    bookName,
                                    bookType,
                                    category,
                                    _id
                                } = row;
                                return (
                                    <TableRow key={row?.id}>
                                    <TableCell align="center" component="th" scope="row">
                                        {idx + 1}
                                    </TableCell>
                                    <TableCell align="center">
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
                                                        bookImage
                                                            ? bookImage
                                                            : "https://tse3.mm.bing.net/th?id=OIP.M-oyJjMArCOCU2z4bjLkjgAAAA&pid=Api&P=0&h=180"
                                                    }
                                                    alt=""
                                                    style={{ width: "40px", minWidth: "40px", height: "40px" }}
                                                />
                                            </Box>
                                            {bookName}
                                        </Box>
                                    </TableCell>
                                    <TableCell align="left">
                                        {category?.categoryName}
                                    </TableCell>

                                    <TableCell align="left">{authorName}</TableCell>

                                    <TableCell align="center">
                                        {bookType?.ebookType}
                                    </TableCell>
                                    <TableCell align="center" style={{ minWidth: "100px" }}>
                                        <Box>
                                            {
                                                !!instituteBook.find((d) => d._id === _id) ?
                                                <Button
                                                sx={{
                                                    margin: " 0 10px",
                                                    background: theme.palette?.secondary?.lighter,
                                                    color: theme.palette?.secondary.main,
                                                    "&.active": {
                                                        color: "text.primary",
                                                        bgcolor: "action.selected",
                                                        fontWeight: "fontWeightBold",
                                                    },
                                                }}
                                                onClick={() => handleClickRemove(_id)}
                                            >
                                                Remove
                                            </Button> : 
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
                                                    onClick={() => handleClick(_id)}
                                                >
                                                    Add
                                                </Button>
                                            }
                                            
                                        </Box>
                                    </TableCell>
                                </TableRow>
                                );
                            }) :
                            <TableRow>
                                <TableCell colSpan={12} align="center">
                                    <Box sx={{ padding: "20px 0" }}>
                                        <Typography sx={{ color: theme.palette.grey[400] }} mt={1} mb={4}>
                                            {AppStrings?.no_data_available}
                                        </Typography>
                                    </Box>
                                </TableCell>
                            </TableRow>}
                    </TableBody>
                </Table>
            </TableContainer>
        </Paper>
    )
}

export default InstitutesBooks
