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
import { accoundCreatedDate } from "../../Helper/utils/formatTime";
import InstitutsTable from "./InstitutsTable";
const label = { inputProps: { "aria-label": "Color switch demo" } };

const Institutes = () => {
    const [isInstituteModalOpen, setIsInstituteModalOpen] = useState(false);
    const { getInstituteList, onStatusChangeInstitute } = useInstitues();
    const theme = useTheme();

    const [instituteListData, setInstituteListData] = useState();
    const [dataState, setDataState] = useState({
        instituteList: [],
        globalInstituteList: [],
        showSuccessModal: false,
        message: "",
        showEditSuccess: false,
        render: false,
    });
    const [isEditable, setIsEditable] = useState({});
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);
    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    const navigate = useNavigate();

    useEffect(() => {
        getInstituteList()
            .then((res) => {
                if (res?.status === 200) {
                    setInstituteListData(res.data || [])
                    setDataState((prev) => ({
                        ...prev,
                        instituteList: res.data || [],
                        globalInstituteList: res.data || [],
                        render: false,
                    }));
                }
            })
            .catch((error) => {
                console.log("error");
            });
    }, [isInstituteModalOpen, dataState?.render]);

    const handleSearch = (value) => {
        if (value) {
            const data = dataState?.globalInstituteList?.filter((e) => {
                return e?.instituteName?.toLowerCase()?.includes(value?.toLowerCase());
            });
            setInstituteListData(data);
        } else {
            // getUserList();
            setInstituteListData(dataState?.globalInstituteList)
            // setDataState((prev) => ({
            //     ...prev,
            //     instituteList: dataState?.globalInstituteList,
            // }));
        }
    };

    const handleCheckStatus = (e, status) => {
        let statusValue = status === true ? false : status === false ? true : true;
        onStatusChangeInstitute({ id: e, params: statusValue })
            .then((res) => {
                setDataState((prev) => ({
                    render: true,
                }));
            })
            .catch((error) => {
                console.log(error);
            });
    };

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
                <InstitutsTable
                    userData={instituteListData}
                    page={page}
                    rowsPerPage={rowsPerPage}
                    handleCheckStatus={handleCheckStatus}
                    setIsEditable={setIsEditable}
                    setIsInstituteModalOpen={setIsInstituteModalOpen}
                />
                <TablePagination
                    rowsPerPageOptions={[10, 25, 100]}
                    component="div"
                    count={dataState?.instituteList?.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />
            </Paper>

            <InstituteModal
                isInstituteModalOpen={isInstituteModalOpen}
                setIsInstituteModalOpen={setIsInstituteModalOpen}
                isEditableRecord={isEditable}
                setDetroyExistRecord={setIsEditable}
                setParentState={setDataState}
            />

            <ShowsMessageModal
                isOpen={dataState.showSuccessModal}
                setIsOpen={setDataState}
                message={dataState?.message}
            />
        </Container>
    );
};

export default Institutes;
