import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Modal,
  Select,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { AppStrings, colorCodes } from "../../Helper/Constant";
import CloseIcon from "@mui/icons-material/Close";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  borderRadius: "20px",
  bgcolor: "background.paper",
  // border: '2px solid #000',
  boxShadow: 24,
  p: 2,
};

const CreateNotificationModal = ({ isOpenNotifiactionModal, handleClose }) => {
  const theme = useTheme();
  // Define Yup validation schema
  const validationSchema = Yup.object().shape({
    notification_title: Yup.string().required("Notification title is required"),
    message: Yup.string().required("Message is required"),
    notification_type: Yup.string().required("Notification type is required"),
    user_type: Yup.string().required("User type is required"),
  });

  // Initial form values
  const initialValues = {
    notification_title: "",
    message: "",
    notification_type: "",
    user_type: "",
  };

  // Handle form submission
  const handleSubmit = (values, { resetForm }) => {
    // Your submit logic here
    console.log(values);
    resetForm();
  };
  return (
    <Modal
      open={isOpenNotifiactionModal}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
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
          {AppStrings?.create_notification}
          <span onClick={handleClose}>
            <CloseIcon />
          </span>
        </Typography>
        <Box>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            <Form>
              <Box mt={2}>
                <Typography>{AppStrings?.notification_title} </Typography>
                <Field
                  name="notification_title"
                  as={TextField}
                  //   label="Notification Title"
                  style={{ marginTop: "0px" }}
                  placeholder={AppStrings?.notification_title}
                  fullWidth
                  size="small"
                  variant="outlined"
                  margin="normal"
                />
                <ErrorMessage name="notification_title" component="div" />

                <Typography>{AppStrings?.message}</Typography>
                <Field
                  name="message"
                  as={TextField}
                  //   label="Message"
                  style={{ marginTop: "0px" }}
                  placeholder={AppStrings?.message}
                  fullWidth
                  size="small"
                  multiline
                  rows={4}
                  variant="outlined"
                  margin="normal"
                />
                <ErrorMessage name="message" component="div" />
                <Typography>{AppStrings?.notification_Type}</Typography>
                <FormControl
                  fullWidth
                  variant="outlined"
                  margin="normal"
                  sx={{ marginTop: "0px" }}
                >
                  <Field
                    name="notification_type"
                    as={Select}
                    size="small"
                    style={{ marginTop: "0px" }}
                    placeholder={AppStrings?.notification_Type}
                    labelId="notification-type-label"
                    // label="Notification Type"
                  >
                    <MenuItem value="type1">Type 1</MenuItem>
                    <MenuItem value="type2">Type 2</MenuItem>
                    {/* Add more options as needed */}
                  </Field>
                  <ErrorMessage name="notification_type" component="div" />
                </FormControl>
                <Typography>{AppStrings?.user_type}</Typography>
                <FormControl
                  fullWidth
                  variant="outlined"
                  margin="normal"
                  sx={{ marginTop: "0px" }}
                >
                  {/* <InputLabel id="user-type-label">User Type</InputLabel> */}
                  <Field
                    name="user_type"
                    as={Select}
                    size="small"
                    labelId="user-type-label"
                    placeholder={AppStrings?.user_type}
                    // label="User Type"
                  >
                    <MenuItem value="user1">User 1</MenuItem>
                    <MenuItem value="user2">User 2</MenuItem>
                    {/* Add more options as needed */}
                  </Field>
                  <ErrorMessage
                    name="user_type"
                    style={{
                      color: theme?.palette.error,
                    }}
                    component="div"
                  />
                </FormControl>

                <Box mt={2} sx={{ width: "100%" }} textAlign={"center"}>
                  <Button
                    // borderRadius={8}
                    sx={{
                      background: colorCodes?.PRIMARY_COLOR,
                      borderRadius: "16px",
                      padding: "5px 15px",
                    }}
                    type="submit"
                    variant="contained"
                    color="primary"
                  >
                    Submit
                  </Button>
                </Box>
              </Box>
            </Form>
          </Formik>
        </Box>
      </Box>
    </Modal>
  );
};

export default CreateNotificationModal;
