import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react'
import { Transition } from 'react-transition-group';

function Sidedropdown() {
    const [openDropDown, setOpenDropDown] = useState(false);
    const [catdata, setCategoryData] = useState([])

    useEffect(() => {
        axios.get('http://localhost:3000/categorys').then((res) => {
            console.log(res.data.data);
            setCategoryData(res.data.data)
        }).catch((err) => {
            console.log(err);
        })
    }, [])
    let arrowDirection = "fas fa-chevron-down";
    if (!openDropDown) {
        arrowDirection = "fas fa-chevron-down";
    } else {
        arrowDirection = "fas fa-chevron-up";
    }
    const CategoryData = catdata.slice(5, 16).map((item) => {
        return (
            <div className="sidenavRow">
                <div>{item.name}</div>
                <i className="fas fa-chevron-right mt-2"></i>
            </div>
        )
    })
    return (
        <div>
            <Transition
                mountOnEnter
                unmountOnExit
                in={openDropDown}
                timeout={{ enter: 300, exit: 200 }}>
                {state => (
                    <div className="sidenavContainer" style={state === "entering" ? { animation: "dropDown .3s forwards", height: `${27 * catdata.length}px` }
                        : state === "entered" ? { transform: "scaleY(1)", opacity: "1", height: `${27 * catdata.length}px` }
                            : { animation: "dropDown .2s reverse backwards", transition: "height 0.2s" }} >
                        <hr />
                        {CategoryData}
                    </div>
                )}
            </Transition>
            <div className="sidenavRowDropdown" onClick={() => setOpenDropDown(prevState => !prevState)}>
                {(() => {
                    if (openDropDown) {
                        return (
                            <div>See less</div>
                        )
                    } else {
                        return (
                            <div>See All</div>
                        )
                    }
                })()}
                <i className={arrowDirection}></i>
            </div>
        </div>
    )
}
export default Sidedropdown