import React from "react";
import { Route, Routes } from "react-router-dom";
import CardPage from "../pages/CardPage";
import Home from "../pages/Home";
import WishListPage from "../pages/WishListPage";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/home" element={<Home />}></Route>
      <Route path="/cart" element={<CardPage />}></Route>
      <Route path="/wish-list" element={<WishListPage />}></Route>
    </Routes>
  );
};

export default AppRoutes;
