import { Box, Button, Grid, Typography } from '@mui/material';
import { useState } from 'react';
import FoodCard from './FoodCard';
import { FoodData} from '../../Data/Data'


const styles = {
    benefits: {
        backgroundColor: "#EBF4F0",
        padding :' 10px 3px ', 
        textAlign: "center",
        borderRadius: '15px',
        width: '100%',
    },

};


const Benefits = () => {
    const [btn, setBtn] = useState(true)
    const food1 = FoodData.slice(0, 5);



    return (
        <Box style={styles.benefits} mx='auto'  my='30px' id="/benefits">
            <Typography variant='h3' sx={{ fontWeight: '700' }} my={5} >
                Top 10 Benefits </Typography>
            <Grid container spacing={2} alignItems="center" >
                <>
                    {
                        btn === true ? food1.map(food => <FoodCard key={food.id} food={food}></FoodCard>) :
                            FoodData.map(food => <FoodCard key={food.id} food={food}></FoodCard>)
                    }
                </>
            </Grid>
            {
                btn === true ? <Button onClick={() => setBtn(false)} variant="outlined" color="success" sx={{ borderRadius: '16px', fontWeight: "bold", width: "90%", margin: "15px 0 3px 0" }}>View More Benefits</Button> :
                    <Button onClick={() => setBtn(true)} variant="outlined" color="success" sx={{ borderRadius: '16px', fontWeight: "bold", width: "90%", margin: "15px 0 3px 0" }}>See Less</Button>
            }

        </Box>
    );
};

export default Benefits;