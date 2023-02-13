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

const Metric = () => {
  const { setOpenModal, setBmi } = useContext(AuthContext);

  const bmiMetric = (event) => {
    event.preventDefault();
    const form = event.target;

    const HeightCM = parseFloat(form.HeightCM.value);
    const WeightKg = parseFloat(form.WeightKg.value);
    const HeightMeter = HeightCM / 100;

    const bmi = WeightKg / (HeightMeter * HeightMeter);
    console.log(bmi.toFixed(2));
    setBmi(bmi.toFixed(2));
    setOpenModal(true);
    form.reset();
  };
  return (
    <Box
      component="div"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "100%" },
      }}
      noValidate
      autoComplete="off"
    >
      <Typography component="form" variant="form" onSubmit={bmiMetric}>
        <Box sx={{ padding: "10px", textAlign: "center" }}>
          <Box sx={{ display: "flex" }} justifyContent="space-between">
            <Box sx={{ width: "98%" }}>
              <TextField
                label="Height-CM"
                required
                name="HeightCM"
                variant="filled"
                type="text"
              />
            </Box>
          </Box>
          <Box
            sx={{ display: "flex", flexDirection: { xs: "column", md: "row" } }}
            justifyContent="space-between"
          >
            <Box sx={{ width: { xs: "100%", md: "49%" } }}>
              <TextField
                label="Weight-Kg"
                name="WeightKg"
                required
                variant="filled"
                type="text"
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

export default Metric;
