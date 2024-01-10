


import { useLocation } from 'react-router-dom';

// @mui
import { styled, alpha } from '@mui/material/styles';

import { Box, Link, Button, Drawer, Typography, Avatar, Stack } from '@mui/material';
import { superAdminMenus } from '../../Helper/Constant';
import NavSection from './SidebarNav';
import logoImage from "../../Assets/Images/logo.svg"
// mock

// hooks
// import useResponsive from '../../../hooks/useResponsive';
// components

// import Scrollbar from '../../../components/scrollbar';

//

// ----------------------------------------------------------------------

const NAV_WIDTH = 280;

const StyledAccount = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(2, 2.5),
    borderRadius: Number(theme.shape.borderRadius) * 1.5,
    backgroundColor: alpha(theme.palette.grey[500], 0.12),
}));

// ----------------------------------------------------------------------


export default function Sidebar() {
    const { pathname } = useLocation();

    // const isDesktop = useResponsive('up', 'lg');




    const renderContent = (
        <Box
            sx={{
                height: 1,
                '& .simplebar-content': { height: 1, display: 'flex', flexDirection: 'column' },
            }}
        >
            <Box sx={{ px: 2.5, py: 3, mb: 2, display: 'inline-flex', justifyContent: "center", alignItems: "center", width: "100%" }}>
                <img src={logoImage} alt="logo image" />
            </Box>


            <NavSection data={superAdminMenus} />

            <Box sx={{ flexGrow: 1 }} />

            <Box sx={{ px: 2.5, pb: 3, mt: 10 }}>
                <Stack alignItems="center" spacing={3} sx={{ pt: 5, borderRadius: 2, position: 'relative' }}>
                    {/* here is subscription detail buton */}
                </Stack>
            </Box>
        </Box>
    );

    return (
        <Box
            component="nav"
            sx={{
                flexShrink: { lg: 0 },
                width: { lg: NAV_WIDTH },
                background: "#ffffff"
            }}
        >

            <Drawer
                open
                variant="permanent"
                PaperProps={{
                    sx: {
                        width: NAV_WIDTH,
                        bgcolor: '#fffff',
                        borderRightStyle: 'dashed',
                    },
                }}
            >
                {renderContent}
            </Drawer>

        </Box>
    );
}