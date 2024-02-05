import {
    Box,
    Button,
    Container,
    IconButton,
    List,
    ListItem,
    ListItemText,
    Typography,
    useTheme,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { AppStrings, colorCodes } from "../../Helper/Constant";
import PaginationComponent from "../../Component/Pagination/Paginations";
import CreateNotificationModal from "./CreateNotificationModal";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { useNavigate } from "react-router-dom";
import useNotifiaction from "../../Hooks/Notifiaction";

const Notifications = () => {
    const [page, setPage] = React.useState(2);
    const [notificationState, setNotificationState] = useState({
        selectedTab: 1
    })
    const navigate = useNavigate();

    const { getNotifiactionList } = useNotifiaction();
    const theme = useTheme();
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
    const [isOpenNotifiactionModal, setIsOpenNotifiactionModal] =
        React.useState(false);

    const onSelectTab = (id) => {
        setNotificationState((prev) => ({ ...prev, selectedTab: id }))
    }

    useEffect(() => {
        getNotifiactionList().then((res) => {
            console.log(res, "ress");
        }).catch((err) => {
            console.log(err, "err");
        })
    }, [])


    return (
        <Container maxWidth="xl">
            <Box mb={3}>
                <Button
                    shadow={2}
                    sx={{
                        background: "#fff",
                        color: "black",
                        borderRadius: "15px",
                        padding: "5px 20px 5px 2px",
                    }}
                    onClick={() => navigate(-1)}
                >
                    <IconButton sx={{ margin: "0px" }}><ArrowBackIosIcon size="small" color={theme?.palette?.grey[800]} sx={{ fontSize: "14px", color: theme?.palette?.grey[800] }} /></IconButton>
                    Back
                </Button>
            </Box>{" "}
            <Box display={"flex"} sx={{ justifyContent: "space-between" }}>
                <Box display={"flex"} gap={1} >
                    {[{ id: 1, title: AppStrings?.all_notification }, { id: 2, title: AppStrings?.created_notification }].map((btn, index) => {
                        return (
                            <Button
                                border={1}
                                boxShadow={1}
                                sx={{
                                    bgcolor: notificationState?.selectedTab === btn.id ? theme.palette.secondary.main : theme.palette?.grey[400],
                                    color: notificationState?.selectedTab === btn.id ? theme.palette.secondary.contrastText : theme.palette?.grey[700]
                                }}
                                key={btn.id}
                                onClick={() => onSelectTab(btn.id)}
                            >
                                {btn?.title}
                            </Button>
                        )
                    })}
                    {/* <Button
                        sx={{
                            background: "#fffffff",
                            border: `1px solid ${colorCodes?.GRAY_SHAD_400}`,
                            color: colorCodes?.GRAY_SHAD_400,
                        }}
                    >
                        {AppStrings?.created_notification}
                    </Button> */}
                </Box>
                <Box sx={{ display: "flex", gap: 1 }}>
                    {/* <Searchbar onSearch={(e) => console.log("hello", e)} /> */}
                    <Button
                        sx={{
                            background: colorCodes.PRIMARY_COLOR,
                            color: "#fff",
                            me: "10px",
                        }}
                        onClick={() => {
                            setIsOpenNotifiactionModal(true);
                        }}
                    >

                        + {AppStrings?.create_notification}
                    </Button>
                </Box>
            </Box>
            <Box pb={3} pt={2}>
                {notificationState?.selectedTab === 1 ? <List>


                    {/* This is ui all notifiaction */}
                    <ListItem
                        sx={{
                            background: "#ffffff",
                            borderLeft: `4px solid ${colorCodes.SECONDARY_COLOR_300}`,
                            borderRadius: "15px",
                            boxShadow: (theme) => theme.customShadows.z1,
                            marginBottom: "5px",
                        }}
                    >
                        <Box
                            sx={{
                                width: "100%",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "space-between",
                            }}
                        >
                            <Box
                                sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    padding: "12px",
                                    marginRight: "12px",
                                }}
                            >
                                <img
                                    src="https://static.vecteezy.com/system/resources/previews/000/442/087/original/notification-vector-icon.jpg"
                                    alt=""
                                    style={{
                                        width: "50px",
                                        height: "50px",
                                        background: "gray",
                                        borderRadius: "50%",
                                        marginRight: "20px",
                                    }}
                                />
                                <Box>
                                    <Typography variant="h6" color={theme?.palette.grey[700]}>
                                        Title NAme
                                    </Typography>
                                    <Typography variant="body1" color={theme?.palette.grey[500]}>
                                        BPHE society institute made an account
                                    </Typography>
                                    <Typography
                                        variant="body2"
                                        color="textSecondary"
                                        sx={{ display: "flex", flexDirection: "column" }}
                                    >
                                        2 min ago
                                    </Typography>
                                </Box>
                            </Box>
                            <Typography color={colorCodes?.GRAY_SHAD_200} sx={{ background: theme?.palette.grey[200], p: 1, borderRadius: 1 }}>
                                25, sept 2023
                            </Typography>
                        </Box>
                    </ListItem>
                </List> : <List>
                    {/* This is ui created notifiaction */}
                    <ListItem
                        sx={{
                            background: "#ffffff",
                            borderLeft: `4px solid ${colorCodes.SECONDARY_COLOR_300}`,
                            borderRadius: "15px",
                            boxShadow: (theme) => theme.customShadows.z1,
                            marginBottom: "5px",
                        }}
                    >
                        <Box
                            sx={{
                                width: "100%",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "space-between",
                            }}
                        >
                            <Box
                                sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    padding: "12px",
                                    marginRight: "12px",
                                }}
                            >
                                <img
                                    src="https://static.vecteezy.com/system/resources/previews/000/442/087/original/notification-vector-icon.jpg"
                                    alt=""
                                    style={{
                                        width: "50px",
                                        height: "50px",
                                        background: "gray",
                                        borderRadius: "50%",
                                        marginRight: "20px",
                                    }}
                                />
                                <Box>
                                    <Typography variant="h6" color={theme?.palette.grey[700]}>
                                        Title NAme
                                    </Typography>
                                    <Typography variant="body1" color={theme?.palette.grey[500]}>
                                        BPHE society institute made an account
                                    </Typography>
                                    <Typography
                                        variant="body2"
                                        color="textSecondary"
                                        sx={{ display: "flex", flexDirection: "column" }}
                                    >
                                        {" "}
                                        User Type All <span>Notification type Push</span>
                                    </Typography>
                                </Box>
                            </Box>
                            <Typography color={colorCodes?.GRAY_SHAD_200} sx={{ background: theme?.palette.grey[200], p: 1, borderRadius: 1 }}>
                                25, sept 2023
                            </Typography>
                        </Box>
                    </ListItem>

                </List>

                }


                <PaginationComponent
                    count={50}
                    page={page}
                    rowsPerPage={rowsPerPage}
                    handleChangePage={(item, newPage) => {
                        setPage(newPage);
                    }}
                    handleChangeRowsPerPage={(event) => {
                        setRowsPerPage(parseInt(event.target.value, 10));
                        setPage(0);
                    }}
                />
            </Box>
            <CreateNotificationModal
                isOpenNotifiactionModal={isOpenNotifiactionModal}
                handleClose={() => {
                    setIsOpenNotifiactionModal(false);
                }}
            />
        </Container>
    );
};

export default Notifications;
