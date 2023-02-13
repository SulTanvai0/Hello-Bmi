import {  Button, Card, CardContent, CardMedia, Grid, Link, Typography } from '@mui/material';

import React from 'react';



const FoodCard = ({ food }) => {

    const { name, photoURL, link } = food
    return (
        <Grid item md={4} sm={6} >
            <Link href={link} target="_blank" sx={{ textDecoration: "none" }} >
                <Card sx={{ Width: 340, height: 350, borderRadius: '10px', display: 'flex', flexDirection: "row-reverse", flexWrap: "wrap" }}>
                    <CardMedia
                        component="img"
                        alt=""
                        height="160"
                        image={photoURL}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {name}
                        </Typography>

                    </CardContent>
                    <Button color="success" sx={{fontWeight: "bold", }} >
                        Read More
                    </Button>
                </Card>
            </Link>
        </Grid>
    );
};

export default FoodCard;