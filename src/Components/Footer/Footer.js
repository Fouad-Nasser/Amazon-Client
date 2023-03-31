import React from 'react'
import './Footer.css'
import { NavLink } from 'react-router-dom'
import { fontSize } from '@mui/system'

function Footer() {
    return (
        <div >
            <footer className=" text-center text-lg-start sticky-bottom">
                {/* Part SignUp */}
                <NavLink to='/' className='text-decoration-none'>
                    <div>
                        <span className='btn_top'>Back to top</span>
                    </div>
                </NavLink>
                <div className="container p-4">
                    <div className="row">
                        <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                            <div className="text-bold titel">Get to Know Us</div>
                            <ul className="list-unstyled">
                                <NavLink to='/AboutUs' className="sub_title text-decoration-none "><li>About Amazon</li> </NavLink>
                                <NavLink to='/Careers' className="sub_title text-decoration-none"><li>Careers</li></NavLink>
                                <NavLink to='/Amazon_Science' className="sub_title text-decoration-none"><li>Amazon Science</li></NavLink>
                            </ul >
                        </div >

                        <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                            <div className="text-bold titel">Shop with Us</div>
                            <ul className="list-unstyled ">
                                <NavLink to='/Account' className="sub_title text-decoration-none"><li>Your Account</li></NavLink>
                                <NavLink to='/Order' className="sub_title text-decoration-none"><li>Your Orders</li></NavLink>
                                <NavLink to='/Address' className="sub_title text-decoration-none"><li>Your Addresses</li></NavLink>
                                <NavLink to='/List' className="sub_title text-decoration-none"><li>Your Lists</li></NavLink>
                            </ul >
                        </div >
                        <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                            <div className="text-bold titel">Shop with Us</div>
                            <ul className="list-unstyled ">
                                <NavLink to='/Money' className="sub_title text-decoration-none"><li>Make Money with Us</li></NavLink>
                                <NavLink to='/' className="sub_title text-decoration-none"><li>Protect and build your brand</li></NavLink>
                                <NavLink to='/Address' className="sub_title text-decoration-none"><li>Advertise Your Products</li></NavLink>
                                <NavLink to='/sell' className="sub_title text-decoration-none"><li>Sell on Amazon</li></NavLink>
                                <NavLink to='/' className="sub_title text-decoration-none"><li>Fulfillment by Amazon </li></NavLink>
                            </ul >
                        </div >
                        <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                            <div className="text-bold titel">Shop with Us</div>
                            <ul className="list-unstyled ">
                                <NavLink to='/' className="sub_title text-decoration-none"><li>Let Us Help You</li></NavLink>
                                <NavLink to='/Help' className="sub_title text-decoration-none"><li>Help</li></NavLink>
                                <NavLink to='/Delivery' className="sub_title text-decoration-none"><li>Shipping & Delivery</li></NavLink>
                                <NavLink to='/' className="sub_title text-decoration-none"><li> Returns & Replacements</li></NavLink>
                                <NavLink to='/' className="sub_title text-decoration-none"><li>Amazon App Download </li></NavLink>
                            </ul >
                        </div >
                    </div >
                </div >
                {/* <hr className='mb-2' /> */}
                <div>
                </div>
                <div class="py-3 mt-3 shadow-lg" style={{ backgroundColor: '#131a22', fontSize: '12px' }}>
                    <div class="container">
                        <div class="text-center ">
                            <ul className='list-unstyled ul_footer'>
                                <NavLink to="/" className="text-white text-decoration-none">
                                    <li> Conditions of Use & Sale</li>
                                </NavLink>
                                <NavLink to="/" className="text-white text-decoration-none">
                                    <li>Privacy Notice</li>
                                </NavLink>
                                <NavLink to="/" className="text-white text-decoration-none">
                                    <li class="nav_last"> Interest-Based Ads</li>
                                </NavLink>
                            </ul>
                            <span>©1996–2023, Amazon.com, Inc. or its affiliates</span>
                        </div>
                    </div>
                </div>
            </footer >
        </div >
    )
}
export default Footer
