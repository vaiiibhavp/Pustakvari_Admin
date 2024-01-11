import { Box, Button, Container, Typography } from '@mui/material'
import React, { useState } from 'react'
import { InstitutesTablesColumn } from '../Utils/constant'
import CommonTable from '../../Component/Table/Table'
import { AppStrings, colorCodes } from '../../Helper/Constant'
import InstituteModal from './InstituteModal'

const Institutes = () => {

    const [isInstituteModalOpen, setIsInstituteModalOpen] = useState(false)
    const [isEditable, setIsEditable] = useState({})
    return (
        <Container maxWidth="xl">
            <Box pb={2} mx={1} sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>

                <Typography variant='h5'>{AppStrings?.Institutes}</Typography>
                <Box>
                    <Button onClick={() => {
                        setIsEditable({});
                        setIsInstituteModalOpen(true)
                    }} sx={{ background: colorCodes?.PRIMARY_COLOR, color: "#fff" }}>+{AppStrings?.add_intitutes}</Button>
                </Box>
            </Box>
            <CommonTable columns={InstitutesTablesColumn} data={[]} rowSelect={() => console.log("row selected")} editRecord={(e) => {
                setIsInstituteModalOpen(true);
                setIsEditable({ id: 1, name: "title" })
            }} showSubscription={() => console.log("show subscription")} />

            <InstituteModal isInstituteModalOpen={isInstituteModalOpen} setIsInstituteModalOpen={setIsInstituteModalOpen} isEditableRecord={isEditable} />
        </Container>
    )
}

export default Institutes
