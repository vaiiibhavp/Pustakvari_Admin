import { Box, Button, Container, Typography } from '@mui/material'
import React from 'react'
import CommonTable from '../../Component/Table/Table'
import { AppStrings, colorCodes } from '../../Helper/Constant';
import { usersSuperAdminTablesColumn } from '../Utils/constant';

const Users = () => {


    const data = [
        { User_Name: 'John Doe', Age: 25, Institute_user: false, City: 'New York', Contact: "01718173355", Email: "aibrahim@verizon.net", Last_Login: "07/05/2016", Account_created_on: "07/05/2016", status: false, deactivate: false },
        { Name: 'lakhan dev', Age: 25, Institute_user: true, City: 'New York', Contact: "01718173355", Email: "aibrahim@verizon.net", Last_Login: "07/05/2016", Account_created_on: "07/05/2016", status: false, deactivate: false },
        // Add more rows as needed
    ];
    return (
        <Container maxWidth="xl">
            <Box pb={2} mx={1} sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>

                <Typography variant='h5'>Users</Typography>
                <Box>
                    <Button sx={{ background: colorCodes?.PRIMARY_COLOR, color: colorCodes?.GRAY_SHAD_500 }}>{AppStrings?.Add_user}</Button>
                </Box>
            </Box>
            <CommonTable columns={usersSuperAdminTablesColumn} data={data} rowSelect={() => console.log("row selected")} editRecord={(e) => console.log("e", e)} showSubscription={() => console.log("show subscription")} />
        </Container>
    )
}

export default Users
