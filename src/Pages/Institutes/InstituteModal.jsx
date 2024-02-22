import React, { useEffect } from 'react'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import AddIcon from "@mui/icons-material/Add";
import {
    TextField,
    Button,
    InputAdornment,
    IconButton,
    FormControl,

    OutlinedInput,
    Modal,
    Box,
    Typography,
    useTheme,
} from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import CloseIcon from "@mui/icons-material/Close";
import { ModalCSSStyle } from '../../Helper/utils/ModalCss';
import useInstitues from '../../Hooks/Institutes';

import { AppStrings } from '../../Helper/Constant';
import useFileGenrator from '../../Hooks/ImageFileConverter';
import { generatePassword } from '../../Helper/utils/Common';
import { toast } from 'react-toastify';
import UseUserApis from '../../Hooks/User';


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 360,
    minHeight: 500,
    overflowY: "auto",
    borderRadius: "20px",
    bgcolor: 'background.paper',
    // border: '2px solid #000',
    boxShadow: 24,
    p: 2,
    '&::-webkit-scrollbar': {
        width: '0px',
        padding: "10px 0"
    },
    '&::-webkit-scrollbar-thumb': {
        backgroundColor: '#888',
        borderRadius: '6px',
    },
    '&::-webkit-scrollbar-track': {
        backgroundColor: '#f1f1f1',
        borderRadius: '10px',
    },
    scrollbarWidth: 'thin',
    scrollbarColor: '#888 #f1f1f1', // For Firefox
};

