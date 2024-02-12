import { Box, Button, Card, Container, Grid, Typography, useTheme, IconButton } from '@mui/material';
import React, { useEffect, useState } from 'react'
import CommonTable from '../../Component/Table/Table';
import { InstitutesTablesColumn, InstitutesTablesUsers, usersSuperAdminTablesColumn } from '../Utils/constant';
import { useLocation, useNavigate } from "react-router-dom";
import { AppStrings, colorCodes } from '../../Helper/Constant';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import BorderColorOutlinedIcon from '@mui/icons-material/BorderColorOutlined';
// import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import useInstitues from '../../Hooks/Institutes';
import InstitutesUsers from './InstitutesUsers';
import InstituteModal from './InstituteModal';
import ShowsMessageModal from '../../Component/ShowMessageModal';
import { accoundCreatedDate } from '../../Helper/utils/formatTime';
import DeleteModal from '../../Component/DeleteModal';
import { toast } from 'react-toastify';

const InstitutesDetail = () => {
    const [isInstituteModalOpen, setIsInstituteModalOpen] = useState(false);
    const [isEditable, setIsEditable] = useState({});
    const [instiDetail, setInstiDetail] = useState({
        detail: {}
    })

    const [takeDeleteConfirmationOpen, setTakeDeleteConfirmation] = useState(false)
    const [dataState, setDataState] = useState({
        showSuccessModal: false,
        message: "",
        render: false
    });
    const navigate = useNavigate();
    const theme = useTheme()

    const { getInstituteRecordDetail, deleteInstituteRecord } = useInstitues();

    const { state } = useLocation();
    console.log(state, "data ");

    useEffect(() => {
        if (state?._id) {
            getInstituteRecordDetail(state?._id).then((res) => {
                setInstiDetail((prev) => ({ ...prev, detail: res.body }))
            }).catch((error) => {
                console.log(error);
            })
        }
    }, [])



    let { instituteDetail, instituteInfo
    } = instiDetail.detail || {};



    const onRemoveHandler = () => {
        if (instituteDetail?._id) {
            deleteInstituteRecord(instituteDetail?._id).then((res) => {
                if (res.status === 200) {
                    console.log(res);
                    toast.dismiss();
                    toast.success(res.message, { autoClose: 1000 })
                    setTakeDeleteConfirmation(false);
                    setTimeout(() => {
                        navigate("/Institute")
                    }, 2000);
                }

            }).catch((error) => {
                console.log(error);
            })
        }
    }




    return (
        <Container maxWidth="xl" >
            <Box mb={3}>
                <Button boxShadow={2} sx={{ background: "#fff", color: "black", borderRadius: "15px", padding: "5px 20px 5px 12px" }} onClick={() => navigate(-1)}> <IconButton sx={{ margin: "0px" }}><ArrowBackIosIcon size="small" color={theme?.palette?.grey[800]} sx={{ fontSize: "14px", color: theme?.palette?.grey[800] }} /></IconButton>{AppStrings?.back}</Button>
            </Box>

            <Grid container spacing={3}>
                <Grid item xs={12} md={3} lg={3} pb={3}>
                    <Box pb={2} >
                        <Card boxShadow={2} sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", padding: "20px 10px" }}>
                            <img src={instituteDetail?.instituteImage ? instituteDetail?.instituteImage : "https://www.orchidfoundation.info/sites/default/files/2020-08/Jaipur-National-University-.jpg"} alt="" style={{ width: "150px", height: "150px", borderRadius: "50%", marginBottom: "10px" }} />
                            <Typography sx={{ fontWeight: "600" }}>
                                {instituteDetail?.instituteName}
                            </Typography>
                        </Card>
                    </Box>


                    <Box boxShadow={2} px={2} py={2} borderRadius={1} sx={{ background: "#fff" }}>
                        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                            <Typography sx={{ fontWeight: "600" }}>Details</Typography>
                            <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
                                <Button

                                    onClick={() => {
                                        setIsEditable(instituteDetail);
                                        setIsInstituteModalOpen(true);
                                    }}

                                    sx={{

                                        background: theme.palette?.primary?.lighter,
                                        color: theme.palette?.primary.main,
                                        '&.active': {
                                            color: 'text.primary',
                                            bgcolor: 'action.selected',
                                            fontWeight: 'fontWeightBold',
                                        },
                                    }}  ><BorderColorOutlinedIcon sx={{ fontSize: "16px" }} /></Button>
                                <Button sx={{

                                    background: theme.palette?.secondary?.lighter,
                                    color: theme.palette?.secondary.main,
                                    '&.active': {
                                        color: 'text.primary',
                                        bgcolor: 'action.selected',
                                        fontWeight: 'fontWeightBold',
                                    },
                                }} onClick={() => {
                                    setTakeDeleteConfirmation(true)
                                }} ><DeleteOutlineOutlinedIcon sx={{ fontSize: "16px" }} /></Button>
                            </Box>
                        </Box>
                        <Box py={3}>

                            <Typography sx={{ display: "flex", flexDirection: "column", pb: 1 }}>{AppStrings?.email} : <span style={{ color: theme?.palette?.grey[500] }}>{instituteDetail?.emailId}</span></Typography>
                            <Typography sx={{ display: "flex", flexDirection: "column", pb: 1 }}>{AppStrings?.contact_no} : <span style={{ color: theme?.palette?.grey[500] }}>{instituteDetail?.mobileNo}</span></Typography>
                            <Typography sx={{ display: "flex", flexDirection: "column", pb: 1 }}>{AppStrings?.Account_created_on} : <span style={{ color: theme?.palette?.grey[500] }}>{accoundCreatedDate(instituteDetail?.created_at)}</span></Typography>
                            <Typography sx={{ display: "flex", flexDirection: "column", pb: 1 }}>{AppStrings?.status} : <span style={{
                                background: !instituteDetail?.is_active ? theme.palette?.secondary?.lighter : theme.palette?.grey[400],
                                color: !instituteDetail?.is_active ? theme.palette?.secondary.main : theme.palette.grey[500],
                                width: "30%",
                                textAlign: "center",
                                borderRadius: "20px",
                                fontSize: "13px",
                                fontWeight: "bold",
                                padding: "3px 5px"
                            }}>{!instituteDetail?.is_active ? "Active" : " Deactive "}</span></Typography>
                            <Typography sx={{ display: "flex", flexDirection: "column", pb: 1 }}>{AppStrings?.total_user} : <span style={{ color: theme?.palette?.grey[500] }}>{instituteDetail?.studentCount}</span></Typography>
                        </Box>
                    </Box>
                </Grid>
                <Grid item xs={12} md={9} lg={9}>
                    <Box p={1} mb={2} fontWeight={600} sx={{ background: "#fff" }}>{AppStrings?.institute_users}</Box>
                    <InstitutesUsers InstituteUserData={[]} />
                </Grid>
            </Grid>


            <InstituteModal
                isInstituteModalOpen={isInstituteModalOpen}
                setIsInstituteModalOpen={setIsInstituteModalOpen}
                isEditableRecord={isEditable}
                setDetroyExistRecord={setIsEditable}
                setParentState={setDataState}
            />

            <ShowsMessageModal isOpen={dataState.showSuccessModal} setIsOpen={setDataState} message={dataState?.message} />

            <DeleteModal
                message={"Are you sure  you want to delete the institute record?"}
                onCancelDeleteHandler={() => {
                    setTakeDeleteConfirmation(false);
                }}
                onDeleteHandler={() => {
                    onRemoveHandler();
                }}
                open={takeDeleteConfirmationOpen} setIsOpen={setTakeDeleteConfirmation} />
        </Container>
    )
}

export default InstitutesDetail
