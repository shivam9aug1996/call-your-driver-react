import React from "react";
import { Outlet } from "react-router-dom";

const Footer = React.lazy(() => import("./Footer"));
const Navbar = React.lazy(() => import("./Navbar"));
const Main = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default Main;
