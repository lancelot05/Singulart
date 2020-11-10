import React, { useEffect, useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import { animateScroll as scroll } from 'react-scroll';
import {

  NavLogo,

  NavLinks,

  NavBtnLink,
} from './NavbarElements';

import './index.css';
import { projectAuth } from '../../firebase/config';
import { Redirect } from 'react-router-dom';
import {Button} from '../ButtonElement';


const Navbar = ({ toggle }) => {
  const [scrollNav, setScrollNav] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    projectAuth.onAuthStateChanged((user) => {
      if (user) {
        setLoggedIn(true)
      } else {
        setLoggedIn(false)
      }
    });

  }, []);

  
  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  const userLogout = () => {
    projectAuth.signOut();
    return (
      <Redirect to='/' />
    )
  }

  useEffect(() => {
    window.addEventListener('scroll', changeNav);
  }, []);

  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <nav className={'Nav ' + (scrollNav ? '' : 'transparent')}>
          <div className='NavBarContainer'>
            <NavLogo to='/' onClick={toggleHome}>
              Singulart
            </NavLogo>
            <div className='MobileIcon' onClick={toggle}>
              <FaBars />
            </div>
            <ul className='NavMenu'>
              <li className='NavItem'>
                <NavLinks
                  to='about'
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact='true'
                  offset={-80}
                >
                  About
                </NavLinks>
              </li>
              <li className='NavItem'>
                <NavLinks
                  to='discover'
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact='true'
                  offset={-80}
                >
                  Discover
                </NavLinks>
              </li>
              <li className='NavItem'>
                <NavLinks
                  to='services'
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact='true'
                  offset={-80}
                >
                  Services
                </NavLinks>
              </li>
              <li className='NavItem'>
                <NavLinks
                  to='signup'
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact='true'
                  offset={-80}
                >
                  Sign Up
                </NavLinks>
              </li>
            </ul>
            <nav className='NavBtn'>
              {loggedIn ? <Button to='signup' primary={1} dark={1} onClick={() => userLogout()}>Logout</Button> : <NavBtnLink to='/signin'>Sign In</NavBtnLink>}
            </nav>
          </div>
        </nav>
      </IconContext.Provider>
    </>
  );
};

export default Navbar;
