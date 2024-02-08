import React, { useState } from 'react';



// Components
import { TextField, Button, Typography, Container, CssBaseline, Grid, InputAdornment, IconButton } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';

// Constants
import { AppStrings, colorCodes } from '../../Helper/Constant';

// Package
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import useAuthApis from '../../Hooks/Auth';
import { useDispatch } from 'react-redux';
import { LogIn } from '../../Store/Slice/AuthSlice';
import { toast } from 'react-toastify';



const LoginForm = () => {
    const [showPassword, setShowPassword] = useState(false);
    const { userLogin } = useAuthApis();
    const dispatch = useDispatch();

    const navigate = useNavigate()

    const formik = useFormik({
        initialValues: {
            emailId: '',
            password: '',
        },
        validationSchema: Yup.object({
            emailId: Yup.string().email('Invalid email address').required('Email Id is required'),
            password: Yup.string().required('Password is required'),
        }),
        onSubmit: (values) => {
            // You can handle form submission here
            userLogin(values).then((res) => {
                console.log(res, "res login");
                if (res.status === 200) {
                    localStorage.setItem('user_token', res?.body?.token)
                    localStorage.setItem('user', JSON.stringify(res?.body))
                    dispatch(LogIn(res.body))
                    navigate("/Dashboard")
                    toast.dismiss();
                    toast.success(res.message, { autoClose: 2000 })

                } else {
                    toast.dismiss();
                    toast.warning(res.message, { autoClose: 2000 })
                }
            }).catch((error) => {
                toast.dismiss();
                toast.warning("Something went wrong", { autoClose: 2000 })
                console.log(error);
            })
        },
    });

    const handleTogglePassword = () => {
        setShowPassword(!showPassword);
    };

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div>
                <Typography color={colorCodes?.GRAY_SHAD_500} fontWeight={600} component="h1" variant="h5" textAlign={"center"}>
                    {AppStrings?.login}
                </Typography>
                <Typography color={colorCodes?.GRAY_SHAD_200} textAlign={"center"} pb={3}>
                    {AppStrings?.login_statement}
                </Typography>
                <form onSubmit={formik.handleSubmit}>
                    <Grid container py={1} spacing={2}>
                        <Grid item xs={12}>
                            <TextField
                                // sx={{ background: colorCodes?.GRAY_SHAD_100 }}
                                fullWidth
                                variant="outlined"
                                id="emailId"
                                placeholder={AppStrings?.email_Id}
                                size="small"
                                name="emailId"
                                type="text"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.emailId}
                                error={formik.touched.emailId && Boolean(formik.errors.emailId)}
                                helperText={formik.touched.emailId && formik.errors.emailId}
                                InputProps={{
                                    // sx: {
                                    //     background: colorCodes?.GRAY_SHAD_100,
                                    // },
                                }}

                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                variant="outlined"
                                id="password"
                                placeholder={AppStrings?.password}
                                name="password"
                                size="small"
                                type={showPassword ? 'text' : 'password'}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.password}
                                error={formik.touched.password && Boolean(formik.errors.password)}
                                helperText={formik.touched.password && formik.errors.password}
                                InputProps={{
                                    // sx: {
                                    //     background: colorCodes?.GRAY_SHAD_100,
                                    // },
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            <IconButton
                                                aria-label="toggle password visibility"
                                                onClick={handleTogglePassword}
                                                edge="end"
                                            >
                                                {showPassword ? <VisibilityOff sx={{ background: "#00000" }} /> : <Visibility />}
                                            </IconButton>
                                        </InputAdornment>
                                    ),

                                }}
                            />
                        </Grid>
                    </Grid>

                    <Typography color={colorCodes?.SECONDARY_COLOR} pb={3} sx={{ cursor: "pointer" }} onClick={() => navigate("/forgot")}>
                        {AppStrings?.forgot_password}
                    </Typography>
                    <Button sx={{
                        background: colorCodes.PRIMARY_COLOR, '&:hover': {
                            background: colorCodes.PRIMARY_COLOR_400,
                        },
                        '&:active': {
                            background: colorCodes.PRIMARY_COLOR_400,
                        },
                    }} type="submit" fullWidth variant="contained" color="primary">
                        {AppStrings?.login}
                    </Button>
                </form>
            </div>
        </Container>
    );
};

export default LoginForm;
