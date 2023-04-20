import React, { useLayoutEffect } from 'react'
import './Sidenavbar.css'
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import Sidedropdown from '../SideDropDown/Sidedropdown';
import SidebarSubdropdown from '../SidebarSubDropdown/SidebarSubdropdown';

function Sidenavbar(props) {
    const [catdata, setCategoryData] = useState([])
    const [subcategory, setSubCategory] = useState('')

    useEffect(() => {
        axios.get('http://localhost:3000/categorys').then((res) => {
            // console.log(res.data.data);
            setCategoryData(res.data.data)
        }).catch((err) => {
            console.log(err);
        })
        // axios.get('http://localhost:3000/products').then((res) => {
        //     // console.log(res.data.data);
        //     setSubCategory(res.data.data)
        // }).catch((err) => {
        //     console.log(err);
        // })
    }, [])

    const categoryData = catdata.slice(0, 4).map((item) => {
        return (
            <>
                <div className="sidenavRow" key={item._id}>
                    <div onClick={() => setSubCategory(item._id)}>{item.name}</div>
                    <i className="fas fa-chevron-right mt-2"></i>
                </div>
                {subcategory && <SidebarSubdropdown CategoryID={item} />}
            </>
        )
    })

    return (
        <div className='sidenav' style={props.state === "entering" ? { animation: "moveSideBar .3s forwards" } : props.state === "entered" ?
            { transform: "translateX(-0px)" } : { animation: "moveSideBar .3s reverse backwards" }}>
            <div className="sidenavHeader">
                <NavLink to='/SignIn' className='text-decoration-none text-white'>
                    <i className="fas fa-user-circle"></i> Hello, Sign In
                </NavLink>
            </div>
            <div className="sideNavContainer">
                <div className='sidenavContentHeader'>
                    {/* Part 1 */}
                    Trending
                    <div className="sidenavRow ">
                        <div>Best Seller</div>
                        <i className="fas fa-chevron-right mt-2"></i>
                    </div>
                    <div className="sidenavRow">
                        <div>Release</div>
                        <i className="fas fa-chevron-right mt-2"></i>
                    </div>
                    <hr />
                </div>
                <div className='sidenavContentHeader'>
                    Shop By Category
                    <div>
                        {categoryData}
                        <Sidedropdown />
                    </div>
                    <hr />
                </div>
                <div className='sidenavContentHeader'>
                    Programs & Features
                    <div className="sidenavRow ">
                        <NavLink to='/' className='text-decoration-none text-black'>
                            <div>Today's Deals</div>
                        </NavLink>
                    </div>
                    <hr />
                </div>
                <div className='sidenavContentHeader'>
                    Help & Settings
                    <div className="sidenavRow ">
                        <NavLink to='/Account' className='text-decoration-none text-black'>
                            <div>Your Account</div>
                        </NavLink>
                    </div>

                    <div className="sidenavRow ">
                        <NavLink to='/Account' className='text-decoration-none text-black d-flex '>
                            <i className="fas fa-globe fa-lg" style={{ color: '#aab0bb' }}></i>
                            <div style={{ marginLeft: '12px', marginTop: '-1px' }}>English</div>
                        </NavLink>
                    </div>
                    <div className="sidenavRow ">
                        <NavLink to='/Account' className='text-decoration-none text-black d-flex '>
                            <img src="https://cdn3.iconfinder.com/data/icons/finalflags/256/Egypt-Flag.png" style={{ width: '20px' }} />
                            <div style={{ marginLeft: '12px', marginTop: '-1px' }}>Egypt</div>
                        </NavLink>
                    </div>
                    <div className="sidenavRow ">
                        <NavLink to='/SignIn' className='text-decoration-none text-black'>
                            <div>Help</div>
                        </NavLink>
                    </div>
                    <div className="sidenavRow ">
                        <NavLink to='/SignIn' className='text-decoration-none text-black'>
                            <div>Sign in</div>
                        </NavLink>
                    </div>
                    <hr />
                </div>
                <div style={{ marginBottom: ' 50px' }}></div>
            </div>
        </div>
    )
}
export default Sidenavbar