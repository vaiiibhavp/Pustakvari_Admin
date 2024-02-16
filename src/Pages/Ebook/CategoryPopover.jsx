import { useTheme } from '@emotion/react'
import { Box, Button, IconButton, List, ListItem, ListItemText, Popover, TextField, Typography } from '@mui/material'
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';

import BorderColorOutlinedIcon from '@mui/icons-material/BorderColorOutlined';

import React, { useEffect, useState } from 'react'
import useCategoryApis from '../../Hooks/Category';
import Searchbar from '../../Component/Searchbar';

const CategoryPopover = ({ id, open, isPopOver, handleClose, handleOpenCategoryModal, onEditHandler }) => {
    const theme = useTheme();
    const [categoryData, setCategoryData] = useState({
        dataList: [],
        globalList: []
    })

    let { getCateogoryList, deleteCategoryRecord } = useCategoryApis();

    useEffect(() => {
        getCateogoryList().then((res) => {

            setCategoryData((prev) => ({ ...prev, dataList: res.data, globalList: res.data }))
        }).catch((error) => {
            console.log(error)
        })
    }, [open])

    let { dataList } = categoryData;

    const onRemoveHandler = (id) => {
        deleteCategoryRecord(id).then((res) => {
            let filternewData = dataList?.filter((item) => {
                return item._id !== id
            })
            setCategoryData((prev) => ({ ...prev, dataList: filternewData }))
        }).catch((error) => {
            console.log(error);
        })
    }

    const handleChange = (value) => {
        if (value) {
            const data = categoryData?.globalList?.filter((e) => {
                return e?.categoryName?.toLowerCase()?.includes(value?.toLowerCase());
            });
            setCategoryData((prev) => ({ ...prev, dataList: data }))
        } else {
            // getUserList();
            setCategoryData((prev) => ({
                ...prev,
                dataList: categoryData?.globalList || [],
            }));
        }
    };


    return (
        <Popover
            id={id}
            open={open}
            sx={{ width: "1000px" }}
            anchorEl={isPopOver}
            onClose={handleClose}
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'center',
            }}
            transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
            }}
            PaperProps={{
                style: {
                    width: '400px',
                    maxHeight: '500px',
                    minHeight: "100px",
                    overflowY: "auto"
                },
            }}
        >
            <div style={{ padding: '10px', position: "relative" }}>
                <Box sx={{ position: "sticky", top: "15px", background: "white", width: "100%" }}>
                    <TextField
                        // label="Search here ..."
                        fullWidth
                        variant="outlined"
                        placeholder='Search Here'
                        size='small'
                        sx={{ border: "1px solid white" }}
                        onChange={(e) => handleChange(e.target.value)}
                    />
                </Box>
                <List sx={{
                    maxHeight: 250,
                    overflowY: "auto",
                    p: 2,
                    my: 2,
                    "&::-webkit-scrollbar": {
                        width: "4px",
                        padding: "10px 0",
                    },
                    "&::-webkit-scrollbar-thumb": {
                        backgroundColor: "#888",
                        borderRadius: "6px",
                    },
                    "&::-webkit-scrollbar-track": {
                        backgroundColor: "#f1f1f1",
                        borderRadius: "10px",
                    },
                    scrollbarWidth: "thin",
                    scrollbarColor: "#888 #f1f1f1", // For Firefox
                }} >
                    {dataList?.length > 0 ? dataList?.map((category) => {
                        let { _id, categoryName } = category;
                        return (

                            <ListItem key={category?._id} sx={{ borderBottom: `1px solid ${theme.palette.grey[200]}` }}>
                                <ListItemText primary={categoryName} />
                                <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
                                    {/* <Button onClick={() => onEditHandler(category)} sx={{
                                        borderRadius: "50%",
                                        width: "30px",
                                        height: "30px",
                                        background: theme.palette?.primary?.lighter,
                                        color: theme.palette?.primary.main,
                                        '&.active': {
                                            color: 'text.primary',
                                            bgcolor: 'action.selected',
                                            fontWeight: 'fontWeightBold',
                                        },
                                    }}  ><BorderColorOutlinedIcon sx={{ fontSize: "16px" }} /></Button> */}
                                    <Button
                                        onClick={() => onRemoveHandler(_id)}
                                        sx={{
                                            borderRadius: "50%",
                                            width: "30px",
                                            height: "30px",
                                            background: theme.palette?.secondary?.lighter,
                                            color: theme.palette?.secondary.main,
                                            '&.active': {
                                                color: 'text.primary',
                                                bgcolor: 'action.selected',
                                                fontWeight: 'fontWeightBold',
                                            },
                                        }} ><DeleteOutlineOutlinedIcon sx={{ fontSize: "16px" }} /></Button>
                                </Box>
                            </ListItem>
                        )
                    }) : <ListItem sx={{ color: theme.palette.grey[400], width: "100%", display: "flex", justifyContent: "center" }}> Category Not found</ListItem>}



                    {/* Add more list items as needed */}
                </List>
                <Button
                    variant="contained"
                    // startIcon={<AddIcon />}
                    fullWidth
                    onClick={handleOpenCategoryModal}
                >
                    Create Category
                </Button>
            </div>
        </Popover>
    )
}

export default CategoryPopover
