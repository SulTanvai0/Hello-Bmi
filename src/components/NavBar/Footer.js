import { Box, Toolbar, Typography } from '@mui/material';
import { React, } from 'react';
import img from '../../Image/afnan.png'


const Footer = () => {
    return (
        <Box sx={{  color: "GrayText" , width:'100%', }} >

            <Toolbar sx={{ justifyContent: 'space-evenly', display:"flex" , flexWrap:{xs:'wrap' , mx:"auto"}}}>
                <Box sx={{ display: "flex", width:{sm: "100%" ,  md:"40%"}, justifyContent: "space-evenly" , flexWrap:{xs:'wrap'}}}>
                    <p style={{margin:"8px"}}><small>Terms</small></p>
                    <p style={{margin:"8px"}}><small>Privacy Policy</small></p>
                    <p style={{margin:"8px"}}><small>Made with</small></p>
                    <p style={{margin:"8px"}}><small>in Welliness!</small></p>
                </Box>
                <Box mx="auto" sx={{width:{sm: "100%" ,  md:"40%"} }}>
                        <Typography variant="div" sx={{ display: "flex", alignItems: "center" , justifyContent:"center"}} mx="auto">
                            <p><small>A product of</small></p>
                            <img src={img}
                                height={50}
                                alt="" />
                            <Typography sx={{ fontWeight: "bold" }}>WWW.AFNANLAB.COM
                            </Typography>
                        </Typography>
                </Box>
            </Toolbar>
        </Box>
    );
};

export default Footer;