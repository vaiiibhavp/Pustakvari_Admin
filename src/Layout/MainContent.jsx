import React, { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { Box } from '@mui/material'
import Header from './Header/Header'
import Sidebar from './Sidebar/Sidebar'


const MainContent = () => {


    // const navigate = useNavigate();
    // const isUser = false;
    // useEffect(() => {
    //     if (isUser) {
    //         navigate("/login");
    //     }
    // }, []);
    return (
        <Box sx={{ display: "flex" }}>
            {/* <Sidebar /> */}
            <Box className="main_content" sx={{ width: "100%" }}>
                <Header />
                <Box sx={{ width: "100%", paddingTop: "110px", background: "#F9FAFB" }}>

                    <Outlet />
                </Box>
            </Box>
        </Box>
    )
}

export default MainContent