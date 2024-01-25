import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
  TextField,
  Button,
  InputAdornment,
  IconButton,
  FormControl,
  InputLabel,
  OutlinedInput,
  Modal,
  Box,
  Typography,
  useTheme,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import CloseIcon from "@mui/icons-material/Close";
import { AppStrings } from "../../Helper/Constant";
import { ModalCSSStyle } from "../../Helper/utils/ModalCss";
import UseUserApis from "../../Hooks/User";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 360,
  borderRadius: "20px",
  bgcolor: "background.paper",
  // border: '2px solid #000',
  boxShadow: 24,
  p: 2,
  minHeight: 500,
  overflowY: "auto",
  "&::-webkit-scrollbar": {
    width: "0px",
    padding: "10px 0",
  },
  "&::-webkit-scrollbar-thumb": {
    backgroundColor: "#888",
    borderRadius: "6px",
  },
  "&::-webkit-scrollbar-track": {
    backgroundColor: "#f1f1f1",
    borderRadius: "10px",
  },
  scrollbarWidth: "thin",
  scrollbarColor: "#888 #f1f1f1", // For Firefox
};

const UserModal = ({ isUserModalOpen, setUserModalOpen, isEditableRecord }) => {
  let isEditable = isEditableRecord !== null ? true : false;
  const { updateUser, createUser } = UseUserApis();
  const theme = useTheme();

  const handleClose = () => setUserModalOpen(false);
  const initialValues = {
    fullName: isEditableRecord?.fullName ?? "",
    emailId: isEditableRecord?.emailId ?? "",
    mobileNo: isEditableRecord?.mobileNo ?? "",
    password: "",
    confirmPassword: "",
    userType: "insititute_user",
    is_instituteUser: true,
  };

  const validationSchema = Yup.object().shape({
    fullName: Yup.string().required("Full name is required"),
    emailId: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    mobileNo: Yup.string().required("Contact number is required"),
    password: Yup.string().required("Password is required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Confirm password is required"),
  });

  const handleSubmit = (isEdit, value, { resetForm }) => {
    if (isEdit) {
      updateUser(value, isEditableRecord?._id)
        .then((res) => {
          resetForm();
          setUserModalOpen(false);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      const data = {
        fullName: value?.fullName,
        emailId: value?.emailId,
        mobileNo: value?.mobileNo,
        password: value?.password,
        userType: "insititute_user",
        is_instituteUser: true,
      };
      createUser(data)
        .then((res) => {
          resetForm();
          setUserModalOpen(false);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };
  const formik = useFormik({
    initialValues,
    enableReinitialize: true,
    validationSchema,

    onSubmit: (values, { resetForm }) => {
      handleSubmit(isEditable, values, { resetForm });
    },
  });

  const handleClickShowPassword = () => {
    formik.setFieldValue("passwordVisible", !formik.values.passwordVisible);
  };

  const handleClickShowConfirmPassword = () => {
    formik.setFieldValue(
      "confirmPasswordVisible",
      !formik.values.confirmPasswordVisible
    );
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <Modal
      open={isUserModalOpen}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={ModalCSSStyle} textAlign={"center"}>
        <Typography
          id="modal-modal-title"
          variant="h6"
          component="h2"
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          {isEditable ? "Edit" : AppStrings?.Add_new_user}

          <span onClick={handleClose}>
            <CloseIcon sx={{ color: theme.palette.grey[400] }} />
          </span>
        </Typography>
        <form onSubmit={formik.handleSubmit} style={{ padding: "10px 0" }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "start",
            }}
          >
            <Typography style={{ padding: "0 0 5px 0" }}>
              {AppStrings?.FullName}:
            </Typography>
            <TextField
              fullWidth
              id="fullName"
              sx={{ marginTop: "0px" }}
              name="fullName"
              // label="Full Name"
              size="small"
              placeholder={AppStrings?.FullName}
              variant="outlined"
              margin="normal"
              value={formik.values.fullName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.fullName && Boolean(formik.errors.fullName)}
              helperText={formik.touched.fullName && formik.errors.fullName}
            />
          </Box>

          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "start",
            }}
          >
            <Typography style={{ padding: "0 0 5px 0" }}>
              {AppStrings?.email}:
            </Typography>

            <TextField
              fullWidth
              id="emailId"
              name="emailId"
              // label="Email"
              sx={{ marginTop: "0px" }}
              size="small"
              placeholder={AppStrings?.email_Id}
              variant="outlined"
              margin="normal"
              type="email"
              value={formik.values.emailId}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.emailId && Boolean(formik.errors.emailId)}
              helperText={formik.touched.emailId && formik.errors.emailId}
            />
          </Box>

          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "start",
            }}
          >
            <Typography style={{ padding: "0 0 5px 0" }}>
              {AppStrings?.contact_no}:
            </Typography>

            <TextField
              fullWidth
              id="mobileNo"
              name="mobileNo"
              size="small"
              sx={{ marginTop: "0px" }}
              // label="Contact Number"
              placeholder={AppStrings?.contact_no}
              variant="outlined"
              margin="normal"
              value={formik.values.mobileNo}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.mobileNo && Boolean(formik.errors.mobileNo)}
              helperText={formik.touched.mobileNo && formik.errors.mobileNo}
            />
          </Box>

          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "start",
            }}
          >
            <Typography style={{ padding: "0 0 5px 0" }}>
              {AppStrings?.password}:
            </Typography>

            <FormControl
              fullWidth
              variant="outlined"
              margin="normal"
              sx={{ marginTop: "0px" }}
            >
              <OutlinedInput
                id="password"
                name="password"
                type={formik.values.passwordVisible ? "text" : "password"}
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder={AppStrings?.password}
                error={
                  formik.touched.password && Boolean(formik.errors.password)
                }
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      edge="end"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}

                    >
                      {formik.values.passwordVisible ? (
                        <Visibility />
                      ) : (
                        <VisibilityOff />
                      )}
                    </IconButton>
                  </InputAdornment>
                }
                // label="Password"
                size="small"
              />
            </FormControl>
          </Box>

          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "start",
            }}
          >
            <Typography style={{ padding: "0 0 5px 0" }}>
              {AppStrings?.confirmPassword}:
            </Typography>

            <FormControl
              fullWidth
              variant="outlined"
              margin="normal"
              sx={{ marginTop: "0px" }}
            >
              <OutlinedInput
                id="confirmPassword"
                name="confirmPassword"
                type={
                  formik.values.confirmPasswordVisible ? "text" : "password"
                }
                value={formik.values.confirmPassword}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder={AppStrings?.confirmPassword}
                error={
                  formik.touched.confirmPassword &&
                  Boolean(formik.errors.confirmPassword)
                }
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      edge="end"
                      onClick={handleClickShowConfirmPassword}
                      onMouseDown={handleMouseDownPassword}
                    >
                      {formik.values.confirmPasswordVisible ? (
                        <Visibility />
                      ) : (
                        <VisibilityOff />
                      )}
                    </IconButton>
                  </InputAdornment>
                }
                // label="Confirm Password"
                size="small"
              />
            </FormControl>
          </Box>

          <Box px={3}>
            <Button
              fullWidth
              type="submit"
              variant="contained"
              color="primary"
              mt={2}
              sx={{ marginTop: "15px", borderRadius: "18px" }}
            >
              {isEditable ? "Update" : "Submit"}
            </Button>
          </Box>
        </form>
      </Box>
    </Modal>
  );
};

export default UserModal;
