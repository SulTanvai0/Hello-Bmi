import React, { useContext } from "react";
import {
   
  Box,
  Button,
  TextField,
  ThemeProvider,
  Typography,
} from "@mui/material";
import { btnTheme } from "../../shared/Theme";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const styles = {
  EmailBox: {
    backgroundColor: "#00643A",
    color: "inherit",
    textAlign: "center",
    borderRadius: "15px",
    width: "101%",
    padding: "5px 0",
  },
};

const EmailMessage = () => {
  const { setOpenSnack} = useContext(AuthContext)

  return (
    <Box style={styles.EmailBox} mx="auto" my="30px">
        

      <Typography
        variant="h3"
        sx={{ fontWeight: "700", color: "#FFFFFF" }}
        my={5}
      >
        I would love to get new facts <br /> directly to my email.
      </Typography>
      <Box
        mx="auto"
        sx={{
          display: "flex",
          bgcolor: "#ffffff",
          width: "80%",
          borderRadius: "15px",
          justifyContent: "space-between",
        }}
        mb={3}
      >
        <TextField
          placeholder="Email Address"
          sx={{ border: "none", width: "100%" }}
        />
        <ThemeProvider theme={btnTheme}>
          <Button
            onClick={() => setOpenSnack(true)}
            variant="contained"
            sx={{
              width: "25%",
              fontSize: "12px",
              fontWeight: "700",
              borderRadius: "15px",
            }}
          >
            sing me up!
          </Button>
        </ThemeProvider>
        
      </Box>
    </Box>
  );
};

export default EmailMessage;
