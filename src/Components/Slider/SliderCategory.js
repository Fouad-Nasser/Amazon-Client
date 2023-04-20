import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/swiper-bundle.css";
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import './Slider.css';

const SliderCategory = ({ categoryID, flag }) => {
    // console.log(categoryID, " ", flag);
    const [product, setProduct] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:3000/products?categoryID=${categoryID}`).then((res) => {
            // console.log(res.data.data);
            setProduct(res.data.data)
        }).catch((err) => {
            console.log(err);
        })
    })

    const CheckSlider = product.map((item) => (
        (flag === false && < SwiperSlide key={item.id} >
            <span className='a-list-item-slider'>
                <NavLink to="/">
                    <img className='img-responsive' src={item.images}  />
                </NavLink>
            </span>
        </SwiperSlide >) ||
        (flag === true && < SwiperSlide key={item.id} style={{}}>
            {/* <h5 class="card-title">Card title</h5> */}
            <div className='container'>
                <div className='p-4'>
                    <div className="card">
                        <div className='row' id='footer__part'>
                            <div className='col-12'>
                                <div className='image__footer'>
                                    <img src={item.images} className="d-flex mx-auto justify-content-center img-responsive" alt="..." />
                                </div>
                                <div class="card-body">
                                    <NavLink to='/product' className='mb-1 text-decoration-none '>
                                        <h5 className="card-text title_Details_Data" style={{ marginBottom: '11px' }}>{item.name}</h5>
                                    </NavLink>
                                    <div>
                                        <div className="d-flex justify-content-between align-items-center">
                                            <div className="ratings" >
                                                <i className="fa fa-star rating-color"></i>
                                                <i className="fa fa-star rating-color" ></i>
                                                <i className="fa fa-star rating-color" ></i>
                                                <i className="fa fa-star rating-color" ></i>
                                                <i className="fa fa-star"></i>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='d-flex'>
                                        <p>{item.rating}</p>
                                        <span className='' style={{
                                            fontSize: '11px', paddingRight: '2px', top: '-0.3em'
                                        }}>EGP</span>
                                        <p className="card-text fw-bold">{item.price}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </SwiperSlide >
        )
    ));
    return (
        <Swiper
            modules={[Navigation]}
            spaceBetween={50}
            slidesPerView={1}
            navigation
            breakpoints={
                {
                    576: {
                        slidesPerView: 3,
                    },
                    // when window width is >= 768px
                    768: {
                        slidesPerView: 4,
                    },
                    // when window width is >= 1024px
                    1024: {
                        spaceBetween: 10,
                        slidesPerView: 4,
                    },
                    1280: {
                        slidesPerGroup: 2,
                        slidesPerView: 5,
                    },
                }
            }
        >
            {CheckSlider}
        </Swiper>
    );
}
export default SliderCategory