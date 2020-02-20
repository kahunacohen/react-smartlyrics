import React from "react";
import { Nav, NavItem, NavLink, Navbar, NavbarBrand } from "reactstrap";

export const Header = () => {
  return (
    <header>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">Smartlyrics</NavbarBrand>
        <Nav className="mr-auto" navbar>
          <NavItem>
            <NavLink href="/songs/">Songs</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/about/">About</NavLink>
          </NavItem>
        </Nav>
      </Navbar>
    </header>
  );
};
