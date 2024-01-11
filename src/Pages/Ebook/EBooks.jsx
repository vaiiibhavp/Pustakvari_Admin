import { Box, Button, Container, Typography } from '@mui/material'
import React, { useState } from 'react'
import { ebooksTablesColumn } from '../Utils/constant'
import CommonTable from '../../Component/Table/Table'
import { AppStrings, colorCodes } from '../../Helper/Constant'
import EbookModal from './EbookModal'

const EBooks = () => {

    const [isOpenEbookModal, setIsOpenEbookModal] = useState(false);
    const [isEditable, setIsEditable] = useState({});


    return (
        <Container maxWidth="xl">
            <Box pb={2} mx={1} sx={{ display: "flex", flexDirection: "column", justifyContent: "space-between" }}>

                <Typography variant='h5' pb={1}>{AppStrings?.e_books}</Typography>
                <Box display={"flex"} sx={{ justifyContent: "space-between" }}>
                    <Box>
                        <Button sx={{ background: colorCodes.SECONDARY_COLOR, color: "#fff", marginRight: "10px" }}>{AppStrings?.all_notification}</Button>
                        <Button sx={{ background: "#fffffff", border: `1px solid ${colorCodes?.GRAY_SHAD_400}`, color: colorCodes?.GRAY_SHAD_400 }}>{AppStrings?.created_notification}</Button>
                    </Box>
                    <Box>
                        <Button onClick={() => {
                            setIsEditable({});
                            setIsOpenEbookModal(true);
                        }} sx={{ background: colorCodes?.PRIMARY_COLOR, color: "#fff" }}>+{AppStrings?.add_e_book}</Button>
                    </Box>
                </Box>
            </Box>
            <CommonTable columns={ebooksTablesColumn} data={[]} rowSelect={() => console.log("row selected")} editRecord={(e) => {

                setIsEditable({ id: 1 });
                setIsOpenEbookModal(true);

            }} showSubscription={() => console.log("show subscription")} />
            <EbookModal isOpenEbookModal={isOpenEbookModal}
                setIsOpenEbookModal={setIsOpenEbookModal}
                isEditableRecord={isEditable} />
        </Container>
    )
}

export default EBooks
