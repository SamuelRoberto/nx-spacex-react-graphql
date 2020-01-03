import React, { useState } from 'react';
import { RouterPathEnum } from '../enums/RouterPathEnum';
import { Navbar, NavbarBrand, NavbarToggler, Collapse, Nav, NavItem, NavLink } from 'reactstrap';

export const HeaderComponent = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <>
      <Navbar color="primary" dark expand="md">
        <NavbarBrand href={RouterPathEnum.HOME}>SpaceX</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href={RouterPathEnum.HOME}>Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href={RouterPathEnum.ROCKETS}>Rockets</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href={RouterPathEnum.DRAGONS}>Dragons</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </>
  );
}

export default HeaderComponent;
