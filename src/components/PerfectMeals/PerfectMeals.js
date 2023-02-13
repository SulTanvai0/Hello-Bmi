import { Button, Card, CardActions, CardContent, CardMedia, ThemeProvider, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { btnTheme } from '../../shared/Theme';

const styles = {
    benefits: {
        backgroundColor: "#EBF4F0",
        textAlign: "center",
        borderRadius: '15px',
        width: '101%',
    },
    cardStyle: {
        backgroundColor: "#EBF4F0",
        borderRadius: '15px',
        textAlign: "start",
    },

};
const link = "https://healthyroot.net/";

const PerfectMeals = () => {
    return (
        <Box style={styles.benefits} mx='auto' my='30px'>
            <Card sx={{ width: "100%" }} style={styles.cardStyle}>
                <CardMedia
                    component="img"
                    alt="green iguana"
                    height="280"
                    image="https://www.meca.edu/wp-content/uploads/2020/09/dan-gold-4_jhDO54BYg-unsplash-scaled.jpg"
                />
                <CardContent>
                    <Typography variant='h3' sx={{ fontWeight: '700' }} mb={5} >
                        Perfect meals to enjoy <br /> and stay healthy
                    </Typography>

                </CardContent>
                <CardActions>
                    <ThemeProvider theme={btnTheme} >
                        <Button variant="contained" sx={{ width: '25%', fontSize: '15px', fontWeight: '700', borderRadius: '15px' }} href={link} target="_blank">Show Me</Button>
                    </ThemeProvider>
                </CardActions>
            </Card>
        </Box>
    );
};

export default PerfectMeals;