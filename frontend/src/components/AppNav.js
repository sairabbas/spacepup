import React, { Component } from 'react';
import {Nav, Navbar,NavItem, NavbarBrand, NavLink} from 'reactstrap';

class AppNav extends Component {
    render() {
        return (
            <div>
                <Navbar color="dark" dark expand="md">
                <NavbarBrand href="/">Spacepup</NavbarBrand>
                <Nav className="ml-auto" navbar>
                <NavItem>
                    <NavLink style={{color: 'white', backgroundColor: 'grey', alignSelf: 'flex-start'}} href="/">Home</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink style={{color: 'white', backgroundColor: 'grey', alignSelf: 'flex-start'}} href="/user">User</NavLink>
                </NavItem>
                <NavItem>
                <NavLink style={{color: 'white', backgroundColor: 'grey', alignSelf: 'flex-start'}} href="/admin">Admin</NavLink>
                </NavItem>
                </Nav>
                </Navbar>
            </div>
        );
    }
}

export default AppNav;