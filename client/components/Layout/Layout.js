import React from "react";
import HeaderDesktop from "./HeaderDesktop";
import HeaderMobile from "./HeaderMobile";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <>
      <HeaderDesktop />
      <HeaderMobile />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
