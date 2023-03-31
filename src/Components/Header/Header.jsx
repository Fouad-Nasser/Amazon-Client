import React from 'react'
import "./Header.css";
// import { ImSearch } from 'react-icons/im'
import { useSelector } from 'react-redux';
import { AiOutlineMenu } from 'react-icons/ai'
import { NavLink, Link  } from 'react-router-dom';
import { Col, Row } from 'react-bootstrap';
import NavDropdown from 'react-bootstrap/NavDropdown';
const Header = () => {
    const {cartItems} = useSelector(state => state.cart);

    return (
        <div>
            <div id="header">
                <img
                    id="header__logo"
                    src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
                />
                <div id="header__search">
                    <input id="header__searchInput" type="text" />
                    <svg className='pe-auto' id="header__searchIcon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                    </svg>
                </div>

                <div id="header__nav">
                    <NavLink className='text-white mt-1 text-decoration-none' to="/Signin">
                        <div className="header__option">
                            <span className="header__optionLineOne">Hello Guest</span>
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
                            
                        </div>
                    </NavLink>

                    <NavLink className='text-white mt-1 text-decoration-none' to="/Order">
                        <div className="header__option">
                            <span className="header__optionLineOne">Returns</span>
                            <span className="header__optionLineTwo">& Orders</span>
                        </div>
                    </NavLink>

                    <NavLink className='text-white mt-1 text-decoration-none' to="/Prime">
                        <div className="header__option">
                            <span className="header__optionLineOne">Your</span>
                            <span className="header__optionLineTwo">Prime</span>
                        </div>
                    </NavLink>
                    <NavLink className='text-white mt-1 text-decoration-none' to="/Cart">
                        <div id="header__optionBasket">
                            <span className='h2 text-warning'>{cartItems.length}</span>
                            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="2em" width="2em" id=" text-[40px]" xmlns="http://www.w3.org/2000/svg">
                                <path d="M11 9h2V6h3V4h-3V1h-2v3H8v2h3v3zm-4 9c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2zm-9.83-3.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.86-7.01L19.42 4h-.01l-1.1 2-2.76 5H8.53l-.13-.27L6.16 6l-.95-2-.94-2H1v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.13 0-.25-.11-.25-.25z"></path>
                            </svg>
                            <p id='mt-3 text-md font-bold'>Cart</p>
                        </div>
                    </NavLink>
                </div>
            </div>

            <div className="p-1 nav_bar text-white" style={{ cursor: 'pointer' }}>
                <div className="left d-flex">
                    <div className='p-1 cart-data d-flex justify-content-center '>
                        <AiOutlineMenu className='text-xl mr-1' style={{ marginTop: '4px' }} />
                        All
                    </div>
                    <NavLink className='text-white mt-1 text-decoration-none' to="/">
                        <span className='p-1 px-2 cart-data'>Today's Deal</span>
                    </NavLink>
                    <NavLink className='text-white mt-1 text-decoration-none' to="/">
                        <span className='p-1 px-2 cart-data'>Customer Service</span>
                    </NavLink>
                    <NavLink className='text-white mt-1 text-decoration-none' to="/">
                        <span className='p-1 px-2 cart-data'>Registery</span>
                    </NavLink>
                    <NavLink className='text-white mt-1 text-decoration-none' to="/">
                        <span className='p-1 px-2 cart-data'>Gift Cards</span>
                    </NavLink>
                    <NavLink className='text-white mt-1 text-decoration-none' to="/">
                        <span className='p-1 px-2 cart-data'>Sell</span>
                    </NavLink>
                </div>

            </div>
        </div >

    )
}

export default Header