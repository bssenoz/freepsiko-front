import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { ChakraProvider } from '@chakra-ui/react'
import { theme } from './theme/Theme.js'
import Navbar from "./components/navbar/navbar.js";
import { Home } from "./components/home/home.js";
import { Login } from "./components/login/Login";
import { Jobs } from "./components/job/job";
import style from "./main.css"
import { Explore } from "./components/explore/explore.js";
import { Footer } from "./components/footer/footer.js";
export function App() {
    return (
      <BrowserRouter>
          <ChakraProvider>
      {/* <ThemeProvider theme={theme}> */}
      <Navbar/>
      <Routes>
        <Route  exact path="/" element={<Home/>} />
        <Route  exact path="/login" element={<Login/>} />
        <Route  exact path="/jobs" element={<Jobs/>} />
        <Route  exact path="/explore" element={ <Explore/>} />
      </Routes>
     <Footer/>
      {/* </ThemeProvider> */}
      </ChakraProvider>
      </BrowserRouter>

    );
  }

