import { Box, Button, Container, Typography } from '@mui/material'
import React from 'react'
import { InstitutesTablesColumn } from '../Utils/constant'
import CommonTable from '../../Component/Table/Table'
import { AppStrings, colorCodes } from '../../Helper/Constant'

const Institutes = () => {
    return (
        <Container maxWidth="xl">
            <Box pb={2} mx={1} sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>

                <Typography variant='h5'>{AppStrings?.Institutes}</Typography>
                <Box>
                    <Button sx={{ background: colorCodes?.PRIMARY_COLOR, color: "#fff" }}>+{AppStrings?.add_intitutes}</Button>
                </Box>
            </Box>
            <CommonTable columns={InstitutesTablesColumn} data={[]} rowSelect={() => console.log("row selected")} editRecord={(e) => console.log("e", e)} showSubscription={() => console.log("show subscription")} />
        </Container>
    )
}

export default Institutes
