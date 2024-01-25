import React, { useState } from 'react';
// Packages
import { useFormik } from 'formik';
import * as Yup from 'yup';

// Components
import { TextField, Button, Typography, Container, CssBaseline, Grid, InputAdornment, IconButton } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';

// Contants
import { AppStrings, colorCodes } from '../../Helper/Constant';



const ResetPasswordForm = () => {
    const [showNewPassword, setShowNewPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const formik = useFormik({
        initialValues: {
            newPassword: '',
            confirmPassword: '',
        },
        validationSchema: Yup.object({
            newPassword: Yup.string().required('Required'),
            confirmPassword: Yup.string()
                .oneOf([Yup.ref('newPassword'), null], 'Passwords must match')
                .required('Required'),
        }),
        onSubmit: (values) => {
            // You can handle reset password submission here
            console.log('Form values:', values);
        },
    });

    const handleToggleNewPassword = () => {
        setShowNewPassword(!showNewPassword);
    };

    const handleToggleConfirmPassword = () => {
        setShowConfirmPassword(!showConfirmPassword);
    };

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div>
                <Typography color={colorCodes?.GRAY_SHAD_500} fontWeight={600} component="h1" variant="h5" textAlign={"center"}>
                    {AppStrings?.reset_title}
                </Typography>
                <Typography color={colorCodes?.GRAY_SHAD_200} textAlign={"center"} pb={3}>
                    {AppStrings?.reset_statement}
                </Typography>
                <form onSubmit={formik.handleSubmit}>
                    <Grid container pb={3} spacing={2}>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                variant="outlined"
                                id="newPassword"
                                name="newPassword"
                                size='small'
                                placeholder={AppStrings?.password_placeholder}
                                // label="New Password"
                                type={showNewPassword ? 'text' : 'password'}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.newPassword}
                                error={formik.touched.newPassword && Boolean(formik.errors.newPassword)}
                                helperText={formik.touched.newPassword && formik.errors.newPassword}
                                InputProps={{
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            <IconButton
                                                aria-label="toggle new password visibility"
                                                onClick={handleToggleNewPassword}
                                                edge="end"
                                            >
                                                {showNewPassword ? <VisibilityOff /> : <Visibility />}
                                            </IconButton>
                                        </InputAdornment>
                                    ),
                                }}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                variant="outlined"
                                id="confirmPassword"
                                name="confirmPassword"
                                size='small'
                                placeholder={AppStrings?.confirm_password_placeholder}

                                // label="Confirm Password"
                                type={showConfirmPassword ? 'text' : 'password'}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.confirmPassword}
                                error={formik.touched.confirmPassword && Boolean(formik.errors.confirmPassword)}
                                helperText={formik.touched.confirmPassword && formik.errors.confirmPassword}
                                InputProps={{
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            <IconButton
                                                aria-label="toggle confirm password visibility"
                                                onClick={handleToggleConfirmPassword}
                                                edge="end"
                                            >
                                                {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                                            </IconButton>
                                        </InputAdornment>
                                    ),
                                }}
                            />
                        </Grid>
                    </Grid>
                    <Button sx={{
                        background: colorCodes.PRIMARY_COLOR, '&:hover': {
                            background: colorCodes.PRIMARY_COLOR_400,
                        },
                        '&:active': {
                            background: colorCodes.PRIMARY_COLOR_400,
                        },
                    }} type="submit" fullWidth variant="contained" color="primary">
                        {AppStrings?.reset_password}
                    </Button>
                </form>
            </div>
        </Container>
    );
};

export default ResetPasswordForm;
