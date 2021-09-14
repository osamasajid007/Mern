import React from "react";
import { Link } from "react-router-dom";
import MainHeader from "./MainHeader";
import "./MainNavigation.css";
import Navlink from "./Navlink";
import SideDrawer from "./SideDrawer";
import Backdrop from "../UIelements/Backdrop/Backdrop";

const MainNavigation = () => {
  const [drawerIsOpen, setdrawerIsOpen] = React.useState(false);
  const openDrawer = () => {
    setdrawerIsOpen(true);
  };
  const closeDrawer = () => {
    setdrawerIsOpen(false);
  };
  return (
    <>
      {drawerIsOpen && <Backdrop onClick={closeDrawer} />}
      {drawerIsOpen ? (
        <SideDrawer show={drawerIsOpen}>
          <nav className="main-nevigation__drawer-nav">
            <Navlink />
          </nav>
        </SideDrawer>
      ) : null}

      <MainHeader>
        <button className="main-navigation__menu-btn" onClick={openDrawer}>
          <span />
          <span />
          <span />
        </button>

        <h1 className="main-navigation__title">
          {" "}
          <Link to="/"> your Places </Link>
        </h1>

        <nav className="main-navigation__header-nav">
          <Navlink />
        </nav>
      </MainHeader>
    </>
  );
};

export default MainNavigation;
