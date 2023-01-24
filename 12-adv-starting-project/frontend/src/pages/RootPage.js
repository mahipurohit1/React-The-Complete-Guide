import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

function RootPage() {
  return (
    <>
      <Navbar></Navbar>
      <Outlet></Outlet>
    </>
  );
}

export default RootPage;
