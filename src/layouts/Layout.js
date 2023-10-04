import { Box, ThemeProvider } from "@mui/material";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React from "react";
import Footer from "./footer/Footer";
import Header from "./header/Header";
import theme from "../styles/Theme";
import { MainContainer } from "../styles/StyledComponent";

const Layout = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <MainContainer>
          <Box sx={{ minHeight: "70vh" }}>
            <Router>
              <Header />
              <h1>Hello</h1>
            </Router>
          </Box>
          <Footer />
        </MainContainer>
      </ThemeProvider>
    </>
  );
};

export default Layout;
