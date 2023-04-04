import React from 'react';
import { Col, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import "./Header.css"
class Header extends React.Component {
    constructor(props) {
        super(props);
    }
    state = {}
    render() {

        return (
            <>

                <Navbar bg="light" expand="lg" sticky="top">
                    <Container fluid>
                        <Navbar.Brand href="#">Amazon</Navbar.Brand>
                        <Navbar.Toggle aria-controls="navbarScroll" />
                        <Navbar.Collapse id="navbarScroll">
                            <Nav
                                className="me-auto my-2 my-lg-0"
                                style={{ maxHeight: '100px' }}
                                navbarScroll
                            >
                                <Nav.Link href="#action1">HomeTest</Nav.Link>
                                <NavDropdown title={`Hello SingIn`} id="navbarScrollingDropdown">
                                    <div id='navbarScrollingDropdownHeader'>
                                        <div className='row'>
                                            <Row>
                                                <Col></Col>
                                                <Col><Link to="/SignIn"><a href="#" class="myButton">SignIn</a></Link></Col>
                                                <Col></Col>
                                            </Row>
                                            <div className='row' id='headerNewCustomer'>
                                                <span id='headerNewCustomerSpan'>New Cutomer? <Link to="/CreateAccount">Start Here.</Link></span>
                                            </div>
                                        </div>
                                        <hr id='hrSignIn' />
                                        <Row>
                                            <Col id='ColNav' className='ColNav1'>
                                                <h4> Your Lists</h4>
                                                <div><a href='#'>Create a List</a></div>
                                                <div><a href='#'>Find a List or Registry</a></div>
                                            </Col>
                                            <Col xs={2}><div class="vl"></div></Col>
                                            <Col id='ColNav'>
                                                <h4> Your Account</h4>
                                                <Link to="/Account"><a href='#'>Account</a></Link>
                                                <div><a href='#'>Orders</a></div>
                                                <div><a href='#'>Recomindations</a></div>
                                                <div><a href='#'>Browsing History</a></div>
                                                <div><a href='#'>Watchlist</a></div>
                                                <div><a href='#'>Video Purchases & Rentals</a></div>
                                                <div><a href='#'>Kindle Unlimited</a></div>
                                                <div><a href='#'>Content & Devices</a></div>
                                                <div><a href='#'>Subscribe & save Items</a></div>
                                                <div><a href='#'>MemberShips & Subscreptions</a></div>
                                                <div><a href='#'>Music Library</a></div>
                                            </Col>
                                        </Row>
                                    </div>
                                </NavDropdown>
                            </Nav>
                            <Form className="d-flex">
                                <Form.Control
                                    type="search"
                                    placeholder="Search"
                                    className="me-2"
                                    aria-label="Search"
                                />
                                <Button variant="outline-warning">Search</Button>
                            </Form>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </>);
    }
}

export default Header;