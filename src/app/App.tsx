import React from "react";
import { Box, ChakraProvider } from "@chakra-ui/react";
import { Topnav, Footer } from "../components/constructed";
import { extendTheme } from "@chakra-ui/react";
import { Routes } from "../routes/";
import "./App.css";

const theme = extendTheme({
  colors: {
    primary: {
      light: "#14591D",
      dark: "#0A210F",
    },
    secondary: {
      light: "#F6FEDB",
      dark: "#E6D3A3",
    },
    black: "#1a202c",
    white: "#f7fafc",
  },
});

export const App = () => (
  <ChakraProvider theme={theme}>
    <Box bg="secondary.light" className="app">
      <Topnav />
      <Routes />
      <Footer />
    </Box>
  </ChakraProvider>
);
