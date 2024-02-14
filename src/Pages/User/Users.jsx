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

import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import React, { useEffect, useState } from "react";
import { AppStrings } from "../../Helper/Constant";
import UserModal from "./UserModal";
import Searchbar from "../../Component/Searchbar";
import UseUserApis from "../../Hooks/User";
import moment from "moment";
import ShowsMessageModal from "../../Component/ShowMessageModal";
import { useSelector } from "react-redux";
import PaginationComponent from "../../Component/Pagination/Paginations";
import InsitiuteUserTable from "./InsitiuteUserTable";
import SuperAdminTable from "./SuperAdminTable";
import useUserTypeName from "../../Hooks/IsCheckAuth";

const Users = () => {

  let { user } = useSelector((state) => state.AuthUser)
  const [isUserModalOpen, setIsUserModalOpen] = useState(false);

  const InstituteAdmin = useUserTypeName();
  const [isEditable, setIsEditable] = useState(null);
  const [userData, setUserData] = useState([]);
  const [globalData, setGlobalData] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const theme = useTheme();
  const { getUsers, deleteUserInfo, changeUserStatus } = UseUserApis();
  const [userDataState, setUserDataState] = useState({
    showSuccessModal: false,
    message: "",
    render: false
  })

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const getUserList = () => {

    let isIntitute = InstituteAdmin
    try {
      getUsers({ user: user?.userInfo }).then((res) => {
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

  const handleCheckStatus = (e, status) => {
    let statusValue = status === true ? false : status === false ? true : true

    changeUserStatus({ id: e, params: { activeStatus: statusValue } }).then((res) => {
      setUserDataState((prev) => ({
        render: true
      }))
    }).catch((error) => {
      console.log(error);
    })
  }


  useEffect(() => {
    getUserList();
    setUserDataState((prev) => ({
      ...prev,
      render: false
    }))
  }, [isUserModalOpen, userDataState?.render]);

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

        {InstituteAdmin ?
          <InsitiuteUserTable userData={userData} page={page} rowsPerPage={rowsPerPage} setIsUserModalOpen={setIsUserModalOpen} setIsEditable={setIsEditable} handleCheckStatus={handleCheckStatus} /> :
          <SuperAdminTable userData={userData} page={page} rowsPerPage={rowsPerPage} setIsUserModalOpen={setIsUserModalOpen} setIsEditable={setIsEditable} handleCheckStatus={handleCheckStatus} />
        }

        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={userData?.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>



      <UserModal
        isUserModalOpen={isUserModalOpen}
        setUserModalOpen={setIsUserModalOpen}
        setUserDataState={setUserDataState}
        userDataState={userDataState}
        isEditableRecord={isEditable}
      />

      <ShowsMessageModal isOpen={userDataState.showSuccessModal} setIsOpen={setUserDataState} message={userDataState?.message} />
    </Container>
  );
};

export default Users;
