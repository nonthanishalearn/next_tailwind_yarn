import React from "react";
import Footer from "./Footer.jsx";
import Navbar from "./Navbar.jsx";
import { PrimeReactProvider, PrimeReactContext } from "primereact/api";
import "primereact/resources/themes/bootstrap4-dark-blue/theme.css";
const MainLayout = ({ children }) => {
  const title = 'BTS'
  return (
    <div className="bg-gradient-to-r from-rabbit-orange-dark via-rabbit-orange to-rabbit-orange-light ">
      <Navbar title={title}>
      </Navbar>
      <PrimeReactProvider>
        <div className="bg-white rounded-xl">
        {children}
        </div>
        </PrimeReactProvider>
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
