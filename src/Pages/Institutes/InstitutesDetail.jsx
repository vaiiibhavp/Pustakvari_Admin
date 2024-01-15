import { Box, Button, Card, Container, Grid, Typography, useTheme, IconButton } from '@mui/material';
import React from 'react'
import CommonTable from '../../Component/Table/Table';
import { InstitutesTablesColumn, InstitutesTablesUsers, usersSuperAdminTablesColumn } from '../Utils/constant';
import { useNavigate } from "react-router-dom";
import { AppStrings, colorCodes } from '../../Helper/Constant';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import BorderColorOutlinedIcon from '@mui/icons-material/BorderColorOutlined';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';

const InstitutesDetail = () => {
    const navigate = useNavigate();
    const theme = useTheme()
    const data = [
        { S: 1, User_Name: 'John Doe', Age: 25, Institute_user: false, City: 'New York', Contact: "01718173355", Email: "aibrahim@verizon.net", Last_Login: "07/05/2016", Account_created_on: "07/05/2016", status: false, deactivate: false, subscribe: true },
        { S: 2, User_Name: 'lakhan dev', Age: 25, Institute_user: true, City: 'New York', Contact: "01718173355", Email: "aibrahim@verizon.net", Last_Login: "07/05/2016", Account_created_on: "07/05/2016", status: false, deactivate: false, subscribe: false },
        // Add more rows as needed
    ];
    return (
        <Container maxWidth="xl" >
            <Box mb={3}>
                <Button shadow={2} sx={{ background: "#fff", color: "black", borderRadius: "15px", padding: "5px 20px 5px 2px" }} onClick={() => navigate(-1)}> <IconButton><KeyboardBackspaceIcon size="small" /></IconButton>Back</Button>
            </Box>

            <Grid container spacing={3}>
                <Grid item xs={12} md={3} lg={3}>
                    <Box pb={3}>
                        <Card sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", padding: "20px 10px" }}>
                            <img src="https://www.orchidfoundation.info/sites/default/files/2020-08/Jaipur-National-University-.jpg" alt="" style={{ width: "150px", height: "150px", borderRadius: "50%", marginBottom: "10px" }} />
                            <Typography>
                                BPHE sociaty Institute
                            </Typography>
                        </Card>
                    </Box>


                    <Box boxShadow={1} px={2} py={3} borderRadius={1} sx={{ background: theme.palette.grey[300] }}>
                        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                            <Typography>Detail</Typography>
                            <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
                                <Button sx={{

                                    background: theme.palette?.primary?.lighter,
                                    color: theme.palette?.primary.main,
                                    '&.active': {
                                        color: 'text.primary',
                                        bgcolor: 'action.selected',
                                        fontWeight: 'fontWeightBold',
                                    },
                                }}  ><BorderColorOutlinedIcon sx={{ fontSize: "16px" }} /></Button>
                                <Button sx={{

                                    background: theme.palette?.secondary?.lighter,
                                    color: theme.palette?.secondary.main,
                                    '&.active': {
                                        color: 'text.primary',
                                        bgcolor: 'action.selected',
                                        fontWeight: 'fontWeightBold',
                                    },
                                }} ><DeleteOutlineOutlinedIcon sx={{ fontSize: "16px" }} /></Button>
                            </Box>
                        </Box>
                        <Box py={3}>

                            <Typography sx={{ display: "flex", flexDirection: "column", pb: 1 }}>Emails: <span style={{ color: theme?.palette?.grey[500] }}>mankind@gmail.com</span></Typography>
                            <Typography sx={{ display: "flex", flexDirection: "column", pb: 1 }}>Mobile no: <span style={{ color: theme?.palette?.grey[500] }}>mankind@gmail.com</span></Typography>
                            <Typography sx={{ display: "flex", flexDirection: "column", pb: 1 }}>Account Created on: <span style={{ color: theme?.palette?.grey[500] }}>mankind@gmail.com</span></Typography>
                            <Typography sx={{ display: "flex", flexDirection: "column", pb: 1 }}>Status: <span style={{
                                background: theme.palette?.secondary?.lighter,
                                color: theme.palette?.secondary.main,
                                width: "30%",
                                textAlign: "center",
                                borderRadius: "20px",
                                fontWeight: "bold",
                                padding: "3px"
                            }}>Active</span></Typography>
                            <Typography sx={{ display: "flex", flexDirection: "column", pb: 1 }}>Total Users:: <span style={{ color: theme?.palette?.grey[500] }}>246</span></Typography>
                        </Box>
                    </Box>
                </Grid>
                <Grid item xs={12} md={9} lg={9}>
                    <Box p={1} mb={2} fontWeight={600} sx={{ background: "#fff" }}>{AppStrings?.institute_users}</Box>
                    <CommonTable onSeeDetail={() => {
                        console.log("hello");
                    }
                    } columns={InstitutesTablesUsers} data={data || []} rowSelect={() => console.log("row selected")} editRecord={(e) => {

                    }} showSubscription={() => console.log("show subscription")} />
                </Grid>
            </Grid>


        </Container>
    )
}

export default InstitutesDetail
