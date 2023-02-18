import { Autocomplete, Box, Button, createFilterOptions, TextField, ThemeProvider, Typography } from '@mui/material';
import React, { useContext } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { btnTheme } from '../../shared/Theme';

const styles = {
    QueriesBox: {
        backgroundColor: "#EBF4F0",
        color: "inherit",
        padding: "15px 0",
        textAlign: "center",
        borderRadius: '15px',
        width: '101%',
    },
}


const genderOption = [{}];
const InquiryOption = [{}];


const filterOptions = createFilterOptions({genderOption});
const Queries = () => {
    const { setOpenSnack} = useContext(AuthContext)
    return (
        <Box style={styles.QueriesBox} mx='auto' my='30px'>
            <Typography variant='h4' sx={{ fontWeight: '700', }} my={5} >
                We're very casual and would love <br /> to help you with your queries
            </Typography>
            <Box
                component="form"
                sx={{
                    '& .MuiTextField-root': { m: 1, width: "80%" },
                }}
                noValidate
                autoComplete="off"
            >
                <Box sx={{ padding: '10px', textAlign: 'center' }}  >
                    <Box sx={{ display: "flex", justifyContent: "center", flexDirection: { xs: 'column', md: 'row' } }} >
                        <Box sx={{ width: { xs: '100%', md: '49%' }, textAlign: { xs: "center", md: "end" } }}>
                            <TextField
                                label="First Name"
                                variant="filled"
                                type="text"
                                required

                            />
                        </Box>
                        <Box sx={{ width: { xs: '100%', md: '49%' }, textAlign: { xs: "center", md: "start" } }}>
                            <TextField
                                label="Last Name"
                                variant="filled"
                                type="text"
                                required
                            />
                        </Box>

                    </Box>

                    <Box sx={{ display: "flex" }} justifyContent="center"  >
                        <Box sx={{ width: "100%" }}>
                            <TextField
                                label="Email"
                                variant="filled"
                                type="text"
                                required
                            />
                        </Box>
                    </Box>

                    <Box sx={{ display: "flex", flexDirection: { xs: 'column', md:'row'}}} justifyContent="center">

                        <Box sx={{ width:{xs: '100%', md: '49%' }, textAlign: { xs: "center", md: "end" }}}>

                            <Autocomplete
                                options={genderOption}
                                getOptionLabel={(option) => option.title}
                                filterOptions={filterOptions}
                                renderInput={(params) => <TextField {...params} label="Country"
                                fullWidth="true"
                                variant="filled" />}
                            />
                        </Box>
                        <Box sx={{ width: { xs: '100%', md: '49%' }, textAlign: { xs: "center", md: "start" } }}>

                            <TextField
                                select
                                label="phone number(optional)"
                                variant="filled"
                                type="number"
                                SelectProps={{
                                    native: true,
                                }}
                            >
                                <option >+1</option>
                            </TextField>
                        </Box>
                    </Box>

                    <Box sx={{ display: "flex" }} justifyContent="center"  >
                        <Box sx={{ width: "100%" }}>
                            <Autocomplete
                                options={InquiryOption}
                                getOptionLabel={(option) => option.title}
                                filterOptions={filterOptions}
                                renderInput={(params) => <TextField {...params} label="Inquiry type"
                                fullWidth="true" variant="filled" />}
                            />
                        </Box>
                    </Box>

                    <TextField
                        label="Message"
                        fullWidth="true"
                        variant="filled"
                        multiline
                        rows={4}
                    />
                    <ThemeProvider theme={btnTheme}>
                        <Button onClick={()=>setOpenSnack(true)} variant="contained" sx={{ width: { xs: '100%', md: '70%' }, fontSize: '15px', fontWeight: '700', borderRadius: "10px" }} my={3}>Send Message</Button>
                    </ThemeProvider>
                </Box>
            </Box>
        </Box>
    );
};

export default Queries;