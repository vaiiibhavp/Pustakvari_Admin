import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
  TextField,
  Select,
  MenuItem,
  Button,
  FormControl,
  InputLabel,
  TextareaAutosize,
  Modal,
  Box,
  Typography,
  useTheme,
} from "@mui/material";

import CloseIcon from "@mui/icons-material/Close";
import { AppStrings } from "../../Helper/Constant";
import { ModalCSSStyle } from "../../Helper/utils/ModalCss";

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
  height: 500,
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

const SubscriptionModal = ({ isModalOpen, setIsModalOpen, isEditRecord }) => {
  let isEditable = isEditRecord?.id ? true : false;
  console.log(isEditRecord, "isedit", isEditable);
  const theme = useTheme();

  const initialValues = {
    subscriptionName: "",
    duration: "",
    rate: "",
    features: "",
  };

  const validationSchema = Yup.object({
    subscriptionName: Yup.string().required("Subscription Name is required"),
    duration: Yup.string().required("Duration is required"),
    rate: Yup.string().required("Rate is required"),
    features: Yup.string().required("Features are required"),
  });

  const durationOptions = [
    { label: "Monthly", value: "monthly" },
    { label: "Yearly", value: "yearly" },
    { label: "Quarterly", value: "quarterly" },
  ];

  const onSubmit = (values) => {
    // Handle form submission logic here
    console.log(values);
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  const handleClose = () => setIsModalOpen(false);

  return (
    <Modal
      open={isModalOpen}
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
          {isEditable
            ? AppStrings?.Edit_Subscription_title
            : AppStrings?.Add_new_subscription_plan}

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
            <Typography>Subscription Name :</Typography>
            <TextField
              id="subscriptionName"
              placeholder="Subscription Name"
              variant="outlined"
              fullWidth
              sx={{ marginTop: "0px" }}
              size="small"
              margin="normal"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.subscriptionName}
              error={
                formik.touched.subscriptionName &&
                Boolean(formik.errors.subscriptionName)
              }
              helperText={
                formik.touched.subscriptionName &&
                formik.errors.subscriptionName
              }
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "start",
            }}
          >
            <Typography>Duration</Typography>
            <FormControl
              fullWidth
              variant="outlined"
              margin="normal"
              sx={{ marginTop: "0px" }}
            >
              <Select
                placeholder="Duration"
                id="duration"
                name="duration"
                size="small"
                sx={{
                  display: "flex",
                  justifyContent: "start",
                  alignItems: "start",
                }}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.duration}
                error={
                  formik.touched.duration && Boolean(formik.errors.duration)
                }
              >
                <MenuItem value="" label="Select Duration" />
                {durationOptions.map((option) => (
                  <MenuItem
                    key={option.value}
                    value={option.value}
                    label={option.label}
                  >
                    {option.label}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            {formik.touched.duration && formik.errors.duration && (
              <div
                style={{
                  color: "red",
                  fontSize: "0.75rem",
                  padding: "0 0 0 10px",
                }}
              >
                {formik.errors.duration}
              </div>
            )}
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "start",
            }}
          >
            <Typography>Rate</Typography>
            <TextField
              id="rate"
              placeholder="Rate"
              variant="outlined"
              sx={{ marginTop: "0px" }}
              fullWidth
              size="small"
              margin="normal"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.rate}
              error={formik.touched.rate && Boolean(formik.errors.rate)}
              helperText={formik.touched.rate && formik.errors.rate}
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "start",
              mb: 3,
            }}
          >
            <Typography>Features</Typography>
            <TextField
              id="features"
              sx={{ marginTop: "0px" }}
              minRows={3}
              size="small"
              placeholder="Enter Features"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.features}
              style={{ width: "100%", marginBottom: "5px" }}
            />
            {formik.touched.features && formik.errors.features && (
              <div
                style={{
                  color: "red",
                  fontSize: "0.75rem",
                  padding: "0 0 0 10px",
                }}
              >
                {formik.errors.features}
              </div>
            )}
          </Box>
          <Box px={3}>
            <Button
              fullWidth
              type="submit"
              variant="contained"
              color="primary"
              sx={{ borderRadius: "18px" }}
            >
              Submit
            </Button>
          </Box>
        </form>
      </Box>
    </Modal>
  );
};

export default SubscriptionModal;
