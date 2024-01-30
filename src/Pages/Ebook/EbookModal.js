import React, { useEffect, useState } from "react";
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
import { AppStrings } from "../../Helper/Constant";
import { ModalCSSStyle } from "../../Helper/utils/ModalCss";
import useEbookApis from "../../Hooks/Ebook";
import useCategoryApis from "../../Hooks/Category";

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
  maxHeight: 500,
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

let categories = ["Category1", "Category2", "Category3"];
let types = ["Type1", "Type2", "Type3"];

const EbookModal = ({
  isOpenEbookModal,
  setIsOpenEbookModal,
  isEditableRecord,
}) => {
  const [dataState, setDataState] = useState({
    categories: [],
    types: [],
  });
  const { createBookRecord, updateBookRecord, getTypeBookList } =
    useEbookApis();
  const { getCateogoryList } = useCategoryApis();
  const theme = useTheme();
  let isEditable = isEditableRecord?.id ? true : false;

  const handleClose = () => setIsOpenEbookModal(false);
  const validationSchema = Yup.object({
    category: Yup.string().required("Category name is required"),
    authorName: Yup.string().required("Author name is required"),
    category: Yup.string().required("Category is required"),
    type: Yup.string().required("Type is required"),
    videoLink: Yup.string()
      .url("Invalid URL")
      .required("Video link is required"),
    bookImage: Yup.mixed()
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
      category: "",
      authorName: "",
      category: "",
      bookType: "",
      videoLink: "",
      bookImage: null,
    },
    validationSchema,
    onSubmit: (values) => {
      if (isEditableRecord) {
        console.log("edit ", values);
      } else {
        console.log("created", values);
      }
    },
  });

  const handleImageChange = (event) => {
    formik.setFieldValue("bookImage", event.currentTarget.files[0]);
  };

  useEffect(() => {
    getCateogoryList()
      .then((res) => {
        setDataState((prev) => ({ ...prev, categories: res.data || [] }));
      })
      .catch((err) => {
        console.log(err);
      });
    getTypeBookList()
      .then((res) => {
        setDataState((prev) => ({ ...prev, types: res.data || [] }));
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <Modal
      open={isOpenEbookModal}
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
          {isEditable ? "Edit E-book" : AppStrings?.Add_new_e_book}

          <span onClick={handleClose}>
            <CloseIcon sx={{ color: theme?.palette.grey[400] }} />
          </span>
        </Typography>

        <Box>
          <form onSubmit={formik.handleSubmit} style={{ padding: "10px 0" }}>
            <Box sx={{ display: "flex", gap: 3, width: "100%" }}>
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

                <Box sx={{ display: "flex", alignItems: "start", gap: 4 }}>
                  <label htmlFor="bookImage">
                    <IconButton
                      component="span"
                      sx={{
                        width: 80,
                        height: 120,
                        borderRadius: "20px",
                        background: theme?.palette?.grey[200],
                      }}
                    >
                      <AddIcon
                        sx={{
                          width: 40,
                          height: 40,
                          color: theme.palette.grey[400],
                        }}
                      />
                    </IconButton>
                  </label>
                  <input
                    type="file"
                    id="bookImage"
                    name="bookImage"
                    accept="image/*"
                    style={{ display: "none" }}
                    onChange={handleImageChange}
                  />
                </Box>
              </Box>
              <Box
                fullWidth
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "start",
                }}
              >
                <Typography style={{ padding: "0 0 5px 0" }}>
                  Book Pdf:
                </Typography>
                <label htmlFor="bookImage">
                  <IconButton
                    component="span"
                    sx={{
                      width: 210,
                      height: 120,
                      borderRadius: "20px",
                      background: theme?.palette?.grey[200],
                      border: `1px dotted ${theme?.palette?.grey[800]}`,
                    }}
                  >
                    {/* <AddIcon sx={{ width: 40, height: 40 }} /> */}
                    <Typography
                      sx={{
                        fontSize: "14px",
                        color: theme?.palette?.grey[400],
                      }}
                    >
                      upload pdf
                    </Typography>
                  </IconButton>
                </label>
                <input
                  type="file"
                  id="bookImage"
                  name="bookImage"
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
                Book Name:
              </Typography>

              <TextField
                fullWidth
                id="category"
                name="category"
                sx={{ marginTop: "0px" }}
                //   label="Category Name"
                size="small"
                variant="outlined"
                margin="normal"
                value={formik.values.category}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={
                  formik.touched.category && Boolean(formik.errors.category)
                }
                helperText={formik.touched.category && formik.errors.category}
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
                  {dataState?.categories.map((category) => (
                    <MenuItem key={category?._id} value={category?._id}>
                      {category.categoryName}
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
                  id="bookType"
                  size="small"
                  name="bookType"
                  //   label="Type"
                  value={formik.values.bookType}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={
                    formik.touched.bookType && Boolean(formik.errors.bookType)
                  }
                >
                  {dataState?.types.map((type) => (
                    <MenuItem key={type?._id} value={type?._id}>
                      {type.ebookType}
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

            <Box px={3} mt={2}>
              <Button
                fullWidth
                type="submit"
                sx={{ borderRadius: "18px" }}
                variant="contained"
                color="primary"
              >
                Submit
              </Button>
            </Box>
          </form>
        </Box>
      </Box>
    </Modal>
  );
};

export default EbookModal;
