import {
  Box,
  Button,
  ButtonGroup,
  Snackbar,
  ThemeProvider,
  Typography,
} from "@mui/material";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import React, { useState } from "react";
import { btnTheme, theme2, twoBtnTheme } from "../../shared/Theme";
import { Facebook, InsertLink, Twitter } from "@mui/icons-material";

const styles = {
  surprise: {
    width: "100%",
    backgroundColor: "#EBF4F0",
    padding: "0",
    textAlign: "center",
    borderRadius: "15px",
  },
  btn1: {
    borderRadius: "16px 0 0 16px",
  },
  btn2: {
    borderRadius: "0 16px 16px 0",
  },
};
const btnStyle = {
  mr: 2,
  borderRadius: "16px",
};

const Surprise = () => {
  const [standard, setStandard] = useState(null);
  const [open, setOpen] = useState(false);

  return (
    <Box style={styles.surprise} my="30px" id="/surprise">
      <Typography variant="h4" fontWeight="700" mt={10} py={5}>
        Can you handel the truth?
      </Typography>
      <Box my={3}>
        <Typography variant="p">
          93% of the posted health and food facts are new to our readers.
          <br />
          Click the <span style={{ fontWeight: "bold" }}>
            {" "}
            SURPRISE ME{" "}
          </span>{" "}
          button for new fact
        </Typography>
      </Box>
      <Box my={3}>
        <ThemeProvider theme={btnTheme}>
          <Button
            variant="contained"
            sx={{ width: "230px", fontSize: "15px", fontWeight: "700" }}
          >
            <AutoAwesomeIcon /> &nbsp; SURPRISE ME
          </Button>
        </ThemeProvider>
      </Box>

      <Typography
        variant="h3"
        sx={{ color: "#006D3F", fontWeight: "700" }}
        my={4}
      >
        coffee boosts your physical <br /> performance and may help you
        <br /> lose weight
      </Typography>
      <Typography variant="p" component="div" my={3}>
        National Library of Medicine
      </Typography>

      <Box sx={{ width: {md:"70%" , lg:"68%"}, margin: "auto"}}>
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
            }}
            mb={3}
          >
            {standard === true ? (
              <ThemeProvider theme={twoBtnTheme}>
                <Button style={styles.btn1} onClick={() => setStandard(true)}>
                  <FavoriteIcon />
                  &nbsp; I knew it. wow
                </Button>
              </ThemeProvider>
            ) : (
              <ThemeProvider theme={theme2}>
                <Button style={styles.btn1} onClick={() => setStandard(true)}>
                  I knew it. wow
                </Button>
              </ThemeProvider>
            )}
            {standard === false ? (
              <ThemeProvider theme={twoBtnTheme}>
                <Button style={styles.btn2} onClick={() => setStandard(false)}>
                  {" "}
                  <ThumbUpAltIcon /> &nbsp; New to me
                </Button>
              </ThemeProvider>
            ) : (
              <ThemeProvider theme={theme2}>
                <Button style={styles.btn2} onClick={() => setStandard(false)}>
                  New to me
                </Button>
              </ThemeProvider>
            )}
          </Box>
        </ButtonGroup>
      </Box>
      <Box pb={2}>
        <Typography
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            padding:{xs: "10px 0 10px 10px"},
            justifyContent: "center",
          }}
        >
          <Button
            color="inherit"
            variant="contained"
            sx={{ ...btnStyle, marginBottom:'8px' }}
            startIcon={<Facebook />}
            href={"https://www.facebook.com/"}
            target="_blank"
          >
            Share on FaceBook
          </Button>

          <Button
            color="inherit"
            variant="contained"
            sx={{...btnStyle, marginBottom:'8px'}}
            startIcon={<Twitter />}
            href="https://twitter.com/"
            target="_blank"
          >
            Share on Twitter
          </Button>

          <Button
            color="inherit"
            variant="contained"
            sx={{...btnStyle, marginBottom:'8px'}}
            startIcon={<InsertLink />}
            onClick={() => {
              setOpen(true);
            }}
          >
            Copy Link
          </Button>
          <Snackbar
            open={open}
            autoHideDuration={6000}
            onClose={()=>setOpen(false)}
            message="Copied"
          />
        </Typography>
      </Box>
    </Box>
  );
};

export default Surprise;
