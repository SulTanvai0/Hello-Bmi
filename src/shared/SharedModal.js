import { Close } from '@mui/icons-material';
import { Box, Button, Modal, ThemeProvider, Typography } from '@mui/material';
import { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { btnTheme } from './Theme';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: { xs: '300', md: '500' },
    bgcolor: 'background.paper',
    borderRadius: '15px',
    boxShadow: 24,
    p: 1,
};

const SharedModal = () => {
    const { openModal, setOpenModal, setMediaModal, bmi } = useContext(AuthContext);
    return (
        <>
            <Modal
                open={openModal}
                onClose={() => setOpenModal(false)}

                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                        <Typography>Your BMI Score</Typography>
                        <Typography onClick={() => setOpenModal(false)}><Close /></Typography>
                    </Box>
                    <Box bgcolor="#E0EDE8" p={2} my={2} sx={{ display: "flex", borderRadius: '15px', }}>
                        <Typography variant="h2" color="#006D3F" mr={2}>{bmi}</Typography>

                        <Typography variant="h6"><small>Your category</small> <br /> Normal</Typography>
                    </Box>

                    <Typography variant="p" component="div"> your BMI indicates that you are a healthy weight for your height. By Maintaining a healthy weight . you lower Your risk of Developing serious health problem </Typography>
                    <Typography varian="h6" my={2} sx={{ fontWeight: "bold" }}>
                        Your healthy weight range: 49-66Kg
                    </Typography>

                    <Box display={'flex'} justifyContent="flex-end" my={2}>
                        <Button variant="text" onClick={() => setOpenModal(false)}>ReCalculate</Button>
                        <ThemeProvider theme={btnTheme}>
                            <Button variant="contained" sx={{ fontWeight: '700' }} onClick={() => { setMediaModal(true) || setOpenModal(false) }} >Share Result</Button>
                        </ThemeProvider>
                    </Box>
                </Box>
            </Modal>
        </>
    );
};

export default SharedModal;