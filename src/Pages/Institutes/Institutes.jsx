import { Box, Button, Container, Typography } from '@mui/material'
import React, { useState } from 'react'
import { InstitutesTablesColumn } from '../Utils/constant'
import CommonTable from '../../Component/Table/Table'
import { AppStrings, colorCodes } from '../../Helper/Constant'
import InstituteModal from './InstituteModal'
import { useNavigate } from 'react-router-dom'
import Searchbar from '../../Component/Searchbar'

const Institutes = () => {

    const [isInstituteModalOpen, setIsInstituteModalOpen] = useState(false)
    const [isEditable, setIsEditable] = useState({})
    const navigate = useNavigate();

    const data = [
        { S: 1, Institute_Name: 'Savitribai phule instituts', Contact: "9834291623", Email: "Savitribai@gmail.com", Account_created_on: "25/12/2023", Status: "yes", No_Of_questIon: "500 ebooks", Solved_by_No_of_users: "500", Duration: "Monthly" },
        { S: 2, Institute_Name: 'Moze Instituts', Contact: "9834291623", Email: "gmoze@gmail.com", Account_created_on: "25/12/2023", Status: "yes", No_Of_questIon: "500 ebooks", Solved_by_No_of_users: "500", Duration: "Monthly" },
        // Add more rows as needed
    ];
    return (
        <Container maxWidth="xl">
            <Box pb={2} mx={1} sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>

                <Typography variant='h5'>{AppStrings?.Institutes}</Typography>
                <Box sx={{ display: "flex", gap: 1 }}>
                    <Searchbar onSearch={(e) => console.log("hello", e)} />
                    <Button onClick={() => {
                        setIsEditable({});
                        setIsInstituteModalOpen(true)
                    }} sx={{ background: colorCodes?.PRIMARY_COLOR, color: "#fff" }}>+{AppStrings?.add_institute}</Button>
                </Box>
            </Box>
            <CommonTable onSeeDetail={() => {
                navigate(`/institute/${1}`)
            }
            } columns={InstitutesTablesColumn} data={data || []} rowSelect={() => console.log("row selected")} editRecord={(e) => {
                setIsInstituteModalOpen(true);
                setIsEditable({ id: 1, name: "title" })
            }} showSubscription={() => console.log("show subscription")} />

            <InstituteModal isInstituteModalOpen={isInstituteModalOpen} setIsInstituteModalOpen={setIsInstituteModalOpen} isEditableRecord={isEditable} />
        </Container>
    )
}

export default Institutes
