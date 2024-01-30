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
import BorderColorOutlinedIcon from "@mui/icons-material/BorderColorOutlined";
import DeleteIcon from "@mui/icons-material/Delete";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline"; // Import the icon you want to use

import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import React, { useEffect, useState } from "react";
import CommonTable from "../../Component/Table/Table";
import { AppStrings, colorCodes } from "../../Helper/Constant";
import { usersSuperAdminTablesColumn } from "../Utils/constant";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";

import UserModal from "./UserModal";
import Searchbar from "../../Component/Searchbar";
import UseUserApis from "../../Hooks/User";
import moment from "moment";
import ShowsMessageModal from "../../Component/ShowMessageModal";

const Users = () => {
  const [isUserModalOpen, setIsUserModalOpen] = useState(false);
  const [isEditable, setIsEditable] = useState(null);
  const [userData, setUserData] = useState([]);
  const [globalData, setGlobalData] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const theme = useTheme();
  const { getUsers, deleteUserInfo } = UseUserApis();
  const [userDataState, setUserDataState] = useState({
    showSuccessModal: false,
    message: ""
  })

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const getUserList = () => {
    try {
      getUsers().then((res) => {
        const data = res?.data?.data?.map((ele, idx) => {
          return {
            ...ele,
            created_at: moment(ele?.created_at).format("DD-MM-YYYY h:mm:ss a"),
            is_instituteUser: ele?.is_instituteUser === true ? "Yes" : "No",
            index: idx,
          };
        });
        setUserData(data);
        setGlobalData(data);
      });
    } catch (err) {
      console.log(err);
    }
  };

  const handeSearch = (value) => {
    if (value) {
      const data = globalData?.filter((e) => {
        return e?.fullName?.toLowerCase()?.includes(value?.toLowerCase());
      });
      setUserData(data);
    } else {
      // getUserList();
      setUserData(globalData);
    }
  };

  const onRemoveHandler = (id) => {
    deleteUserInfo(id).then((res) => {
      let filternewData = userData?.filter((item) => {
        return item._id !== id
      })
      setUserData(filternewData)
    }).catch((error) => {
      console.log(error);
    })
  }


  useEffect(() => {
    getUserList();
  }, [isUserModalOpen]);

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
        <Typography variant="h5">Users</Typography>
        <Box sx={{ display: "flex", gap: 1 }}>
          <Searchbar onSearch={(e) => handeSearch(e)} />
          <Button
            variant="contained"
            onClick={() => {
              setIsEditable(null);
              setIsUserModalOpen(true);
            }}
          >
            {" "}
            + {AppStrings?.Add_user}
          </Button>
        </Box>
      </Box>

      <Paper sx={{ width: "100%" }}>
        <TableContainer sx={{ maxHeight: 440 }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                <TableCell style={{ minWidth: "80px" }}>Sr No</TableCell>
                <TableCell align="right" style={{ minWidth: "150px" }}>
                  {AppStrings?.user_Name}
                </TableCell>
                <TableCell align="right" style={{ minWidth: "100px" }}>
                  {AppStrings?.Contact}
                </TableCell>
                <TableCell align="right" style={{ minWidth: "150px" }}>
                  {AppStrings?.institute_user}
                </TableCell>
                <TableCell align="right" style={{ minWidth: "120px" }}>
                  {AppStrings?.email}
                </TableCell>
                <TableCell align="right" style={{ minWidth: "200px" }}>
                  {AppStrings?.Account_created_on}
                </TableCell>
                <TableCell align="right" style={{ minWidth: "180px" }}>
                  {AppStrings?.last_login}
                </TableCell>
                <TableCell align="right" style={{ minWidth: "100px" }}>
                  {AppStrings?.status}
                </TableCell>
                <TableCell align="right" style={{ minWidth: "100px" }}>
                  {AppStrings?.deactivate}
                </TableCell>
                <TableCell align="right" style={{ minWidth: "150px" }}>
                  {AppStrings?.takeAction}                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {userData?.length > 0 ? userData
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, idx) => {
                  return (
                    <TableRow key={row?.id}>
                      <TableCell component="th" scope="row">
                        {idx + 1}
                      </TableCell>
                      <TableCell align="right">{row?.fullName}</TableCell>
                      <TableCell align="right">{row?.mobileNo}</TableCell>
                      <TableCell align="right">
                        {row?.is_instituteUser}
                      </TableCell>
                      <TableCell align="right">{row?.emailId}</TableCell>
                      <TableCell align="right">{row?.created_at}</TableCell>
                      <TableCell align="right">{row?.Last_Login}</TableCell>
                      <TableCell align="right">
                        <Button
                          sx={{
                            background: theme.palette?.grey[300],
                            color: theme.palette?.grey[600],
                            textDecoration: "none",
                            borderRadius: "20px",
                            padding: "0 16px",
                            "&.active": {
                              color: "text.primary",
                              bgcolor: "action.selected",
                              fontWeight: "fontWeightBold",
                            },
                          }}
                        >
                          {row?.activeStatus ? "Active" : "Inactive"}
                        </Button>
                      </TableCell>
                      <TableCell align="right">
                        <Switch
                          defaultChecked={row?.activeStatus}
                          color="secondary"
                        />
                      </TableCell>
                      <TableCell align="right" style={{ minWidth: "200px" }}>
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
                              setIsEditable(row);
                              setIsUserModalOpen(true);
                            }}
                          >
                            <BorderColorOutlinedIcon size="medium" />
                          </Button>
                          <Button
                            sx={{
                              margin: " 0 10px",
                              background: theme.palette?.secondary?.lighter,
                              color: theme.palette?.secondary.main,
                              "&.active": {
                                color: "text.secondary",
                                bgcolor: "action.selected",
                                fontWeight: "fontWeightBold",
                              },
                            }}
                            onClick={() => onRemoveHandler(row._id)}
                          > <DeleteOutlineOutlinedIcon size="medium" /></Button>
                        </Box>
                      </TableCell>
                    </TableRow>
                  );
                }) :
                <TableRow>
                  <TableCell colSpan={12} align="center">
                    <Box sx={{ padding: "20px 0" }}>
                      <ErrorOutlineIcon fontSize="large" sx={{ color: theme.palette.grey[500] }} />
                      <Typography sx={{ color: theme.palette.grey[400] }} mt={1} mb={4}>
                        {AppStrings?.no_data_available}
                      </Typography>
                    </Box>
                  </TableCell>
                </TableRow>}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={userData.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>

      <UserModal
        isUserModalOpen={isUserModalOpen}
        setUserModalOpen={setIsUserModalOpen}
        isEditableRecord={isEditable}
      />

      <ShowsMessageModal isOpen={userDataState.showSuccessModal} setIsOpen={setUserDataState} message={userDataState?.message} />
    </Container>
  );
};

export default Users;
