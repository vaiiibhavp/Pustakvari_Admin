import React from 'react';

// Components
import { Box, Grid } from '@mui/material';
import AuthImageView from '../Component/AuthImageView';

// Package
import { Outlet } from 'react-router-dom';

const AuthLayout = () => {
    return (
        <Grid container spacing={2}>

            <Grid item xs={6} sx={{ margin: 0 }}>
                <AuthImageView />
            </Grid>

            {/* Content Section (50%) */}
            <Grid item xs={6} sx={{ margin: 0 }}>
                <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "center", height: "100%" }}>
                    <Outlet />
                </Box>
            </Grid>
        </Grid>
    );
};

export default AuthLayout;
