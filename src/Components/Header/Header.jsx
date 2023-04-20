import React, { useEffect, useState } from 'react'
import "./Header.css";
import { useSelector } from 'react-redux';
import { NavLink, Link } from 'react-router-dom';
import { Button, Col, Dropdown, Row } from 'react-bootstrap';
import NavDropdown from 'react-bootstrap/NavDropdown';
import axios from 'axios';
import Sidenavbar from '../Sidebar/Sidenavbar';
import { Transition } from 'react-transition-group';
import OverlayAll from '../overlayAll';
const Header = () => {
    const { cartItems } = useSelector(state => state.cart);
    const [dropCategory, setDropCategory] = useState('All');
    const [category, setCategory] = useState([])
    const [navOpen, setNavOpen] = useState(false)

    const [inputdata, setInputData] = useState('')
    const [searchDataResult, setSearchDataResult] = useState([])


    useEffect(() => {
        axios.get('http://localhost:3000/categorys').then((res) => {
            console.log(res.data.data);
            setCategory(res.data.data)

        }).catch((err) => {
            console.log(err);
        })
    }, [])
    const SelectedCategory = (selectedItem) => {
        console.log(selectedItem);
        setDropCategory(selectedItem)
    }

    // Search Part
    const FetchDataSearch = (value) => {
        axios.get('http://localhost:3000/products').then((res) => {
            const ReturnedData = res.data.data.filter((product) => {
                if (searchDataResult === "") return value;
                else return (product && product.name && product.name.toLowerCase().includes(value));
            })
            setSearchDataResult(ReturnedData)
        }).catch((err) => {
            console.log(err);
        })

    }
    const handleChange = (value) => {
        setInputData(value);
        FetchDataSearch(value);
    }
    const overlaySearchBar = () => {
        console.log(navOpen);
        setNavOpen(true);
        console.log(navOpen);
        // document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
    }
    return (
        <header id="container">
            <div id="nav-bar">
                <div id="nav-belt">
                    <div className="nav-left">
                        <div id="nav-logo">
                            <Link to='/' id='header__logo'>
                                <img
                                    id='logo_image'
                                    className='header__option'
                                    src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
                                />
                            </Link>
                        </div>
                    </div>
                    <div className="nav-fill">
                        <div id="nav-search">
                            <div id="nav-search-bar-form">
                                <div class="nav-fill">
                                    {/* <div className="nav-left" >
                                        <NavDropdown className='h-25' title={`${dropCategory}`} style={{ color: 'white', margin: 'auto', background: '#cdcdcd' }} id="navbarScrollingDropdown1">
                                            <div id='navbarScrollingDropdownHeaderAll'>
                                                <Row style={{ width: '17rem', textAlign: 'center' }}>
                                                    <Col id='Col_ALL' >
                                                        <Link to='/' >All Category</Link>
                                                    </Col>
                                                    {category.map((item) => {
                                                        return <div key={item.id}>
                                                            <Col id='ColNav'>
                                                                <Link to='/' onClick={() => { SelectedCategory(item.name) }}>{item.name}</Link>
                                                            </Col>
                                                        </div>
                                                    })}
                                                </Row>
                                            </div>
                                        </NavDropdown>
                                    </div> */}
                                    <div id='DivHeaderSearchBar'>
                                        <input id="header__searchInput" type="text" placeholder='Search Amazon.eg' onClick={overlaySearchBar} onChange={(e) => { handleChange(e.target.value) }} />
                                    </div>
                                    <div id="SearchResultList" style={{ zIndex: '60' }}>
                                        {
                                            searchDataResult.map((result) => {
                                                return <div className='d-flex' onClick={() => { console.log(result.name); }}>
                                                    <NavLink to='/' className='text-decoration-none searchListResult'>
                                                        <div key={result._id} className=''>
                                                            <span >{result.name}</span>
                                                        </div>
                                                    </NavLink>
                                                    {/* <i class="fas fa-times fa-ms searchList_icon" style={{ color: '#b9acac' }}></i> */}
                                                </div>
                                            })
                                        }
                                    </div>
                                </div>
                                <div class="nav-right">
                                    <svg className='pe-auto' id="header__searchIcon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                                    </svg>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div class="nav-right">
                        <div id="nav-tools">
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
                                    <span className="header__optionLineTwo">&Orders</span>
                                </div>
                            </NavLink>

                            <NavLink className='text-white mt-1 text-decoration-none' to="/Prime">
                                <div className="header__option">
                                    <span className="header__optionLineOne">Your</span>
                                    <span className="header__optionLineTwo">Prime</span>
                                </div>
                            </NavLink>
                            <NavLink className='text-white mt-1 text-decoration-none nav-a nav-a-2 nav-progressive-attribute' aria-label="0 items in cart" id="nav-cart" to="/Cart">
                                <div id="header__optionBasket">
                                    <div id="nav-cart-count-container">
                                        <span id='stext-warning'>{cartItems.length}</span>
                                        <span className="nav-cart-icon nav-sprite"></span>
                                    </div>
                                    <div id="nav-cart-text-container" className="nav-progressive-attribute" style={{ marginTop: '-2.5rem;', marginRight: '-2rem' }}>
                                        <span aria-hidden="true" className="text-md font-bold">
                                            Cart
                                        </span>
                                    </div>
                                </div>
                            </NavLink>
                        </div>
                    </div>
                </div>
                <div className="p-1 nav_bar text-white">
                    <div className="left d-flex">
                        <div className='p-1 cart-data d-flex justify-content-center'>
                            <OverlayAll />
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
        </header >
    )
}

export default Header