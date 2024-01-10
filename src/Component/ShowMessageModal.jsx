import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

import successImage from "../Assets/Images/successImage.svg"

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
};

export default function ShowsMessageModal({ message }) {
    const [isOpenMessageModal, setIsOpenMessageModal] = React.useState(false);
    const handleOpen = () => setIsOpenMessageModal(true);
    const handleClose = () => setIsOpenMessageModal(false);

    return (
        <div>
            <Button onClick={handleOpen}>Open modal</Button>
            <Modal
                open={isOpenMessageModal}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style} textAlign={"center"}>
                    {/* <Typography id="modal-modal-title" variant="h6" component="h2">
                        Text in a modal
                    </Typography> */}
                    <img src={successImage} alt="success" style={{ height: "100px", padding: "10px 0" }} />
                    <Typography fontSize={19} id="modal-modal-description" fontWeight={600} sx={{ mt: 2 }}>
                        {message || "record updated successfully!"}
                    </Typography>
                </Box>
            </Modal>
        </div>
    );
}