import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Divider } from "@mui/material";
import { colorCodes } from "../Helper/Constant";
import { ModalCSSStyle } from "../Helper/utils/ModalCss";

const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 380,
    borderRadius: "20px",
    bgcolor: "background.paper",
    // border: '2px solid #000',
    boxShadow: 24,
    // p: 4,
    maxHeight: 500,
    overflowY: "auto",
    "&::-webkit-scrollbar": {
        width: "0px",
        padding: "10px 0",
    },
    "&::-webkit-scrollbar-thumb": {
        backgroundColor: "#888",
        borderRadius: "6px",
    },
    "&::-webkit-scrollbar-track": {
        backgroundColor: "#f1f1f1",
        borderRadius: "10px",
    },
    scrollbarWidth: "thin",
    scrollbarColor: "#888 #f1f1f1", // For Firefox
};

export default function DeleteModal({
    message,
    onCancelDeleteHandler,
    onDeleteHandler,
    open, setIsOpen
}) {

    const handleClose = () => setIsOpen(false);

    return (


        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style} textAlign={"center"}>
                {/* <Typography id="modal-modal-title" variant="h6" component="h2">
                        Text in a modal
                    </Typography> */}
                <Typography
                    p={2}
                    fontSize={19}
                    id="modal-modal-description"
                    fontWeight={600}
                    sx={{ mt: 2 }}
                >
                    {message || "Are you sure want to delete the record!"}
                </Typography>
                <Divider></Divider>
                <Box p={2} gap={2} textAlign={"end"}>
                    <Button
                        className=""
                        sx={{ marginRight: "10px", color: colorCodes?.GRAY_SHAD_300 }}
                        onClick={onCancelDeleteHandler}
                    >
                        Cancel
                    </Button>
                    <Button
                        sx={{
                            background: colorCodes?.PRIMARY_COLOR,
                            color: colorCodes?.GRAY_SHAD_500,
                        }}
                        onClick={onDeleteHandler}
                    >
                        Delete
                    </Button>
                </Box>
            </Box>
        </Modal>

    );
}
