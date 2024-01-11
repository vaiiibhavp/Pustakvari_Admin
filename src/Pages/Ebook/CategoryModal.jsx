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

const CategoryModal = ({
    isOpenCategoryModal,
    setIsOpenCategoryModal,
    isEditableRecord,
}) => {
    const theme = useTheme();
    let isEditable = isEditableRecord?.id ? true : false;

    const handleClose = () => setIsOpenCategoryModal(false);
    const validationSchema = Yup.object({
        categoryName: Yup.string().required("Category name is required"),
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
            open={isOpenCategoryModal}
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
                    <form onSubmit={formik.handleSubmit}>
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

                        <Button type="submit" variant="contained" color="primary">
                            Add
                        </Button>
                    </form>
                </Box>
            </Box>
        </Modal>
    );
};

export default CategoryModal;
