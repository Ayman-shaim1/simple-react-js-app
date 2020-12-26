import styled from "styled-components";
import { FaTimes } from "react-icons/fa";
import { Link as LinkS } from "react-scroll";
import { Link as LinkR } from "react-router-dom";

export const SideBarContainer = styled.aside`
    position:fixed;
    z-index:999;
    width:100%;
    height:100%;
    background:#0d0d0d;
    display:grid;
    align-items:center;
    left:0; 
    top:0;
    transition:0.3s ease-in-out
    opacity:${({ isOpen }) => (isOpen ? "100%" : "0")};
    top:${({ isOpen }) => (isOpen ? "0" : "-100%")};

    @media screen and (min-width:768px){
        opacity:0;
        top:-100%;
    }
`;
export const CloseIcon = styled(FaTimes)`
  color: #fff;
`;
export const Icon = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  background: transparent;
  font-size: 2rem;
  cursor: pointer;
  outline: none;
`;
export const SideBarWrapper = styled.div`
  color: #fff;
`;
export const SideBarMenu = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(5, 60px);
  text-align: center;
`;
export const SideBarLink = styled(LinkS)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  text-decoration: none;
  list-style: none;
  transition: 0.2s ease-in-out;
  text-decoration: none;
  color: #fff;
  cursor: pointer;

  &:hover {
    color: #01bf71;
    transition: 0.2s ease-in-out;
  }
`;
export const SideBtnWrap = styled.div`
  display: flex;
  justify-content: center;
`;
export const SideBarRoute = styled(LinkR)`
  border-radius: 50px;
  background: #01bf71;
  white-space: nowwrap;
  padding: 16px 64px;
  color: #010606;
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s east-in-out;
  text-decoration: none;
  &:hover {
    transition: all 0.2s east-in-out;
    background: #fff;
    color: #010606;
  }
`;
