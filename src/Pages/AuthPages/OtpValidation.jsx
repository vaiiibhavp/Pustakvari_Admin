import React, { useState } from "react";
import {
    Box,
    Button,
    Container,
    CssBaseline,
    Grid,
    TextField,
    Typography,
    useTheme,
} from "@mui/material";
import { AppStrings, colorCodes } from "../../Helper/Constant";
import { useLocation, useNavigate } from "react-router-dom";
import useAuthApis from "../../Hooks/Auth";
import { toast } from "react-toastify";

const OtpValidation = () => {
    const { state } = useLocation();
    const [otp, setOtp] = useState(["", "", "", ""]);
    let theme = useTheme();
    const navigate = useNavigate();

    const { verifyOtp, forgotPassword } = useAuthApis();

    const handleOtpChange = (value, index) => {
        const newOtp = [...otp];
        newOtp[index] = value;
        setOtp(newOtp);
    };

    const handleValidateOtp = () => {
        if (otp) {
            let data = {
                emailId: state,
                otp: otp.join('')
            }
            verifyOtp(data).then((res) => {
                if (res.status === 200) {
                    toast.dismiss();
                    toast.success(res.message, { autoClose: 2000 })
                    setTimeout(() => {
                        navigate('/reset', { state: state })
                    }, 1000);
                } else {
                    toast.dismiss();
                    toast.warning("Something went wrong", { autoClose: 2000 })
                }

            }).catch((err) => {
                console.log(err);
            })
            console.log("data", data);
        }
    }

    const resendOtp = () => {

        forgotPassword({ emailId: state }).then((res) => {
            if (res.status === 200) {
                toast.dismiss();
                toast.success(res.message, { autoClose: 2000 })

            } else {
                toast.dismiss();
                toast.warning(res.message, { autoClose: 2000 })
            }
        }).catch((err) => {
            console.error(err)
        })
    }



    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div>
                <Typography
                    color={colorCodes?.GRAY_SHAD_500}
                    fontWeight={600}
                    component="h1"
                    variant="h5"
                    textAlign={"center"}
                >
                    {AppStrings?.Enter_OTP}
                </Typography>
                <Typography
                    color={colorCodes?.GRAY_SHAD_200}
                    textAlign={"center"}
                    pb={3}
                >
                    {AppStrings?.otp_statement}{" "}
                    <span style={{ color: theme?.palette?.secondary?.light }}>
                        {state && state}
                    </span>
                </Typography>
                <Grid container spacing={1} mx={2} pb={2}>
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
                                        textAlign: "center",
                                        width: "25px",
                                    },
                                }}
                            />
                        </Box>
                    ))}
                </Grid>
                <Typography
                    onClick={resendOtp}
                    color={colorCodes?.SECONDARY_COLOR}
                    sx={{ cursor: "pointer" }}
                    textAlign={"center"}
                    pb={3}
                >
                    {AppStrings?.resend_otp}
                </Typography>
                <Button
                    onClick={handleValidateOtp}
                    sx={{
                        background: colorCodes.PRIMARY_COLOR,
                        "&:hover": {
                            background: colorCodes.PRIMARY_COLOR_400,
                        },
                        "&:active": {
                            background: colorCodes.PRIMARY_COLOR_400,
                        },
                    }}
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                >
                    {AppStrings?.send_OTP}
                </Button>
            </div>
        </Container>
    );
};

export default OtpValidation;
