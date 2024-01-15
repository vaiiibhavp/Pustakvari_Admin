import { Box, Button, Container, List, ListItem, ListItemText, Typography } from '@mui/material'
import React from 'react'
import { AppStrings, colorCodes } from '../../Helper/Constant'
import PaginationComponent from '../../Component/Pagination/Paginations'
import CreateNotificationModal from './CreateNotificationModal'
import Searchbar from '../../Component/Searchbar'

const Notifications = () => {
    const [page, setPage] = React.useState(2);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
    const [isOpenNotifiactionModal, setIsOpenNotifiactionModal] = React.useState(false)
    return (
        <Container maxWidth="xl">
            <Button sx={{ background: "#fffffff", border: `1px solid ${colorCodes?.GRAY_SHAD_400}`, marginBottom: "20px", color: colorCodes?.GRAY_SHAD_400 }}>Back</Button>
            <Box display={"flex"} sx={{ justifyContent: "space-between" }}>
                <Box>

                    <Button sx={{ background: colorCodes.SECONDARY_COLOR, color: "#fff", marginRight: "10px" }}>{AppStrings?.all_notification}</Button>
                    <Button sx={{ background: "#fffffff", border: `1px solid ${colorCodes?.GRAY_SHAD_400}`, color: colorCodes?.GRAY_SHAD_400 }}>{AppStrings?.created_notification}</Button>
                </Box>
                <Box sx={{ display: "flex", gap: 1 }}>
                    <Searchbar onSearch={(e) => console.log("hello", e)} />
                    <Button sx={{ background: colorCodes.PRIMARY_COLOR, color: "#fff", me: "10px" }} onClick={() => { setIsOpenNotifiactionModal(true) }}> + {AppStrings?.create_notification}</Button>
                </Box>
            </Box>

            <Box pb={3} pt={2}>
                <List>
                    {/* Sample ListItem */}
                    <ListItem sx={{ background: "#ffffff", borderLeft: `4px solid ${colorCodes.SECONDARY_COLOR_300}`, borderRadius: "15px", boxShadow: (theme) => theme.customShadows.z1, marginBottom: "5px" }}>
                        <Box sx={{
                            width: "100%",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between"

                        }}>

                            <Box
                                sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    padding: '12px',
                                    marginRight: '12px',

                                }}
                            >
                                <img src="" alt="" style={{ width: "50px", height: "50px", background: "gray", borderRadius: "50%", marginRight: "20px" }} />
                                <Box>

                                    <Typography variant="body1" color="textSecondary">Title</Typography>
                                    <Typography variant="body2">Notification 1</Typography>
                                    <Typography variant="body2" color="textSecondary"> 2 Time Ago</Typography>
                                </Box>
                            </Box>
                            <Typography color={colorCodes?.GRAY_SHAD_200}>25, sept 2023</Typography>
                        </Box>
                    </ListItem>




                    {/* Add more ListItems as needed */}
                </List>


                <PaginationComponent count={50} page={page} rowsPerPage={rowsPerPage} handleChangePage={(item, newPage) => {
                    console.log("clicked", newPage)
                    setPage(newPage);
                }} handleChangeRowsPerPage={(event) => {
                    console.log("clicked change row", event)
                    setRowsPerPage(parseInt(event.target.value, 10));
                    setPage(0);
                }} />

            </Box>
            <CreateNotificationModal isOpenNotifiactionModal={isOpenNotifiactionModal} handleClose={() => {
                setIsOpenNotifiactionModal(false)
            }} />
        </Container>
    )
}

export default Notifications
