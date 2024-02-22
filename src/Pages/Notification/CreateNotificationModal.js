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
import React, { useEffect, useState } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { ModalCSSStyle } from "../../Helper/utils/ModalCss";

import * as Yup from "yup";
import CloseIcon from "@mui/icons-material/Close";
import useNotifiaction from "../../Hooks/Notifiaction";

const CreateNotificationModal = ({
  isOpenNotifiactionModal,
  handleClose,
  setNotificationState,
  notificationState,
}) => {
  const theme = useTheme();

  const [notificaionModal, setNotificationModal] = useState({
    userNotificationTypes: [],
    notificaiontypes: [],
  });

  const {
    getNotifiactionUserTypeList,
    getNotifiactionTypeList,
    createNotifiacation,
  } = useNotifiaction();

  const validationSchema = Yup.object().shape({
    notificationTitle: Yup.string().required("Notification title is required"),
    message: Yup.string().required("Message is required"),
    notificationType: Yup.string().required("Notification type is required"),
    userType: Yup.string().required("User type is required"),
  });

  const initialValues = {
    notificationTitle: "",
    message: "",
    notificationType: "",
    userType: "",
  };

  const handleSubmit = (values, { resetForm }) => {
    createNotifiacation(values)
      .then((res) => {
        setNotificationState((prev) => ({
          ...prev,
          showSuccessModal: true,
          message: res?.message,
        }));
        resetForm();
        handleClose();
      })
      .catch((err) => {
        console.log(err, "err");
      });
    resetForm();
  };

  useEffect(() => {
    let fetchUserType = getNotifiactionUserTypeList();
    let fetchType = getNotifiactionTypeList();

    Promise.all([fetchUserType, fetchType])
      .then(([userTypeRes, notificationTypeRes]) => {
        setNotificationModal((prev) => ({
          ...prev,
          userNotificationTypes: userTypeRes.data || [],
          notificaiontypes: notificationTypeRes.data || [],
        }));
      })
      .catch((errors) => {
        // Handle errors
        console.log(errors);
      });
    //  Promise.all(([fetchUserType , fetchType]).then(()))
  }, []);

  let { userNotificationTypes, notificaiontypes } = notificaionModal;

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
                name="notificationTitle"
                as={TextField}
                fullWidth
                sx={{ marginTop: "0px" }}
                size="small"
                variant="outlined"
                margin="normal"
              />
              <ErrorMessage
                name="notificationTitle"
                style={{
                  color: theme?.palette.error.main,
                }}
                component="div"
              />

              <Typography>Message</Typography>
              <Field
                name="message"
                as={TextField}
                sx={{ marginTop: "0px" }}
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
              <FormControl
                fullWidth
                variant="outlined"
                margin="normal"
                sx={{ marginTop: "0px" }}
              >
                <Field
                  name="notificationType"
                  as={Select}
                  size="small"
                  variant="outlined"
                  margin="normal"
                >
                  {notificaiontypes?.map((type) => (
                    <MenuItem key={type?._id} value={type?._id}>
                      {type.type}
                    </MenuItem>
                  ))}
                </Field>
                <ErrorMessage
                  name="notificationType"
                  style={{
                    color: theme?.palette.error.main,
                  }}
                  component="div"
                />
              </FormControl>

              <Typography>User Type</Typography>
              <FormControl
                fullWidth
                variant="outlined"
                margin="normal"
                sx={{ marginTop: "0px" }}
              >
                <Field
                  name="userType"
                  as={Select}
                  size="small"
                  variant="outlined"
                  margin="normal"
                >
                  {userNotificationTypes?.map((user) => (
                    <MenuItem key={user?._id} value={user?._id}>
                      {user.userType}
                    </MenuItem>
                  ))}
                </Field>
                <ErrorMessage
                  name="userType"
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
