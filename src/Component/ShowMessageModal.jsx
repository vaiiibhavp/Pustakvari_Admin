import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

import successImage from "../Assets/Images/successImage.svg"
import { ModalCSSStyle } from '../Helper/utils/ModalCss';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 360,
    borderRadius: "20px",
    bgcolor: 'background.paper',
    // border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    '&::-webkit-scrollbar': {
        width: '0px',
        padding: "10px 0"
    },
    '&::-webkit-scrollbar-thumb': {
        backgroundColor: '#888',
        borderRadius: '6px',
    },
    '&::-webkit-scrollbar-track': {
        backgroundColor: '#f1f1f1',
        borderRadius: '10px',
    },
    scrollbarWidth: 'thin',
    scrollbarColor: '#888 #f1f1f1', // For Firefox
};

export default function ShowsMessageModal({ isOpen, setIsOpen, message }) {
    const handleOpen = () => setIsOpen((prev) => ({ ...prev, showSuccessModal: false, message: "" }));
    const handleClose = () => setIsOpen((prev) => ({ ...prev, showSuccessModal: false, message: "" }));


    return (
        <div>
            <Modal
                open={isOpen}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={ModalCSSStyle} textAlign={"center"}>
                    <Box sx={{ width: "100%", display: "flex", justifyContent: "center" }}>

                        <img src={successImage} alt="success" style={{ height: "100px", padding: "10px 0" }} />
                    </Box>
                    <Typography pb={2} fontSize={19} id="modal-modal-description" fontWeight={600} sx={{ mt: 2 }}>
                        {message || "record updated successfully!"}
                    </Typography>
                </Box>
            </Modal>
        </div>
    );
}