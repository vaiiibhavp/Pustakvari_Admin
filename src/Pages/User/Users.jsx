import { Box, Button, Container, Typography } from '@mui/material'
import React, { useState } from 'react'
import CommonTable from '../../Component/Table/Table'
import { AppStrings, colorCodes } from '../../Helper/Constant';
import { usersSuperAdminTablesColumn } from '../Utils/constant';
import UserModal from './UserModal';
import Searchbar from '../../Component/Searchbar';

const Users = () => {
    const [isUserModalOpen, setIsUserModalOpen] = useState(false)
    const [isEditable, setIsEditable] = useState({})


    const data = [
        { S: 1, User_Name: 'John Doe', Age: 25, Institute_user: false, City: 'New York', Contact: "01718173355", Email: "aibrahim@verizon.net", Last_Login: "07/05/2016", Account_created_on: "07/05/2016", status: false, deactivate: false },
        { S: 2, User_Name: 'lakhan dev', Age: 25, Institute_user: true, City: 'New York', Contact: "01718173355", Email: "aibrahim@verizon.net", Last_Login: "07/05/2016", Account_created_on: "07/05/2016", status: false, deactivate: false },
        // Add more rows as needed
    ];
    return (
        <Container maxWidth="xl">
            <Box pb={2} mx={1} sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>

                <Typography variant='h5'>Users</Typography>
                <Box sx={{ display: "flex", gap: 1 }}>
                    <Searchbar onSearch={(e) => console.log("hello", e)} />
                    <Button
                        variant='contained'

                        onClick={() => {
                            setIsEditable({});
                            setIsUserModalOpen(true)
                        }} > + {AppStrings?.Add_user}</Button>
                </Box>
            </Box>
            <CommonTable columns={usersSuperAdminTablesColumn} data={data} rowSelect={() => console.log("row selected")} editRecord={(e) => {
                setIsUserModalOpen(true);
                setIsEditable({ id: 1, name: "title" })
            }} showSubscription={() => console.log("show subscription")} />
            <UserModal isUserModalOpen={isUserModalOpen} setUserModalOpen={setIsUserModalOpen} isEditableRecord={isEditable} />
        </Container>
    )
}

export default Users
