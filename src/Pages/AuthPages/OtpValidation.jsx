import React, { useState } from 'react';
import { Box, Button, Container, CssBaseline, Grid, TextField, Typography } from "@mui/material"
import { AppStrings, colorCodes } from '../../Helper/Constant';



const OtpValidation = () => {

    const [otp, setOtp] = useState(['', '', '', '']);

    const handleOtpChange = (value, index) => {
        const newOtp = [...otp];
        newOtp[index] = value;
        setOtp(newOtp);
    };


    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div>
                <Typography color={colorCodes?.GRAY_SHAD_500} fontWeight={600} component="h1" variant="h5" textAlign={"center"}>
                    {AppStrings?.Enter_OTP}
                </Typography>
                <Typography color={colorCodes?.GRAY_SHAD_200} textAlign={"center"} pb={3}>
                    {AppStrings?.otp_statement} lakhannemane@gmail.com
                </Typography>
                <Grid container spacing={1} mx={2} pb={2} >
                    {otp.map((digit, index) => (
                        <Box key={index} mx={2}>
                            <TextField

                                variant="outlined"
                                size="small"
                                value={digit}
                                onChange={(e) => handleOtpChange(e.target.value, index)}
                                inputProps={{
                                    maxLength: 1,
                                    style: {
                                        textAlign: 'center',
                                        width: "25px"
                                    },
                                }}
                            />
                        </Box>
                    ))}
                </Grid>
                <Typography color={colorCodes?.SECONDARY_COLOR} textAlign={"center"} pb={3}>
                    {AppStrings?.resend_otp}
                </Typography>
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
            </div>
        </Container>

    );
};

export default OtpValidation;
