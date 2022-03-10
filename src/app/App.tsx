import React from "react";
import { Box, ChakraProvider } from "@chakra-ui/react";
import { Topnav, Footer } from "../components/constructed";
import { extendTheme } from "@chakra-ui/react";
import { Routes } from "../routes/";
import "./App.css";

const theme = extendTheme({
  colors: {
    "primary-light": "#F9EDCC",
    primary: "#F9DF74",
    "primary-dark": "#EDAE49",
    "secondary-light": "#2C4251",
    secondary: "#1a2730",
    "secondary-dark": "#1a202c",
  },
});

export const App = () => (
  <ChakraProvider theme={theme}>
    <Box bg="primary-light" className="app">
      <Topnav />
      <Routes />
      <Footer />
    </Box>
  </ChakraProvider>
);
