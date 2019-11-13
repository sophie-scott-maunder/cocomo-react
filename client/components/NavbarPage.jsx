import React, { Component } from "react";
import {Link} from 'react-router-dom'

import {
    MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBDropdown,
    MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBContainer, MDBIcon
} from "mdbreact";

class NavbarPage extends Component {
    state = {
        collapseID: ""
    };

    toggleCollapse = collapseID => () =>
        this.setState(prevState => ({
            collapseID: prevState.collapseID !== collapseID ? collapseID : ""
        }));

    render() {
        return (
            <MDBNavbar color="secondary-color" dark expand="md" style={{ marginTop: "20px" }}>
                <MDBNavbarBrand>
                    <strong className="white-text">c</strong> <strong className="brown-text">.</strong>
                </MDBNavbarBrand>
                <MDBNavbarToggler onClick={this.toggleCollapse("navbarCollapse3")} />
                <MDBCollapse id="navbarCollapse3" isOpen={this.state.collapseID} navbar>
                    <MDBNavbarNav left>
                        <MDBNavItem>
                            <MDBDropdown>
                                <MDBDropdownToggle nav caret>
                                    <div className="d-md-inline">Products</div>
                                </MDBDropdownToggle>
                                <MDBDropdownMenu className="dropdown-default" right>
                                    <MDBDropdownItem href="#!"></MDBDropdownItem>
                                    <MDBDropdownItem><Link to="/products/1">Chocolate Salami</Link></MDBDropdownItem>
                                    <MDBDropdownItem><Link to="/products/2">Chocolate Coated Grapefruit Peel</Link></MDBDropdownItem>
                                    <MDBDropdownItem><Link to="/products/3">Wedding Favours</Link></MDBDropdownItem>
                                </MDBDropdownMenu>
                            </MDBDropdown>
                        </MDBNavItem>
                    </MDBNavbarNav>
                    <MDBNavbarNav center="true" className="nav-center">
                        <MDBNavItem><Link to="/">
                            <img src="/images/cocomo-brand.png" className="brand-image" alt="cocomo" />
                            </Link></MDBNavItem>
                    </MDBNavbarNav>
                    <MDBNavbarNav right>
                        <MDBNavItem>
                            <MDBNavLink to='/contact'>Contact Us</MDBNavLink>
                        </MDBNavItem>
                        <MDBNavItem>
                            <MDBDropdown>
                                <MDBDropdownToggle className="dropdown-toggle" nav>
                                </MDBDropdownToggle>
                                <MDBDropdownMenu className="dropdown-default" right>
                                    <MDBDropdownItem href="#!">My account</MDBDropdownItem>
                                    <MDBDropdownItem href="#!">Log out</MDBDropdownItem>
                                </MDBDropdownMenu>
                            </MDBDropdown>
                        </MDBNavItem>
                    </MDBNavbarNav>
                </MDBCollapse>
            </MDBNavbar>

        );
    }
}

export default NavbarPage;