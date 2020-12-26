import React, { useState, useEffect } from "react";
import { animateScroll as scroll } from "react-scroll";
import { FaBars } from "react-icons/fa";
import {
  Nav,
  NavContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLink,
  NavBtn,
  NavBtnLink,
} from "./NavBarElements";

const NavBar = ({ toggle }) => {
  const [scollNav, setScrollNav] = useState(false);

  const changNav = () => {
    if (window.scrollY > 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };
  const toggleHome = () => {
    scroll.scrollToTop();
  };

  useEffect(() => {
    window.addEventListener("scroll", changNav);
  }, []);

  return (
    <Nav scollNav={scollNav}>
      <NavContainer>
        <NavLogo to="/" onClick={toggleHome}>
          dolla
        </NavLogo>
        <MobileIcon onClick={toggle}>
          <FaBars />
        </MobileIcon>
        <NavMenu>
          <NavItem>
            <NavLink
              activeClass="active"
              to="about"
              smooth={true}
              duration={500}
              spy={true}
            >
              About
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              to="discover"
              smooth={true}
              duration={500}
              activeClass="active"
              spy={true}
            >
              Discover
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              to="services"
              smooth={true}
              duration={500}
              activeClass="active"
              spy={true}
            >
              Services
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              to="signup"
              smooth={true}
              duration={500}
              activeClass="active"
              spy={true}
            >
              Sign Up
            </NavLink>
          </NavItem>
        </NavMenu>
        <NavBtn>
          <NavBtnLink to="/signin">Sign In</NavBtnLink>
        </NavBtn>
      </NavContainer>
    </Nav>
  );
};

export default NavBar;
