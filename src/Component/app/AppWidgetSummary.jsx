// @mui
import { alpha, styled, createTheme } from '@mui/material/styles';
import { Card, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { colorCodes } from '../../Helper/Constant';

// ----------------------------------------------------------------------




export default function AppWidgetSummary({ item, total, icon, color = 'primary', sx, ...other }) {
    // Create a Material-UI theme
    const theme = createTheme();



    return (
        <Card
            sx={{
                p: 2,
                boxShadow: (theme) => theme.customShadows.z1,
                textAlign: 'center',
                display: "flex",
                alignItems: "center",
                // color: (theme) => theme.palette[color].darker,
                // bgcolor: (theme) => theme.palette[color].lighter,
                ...sx,
            }}
            {...other}
        >
            <img src={item.img} alt="" style={{ width: "38px", height: "38px" }} />
            <Box sx={{ display: "flex", flexDirection: "column", paddingLeft: "10px" }}>

                <Typography variant="h3" textAlign={"start"}>{item?.total}</Typography>
                <Typography color={colorCodes?.GRAY_SHAD_100} fontWeight={400} variant="subtitle2" sx={{ opacity: 0.72 }}>
                    {item?.title}
                </Typography>

            </Box>

        </Card>
    );
}
