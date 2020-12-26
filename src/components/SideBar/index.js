import React from "react";
import {
  SideBarContainer,
  Icon,
  CloseIcon,
  SideBarWrapper,
  SideBarMenu,
  SideBarLink,
  SideBtnWrap,
  SideBarRoute,
} from "./SideBarElements";

const SideBar = ({ isOpen, toggle }) => {
  return (
    <SideBarContainer isOpen={isOpen}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SideBarWrapper>
        <SideBarMenu>
          <SideBarLink to="about" onClick={toggle} smooth={true} duration={500}>
            About
          </SideBarLink>
          <SideBarLink
            to="discover"
            onClick={toggle}
            smooth={true}
            duration={500}
          >
            Discover
          </SideBarLink>
          <SideBarLink
            to="services"
            onClick={toggle}
            smooth={true}
            duration={500}
          >
            Services
          </SideBarLink>
          <SideBarLink
            to="signup"
            onClick={toggle}
            smooth={true}
            duration={500}
          >
            Sign Up
          </SideBarLink>
        </SideBarMenu>
        <SideBtnWrap>
          <SideBarRoute to="/signin">Sign In</SideBarRoute>
        </SideBtnWrap>
      </SideBarWrapper>
    </SideBarContainer>
  );
};

export default SideBar;
