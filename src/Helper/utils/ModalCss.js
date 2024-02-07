export const ModalCSSStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  backgroundColor: "red",
  transform: "translate(-50%, -50%)",
  width: 360,
  borderRadius: "20px",
  bgcolor: "background.paper",
  // border: '2px solid #000',
  boxShadow: 24,
  maxHeight: 500,
  overflowY: "auto",
  p: 2,
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
  scrollbarWidth: "none",
  scrollbarColor: "#888 #f1f1f1", // For Firefox
};
