import { useTheme } from '@emotion/react'
import { Box, Button, IconButton, List, ListItem, ListItemText, Popover, TextField, Typography } from '@mui/material'
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';

import BorderColorOutlinedIcon from '@mui/icons-material/BorderColorOutlined';

import React, { useEffect, useState } from 'react'
import useCategoryApis from '../../Hooks/Category';

const CategoryPopover = ({ id, open, isPopOver, handleClose, handleOpenCategoryModal, onEditHandler }) => {
    const theme = useTheme();
    const [categoryData, setCategoryData] = useState({
        dataList: []
    })

    let { getCateogoryList, deleteCategoryRecord } = useCategoryApis();

    useEffect(() => {
        getCateogoryList().then((res) => {

            setCategoryData((prev) => ({ ...prev, dataList: res.data }))
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
                <Box sx={{ position: "sticky", top: "15px", background: "white" }}>

                    <TextField
                        placeholder="Search"

                        variant="outlined"
                        fullWidth
                        size='small'

                        style={{ marginBottom: '10px' }}
                    />
                </Box>
                <List >
                    {dataList.length > 0 ? dataList?.map((category) => {
                        let { _id, categoryName } = category;
                        return (

                            <ListItem key={category?._id}>
                                <ListItemText primary={categoryName} />
                                <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
                                    <Button onClick={() => onEditHandler(category)} sx={{
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
                                    }}  ><BorderColorOutlinedIcon sx={{ fontSize: "16px" }} /></Button>
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
                    }) : "no catgory found"}



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
