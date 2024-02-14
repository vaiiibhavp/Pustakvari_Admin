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
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { useNavigate } from "react-router-dom";
import useNotifiaction from "../../Hooks/Notifiaction";
import { useSelector } from "react-redux";
import moment from "moment";
import { fNotifiactionDate, fromAgoDate } from "../../Helper/utils/formatTime";
import ShowsMessageModal from "../../Component/ShowMessageModal";
import useUserTypeName from "../../Hooks/IsCheckAuth";

const Notifications = () => {
    const {
        AuthUser: { user },
    } = useSelector((state) => state);

    const InstituteAdmin = useUserTypeName();
    const [page, setPage] = React.useState(0);
    const [notificationState, setNotificationState] = useState({
        selectedTab: 1,
        allNotification: [],
        globalAllNotifactions: [],
        render: false,
        showSuccessModal: false,
        message: "",


    });
    const navigate = useNavigate();

    const { getNotifiactionList } = useNotifiaction();
    const theme = useTheme();

    const [rowsPerPage, setRowsPerPage] = React.useState(10);
    const [isOpenNotifiactionModal, setIsOpenNotifiactionModal] =
        React.useState(false);

    const onSelectTab = (id) => {
        setNotificationState((prev) => ({ ...prev, selectedTab: id }));
    };

    useEffect(() => {
        let hasInstituteUser = InstituteAdmin
            ? "Institutes"
            : user?.instituteInfo
                ? "Users"
                : "All";

        getNotifiactionList(user)
            .then((res) => {
                if (res?.status === 200) {
                    setNotificationState((prev) => ({
                        ...prev,
                        allNotification: res.data || [],
                        globalAllNotifactions: res.data || [],
                        render: false,
                    }));
                }
            })
            .catch((err) => {
                console.log(err, "err");
            });
    }, [notificationState?.render]);

    let { allNotification } = notificationState;

    return (
        <Container maxWidth="xl">
            <Box  >
                <Button
                    shadow={2}
                    sx={{
                        background: "#fff",
                        color: "black",
                        borderRadius: "15px",
                        padding: "5px 20px 5px 2px",
                        mb: 1
                    }}
                    onClick={() => navigate(-1)}
                >
                    <IconButton sx={{ margin: "0px" }}>
                        <ArrowBackIosIcon
                            size="small"
                            color={theme?.palette?.grey[800]}
                            sx={{ fontSize: "14px", color: theme?.palette?.grey[800] }}
                        />
                    </IconButton>
                    Back
                </Button>
                {user?.instituteInfo && <Typography sx={{ fontSize: "20px", py: 2, color: theme?.palette?.grey[800], fontWeight: "600" }}>Notifications</Typography>}
            </Box>
            {
                user?.instituteInfo ? <>
                    {/* Institute User  */}
                    <List>
                        {allNotification?.length > 0
                            ? allNotification.map((notification) => {
                                let {
                                    _id,
                                    notificationTitle,
                                    message,
                                    notificationType,
                                    userType,
                                    created_at,
                                } = notification;
                                return (
                                    <ListItem
                                        key={_id}
                                        sx={{
                                            background: "#ffffff",
                                            borderLeft: `4px solid ${colorCodes.SECONDARY_COLOR_300}`,
                                            borderRadius: "15px",
                                            p: 0.1,
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
                                                    padding: "6px",
                                                    marginRight: "12px",
                                                }}
                                            >
                                                <img
                                                    src="https://static.vecteezy.com/system/resources/previews/000/442/087/original/notification-vector-icon.jpg"
                                                    alt=""
                                                    style={{
                                                        width: "30px",
                                                        height: "30px",
                                                        background: "gray",
                                                        borderRadius: "50%",
                                                        marginRight: "20px",
                                                    }}
                                                />
                                                <Box>
                                                    <Typography
                                                        variant="h6"
                                                        color={theme?.palette.grey[700]}
                                                    >
                                                        {notificationTitle}
                                                    </Typography>
                                                    <Typography
                                                        variant="body1"
                                                        color={theme?.palette.grey[500]}
                                                    >
                                                        {message}
                                                    </Typography>
                                                    <Typography
                                                        variant="body2"
                                                        color="textSecondary"
                                                        sx={{ display: "flex", flexDirection: "column" }}
                                                    >
                                                        {fromAgoDate(created_at)}
                                                    </Typography>
                                                </Box>
                                            </Box>
                                            <Typography
                                                color={colorCodes?.GRAY_SHAD_200}
                                                sx={{
                                                    background: theme?.palette.grey[200],
                                                    p: 1,
                                                    mr: 1,
                                                    borderRadius: 1,
                                                }}
                                            >
                                                {fNotifiactionDate(created_at)}
                                            </Typography>
                                        </Box>
                                    </ListItem>
                                );
                            })
                            : ""}
                    </List>
                </> : <>
                    {/* Super admin */}
                    <Box display={"flex"} sx={{ justifyContent: "space-between" }}>
                        <Box display={"flex"} gap={1}>
                            {[
                                { id: 1, title: AppStrings?.all_notification },
                                { id: 2, title: AppStrings?.created_notification },
                            ].map((btn, index) => {
                                return (
                                    <Button
                                        border={1}
                                        boxShadow={1}
                                        sx={{
                                            bgcolor:
                                                notificationState?.selectedTab === btn.id
                                                    ? theme.palette.secondary.main
                                                    : "#fff",
                                            color:
                                                notificationState?.selectedTab === btn.id
                                                    ? theme.palette.secondary.contrastText
                                                    : "#000",
                                            border: notificationState?.selectedTab === btn.id
                                                ? `1px solid ${theme.palette.secondary.main}`
                                                : `1px solid ${theme.palette.grey[400]}`

                                        }}
                                        key={btn.id}
                                        onClick={() => onSelectTab(btn.id)}
                                    >
                                        {btn?.title}
                                    </Button>
                                );
                            })}

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
                        {notificationState?.selectedTab === 1 ? (
                            <List>
                                {allNotification?.length > 0
                                    ? allNotification.map((notification) => {
                                        let {
                                            _id,
                                            notificationTitle,
                                            message,
                                            notificationType,
                                            userType,
                                            created_at,
                                        } = notification;
                                        return (
                                            <ListItem
                                                key={_id}
                                                sx={{
                                                    background: "#ffffff",
                                                    borderLeft: `4px solid ${colorCodes.SECONDARY_COLOR_300}`,
                                                    borderRadius: "15px",
                                                    p: 0.1,
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
                                                            padding: "6px",
                                                            marginRight: "12px",
                                                        }}
                                                    >
                                                        <img
                                                            src="https://static.vecteezy.com/system/resources/previews/000/442/087/original/notification-vector-icon.jpg"
                                                            alt=""
                                                            style={{
                                                                width: "30px",
                                                                height: "30px",
                                                                background: "gray",
                                                                borderRadius: "50%",
                                                                marginRight: "20px",
                                                            }}
                                                        />
                                                        <Box>
                                                            <Typography
                                                                variant="h6"
                                                                color={theme?.palette.grey[700]}
                                                            >
                                                                {notificationTitle}
                                                            </Typography>
                                                            <Typography
                                                                variant="body1"
                                                                color={theme?.palette.grey[500]}
                                                            >
                                                                {message}
                                                            </Typography>
                                                            <Typography
                                                                variant="body2"
                                                                color="textSecondary"
                                                                sx={{ display: "flex", flexDirection: "column" }}
                                                            >
                                                                {fromAgoDate(created_at)}
                                                            </Typography>
                                                        </Box>
                                                    </Box>
                                                    <Typography
                                                        color={colorCodes?.GRAY_SHAD_200}
                                                        sx={{
                                                            background: theme?.palette.grey[200],
                                                            p: 1,
                                                            mr: 1,
                                                            borderRadius: 1,
                                                        }}
                                                    >
                                                        {fNotifiactionDate(created_at)}
                                                    </Typography>
                                                </Box>
                                            </ListItem>
                                        );
                                    })
                                    : ""}
                            </List>
                        ) : (
                            <List>
                                {allNotification?.length > 0
                                    ? allNotification.map((notification) => {
                                        let {
                                            _id,
                                            notificationTitle,
                                            message,
                                            notificationType,
                                            userType,
                                            created_at,
                                        } = notification;
                                        return (
                                            <ListItem
                                                key={_id}
                                                sx={{
                                                    background: "#ffffff",
                                                    borderLeft: `4px solid ${colorCodes.SECONDARY_COLOR_300}`,
                                                    borderRadius: "15px",
                                                    p: 0.1,
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
                                                            padding: "6px",
                                                            marginRight: "12px",
                                                        }}
                                                    >
                                                        <img
                                                            src="https://static.vecteezy.com/system/resources/previews/000/442/087/original/notification-vector-icon.jpg"
                                                            alt=""
                                                            style={{
                                                                width: "30px",
                                                                height: "30px",
                                                                background: "gray",
                                                                borderRadius: "50%",
                                                                marginRight: "20px",
                                                            }}
                                                        />
                                                        <Box>
                                                            <Typography
                                                                variant="h6"
                                                                color={theme?.palette.grey[700]}
                                                            >
                                                                {notificationTitle}
                                                            </Typography>
                                                            <Typography
                                                                variant="body1"
                                                                color={theme?.palette.grey[500]}
                                                            >
                                                                {message}
                                                            </Typography>
                                                            {/* <Typography
                                                                variant="body2"
                                                                color="textSecondary"
                                                                sx={{ display: "flex", flexDirection: "column" }}
                                                            >
                                                                {fromAgoDate(created_at)}
                                                            </Typography> */}
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
                                                    <Typography
                                                        color={colorCodes?.GRAY_SHAD_200}
                                                        sx={{
                                                            background: theme?.palette.grey[200],
                                                            p: 1,
                                                            mr: 1,
                                                            borderRadius: 1,
                                                        }}
                                                    >
                                                        {fNotifiactionDate(created_at)}
                                                    </Typography>
                                                </Box>
                                            </ListItem>
                                        );
                                    })
                                    : ""}
                            </List>
                        )}

                        <PaginationComponent
                            count={notificationState?.allNotification?.length}
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
                        setNotificationState={setNotificationState}
                        notificationState={notificationState}
                    />
                </>
            }

            <ShowsMessageModal isOpen={notificationState.showSuccessModal} setIsOpen={setNotificationState} message={notificationState?.message} />


        </Container>
    );
};

export default Notifications;
