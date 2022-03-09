import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import { Home, About } from "../components/pages";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="about" element={<About />} />
    </Routes>
  );
}

export default AppRoutes;
