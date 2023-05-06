import React from "react";
import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";
import MenuBar from "./Menubar.jsx";

function Layout({ children }) {
  return (
    <div>
      <Navbar />
      <MenuBar />
      <main>{children}</main>
      <Footer />
    </div>
  );
}

export default Layout;
