import React from "react";
import Navbar from "./components/Navbar.jsx";
import { Outlet } from "react-router-dom";
import Footer from "./sections/Footer.jsx";

function Layout() {
  return (
    <>
      <Navbar />
      <Outlet></Outlet>
      <Footer />
    </>
  );
}

export default Layout;
