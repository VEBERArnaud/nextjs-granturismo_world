import React from 'react'
import Link from 'next/link'
import { Navbar, NavbarBrand, NavbarToggler, Collapse, Nav, NavItem, NavLink } from 'reactstrap';

import 'bootstrap/dist/css/bootstrap.min.css';

export default class About extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
      <div>
        <Navbar color="dark" expand="md" dark >
          <Link href={{ pathname: '/' }} passHref>
            <NavbarBrand>GranTurismo.World</NavbarBrand>
          </Link>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/about">About</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
        <h1>pages/about</h1>
      </div>
    );
  }
}
