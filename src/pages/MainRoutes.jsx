import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import History from "./History";
import Bucket from "./Bucket";
const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/history" element={<History />}></Route>
      <Route path="/bucket" element={<Bucket />}></Route>
    </Routes>
  );
};

export default MainRoutes;
