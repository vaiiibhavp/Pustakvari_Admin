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
import { ModalCSSStyle } from "../../Helper/utils/ModalCss";

import * as Yup from "yup";
import CloseIcon from "@mui/icons-material/Close";

const CreateNotificationModal = ({ isOpenNotifiactionModal, handleClose }) => {
  const theme = useTheme();

  const validationSchema = Yup.object().shape({
    notification_title: Yup.string().required("Notification title is required"),
    message: Yup.string().required("Message is required"),
    notification_type: Yup.string().required("Notification type is required"),
    user_type: Yup.string().required("User type is required"),
  });

  const initialValues = {
    notification_title: "",
    message: "",
    notification_type: "",
    user_type: "",
  };

  const handleSubmit = (values, { resetForm }) => {
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
      <Box sx={ModalCSSStyle}>
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
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          <Form>
            <Box mt={2}>
              <Typography>Notification Title </Typography>
              <Field
                name="notification_title"
                as={TextField}
                fullWidth
                size="small"
                variant="outlined"
                margin="normal"
              />
              <ErrorMessage
                name="notification_title"
                style={{
                  color: theme?.palette.error.main,
                }}
                component="div"
              />

              <Typography>Message</Typography>
              <Field
                name="message"
                as={TextField}
                fullWidth
                size="small"
                multiline
                rows={4}
                variant="outlined"
                margin="normal"
              />
              <ErrorMessage
                name="message"
                style={{
                  color: theme?.palette.error.main,
                }}
                component="div"
              />

              <Typography>Notification Type</Typography>
              <FormControl fullWidth variant="outlined" margin="normal">
                <Field
                  name="notification_type"
                  as={Select}
                  size="small"
                  variant="outlined"
                  margin="normal"
                >
                  <MenuItem value="type1">Type 1</MenuItem>
                  <MenuItem value="type2">Type 2</MenuItem>
                </Field>
                <ErrorMessage
                  name="notification_type"
                  style={{
                    color: theme?.palette.error.main,
                  }}
                  component="div"
                />
              </FormControl>

              <Typography>User Type</Typography>
              <FormControl fullWidth variant="outlined" margin="normal">
                <Field
                  name="user_type"
                  as={Select}
                  size="small"
                  variant="outlined"
                  margin="normal"
                >
                  <MenuItem value="user1">User 1</MenuItem>
                  <MenuItem value="user2">User 2</MenuItem>
                </Field>
                <ErrorMessage
                  name="user_type"
                  style={{
                    color: theme?.palette.error.main,
                  }}
                  component="div"
                />
              </FormControl>

              <Box mt={2} px={3} sx={{ width: "100%" }} textAlign={"center"}>
                <Button
                  fullWidth
                  sx={{
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
    </Modal>
  );
};

export default CreateNotificationModal;
