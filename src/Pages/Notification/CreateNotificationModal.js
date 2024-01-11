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
  p: 4,
};

const CreateNotificationModal = ({ isOpenNotifiactionModal, handleClose }) => {
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
          Create Notification
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
                <Field
                  name="notification_title"
                  as={TextField}
                  //   label="Notification Title"
                  placeholder={AppStrings?.notification_type}
                  fullWidth
                  size="small"
                  variant="outlined"
                  margin="normal"
                />
                <ErrorMessage name="notification_title" component="div" />

                <Field
                  name="message"
                  as={TextField}
                  //   label="Message"
                  fullWidth
                  size="small"
                  multiline
                  rows={4}
                  variant="outlined"
                  margin="normal"
                />
                <ErrorMessage name="message" component="div" />

                <FormControl fullWidth variant="outlined" margin="normal">
                  {/* <InputLabel id="notification-type-label">
                    Notification Type
                  </InputLabel> */}
                  <Field
                    name="notification_type"
                    as={Select}
                    size="small"
                    labelId="notification-type-label"
                    // label="Notification Type"
                  >
                    <MenuItem value="type1">Type 1</MenuItem>
                    <MenuItem value="type2">Type 2</MenuItem>
                    {/* Add more options as needed */}
                  </Field>
                  <ErrorMessage name="notification_type" component="div" />
                </FormControl>

                <FormControl fullWidth variant="outlined" margin="normal">
                  {/* <InputLabel id="user-type-label">User Type</InputLabel> */}
                  <Field
                    name="user_type"
                    as={Select}
                    size="small"
                    labelId="user-type-label"
                    // label="User Type"
                  >
                    <MenuItem value="user1">User 1</MenuItem>
                    <MenuItem value="user2">User 2</MenuItem>
                    {/* Add more options as needed */}
                  </Field>
                  <ErrorMessage name="user_type" component="div" />
                </FormControl>

                <Box mt={2} sx={{ width: "100%" }} textAlign={"center"}>
                  <Button
                    sx={{ background: colorCodes?.PRIMARY_COLOR }}
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
