import { Box, Button, Container, Typography } from '@mui/material'
import React from 'react'
import { QuizTablesColumn } from '../Utils/constant'
import CommonTable from '../../Component/Table/Table'
import { AppStrings, colorCodes } from '../../Helper/Constant'
import { useNavigate } from 'react-router-dom'
import Searchbar from '../../Component/Searchbar'


const Quiz = () => {
    const navigate = useNavigate();




    const data = [
        { Quiz_Name: 'John Doe', No_Of_questIon: "500 ebooks", Solved_by_No_of_users: "500", Duration: "Monthly" },
        { Quiz_Name: 'lakhan dev', No_Of_questIon: "500 ebooks", Solved_by_No_of_users: "500", Duration: "Monthly" },
        // Add more rows as needed
    ];
    return (
        <Container maxWidth="xl">
            <Box pb={2} mx={1} sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>

                <Typography variant='h5'>{AppStrings?.Quiz}</Typography>
                <Box sx={{ display: "flex", gap: 1 }}>
                    <Searchbar onSearch={(e) => console.log("hello", e)} />
                    <Button onClick={() => navigate("/createquize")} sx={{ background: colorCodes?.PRIMARY_COLOR, color: "#fff" }}>+{AppStrings?.add_quize}</Button>
                </Box>
            </Box>
            <CommonTable columns={QuizTablesColumn} data={data} rowSelect={() => console.log("row selected")} editRecord={(e) => console.log("e", e)} showSubscription={() => console.log("show subscription")} />
        </Container>
    )
}

export default Quiz
