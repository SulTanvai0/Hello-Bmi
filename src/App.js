import { Box, ThemeProvider } from "@mui/material";
import { Container } from "@mui/system";
import Benefits from "./components/Benefits/Benefits";
import Calculate from "./components/Calculate/Calculate";
import EmailMessage from "./components/EmailMessage/EmailMessage";
import Features from "./components/Features/Features";
import Footer from "./components/NavBar/Footer";
import NavBar from "./components/NavBar/NavBar";
import PerfectMeals from "./components/PerfectMeals/PerfectMeals";
import Queries from "./components/Queries/Queries";
import Surprise from "./components/Surprise/Surprise";
import { theme } from "./shared/Theme";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <NavBar/>
      </ThemeProvider>
      <Box>
        <Container maxWidth="md">
          <Calculate />
          <Surprise />
          <Features/>
          <Benefits/>
          <PerfectMeals/>
          <EmailMessage/>
          <Queries/>
          
        </Container>
      </Box>
      <ThemeProvider theme={theme} >
        <Footer />
      </ThemeProvider>
    </>
  );
}

export default App;
