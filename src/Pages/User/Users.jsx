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
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import React, { useEffect, useState } from "react";
import CommonTable from "../../Component/Table/Table";
import { AppStrings, colorCodes } from "../../Helper/Constant";
import { usersSuperAdminTablesColumn } from "../Utils/constant";
import UserModal from "./UserModal";
import Searchbar from "../../Component/Searchbar";
import UseUserApis from "../../Hooks/User";
import moment from "moment";

const Users = () => {
  const [isUserModalOpen, setIsUserModalOpen] = useState(false);
  const [isEditable, setIsEditable] = useState(null);
  const [userData, setUserData] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const theme = useTheme();

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  const { getUsers } = UseUserApis();
  const getUserList = () => {
    try {
      getUsers().then((res) => {
        const data = res?.data?.data?.map((ele, idx) => {
          return {
            ...ele,
            created_at: moment(ele?.created_at).format("DD-MM-YYYY h:mm:ss a"),
            index: idx,
          };
        });
        setUserData(data);
      });
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getUserList();
  }, []);

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
          <Searchbar onSearch={(e) => console.log("hello", e)} />
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
                  User Name
                </TableCell>
                <TableCell align="right" style={{ minWidth: "100px" }}>
                  Contact
                </TableCell>
                <TableCell align="right" style={{ minWidth: "150px" }}>
                  Institute user
                </TableCell>
                <TableCell align="right" style={{ minWidth: "120px" }}>
                  Email
                </TableCell>
                <TableCell align="right" style={{ minWidth: "200px" }}>
                  Account created on
                </TableCell>
                <TableCell align="right" style={{ minWidth: "180px" }}>
                  Last Login
                </TableCell>
                <TableCell align="right" style={{ minWidth: "100px" }}>
                  Status
                </TableCell>
                <TableCell align="right" style={{ minWidth: "100px" }}>
                  Deactivate
                </TableCell>
                <TableCell align="right" style={{ minWidth: "150px" }}>
                  Take Actions
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {userData
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, idx) => {
                  return (
                    <TableRow key={row?.id}>
                      <TableCell component="th" scope="row">
                        {idx + 1}
                      </TableCell>
                      <TableCell align="right">{row?.fullName}</TableCell>
                      <TableCell align="right">{row?.mobileNo}</TableCell>
                      <TableCell align="right">{row?.Institute_user}</TableCell>
                      <TableCell align="right">{row?.emailId}</TableCell>
                      <TableCell align="right">{row?.created_at}</TableCell>
                      <TableCell align="right">{row?.Last_Login}</TableCell>
                      <TableCell align="right">{row?.status}</TableCell>
                      <TableCell align="right">
                        <Switch defaultChecked color="secondary" />
                      </TableCell>
                      <TableCell align="right">
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
                        </Box>
                      </TableCell>
                    </TableRow>
                  );
                })}
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
    </Container>
  );
};

export default Users;
