import React from 'react'
import Link from 'next/link'
import { Container, Navbar, NavbarBrand, NavbarToggler, Collapse, Nav, NavItem, NavLink } from 'reactstrap';

import 'bootstrap/dist/css/bootstrap.min.css';

export default class Header extends React.Component {
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
      <Navbar color="dark" expand="md" dark >
        <Container>
          <Link href={{ pathname: '/' }} passHref>
            <NavbarBrand>GranTurismo.World</NavbarBrand>
          </Link>
          <NavbarToggler onClick={this.toggle} aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <Link href={{ pathname: '/about' }} passHref>
                  <NavLink>About</NavLink>
                </Link>
              </NavItem>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    );
  }
}
