import React from 'react';
// Packages
import { useFormik } from 'formik';
import * as Yup from 'yup';

// Components
import { TextField, Button, Typography, Container, CssBaseline, Grid } from '@mui/material';

// Contants
import { AppStrings, colorCodes } from '../../Helper/Constant';

const ForgotPasswordForm = () => {
    const formik = useFormik({
        initialValues: {
            email: '',
        },
        validationSchema: Yup.object({
            email: Yup.string().email('Invalid email address').required('Required'),
        }),
        onSubmit: (values) => {
            // You can handle forgot password submission here
            console.log('Form values:', values);
        },
    });

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div>
                <Typography color={colorCodes?.GRAY_SHAD_500} fontWeight={600} component="h1" variant="h5" textAlign={"center"}>
                    {AppStrings?.forgot_password}
                </Typography>
                <Typography color={colorCodes?.GRAY_SHAD_200} textAlign={"center"} pb={3}>
                    {AppStrings?.forgot_statement}
                </Typography>
                <form onSubmit={formik.handleSubmit}>
                    <Grid container pb={3} spacing={2}>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                variant="outlined"
                                id="email"
                                size='small'
                                name="email"
                                placeholder={AppStrings?.email_Id}
                                // label="Email"
                                type="text"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.email}
                                error={formik.touched.email && Boolean(formik.errors.email)}
                                helperText={formik.touched.email && formik.errors.email}
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
                        {AppStrings?.send_OTP}
                    </Button>
                </form>
            </div>
        </Container>
    );
};

export default ForgotPasswordForm;
