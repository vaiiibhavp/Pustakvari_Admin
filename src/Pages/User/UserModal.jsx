import React from 'react'
import { useFormik } from 'formik';
import * as Yup from 'yup';
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
} from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import CloseIcon from "@mui/icons-material/Close";


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 360,
    borderRadius: "20px",
    bgcolor: 'background.paper',
    // border: '2px solid #000',
    boxShadow: 24,
    p: 2,
};

const UserModal = ({ isUserModalOpen, setUserModalOpen, isEditableRecord }) => {

    let isEditable = isEditableRecord?.id ? true : false


    const handleClose = () => setUserModalOpen(false);
    const initialValues = {
        fullName: '',
        email: '',
        contactNumber: '',
        password: '',
        confirmPassword: '',
    };

    const validationSchema = Yup.object().shape({
        fullName: Yup.string().required('Full name is required'),
        email: Yup.string().email('Invalid email address').required('Email is required'),
        contactNumber: Yup.string().required('Contact number is required'),
        password: Yup.string().required('Password is required'),
        confirmPassword: Yup.string()
            .oneOf([Yup.ref('password'), null], 'Passwords must match')
            .required('Confirm password is required'),
    });

    const formik = useFormik({
        initialValues,
        validationSchema,
        onSubmit: (values) => {
            if (isEditable) {
                console.log("ediRecords", values);
            } else {
                console.log("adding result", values)
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

    return (
        <Modal
            open={isUserModalOpen}
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
                <form onSubmit={formik.handleSubmit} style={{ padding: "10px 0" }}>
                    <Box sx={{ display: "flex", flexDirection: "column", alignItems: "start" }}>

                        <Typography style={{ padding: "0 0 5px 0" }}>Full Name:</Typography>
                        <TextField
                            fullWidth
                            id="fullName"
                            sx={{ marginTop: "0px" }}
                            name="fullName"
                            // label="Full Name"
                            size='small'
                            placeholder='Full Name'
                            variant="outlined"
                            margin="normal"
                            value={formik.values.fullName}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.fullName && Boolean(formik.errors.fullName)}
                            helperText={formik.touched.fullName && formik.errors.fullName}
                        />
                    </Box>

                    <Box sx={{ display: "flex", flexDirection: "column", alignItems: "start" }}>

                        <Typography style={{ padding: "0 0 5px 0" }}>Email:</Typography>

                        <TextField
                            fullWidth
                            id="email"
                            name="email"
                            // label="Email"
                            sx={{ marginTop: "0px" }}
                            size='small'
                            variant="outlined"
                            margin="normal"
                            type="email"
                            value={formik.values.email}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.email && Boolean(formik.errors.email)}
                            helperText={formik.touched.email && formik.errors.email}
                        />
                    </Box>

                    <Box sx={{ display: "flex", flexDirection: "column", alignItems: "start" }}>

                        <Typography style={{ padding: "0 0 5px 0" }}>Contact:</Typography>

                        <TextField
                            fullWidth
                            id="contactNumber"
                            name="contactNumber"
                            size='small'
                            sx={{ marginTop: "0px" }}
                            // label="Contact Number"
                            variant="outlined"
                            margin="normal"
                            value={formik.values.contactNumber}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.contactNumber && Boolean(formik.errors.contactNumber)}
                            helperText={formik.touched.contactNumber && formik.errors.contactNumber}
                        />
                    </Box>

                    <Box sx={{ display: "flex", flexDirection: "column", alignItems: "start" }}>

                        <Typography style={{ padding: "0 0 5px 0" }}>Password:</Typography>

                        <FormControl fullWidth variant="outlined" margin="normal" sx={{ marginTop: "0px" }}>
                            <OutlinedInput
                                id="password"
                                name="password"
                                type={formik.values.passwordVisible ? 'text' : 'password'}
                                value={formik.values.password}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                error={formik.touched.password && Boolean(formik.errors.password)}
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                            edge="end"
                                            onClick={handleClickShowPassword}
                                            onMouseDown={handleMouseDownPassword}
                                            edge="end"
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

                        <Typography style={{ padding: "0 0 5px 0" }}>Confirm Password:</Typography>

                        <FormControl fullWidth variant="outlined" margin="normal" sx={{ marginTop: "0px" }}>

                            <OutlinedInput
                                id="confirmPassword"
                                name="confirmPassword"

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
                    </Box>



                    <Button type="submit" variant="contained" color="primary" mt={2} sx={{ marginTop: "15px" }}>
                        {isEditable ? "Update" : "Submit"}
                    </Button>
                </form>
            </Box>

        </Modal>
    )
}

export default UserModal
