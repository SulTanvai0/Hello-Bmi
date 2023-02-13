import {
  Autocomplete,
  Box,
  Button,
  createFilterOptions,
  TextField,
  ThemeProvider,
  Typography,
} from "@mui/material";

import React, { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { btnTheme } from "../../shared/Theme";

const genderOption = [{ title: "male" }, { title: "Female" }];

const filterOptions = createFilterOptions({
  genderOption,
});

const Standard = () => {
  const { setOpenModal, setBmi } = useContext(AuthContext);

  const bmiStandard = (event) => {
    event.preventDefault();
    const form = event.target;

    const HeightInch = parseFloat(form.HeightInch.value);
    const WeightIb = parseFloat(form.WeightIb.value);
 
    const bmi = (WeightIb / (HeightInch * HeightInch)) * 703;
    setBmi(bmi.toFixed(2));
    setOpenModal(true);
    form.reset();
  };
  return (
    <Box
      variant="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "100%" },
      }}
      noValidate
      autoComplete="off"
    >
      <Typography component="form" variant="form" onSubmit={bmiStandard}>
        <Box sx={{ padding: "10px", textAlign: "center" }}>
          <Box
            sx={{ display: "flex", flexDirection: { xs: "column", md: "row" } }}
            justifyContent="space-between"
          >
            <Box sx={{ width: { xs: "100%", md: "49%" } }}>
              <TextField
                label="Height-Feet"
                name="HeightFeet"
                variant="filled"
                type="number"
              />
            </Box>
            <Box sx={{ width: { xs: "100%", md: "49%" } }}>
              <TextField
                label="Height-Inch"
                name="HeightInch"
                variant="filled"
                type="number"
                required
              />
            </Box>
          </Box>
          <Box
            sx={{ display: "flex", flexDirection: { xs: "column", md: "row" } }}
            justifyContent="space-between"
          >
            <Box sx={{ width: { xs: "100%", md: "49%" } }}>
              <TextField
                label="Weight-Ib"
                name="WeightIb"
                required
                variant="filled"
                type="number"
              />
            </Box>
            <Box sx={{ width: { xs: "100%", md: "49%" } }}>
              <Autocomplete
                options={genderOption}
                getOptionLabel={(option) => option.title}
                filterOptions={filterOptions}
                renderInput={(params) => (
                  <TextField {...params} label="Gender" variant="filled" />
                )}
              />
            </Box>
          </Box>
          <TextField
            label="Age"
            name="Age"
            type="number"
            fullWidth="true"
            variant="filled"
          />
          <ThemeProvider theme={btnTheme}>
            <Button
              variant="contained"
              sx={{ width: "98%", fontSize: "15px", fontWeight: "700" }}
              type="submit"
            >
              Calculate
            </Button>
          </ThemeProvider>
        </Box>
      </Typography>
    </Box>
  );
};

export default Standard;
