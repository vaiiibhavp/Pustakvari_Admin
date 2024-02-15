import React, { useState, useEffect } from "react";
import { Modal, Button, TextField, Box, Typography, FormControl, OutlinedInput, InputAdornment, IconButton, Divider, useTheme } from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";
import { CropSquareSharp, Visibility, VisibilityOff } from "@mui/icons-material";
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import camereImage from "../../Assets/Images/camera.svg"
import { useSelector } from "react-redux";
import useUserTypeName from "../../Hooks/IsCheckAuth";
import UseUserApis from "../../Hooks/User";
import { toast } from "react-toastify";

const validationSchema = Yup.object().shape({
    first_name: Yup.string().required("Required"),
    last_name: Yup.string().required("Required"),
    // ... other validation rules
});

const ProfileModal = ({ profile, setProfile }) => {
    const { updateUser } = UseUserApis();
    const [file, setFile] = useState();
    const [userProfile, setUserProfile] = useState();
    const [isLoading, setIsloading] = useState(false);
    const { AuthUser: { user } } = useSelector((state) => state)

    const InstituteAdmin = useUserTypeName();


    const [isChangingPassword, setIsChangingPassword] = useState(true);




    let theme = useTheme()

    const handleChange = (e) => {
        const data = {
            profile_picture: e?.target?.files[0],
        };
        setIsloading(true);
        // updateProfilePicture(data).then((res) => {
        //     if (res) {
        //         setIsloading(false);
        //     }
        // });
        setFile(URL.createObjectURL(e.target.files[0]));
    };

    useEffect(() => {
        // getUserProfileImage().then((res) => setUserProfile(res.user));
    }, [isLoading]);



    const handleCancel = () => {
        setProfile(false);
        setIsChangingPassword(!isChangingPassword);
    };

    const handleOk = () => {
        setProfile(false);
        setIsChangingPassword(!isChangingPassword);
    };

    const validationSchema = Yup.object().shape({
        fullName: Yup.string().required('Full Name is required'),
        emailId: Yup.string().email('Invalid email format').required('Email is required'),
        password: InstituteAdmin ? Yup.string().min(8, 'Password must be at least 8 characters').required('Password is required') : Yup.string(),
        confirmNewPassword: InstituteAdmin ? Yup.string()
            .oneOf([Yup.ref('password'), null], 'Passwords must match')
            .required('Confirm Password is required') : Yup.string(),
    });

    const initialValues = {
        fullName: user?.userInfo?.fullName || user?.userInfo?.instituteName || '',
        emailId: user?.userInfo?.emailId || user?.userInfo?.emailId || '',
        password: '',
        confirmNewPassword: '',
    };

    const formik = useFormik({
        initialValues,
        validationSchema,
        enableReinitialize: true,
        onSubmit: (values) => {
            delete values.confirmNewPassword;
            if (!InstituteAdmin) {
                delete values.password;
                console.log(values);
            } else {

                updateUser(values, user?.userInfo?._id).then((res) => {
                    if (res.status === 200) {
                        toast.dismiss();
                        toast.success(res.message, { autoClose: 2000 })
                    } else {
                        toast.warning(res.message, { autoClose: 2000 })
                    }
                })


            }
        },
    });

    const handlePasswordVisibility = (field) => {
        formik.setFieldValue(field, !formik.values[field]);
    };

    const handleImageChange = (event) => {
        formik.setFieldValue("userImage", event.currentTarget.files[0]);
    };

    let { values, errors } = formik;
    //    useEffect(() => {
    //         if (isEditableRecord?.instituteImage) {
    //             fetchImageAsFile(isEditableRecord?.userImage).then((res) => {
    //                 if (res) {
    //                     formik.setFieldValue("userImage", res);
    //                 }
    //             });
    //         }
    //     }, [isEditableRecord?.userImage]);

    const handleTogglePasswordChange = () => {
        setIsChangingPassword(!isChangingPassword);
    };


    console.log(errors, values, user?.userInfo, "errorr");




    return (
        <Modal open={profile} onClose={handleCancel}>
            <Box
                sx={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    backgroundColor: "red",
                    transform: "translate(-50%, -50%)",
                    width: 360,
                    borderRadius: "20px",
                    bgcolor: "background.paper",
                    boxShadow: 24,
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
                    scrollbarWidth: "none",
                    scrollbarColor: "#888 #f1f1f1",
                }}
            >

                <Box sx={{ width: "100%" }}>
                    <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", p: 2 }}>
                        <Typography sx={{ fontWeight: "600" }}>{"Profile"}</Typography>
                        <Button onClick={handleCancel} sx={{ color: theme.palette.grey[700] }}><CloseOutlinedIcon /></Button>
                    </Box>


                    <form onSubmit={formik.handleSubmit}>

                        <Box
                            sx={{
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "start",
                                marginBottom: "16px",
                            }}
                        >


                            <Box sx={{ width: "100%", display: "flex", alignItems: "start", justifyContent: "center" }}>
                                <label htmlFor="userImage">
                                    {values?.userImage ? (
                                        <img
                                            src={URL.createObjectURL(values.userImage)}
                                            alt="imageeCover"
                                            style={{
                                                width: "120px",
                                                height: "120px",

                                                borderRadius: "50%",
                                                objectFit: "cover",
                                            }}
                                        />
                                    ) : (
                                        <IconButton
                                            component="span"
                                            sx={{
                                                width: 120,
                                                height: 120,
                                                borderRadius: "50%",

                                                position: "relative",
                                                background: theme?.palette?.grey[200],
                                            }}
                                        >
                                            <Box sx={{ position: "absolute", right: "2px", bottom: "10px" }}>
                                                <img src={camereImage} alt="" style={{ width: "30px", height: "30px" }} />
                                            </Box>
                                        </IconButton>
                                    )}
                                </label>
                                <input
                                    type="file"
                                    id="userImage"
                                    name="userImage"
                                    accept="image/*"
                                    style={{ display: "none" }}
                                    onChange={handleImageChange}
                                />
                            </Box>
                        </Box>
                        <Divider />


                        <Box px={2} pt={2}>
                            <Typography style={{ padding: "0 0 5px 0" }}>
                                Full Name:
                            </Typography>
                            <TextField
                                // label="Full Name"
                                size="small"
                                sx={{ marginTop: "0px" }}
                                fullWidth
                                margin="normal"
                                variant="outlined"
                                {...formik.getFieldProps('fullName')}
                                error={formik.touched.fullName && Boolean(formik.errors.fullName)}
                                helperText={formik.touched.fullName && formik.errors.fullName}
                            />
                            <Typography style={{ padding: "0 0 5px 0" }}>
                                Email:
                            </Typography>

                            <TextField
                                // label="Email"
                                fullWidth
                                sx={{ marginTop: "0px" }}
                                size="small"
                                margin="normal"
                                variant="outlined"
                                {...formik.getFieldProps('emailId')}
                                error={formik.touched.emailId && Boolean(formik.errors.emailId)}
                                helperText={formik.touched.emailId && formik.errors.emailId}
                            />
                        </Box>



                        <Box px={2}>
                            {InstituteAdmin && <>

                                {isChangingPassword ? <Typography onClick={handleTogglePasswordChange} sx={{ fontSize: "12px", textDecoration: "underline", cursor: "pointer", color: theme.palette.primary.main }}>Change Password</Typography> : <Box>
                                    <Typography onClick={handleTogglePasswordChange} sx={{ fontSize: "12px", textDecoration: "underline", cursor: "pointer", color: theme.palette.primary.main }}>Cancel</Typography>
                                    <TextField
                                        // label="New Password"
                                        fullWidth
                                        size="small"
                                        margin="normal"
                                        variant="outlined"
                                        type={formik.values.password ? 'text' : 'password'}
                                        {...formik.getFieldProps('password')}
                                        InputProps={{
                                            endAdornment: (
                                                <InputAdornment position="end">
                                                    <IconButton onClick={() => handlePasswordVisibility('password')} edge="end">
                                                        {formik.values.password ? <Visibility /> : <VisibilityOff />}
                                                    </IconButton>
                                                </InputAdornment>
                                            ),
                                        }}
                                        error={formik.touched.password && Boolean(formik.errors.password)}
                                        helperText={formik.touched.password && formik.errors.password}
                                    />
                                    <TextField
                                        // label="Confirm New Password"
                                        fullWidth
                                        size="small"
                                        margin="normal"
                                        variant="outlined"
                                        type={formik.values.confirmNewPassword ? 'text' : 'password'}
                                        {...formik.getFieldProps('confirmNewPassword')}
                                        InputProps={{
                                            endAdornment: (
                                                <InputAdornment position="end">
                                                    <IconButton onClick={() => handlePasswordVisibility('confirmNewPassword')} edge="end">
                                                        {formik.values.confirmNewPassword ? <Visibility /> : <VisibilityOff />}
                                                    </IconButton>
                                                </InputAdornment>
                                            ),
                                        }}
                                        error={formik.touched.confirmNewPassword && Boolean(formik.errors.confirmNewPassword)}
                                        helperText={formik.touched.confirmNewPassword && formik.errors.confirmNewPassword}
                                    />
                                </Box>
                                }</>


                            }</Box>



                        <Box px={3} mt={2} pb={2}>
                            {!InstituteAdmin || !isChangingPassword && <Button sx={{ borderRadius: "18px" }} fullWidth type="submit" variant="contained" color="primary">
                                Submit
                            </Button>}

                        </Box>
                    </form>
                </Box>
            </Box>
        </Modal >
    );
};

export default ProfileModal;
