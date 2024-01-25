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
import React, { useEffect, useState } from "react";

import { AppStrings, colorCodes } from "../../Helper/Constant";
import InstituteModal from "./InstituteModal";
import { useNavigate } from "react-router-dom";
import Searchbar from "../../Component/Searchbar";
import useInstitues from "../../Hooks/Institutes";
import BorderColorOutlinedIcon from "@mui/icons-material/BorderColorOutlined";

import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline"; // Import the icon you want to use
import moment from "moment";
import ShowsMessageModal from "../../Component/ShowMessageModal";
const label = { inputProps: { "aria-label": "Color switch demo" } };

const Institutes = () => {
    const [isInstituteModalOpen, setIsInstituteModalOpen] = useState(false);
    const { getInstituteList } = useInstitues();
    const theme = useTheme();
    const [dataState, setDataState] = useState({
        instituteList: [],
        globalInstituteList: [],
        showSuccessModal: false,
        message: "",
        showEditSuccess: false,
    });
    const [isEditable, setIsEditable] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        getInstituteList()
            .then((res) => {
                if (res?.status === 200) {
                    setDataState((prev) => ({
                        ...prev,
                        instituteList: res.data || [],
                        globalInstituteList: res.data || [],
                    }));
                }
            })
            .catch((error) => {
                console.log("errro");
            });
    }, [isInstituteModalOpen]);

    const handleSearch = (value) => {

        if (value) {
            const data = dataState?.globalInstituteList?.filter((e) => {
                return e?.instituteName?.toLowerCase()?.includes(value?.toLowerCase());
            });
            setDataState((prev) => ({
                ...prev,
                instituteList: data || [],

            }));
        } else {
            // getUserList();
            setDataState((prev) => ({
                ...prev,
                instituteList: dataState?.globalInstituteList,

            }))
        }
    }

    return (
        <Container maxWidth="xl">
            <Box
                pb={2}
                mx={1}
                sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                }}
            >
                <Typography variant="h5">{AppStrings?.Institutes}</Typography>
                <Box sx={{ display: "flex", gap: 1 }}>
                    <Searchbar onSearch={handleSearch} />
                    <Button
                        onClick={() => {
                            setIsEditable({});
                            setIsInstituteModalOpen(true);
                        }}
                        sx={{ background: colorCodes?.PRIMARY_COLOR, color: "#fff" }}
                    >
                        +{AppStrings?.add_institute}
                    </Button>
                </Box>
            </Box>
            {/* table */}
            <Paper sx={{ width: "100%" }}>
                <TableContainer sx={{ maxHeight: 440 }}>
                    <Table stickyHeader aria-label="sticky table">
                        <TableHead sx={{ background: theme.palette.grey[700] }}>
                            <TableRow sx={{ background: "gray" }}>
                                <TableCell style={{ minWidth: "80px" }}>
                                    {AppStrings?.sNo}
                                </TableCell>
                                <TableCell align="keft" style={{ minWidth: "150px" }}>
                                    {AppStrings?.institute_name}
                                </TableCell>
                                <TableCell align="left" style={{ minWidth: "100px" }}>
                                    {AppStrings?.Contact}
                                </TableCell>
                                <TableCell align="center" style={{ minWidth: "180px" }}>
                                    {AppStrings?.email}{" "}
                                </TableCell>
                                <TableCell align="center" style={{ minWidth: "180px" }}>
                                    {AppStrings?.Account_created_on}
                                </TableCell>
                                <TableCell align="center" style={{ minWidth: "100px" }}>
                                    {AppStrings?.status}
                                </TableCell>

                                <TableCell align="center" style={{ minWidth: "100px" }}>
                                    {AppStrings?.Total_users}
                                </TableCell>
                                <TableCell align="center" style={{ minWidth: "80px" }}>
                                    {AppStrings?.deactivate}
                                </TableCell>
                                <TableCell align="center" style={{ minWidth: "100px" }}>
                                    {AppStrings?.takeAction}
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {dataState?.instituteList?.length > 0 ? (
                                dataState?.instituteList
                                    // .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                    .map((institute, idx) => {
                                        let {
                                            _id,
                                            emailId,
                                            instituteName,
                                            is_active,
                                            mobileNo,
                                            created_at,
                                            studentCount,
                                        } = institute;
                                        return (
                                            <TableRow key={_id}>
                                                <TableCell component="th" scope="row">
                                                    {idx + 1}
                                                </TableCell>
                                                <TableCell align="left">{instituteName}</TableCell>
                                                <TableCell align="left">{mobileNo}</TableCell>
                                                <TableCell align="center">{emailId}</TableCell>
                                                <TableCell align="center">
                                                    {moment(created_at).format("yyyy-MM-DD")}
                                                </TableCell>

                                                <TableCell align="center">
                                                    <Button
                                                        sx={{
                                                            margin: "0 10px",
                                                            px: 3,
                                                            borderRadius: 4,
                                                            background: is_active
                                                                ? theme.palette?.secondary?.lighter
                                                                : theme.palette?.grey[300],
                                                            color: is_active
                                                                ? theme.palette?.secondary.main
                                                                : theme.palette?.grey[600],
                                                            "&.active": {
                                                                color: "text.primary",
                                                                bgcolor: "action.selected",
                                                                fontWeight: "fontWeightBold",
                                                            },
                                                        }}
                                                    >
                                                        {!is_active ? "Active" : "Deactive"}
                                                    </Button>
                                                </TableCell>
                                                <TableCell align="center">{studentCount}</TableCell>
                                                <TableCell align="center">
                                                    <Switch {...label} defaultChecked color="secondary" />
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
                                                                setIsEditable(institute);
                                                                setIsInstituteModalOpen(true);
                                                            }}
                                                        >
                                                            <BorderColorOutlinedIcon size="medium" />{" "}
                                                        </Button>
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
                {/* <TablePagination
                    rowsPerPageOptions={[10, 25, 100]}
                    component="div"
                    count={subscriptionData?.subscriptionList?.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                /> */}
            </Paper>

            <InstituteModal
                isInstituteModalOpen={isInstituteModalOpen}
                setIsInstituteModalOpen={setIsInstituteModalOpen}
                isEditableRecord={isEditable}
                setDetroyExistRecord={setIsEditable}
                setParentState={setDataState}
            />

            <ShowsMessageModal isOpen={dataState.showSuccessModal} setIsOpen={setDataState} message={dataState?.message} />


        </Container>
    );
};

export default Institutes;
