import React from 'react'
import { useState } from 'react'
import { BsBasket2 } from "react-icons/bs";
import { BsPersonCircle } from "react-icons/bs";
import './Header.css';
import Navbar from 'reactstrap/lib/Navbar'
import Nav from 'reactstrap/lib/Nav'
import Collapse  from 'reactstrap/lib/Collapse'
import NavbarToggler  from 'reactstrap/lib/NavbarToggler'
import NavItem  from 'reactstrap/lib/NavItem'
import NavLink  from 'reactstrap/lib/NavLink'
export default function Header(props) {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);
    const {imgsrc}= props;
  return (
    <header className='header'>
        <div className="logo" style={{cursor:"pointer"}}>
            <img src={imgsrc} alt="logo" />
        </div>
        <nav className='navbar'>
        <Navbar expand="md">
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink className='link' href="/home/">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className='link' href="/about/">About</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className='link' href="/listing/">Listing</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className='link' href="/tours">Tour</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className='link' href="/page/">Page</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className='link' href="/contact/">Contact</NavLink>
            </NavItem>
          </Nav>
         
        </Collapse>
      </Navbar>
        </nav>
        <div><span id='d'>USD</span><span><BsBasket2/></span><span><BsPersonCircle/></span></div>
    </header>
  )
}
