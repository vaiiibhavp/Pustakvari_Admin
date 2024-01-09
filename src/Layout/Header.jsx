import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const Header = () => {

    const navigate = useNavigate();
    return (
        <Box>
            <AppBar sx={{ backgroundColor: 'white', color: "black" }}>
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1, cursor: "pointer" }} onClick={() => navigate("/")}>
                        logo
                    </Typography>
                    <Button color="inherit" onClick={() => navigate("/dashboard")} >DASHBOARD</Button>
                    <Button color="inherit" onClick={() => navigate("/createAds")}>CREATE ADS</Button>

                </Toolbar>
            </AppBar>
        </Box>
    )
}

export default Header