import React, { useState } from 'react';
// import { makeStyles } from '@mui/material/styles';
import { Grid, TextField } from "@mui/material"

// const useStyles = makeStyles((theme) => ({
//     otpInput: {
//         display: 'flex',
//         justifyContent: 'space-between',
//         width: '200px', // Adjust the width as needed
//     },
//     input: {
//         textAlign: 'center',
//     },
// }));

const OtpValidation = () => {

    const [otp, setOtp] = useState(['', '', '', '']);

    const handleOtpChange = (value, index) => {
        const newOtp = [...otp];
        newOtp[index] = value;
        setOtp(newOtp);
    };

    return (
        <Grid container spacing={1} >
            {otp.map((digit, index) => (
                <Grid item key={index}>
                    <TextField

                        variant="outlined"
                        size="small"
                        value={digit}
                        onChange={(e) => handleOtpChange(e.target.value, index)}
                        inputProps={{
                            maxLength: 1,
                            style: {
                                textAlign: 'center',
                            },
                        }}
                    />
                </Grid>
            ))}
        </Grid>
    );
};

export default OtpValidation;
