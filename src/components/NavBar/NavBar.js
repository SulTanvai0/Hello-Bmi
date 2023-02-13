 
  import { AppBar, Box, Button, Toolbar, Typography ,  Snackbar, Alert, } from "@mui/material";
import { React, useContext } from "react";
import { Link } from "react-scroll";
import { AuthContext } from "../../AuthProvider/AuthProvider";

import img from "../../Image/NavImg.png";

const btnStyle = {
  mr: 2,
  borderRadius: "16px",
  textDecoration: "revert",
};

const NavBar = () => {
  const {openSnack, setOpenSnack} = useContext(AuthContext)
  return (
    <Box sx={{ flexGrow: 1 }} id="/">
      <AppBar position="fixed">
        <Toolbar sx={{ justifyContent: "space-evenly" }}>
          <Box>
          <Link
              activeClass="active"
              to="/"
              
              smooth={true}
              offset={-110}
              duration={500}
              
            >
              <Typography variant="div" sx={{ flexGrow: 1 }}>
                <img src={img} height={50} alt=""  />
              </Typography>
            </Link>
          </Box>

          <Box sx={{ display: { xs: "none", md: "block" } }}>
            <Typography>
            <Link
              activeClass="active"
              to="/benefits"
              
              smooth={true}
              offset={-50}
              duration={500}
              
            >
              <Button
                color="inherit"
                variant="contained"
                sx={btnStyle}
              >
                Top 10 Benefits
              </Button>
            </Link>

            <Link
              activeClass="active"
              to="/surprise"
              
              smooth={true}
              offset={-50}
              duration={500}
              
            >
              <Button
                color="inherit"
                variant="contained"
                sx={btnStyle}
              
              >
                Surprise Me{" "}
              </Button>
            </Link>

            <Link
              activeClass="active"
              to="/calculate"
              
              smooth={true}
              offset={-100}
              duration={500}
              
            >
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#267D58",
                  color: "#ffffff",
                  mr: 2,
                  borderRadius: "16px",
                  "&:hover": {
                    color: "#000",
                  },
                }}
              >
                Calculate
              </Button>
            </Link>
            </Typography>
          </Box>
          <Snackbar
          open={openSnack}
          autoHideDuration={6000}
          onClose={() => setOpenSnack(false)}
          sx={{ margin:'0 0 41% 40%' }}
        >
          <Alert
            onClose={() => setOpenSnack(false)}
            severity="success"
            sx={{ width: "100%" , bgcolor:'#33B651' }}
          >
             Message Sent
          </Alert>
        </Snackbar>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default NavBar;
