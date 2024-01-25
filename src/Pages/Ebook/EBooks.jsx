import { Box, Button, Container, Typography } from '@mui/material'
import React, { useState } from 'react'
import { ebooksTablesColumn } from '../Utils/constant'
import CommonTable from '../../Component/Table/Table'
import { AppStrings, colorCodes } from '../../Helper/Constant'
import EbookModal from './EbookModal'
import CategoryPopover from './CategoryPopover'
import CategoryModal from './CategoryModal'
import Searchbar from '../../Component/Searchbar'

const EBooks = () => {

    const [isOpenEbookModal, setIsOpenEbookModal] = useState(false);
    const [isCatgoryModalOpen, setIsCategoryModalOpen] = useState(false)
    const [isCategoryEditRecord, setIscatgoryEditRecord] = useState({})
    const [isEditable, setIsEditable] = useState({});

    const [isPopOver, setIsPopOver] = useState(null);

    const handleOpenCategory = (event) => {
        setIsPopOver(event.currentTarget);
    };

    const handleClose = () => {
        setIsPopOver(null);
    };

    const open = Boolean(isPopOver);
    const id = open ? 'simple-popover' : undefined;

    const data = [
        {
            S: 1,
            E_book_Name: "Siddhartha",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTz5N9rMzWE_vpTIaApKr7KP6NnbaJBfXiGBg&usqp=CAU",
            Category: "Horror",
            Author: "Fiction",
            Type: "Fiction",
        },
        {
            S: 2,
            img: "https://aliabdaal.com/wp-content/uploads/2023/01/Atomic-Habits.jpg",
            E_book_Name: "The Count of Monte Cristo",
            Category: "True Crime",
            Author: "Daisy-Mae Cameron",
            Type: "Non-Fiction",
        },
        {
            S: 3,
            img: "https://aliabdaal.com/wp-content/uploads/2023/01/Atomic-Habits.jpg",
            E_book_Name: "Atomic habit",
            Category: "insired",
            Author: "me",
            Type: "good",
        },

    ]


    return (
        <Container maxWidth="xl">
            <Box pb={2} mx={1} sx={{ display: "flex", flexDirection: "column", justifyContent: "space-between" }}>

                <Typography variant='h5' pb={1}>{AppStrings?.e_books}</Typography>
                <Box display={"flex"} sx={{ justifyContent: "space-between" }}>
                    <Box>
                        <Button sx={{ background: colorCodes.SECONDARY_COLOR, color: "#fff", marginRight: "10px" }}>{AppStrings?.all_e_books}</Button>
                        <Button aria-describedby={id} onClick={handleOpenCategory} sx={{ background: "#fffffff", border: `1px solid ${colorCodes?.GRAY_SHAD_400}`, color: colorCodes?.GRAY_SHAD_400 }}>{AppStrings?.all_categories}</Button>
                    </Box>
                    <Box sx={{ display: "flex", gap: 1 }}>
                        <Searchbar onSearch={(e) => console.log("hello", e)} />
                        <Button onClick={() => {
                            setIsEditable({});
                            setIsOpenEbookModal(true);
                        }} variant="contained">+{AppStrings?.add_e_book}</Button>
                    </Box>
                </Box>
            </Box>
            <CommonTable columns={ebooksTablesColumn} data={data || []} rowSelect={() => console.log("row selected")} editRecord={(e) => {

                setIsEditable({ id: 1 });
                setIsOpenEbookModal(true);

            }} showSubscription={() => console.log("show subscription")} />
            <EbookModal isOpenEbookModal={isOpenEbookModal}
                setIsOpenEbookModal={setIsOpenEbookModal}
                isEditableRecord={isEditable} />

            <CategoryPopover id={id} open={open} isPopOver={isPopOver} handleClose={handleClose}
                onEditHandler={() => {
                    setIscatgoryEditRecord({ id: 2 })
                    setIsCategoryModalOpen(true);
                    setIsPopOver(null)
                }} handleOpenCategoryModal={() => {
                    setIscatgoryEditRecord({})
                    setIsCategoryModalOpen(true);
                    setIsPopOver(null)
                }} />
            <CategoryModal isOpenCategoryModal={isCatgoryModalOpen}
                setIsOpenCategoryModal={setIsCategoryModalOpen}
                isEditableRecord={isCategoryEditRecord} />
        </Container>
    )
}

export default EBooks
