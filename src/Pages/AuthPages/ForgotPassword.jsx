import React from 'react';
// Packages
import { useFormik } from 'formik';
import * as Yup from 'yup';

// Components
import { TextField, Button, Typography, Container, CssBaseline, Grid } from '@mui/material';

// Contants
import { AppStrings, colorCodes } from '../../Helper/Constant';
import useAuthApis from '../../Hooks/Auth';

const ForgotPasswordForm = () => {
   const {forgotPassword} = useAuthApis()
    const formik = useFormik({
        initialValues: {
            emailId: '',
        },
        validationSchema: Yup.object({
            emailId: Yup.string().email('Invalid email address').required('Required'),
        }),
        onSubmit: (values) => {
            forgotPassword(values).then((res)=> {
            console.log(res,"response")
            }).catch((err)=> {
                console.error(err)
            })
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
                                id="emailId"
                                size='small'
                                name="emailId"
                                placeholder={AppStrings?.email_Id}
                                // label="Email"
                                type="text"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.emailId}
                                error={formik.touched.emailId && Boolean(formik.errors.emailId)}
                                helperText={formik.touched.emailId && formik.errors.emailId}
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
