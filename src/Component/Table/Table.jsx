// ReusableTable.js

import React, { useState } from "react";
import {
    Table,
    TableHead,
    TableRow,
    TableCell,
    TableBody,
    Paper,
    IconButton,
    TablePagination,
    Switch,
    Typography,
    Box,
    Button,
    useTheme,
} from "@mui/material";
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import DeleteIcon from "@mui/icons-material/Delete";
import BorderColorOutlinedIcon from '@mui/icons-material/BorderColorOutlined';
import { colorCodes } from "../../Helper/Constant";
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
const label = { inputProps: { "aria-label": "Color switch demo" } };

const editbtnStyle = {
    background: "purple",
    opacity: 0.8,
    color: "white",
    fontSize: "14px",
    border: "none",
};

const deletebtnStyle = {
    background: "red",
    opacity: 0.8,
    color: "white",
    fontSize: "14px",
    border: "none",
};

const CommonTable = ({
    columns,
    data,
    rowsPerPageOptions = [5, 10, 25],
    defaultRowsPerPage = 5,
    rowSelect,
    editRecord,
    showSubscription,
    onSeeDetail
}) => {
    const theme = useTheme();
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(defaultRowsPerPage);

    const handleChangePage = (event, newPage) => {
        console.log("hello")
        setPage(newPage);
    };


    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };


    const emptyRows =
        rowsPerPage - Math.min(rowsPerPage, data.length - page * rowsPerPage);

    const renderText = (item, whichCoulumn) => {
        console.log(item);
        if (whichCoulumn?.icon) {
            if (whichCoulumn?.deleteIcon && whichCoulumn?.editIcon) {
                return (
                    <Box>
                        <Button sx={{
                            margin: "0 10px",
                            background: theme.palette?.primary?.lighter,
                            color: theme.palette?.primary.main,
                            '&.active': {
                                color: 'text.primary',
                                bgcolor: 'action.selected',
                                fontWeight: 'fontWeightBold',
                            },
                        }} onClick={() => editRecord(2)} ><BorderColorOutlinedIcon size="medium" /></Button>
                        <Button sx={{
                            background: theme.palette?.secondary?.lighter,
                            color: theme.palette?.secondary.main,
                            '&.active': {
                                color: 'text.primary',
                                bgcolor: 'action.selected',
                                fontWeight: 'fontWeightBold',
                            },
                        }} ><DeleteOutlineOutlinedIcon size="medium" /></Button>
                    </Box>
                );
            } else if (whichCoulumn?.editIcon && whichCoulumn?.subScrIcon) {
                console.log(whichCoulumn?.subScrIcon);
                return (
                    <Box>

                        <Button sx={{
                            margin: " 0 10px",

                            background: theme.palette?.primary?.lighter,
                            color: theme.palette?.primary.main,
                            '&.active': {
                                color: 'text.primary',
                                bgcolor: 'action.selected',
                                fontWeight: 'fontWeightBold',
                            },
                        }} onClick={() => editRecord(2)} ><BorderColorOutlinedIcon size="medium" /></Button>
                        <Button sx={{
                            background: theme.palette?.secondary?.lighter,
                            color: theme.palette?.secondary.main,
                            '&.active': {
                                color: 'text.primary',
                                bgcolor: 'action.selected',
                                fontWeight: 'fontWeightBold',
                            },
                        }} onClick={() => showSubscription()} ><InfoOutlinedIcon size="medium" /></Button>
                    </Box>
                );
            } else if (whichCoulumn?.deleteIcon) {
                return <Button sx={{
                    background: theme.palette?.secondary?.lighter,
                    color: theme.palette?.secondary.main,
                    '&.active': {
                        color: 'text.primary',
                        bgcolor: 'action.selected',
                        fontWeight: 'fontWeightBold',
                    },
                }} ><DeleteOutlineOutlinedIcon size="medium" /></Button>;
            } else if (whichCoulumn?.editIcon) {
                return <Button sx={{
                    background: theme.palette?.secondary?.lighter,
                    color: theme.palette?.secondary.main,
                    '&.active': {
                        color: 'text.primary',
                        bgcolor: 'action.selected',
                        fontWeight: 'fontWeightBold',
                    },
                }} onClick={() => editRecord(2)} ><BorderColorOutlinedIcon size="medium" /></Button>;
            }
        }

        if (whichCoulumn?.statusbtn) {
            return <Button sx={{
                background: theme.palette?.grey[300],
                color: theme.palette?.grey[600],
                textDecoration: "none",
                borderRadius: "20px",
                padding: "0 16px",
                '&.active': {
                    color: 'text.primary',
                    bgcolor: 'action.selected',
                    fontWeight: 'fontWeightBold',
                },
            }} >Active</Button>;
        }
        if (whichCoulumn?.switchbtn) {
            return <Switch {...label} defaultChecked color="secondary" />;
        }

        if (whichCoulumn.image) {
            return (
                <Box sx={{ display: "flex" }} onClick={onSeeDetail} sx={{ cursor: "pointer" }}>
                    <img
                        src="https://media.licdn.com/dms/image/C4D03AQHH159tOQPesQ/profile-displayphoto-shrink_200_200/0/1661018767590?e=2147483647&v=beta&t=oEoaEhpSN2dsjwcAi5kHgmJRiXOIs5x1p-wIUsrVZls"
                        alt=""
                        style={{
                            width: "30px",
                            height: "30px",
                            borderRadius: "50%",
                            marginRight: "5px",
                        }}
                    />
                    <Typography>Lakhan Nemane</Typography>
                </Box>
            );
        }

        return item;
    };

    return (
        <Paper style={{ overflowX: 'auto', width: "100%" }}>
            <Table sx={{ overflowX: 'auto', width: "100%" }}>
                <TableHead>
                    <TableRow sx={{ background: "#e6e6e6" }}>
                        {columns.map((column, index) => (
                            <TableCell key={index} sx={{ minWidth: `${column.width}px` }}>{column.field}</TableCell>
                        ))}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {(rowsPerPage > 0
                        ? data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                        : data
                    ).map((row, rowIndex) => (
                        <TableRow key={rowIndex} >
                            {columns.map((column, colIndex) => (
                                <TableCell key={colIndex} sx={{ minWidth: `${column.width}px` }}>
                                    {console.log(column?.width, "yes we getting")}
                                    {renderText(row[column.field], column)}
                                </TableCell>
                            ))}
                        </TableRow>
                    ))}
                    {emptyRows > 0 && (
                        <TableRow style={{ height: 53 * emptyRows }} >
                            <TableCell colSpan={columns.length} sx={{ width: "500px" }} />
                        </TableRow>
                    )}
                </TableBody>
            </Table>
            <TablePagination
                rowsPerPageOptions={rowsPerPageOptions}
                component="div"
                count={data.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />
        </Paper>
    );
};

export default CommonTable;
