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
  MenuItem,
  Select,
  useTheme,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import CloseIcon from "@mui/icons-material/Close";

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
};

let categories = ["Category1", "Category2", "Category3"];
let types = ["Type1", "Type2", "Type3"];

const EbookModal = ({
  isOpenEbookModal,
  setIsOpenEbookModal,
  isEditableRecord,
}) => {
  const theme = useTheme();
  let isEditable = isEditableRecord?.id ? true : false;

  const handleClose = () => setIsOpenEbookModal(false);
  const validationSchema = Yup.object({
    categoryName: Yup.string().required("Category name is required"),
    authorName: Yup.string().required("Author name is required"),
    category: Yup.string().required("Category is required"),
    type: Yup.string().required("Type is required"),
    videoLink: Yup.string()
      .url("Invalid URL")
      .required("Video link is required"),
    categoryImage: Yup.mixed()
      .required("Image is required")
      .test(
        "fileSize",
        "File size is too large",
        (value) => value && value.size <= 2000000
      ) // 2MB limit
      .test(
        "fileType",
        "Invalid file type",
        (value) =>
          value && ["image/jpeg", "image/png", "image/gif"].includes(value.type)
      ),
  });

  const formik = useFormik({
    initialValues: {
      categoryName: "",
      authorName: "",
      category: "",
      type: "",
      videoLink: "",
      categoryImage: null,
    },
    validationSchema,
    onSubmit: (values) => {
      // Handle form submission here
      console.log("Form submitted:", values);
      //   onSubmit(values);
    },
  });

  const handleImageChange = (event) => {
    formik.setFieldValue("categoryImage", event.currentTarget.files[0]);
  };

  console.log(theme);

  return (
    <Modal
      open={isOpenEbookModal}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style} textAlign={"center"}>
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
          {isEditable ? "Edit" : "Create New User"}

          <span onClick={handleClose}>
            <CloseIcon />
          </span>
        </Typography>

        <Box>
          <form onSubmit={formik.handleSubmit} style={{ padding: "10px 0" }}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "start",
                marginBottom: "16px",
              }}
            >
              <Typography style={{ padding: "0 0 5px 0" }}>
                Book Image:
              </Typography>

              <Box sx={{ display: "flex", alignItems: "start" }}>
                <label htmlFor="categoryImage">
                  <IconButton
                    component="span"
                    sx={{
                      width: 80,
                      height: 120,
                      borderRadius: "20px",
                      background: theme?.palette?.grey[300],
                    }}
                  >
                    <AddIcon sx={{ width: 40, height: 40 }} />
                  </IconButton>
                </label>
                <input
                  type="file"
                  id="categoryImage"
                  name="categoryImage"
                  accept="image/*"
                  style={{ display: "none" }}
                  onChange={handleImageChange}
                />
              </Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "start",
              }}
            >
              <Typography style={{ padding: "0 0 5px 0" }}>
                Category Name:
              </Typography>

              <TextField
                fullWidth
                id="categoryName"
                name="categoryName"
                sx={{ marginTop: "0px" }}
                //   label="Category Name"
                size="small"
                variant="outlined"
                margin="normal"
                value={formik.values.categoryName}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={
                  formik.touched.categoryName &&
                  Boolean(formik.errors.categoryName)
                }
                helperText={
                  formik.touched.categoryName && formik.errors.categoryName
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
              <Typography style={{ padding: "0 0 5px 0" }}>
                Author Name:
              </Typography>
              <TextField
                fullWidth
                id="authorName"
                name="authorName"
                sx={{ marginTop: "0px" }}
                //   label="Author Name"
                variant="outlined"
                size="small"
                margin="normal"
                value={formik.values.authorName}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={
                  formik.touched.authorName && Boolean(formik.errors.authorName)
                }
                helperText={
                  formik.touched.authorName && formik.errors.authorName
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
              <Typography style={{ padding: "0 0 5px 0" }}>
                Category:
              </Typography>
              <FormControl
                sx={{ marginTop: "0px" }}
                fullWidth
                variant="outlined"
                margin="normal"
              >
                {/* <InputLabel htmlFor="category">Category</InputLabel> */}
                <Select
                  id="category"
                  size="small"
                  name="category"
                  //   label="Category"
                  value={formik.values.category}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={
                    formik.touched.category && Boolean(formik.errors.category)
                  }
                >
                  {categories.map((category) => (
                    <MenuItem key={category} value={category}>
                      {category}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "start",
              }}
            >
              <Typography style={{ padding: "0 0 5px 0" }}>Type :</Typography>
              <FormControl
                sx={{ marginTop: "0px" }}
                fullWidth
                variant="outlined"
                margin="normal"
              >
                {/* <InputLabel htmlFor="type">Type</InputLabel> */}
                <Select
                  id="type"
                  size="small"
                  name="type"
                  //   label="Type"
                  value={formik.values.type}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={formik.touched.type && Boolean(formik.errors.type)}
                >
                  {types.map((type) => (
                    <MenuItem key={type} value={type}>
                      {type}
                    </MenuItem>
                  ))}
                </Select>
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
                Video Link :
              </Typography>
              <TextField
                fullWidth
                id="videoLink"
                size="small"
                sx={{ marginTop: "0px" }}
                name="videoLink"
                label="Video Link"
                variant="outlined"
                margin="normal"
                value={formik.values.videoLink}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={
                  formik.touched.videoLink && Boolean(formik.errors.videoLink)
                }
                helperText={formik.touched.videoLink && formik.errors.videoLink}
              />
            </Box>

            <Button type="submit" variant="contained" color="primary">
              Add
            </Button>
          </form>
        </Box>
      </Box>
    </Modal>
  );
};

export default EbookModal;
