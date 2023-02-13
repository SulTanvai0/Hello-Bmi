import { Close, ContentCopy, Email, FacebookRounded, MapsUgc, Twitter, WhatsApp, } from '@mui/icons-material';
import { Box, Button, Modal, Typography } from '@mui/material';
import React, { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    borderRadius: '15px',
    boxShadow: 24,
    p: 1,

};
const SocialMediaModal = () => {
    const { MediaModal, setMediaModal } = useContext(AuthContext);
    return (
        <div>

            <Modal
                open={MediaModal}
                onClose={() => setMediaModal(false)}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >

                <Box sx={style} >
                    <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                        <Typography variant="p" sx={{ fontWeight: "bold" }}>Share with friends and family</Typography>
                        <Typography onClick={() => setMediaModal(false)}><Close /></Typography>
                    </Box>
                    <Box sx={{
                        display: "flex",
                        alignContent: "center",
                        justifyContent: "center"
                    }}>
                        <Box>
                            <Box m={3}>
                                <Button variant="outlined" p={3} sx={{ mb: "2" }} fullWidth >
                                    <FacebookRounded sx={{ color: "blue" }} my={1} />  &nbsp;
                                    FaceBook
                                </Button>
                            </Box>
                            <Box mx={3}>
                                <Button variant="outlined" p={3} fullWidth my={1}>
                                    <WhatsApp sx={{ color: "#40C351" }} my={1} />  &nbsp;
                                    WhatsApp
                                </Button>
                            </Box>
                            <Box m={3}>
                                <Button variant="outlined" p={3} fullWidth my={1}>
                                    <ContentCopy sx={{}} />  &nbsp;
                                    Copy Link
                                </Button>
                            </Box>
                        </Box >
                        <Box>
                            <Box m={3}>
                                <Button variant="outlined" p={3} fullWidth my={1}>
                                    <MapsUgc sx={{ color: "#D748B0" }} my={1} />  &nbsp;
                                    Messenger
                                </Button>
                            </Box>
                            <Box mx={2.5} >
                                <Button variant="outlined" p={3} my={1}>
                                    <Twitter sx={{ color: "#03A9F4" }} fullWidth />&nbsp;
                                    &nbsp;  Twitter &nbsp;&nbsp; &nbsp;
                                </Button>

                            </Box>
                            <Box m={3}>
                                <Button variant="outlined" p={3} fullWidth my={1}>
                                    <Email /> &nbsp;
                                    Email
                                </Button>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Modal>
        </div>
    );
};

export default SocialMediaModal;