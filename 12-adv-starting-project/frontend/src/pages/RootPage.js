import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

function RootPage() {
  // const navigation = useNavigation();
  return (
    <>
      {/* {navigation.state === "loading" && <p>please wait data is coming....</p>} */}
      <Navbar></Navbar>
      <Outlet></Outlet>
    </>
  );
}

export default RootPage;
