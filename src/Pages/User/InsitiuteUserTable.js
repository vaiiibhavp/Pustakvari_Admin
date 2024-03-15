import {
  Box,
  Button,
  Paper,
  Switch,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  useTheme,
} from "@mui/material";
import React from "react";
import { AppStrings } from "../../Helper/Constant";
import BorderColorOutlinedIcon from "@mui/icons-material/BorderColorOutlined";

import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import { accoundCreatedDate } from "../../Helper/utils/formatTime";
import moment from "moment";

const InsitiuteUserTable = ({
  userData,
  page,
  rowsPerPage,
  setIsUserModalOpen,
  setIsEditable,
  handleCheckStatus,
}) => {
  const theme = useTheme();
  return (
    <TableContainer sx={{ maxHeight: 440 }}>
      <Table stickyHeader aria-label="sticky table">
        <TableHead>
          <TableRow>
            <TableCell align="center" style={{ minWidth: "70px" }}>
              Sr No
            </TableCell>
            <TableCell align="center" style={{ minWidth: "230px" }}>
              {AppStrings?.user_Name}
            </TableCell>
            <TableCell align="center" style={{ minWidth: "100px" }}>
              {AppStrings?.contact_no}
            </TableCell>

            <TableCell align="center" style={{ minWidth: "120px" }}>
              {AppStrings?.email}
            </TableCell>
            <TableCell align="center" style={{ minWidth: "200px" }}>
              {AppStrings?.Account_created_on}
            </TableCell>
            <TableCell align="center" style={{ minWidth: "240px" }}>
              {AppStrings?.CurrentSubscription || "Current Subscription plan"}
            </TableCell>
            <TableCell align="center" style={{ minWidth: "100px" }}>
              {AppStrings?.status}
            </TableCell>
            <TableCell align="center" style={{ minWidth: "100px" }}>
              {AppStrings?.deactivate}
            </TableCell>
            <TableCell align="center" style={{ minWidth: "150px" }}>
              {AppStrings?.takeAction}{" "}
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {userData?.length > 0 ? (
            userData
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row, idx) => {
                return (
                  <TableRow key={row?.id}>
                    <TableCell align="center" component="th" scope="row">
                      {idx + 1}
                    </TableCell>
                    <TableCell align="left">
                      {" "}
                      <Box
                        sx={{
                          display: "flex",
                          gap: 1,
                          alignItems: "center",
                        }}
                      >
                        <Box>
                          <img
                            src={
                              row?.userImage
                                ? row.userImage
                                : "https://tse4.mm.bing.net/th?id=OIP.Bl6dInu-pv4nnfv-QAxgSwHaHa&pid=Api&P=0&h=180"
                            }
                            alt=""
                            style={{
                              width: "40px",
                              minWidth: "40px",
                              height: "40px",
                            }}
                          />
                        </Box>
                        {row?.fullName}
                      </Box>
                    </TableCell>
                    <TableCell align="left">{row?.mobileNo}</TableCell>
                    {/* <TableCell align="center">
                      {row?.is_instituteUser}
                    </TableCell> */}
                    <TableCell align="left">{row?.emailId}</TableCell>
                    <TableCell align="center">
                      {accoundCreatedDate(row?.created_at)}
                    </TableCell>
                    <TableCell align="center">
                      {accoundCreatedDate(row?.created_at)}
                    </TableCell>
                    {/* <TableCell align="center">{row?.Last_Login}</TableCell> */}
                    <TableCell align="center">
                      <Button
                        sx={{
                          width: "100px",
                          background: !row?.is_active
                            ? theme.palette?.secondary?.lighter
                            : theme.palette?.grey[300],
                          color: !row?.is_active
                            ? theme.palette?.secondary.main
                            : theme.palette?.grey[600],
                          textDecoration: "none",
                          borderRadius: "8px",
                          padding: "3px 16px",
                          "&.active": {
                            color: "text.primary",
                            bgcolor: "action.selected",
                            fontWeight: "fontWeightBold",
                          },
                        }}
                      >
                        {!row?.is_active ? "Deactive" : "Active" }
                      </Button>
                    </TableCell>
                    <TableCell align="center">
                      <Switch
                        value={row?._id}
                        // checked={}
                        defaultChecked={!row?.is_active}
                        color="secondary"
                        onChange={(e) => {
                          handleCheckStatus(e.target.value, row?.is_active);
                        }}
                      />
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
                            setIsEditable(row);
                            setIsUserModalOpen(true);
                          }}
                        >
                          <BorderColorOutlinedIcon size="medium" />
                        </Button>
                        {/* <Button
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
                      > <DeleteOutlineOutlinedIcon size="medium" /></Button> */}
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
  );
};

export default InsitiuteUserTable;
