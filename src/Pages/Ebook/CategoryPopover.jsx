import { useTheme } from '@emotion/react'
import { Box, Button, IconButton, List, ListItem, ListItemText, Popover, TextField, Typography } from '@mui/material'
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';

import BorderColorOutlinedIcon from '@mui/icons-material/BorderColorOutlined';

import React from 'react'

const CategoryPopover = ({ id, open, isPopOver, handleClose, handleOpenCategoryModal, onEditHandler }) => {
    const theme = useTheme();

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
                <List>
                    <ListItem>
                        <ListItemText primary="Category 1" />
                        <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
                            <Button sx={{
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
                            <Button sx={{
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

                    <ListItem>
                        <ListItemText primary="Category 1" />
                        <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
                            <Button onClick={onEditHandler} sx={{
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
                            <Button sx={{
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
