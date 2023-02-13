import { CameraRoll, HistoryEdu, MonitorWeight } from '@mui/icons-material';
import { Typography, Box } from '@mui/material';
import React from 'react';

const styles = {
    feature: {
        backgroundColor: "#EBF4F0",
        textAlign: "center",
        borderRadius: '15px',
        width: '100%',
        padding :' 10px 0 '
    },
}
const commonStyles = {
    bgcolor: '#D1E5DC',
    borderColor: 'text.primary',
    width: '2.5rem',
    height: '2.5rem',
    padding: "2px",

};

const Features = () => {
    return (
        <Box style={styles.feature} mx='auto' my='30px' p={0} >
            <Typography variant='h3' sx={{ fontWeight: '700'  , letterSpacing:"0.3em" }} mb={10} pt={3} >
                FEATURES
            </Typography>

            <Box mb={4} sx={{ display: 'flex', justifyContent: "center", flexDirection:{ xs: 'column', md: 'row' } }}>
                {/* item one */}
                <Box mr={2} sx={{
                    position: "relative", display: "flex",
                    justifyContent: "space-around", 
                }}>

                    <Box sx={{ ...commonStyles, borderRadius: '50%', position: "absolute", bottom: "90%", display: "flex", justifyContent: "center", alignItems: "center" }}  >
                        <HistoryEdu />
                    </Box>

                    <Box sx={{ bgcolor: '#D1E9DC', borderRadius: '16px' }} p={3}>
                        <Typography variant='h6' color="#006D3F" sx={{ fontWeight: 'bold' }} >STANDARD</Typography>
                        <Typography variant='p'><small>Enter few details in standard or <br /> imperial system: namely in feet, <br /> inches or pounds.</small></Typography>
                    </Box>
                </Box>
                {/* item two */}
                <Box mr={2}  sx={{
                    position: "relative", display: "flex",
                    justifyContent: "space-around", my:{xs:"40px" , md:"0px"}
                }}>

                    <Box sx={{ ...commonStyles, borderRadius: '50%', position: "absolute", bottom: "90%", display: "flex", justifyContent: "center", alignItems: "center" }}  >
                        <CameraRoll />
                    </Box>

                    <Box sx={{ bgcolor: '#D1E9DC', borderRadius: '16px' }} p={3}>
                        <Typography variant='h6' color="#006D3F" sx={{ fontWeight: 'bold' }} >METRIC</Typography>
                        <Typography variant='p'><small>View your calculate BMI score<br /> with color representation</small></Typography>
                    </Box>
                </Box>
                {/* item three */}
                <Box mr={2} sx={{
                    position: "relative", display: "flex",
                    justifyContent: "space-around",
                }}>

                    <Box sx={{ ...commonStyles, borderRadius: '50%', position: "absolute", bottom: "90%", display: "flex", justifyContent: "center", alignItems: "center" }}  >
                        <MonitorWeight />
                    </Box>

                    <Box sx={{ bgcolor: '#D1E9DC', borderRadius: '16px' }} p={3}>
                        <Typography variant='h6' color="#006D3F" sx={{ fontWeight: 'bold' }} >RESULT</Typography>
                        <Typography variant='p'><small>View your calculate BMI score<br /> with color representation</small></Typography>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default Features;