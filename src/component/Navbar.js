import React from 'react'
import styled from 'styled-components/macro';
import {Link} from 'react-router-dom';
import { menuData } from '../data/MenuData';
import { Button } from './Button';
import {FaBars} from 'react-icons/fa';


const Nav = styled.nav`
   height: 83px;
   display: flex;
   box-sizing: border-box;
   justify-content: flex-end;
   padding: 1rem 2rem;
   z-index: 100;
  position: static;
   background: #fff;
   margin: 0 auto;
   width: 100%;
   max-width: 1440px;
`;


const MenuBars = styled(FaBars)`
   display: none;

   @media screen and (max-width: 768px) {
        display: block;
        background-size: contain;
        height: 40px;
        width: 40px;
        cursor: pointer;
        position: absolute;
        color: #000;
        top: 0;
        right: 0;
        transform: translate(-50%, 25%);
    }
`;

const NavMenu = styled.div`
    display: flex;
    align-items: center;
    /* margin-right: -48px; */

    @media screen and (max-width: 768px) {
        display: none;
    }
`;

const NavMenuLinks = styled(Link)`
  color: #555;
  display: flex;
  align-items: center;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer; 
  text-decoration: none;
`;

const NavBtn = styled.div`
   display: flex;
   align-items: center;
   /* margin-right: 24px; */

   @media screen and (max-width: 768px) {
        display: none;
    }
`;

const Navbar = ({toggle}) => {
    return (
        <Nav>
           <MenuBars onClick={toggle}/>
           <NavMenu>
              {menuData.map((item, index) => (
                  <NavMenuLinks to={item.link} key={index}>
                      {item.title}
                  </NavMenuLinks>
              ))} 
           </NavMenu>
           <NavBtn>
               <Button to='/signup'>
                   SignUp
                </Button>
           </NavBtn>
        </Nav>
    )
}

export default Navbar

