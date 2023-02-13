import {
  Box,
  Button,
  ButtonGroup,
  Container,
  ThemeProvider,
} from "@mui/material";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import React, { useState } from "react";
import img1 from "../../Image/Calculate-Section-image.jpg";
import { theme2, twoBtnTheme } from "../../shared/Theme";
import Standard from "./Standard";
import Metric from "./Metric";
import SharedModal from "../../shared/SharedModal";
import SocialMediaModal from "../../shared/SocialMediaModal";

const styles = {
  calculateContainer: {
    backgroundImage: `url(${img1})`,
    borderRadius: "10px",
    width: "100%",
  },

  calculateBox: {
    backgroundColor: `#FFFFFF`,
    color: "inherit",
    width: "80%",
    height: "100%",
    borderRadius: "10px",
    padding: "10px",
  },
  btnBox: {
    color: "inherit",
    margin: "10px",
  },
  btn1: {
    borderRadius: "16px 0 0 16px",
  },
  btn2: {
    borderRadius: "0 16px 16px 0",
  },
};

const Calculate = () => {
  const [standard, setStandard] = useState(true);

  return (
    <Box>
      <Box
        style={styles.calculateContainer}
        mx="auto"
        mt={12}
        id="/calculate"
        py={"4%"}
      >
        <Container maxWidth="xl">
          <Box style={styles.calculateBox} mx="auto">
            <Box style={styles.btnBox}>
              <ButtonGroup
                disableElevation
                variant="contained"
                aria-label="Disabled elevation buttons"
                fullWidth
              >
                <Box
                  sx={{
                    borderRadius: "16px",
                    width: "98%",
                    display: "flex",
                    border: "1px solid #D3D5D3",
                    flexDirection: { xs: "column", md: "row" },
                  }}
                >
                  {standard === true ? (
                    <ThemeProvider theme={twoBtnTheme}>
                      <Button
                        style={styles.btn1}
                        onClick={() => setStandard(true)}
                      >
                        <CheckCircleOutlineIcon />
                        &nbsp; Standard
                      </Button>
                    </ThemeProvider>
                  ) : (
                    <ThemeProvider theme={theme2}>
                      <Button
                        style={styles.btn1}
                        onClick={() => setStandard(true)}
                      >
                        Standard
                      </Button>
                    </ThemeProvider>
                  )}
                  {standard === false ? (
                    <ThemeProvider theme={twoBtnTheme}>
                      <Button
                        style={styles.btn2}
                        onClick={() => setStandard(false)}
                      >
                        {" "}
                        <CheckCircleOutlineIcon /> &nbsp; Metric
                      </Button>
                    </ThemeProvider>
                  ) : (
                    <ThemeProvider theme={theme2}>
                      <Button
                        style={styles.btn2}
                        onClick={() => setStandard(false)}
                      >
                        Metric
                      </Button>
                    </ThemeProvider>
                  )}
                </Box>
              </ButtonGroup>
            </Box>
            <Box>
              {standard === true ? <Standard></Standard> : <Metric></Metric>}
            </Box>
          </Box>
        </Container>
      </Box>
      <SharedModal />
      <SocialMediaModal />
    </Box>
  );
};

export default Calculate;
