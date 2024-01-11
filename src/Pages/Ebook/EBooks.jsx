import { Box, Button, Container, Typography } from '@mui/material'
import React from 'react'
import { ebooksTablesColumn } from '../Utils/constant'
import CommonTable from '../../Component/Table/Table'
import { AppStrings, colorCodes } from '../../Helper/Constant'

const EBooks = () => {
    return (
        <Container maxWidth="xl">
            <Box pb={2} mx={1} sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>

                <Typography variant='h5'>{AppStrings?.e_books}</Typography>
                <Box>
                    <Button sx={{ background: colorCodes?.PRIMARY_COLOR, color: "#fff" }}>+{AppStrings?.add_e_book}</Button>
                </Box>
            </Box>
            <CommonTable columns={ebooksTablesColumn} data={[]} rowSelect={() => console.log("row selected")} editRecord={(e) => console.log("e", e)} showSubscription={() => console.log("show subscription")} />
        </Container>
    )
}

export default EBooks