const InstituteModal = ({ isInstituteModalOpen, setIsInstituteModalOpen, setParentState, isEditableRecord, setDetroyExistRecord }) => {

    const theme = useTheme();
    let isEditable = isEditableRecord?.id ? true : false

    const { createInstituteRecord,
        updateInstituteRecord
    } = useInstitues()


    const { createUser } = UseUserApis();



    const { fetchImageAsFile } = useFileGenrator();


    const handleClose = () => {
        setDetroyExistRecord({});
        setIsInstituteModalOpen(false)
    };
    const initialValues = {
        instituteName: isEditableRecord?.instituteName ?? '',
        emailId: isEditableRecord?.emailId ?? '',
        mobileNo: isEditableRecord?.mobileNo ?? '',
        password: '',
        instituteImage: null
    };

    const validationSchema = Yup.object().shape({
        instituteName: Yup.string().required('Full name is required'),
        emailId: Yup.string().matches(/^[^\s@]+@[^\s@]+\.(?:com)$/, 'Invalid email address').required('Email is required'),
        mobileNo: Yup.string().matches(/^[0-9]{10}$/, "Contact number must be 10 digits").required('Contact number is required'),
        instituteImage: Yup.mixed()
            .required("Institute image is required")
            .test(
                "fileSize",
                "File size is too large",
                (value) => value && value.size <= 2000000
            ) // 2MB limit
            .test(
                "fileType",
                "Invalid file type",
                (value) =>
                    value && value.type && value.type.startsWith("image/")
            ),
        // password: !isEditableRecord && Yup.string().required('Password is required'),
        // confirmPassword: !isEditableRecord && Yup.string()
        //     .oneOf([Yup.ref('password'), null], 'Passwords must match')
        //     .required('Confirm password is required'),
    });

    const formik = useFormik({
        initialValues,
        validationSchema,
        enableReinitialize: true,
        onSubmit: (values, { resetForm }) => {

            if (isEditableRecord?._id) {
                delete values.confirmPassword;
                updateInstituteRecord(values, isEditableRecord?._id).then((res) => {

                    if (res.status === 200) {
                        setParentState((prev) => ({ ...prev, showSuccessModal: true, message: res.message }))
                        setDetroyExistRecord({});
                    }
                    setIsInstituteModalOpen(false)
                })
            } else {
                if (!values.instituteImage) {
                    formik.setFieldError("instituteImage", "Intitute image is required")
                } else {

                    delete values.confirmPassword;

                    let data = {
                        ...values, userType: "INSTITUTE"
                    }

                    createUser(data).then((res) => {
                        if (res.status === 200) {
                            setParentState((prev) => ({ ...prev, showSuccessModal: true, message: res?.data.message }))

                        } else {
                            toast.dismiss();
                            // formik.setFieldError("emailId", res.data.message)
                            toast.warning(res.data.message, { autoClose: 2000 })
                        }
                        setIsInstituteModalOpen(false)
                        resetForm();
                    }).catch((errr) => {
                        console.log(
                            errr, "errro"
                        );
                    })
                }
            }
        },
    });


    const handleClickShowPassword = () => {
        formik.setFieldValue('passwordVisible', !formik.values.passwordVisible);
    };

    const handleClickShowConfirmPassword = () => {
        formik.setFieldValue('confirmPasswordVisible', !formik.values.confirmPasswordVisible);
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };
    const handleImageChange = (event) => {
        formik.setFieldValue("instituteImage", event.currentTarget.files[0]);
    };
    let { values, errors } = formik;




    useEffect(() => {
        if (isEditableRecord?.instituteImage) {
            fetchImageAsFile(isEditableRecord?.instituteImage).then((res) => {
                if (res) {
                    formik.setFieldValue("instituteImage", res);
                }
            });
        }
    }, [isEditableRecord?.instituteImage]);


    useEffect(() => {
        let newPassword = generatePassword();
        formik.setFieldValue("password", newPassword)
    }, [isInstituteModalOpen])


    return (
        <Modal
            open={isInstituteModalOpen}
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
                    {isEditableRecord?._id ? "Edit institute" : "Create New Institute"}

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
                            marginBottom: "16px",
                        }}
                    >
                        <Typography style={{ padding: "0 0 5px 0" }}>
                            Institute Image:
                        </Typography>

                        <Box sx={{ display: "flex", alignItems: "start" }}>
                            <label htmlFor="instituteImage">
                                {values?.instituteImage ? (
                                    <img
                                        src={URL.createObjectURL(values.instituteImage)}
                                        alt="imageeCover"
                                        style={{
                                            width: "80px",
                                            height: "120px",
                                            borderRadius: "20px",
                                            objectFit: "cover",
                                        }}
                                    />
                                ) : (
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
                                )}
                            </label>
                            <input
                                type="file"
                                id="instituteImage"
                                name="instituteImage"
                                accept="image/*"
                                style={{ display: "none" }}
                                onChange={handleImageChange}
                            />

                        </Box>
                        {formik.touched.instituteImage && formik.errors.instituteImage && <Typography color="error" sx={{ fontSize: "12px", pl: 1 }}>{formik.errors.instituteImage}</Typography>}

                    </Box>
                    <Box sx={{ display: "flex", flexDirection: "column", alignItems: "start" }}>

                        <Typography style={{ padding: "0 0 5px 0" }}>{AppStrings?.institute_name}:</Typography>
                        <TextField
                            fullWidth
                            id="instituteName"
                            sx={{ marginTop: "0px" }}
                            name="instituteName"
                            // label="Full Name"
                            size='small'
                            placeholder={AppStrings?.institute_name}
                            variant="outlined"
                            margin="normal"
                            value={formik.values.instituteName}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.instituteName && Boolean(formik.errors.instituteName)}
                            helperText={formik.touched.instituteName && formik.errors.instituteName}
                        />
                    </Box>

                    <Box sx={{ display: "flex", flexDirection: "column", alignItems: "start" }}>

                        <Typography style={{ padding: "0 0 5px 0" }}>{AppStrings?.email}:</Typography>

                        <TextField
                            fullWidth
                            id="emailId"
                            name="emailId"
                            // label="Email"
                            sx={{ marginTop: "0px" }}
                            size='small'
                            variant="outlined"
                            margin="normal"
                            placeholder={AppStrings?.email}
                            type="email"
                            value={formik.values.emailId}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.emailId && Boolean(formik.errors.emailId)}
                            helperText={formik.touched.emailId && formik.errors.emailId}
                        />
                    </Box>

                    <Box sx={{ display: "flex", flexDirection: "column", alignItems: "start" }}>

                        <Typography style={{ padding: "0 0 5px 0" }}>{AppStrings?.contact_no}:</Typography>

                        <TextField
                            fullWidth
                            id="mobileNo"
                            name="mobileNo"
                            size='small'
                            sx={{ marginTop: "0px" }}
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

                    {/* <Box sx={{ display: "flex", flexDirection: "column", alignItems: "start" }}>

                        <Typography style={{ padding: "0 0 5px 0" }}>{AppStrings?.password}:</Typography>

                        <FormControl fullWidth variant="outlined" margin="normal" sx={{ marginTop: "0px" }}>
                            <OutlinedInput
                                id="password"
                                name="password"
                                type={formik.values.passwordVisible ? 'text' : 'password'}
                                value={formik.values.password}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                placeholder={AppStrings?.password}
                                error={formik.touched.password && Boolean(formik.errors.password)}
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                            edge="end"
                                            onClick={handleClickShowPassword}
                                            onMouseDown={handleMouseDownPassword}

                                        >
                                            {formik.values.passwordVisible ? <Visibility /> : <VisibilityOff />}
                                        </IconButton>
                                    </InputAdornment>
                                }
                                // label="Password"
                                size='small'
                            />
                        </FormControl>

                    </Box>

                    <Box sx={{ display: "flex", flexDirection: "column", alignItems: "start" }}>

                        <Typography style={{ padding: "0 0 5px 0" }}>{AppStrings?.confirmPassword}:</Typography>

                        <FormControl fullWidth variant="outlined" margin="normal" sx={{ marginTop: "0px" }}>

                            <OutlinedInput
                                id="confirmPassword"
                                name="confirmPassword"
                                placeholder={AppStrings?.confirmPassword}
                                type={formik.values.confirmPasswordVisible ? 'text' : 'password'}
                                value={formik.values.confirmPassword}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                error={formik.touched.confirmPassword && Boolean(formik.errors.confirmPassword)}
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                            edge="end"
                                            onClick={handleClickShowConfirmPassword}
                                            onMouseDown={handleMouseDownPassword}
                                        >
                                            {formik.values.confirmPasswordVisible ? <Visibility /> : <VisibilityOff />}
                                        </IconButton>
                                    </InputAdornment>
                                }
                                // label="Confirm Password"
                                size="small"
                            />
                        </FormControl>
                    </Box> */}

                    <Box px={3}>


                        <Button fullWidth type="submit" variant="contained" color="primary" mt={2} sx={{ marginTop: "15px", borderRadius: "18px" }}>
                            {isEditableRecord?._id ? "Update" : "Submit"}
                        </Button>
                    </Box>
                </form>
            </Box>

        </Modal>
    )
}

export default InstituteModal
