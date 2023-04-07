import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';
import Swiper, { Navigation } from 'swiper';
import { SwiperSlide } from 'swiper/react';

const SliderFooter = ({ categoryID }) => {
    console.log(categoryID);
    const [product, setProduct] = useState([]);
    useEffect(() => {
        axios.get(`http://localhost:3000/products?categoryID=${categoryID}`).then((res) => {
            console.log(res.data.data);
            setProduct(res.data.data)
        }).catch((err) => {
            console.log(err);
        })
    })
    return (
        <Swiper
            modules={[Navigation]}
            // spaceBetween={20}
            slidesPerView={1}
            navigation
            breakpoints={
                {
                    576: {
                        slidesPerView: 1,
                    },
                    // when window width is >= 768px
                    768: {
                        slidesPerView: 3,
                    },
                    // when window width is >= 1024px
                    1024: {
                        spaceBetween: 10,
                        slidesPerView: 3,
                    },
                    1280: {
                        slidesPerGroup: 2,
                        slidesPerView: 5,
                    },
                }
            }
            onSlideChange={() => console.log('slide change')}
        >
            {product.map((item) => (
                < SwiperSlide key={item.id} >
                    <span className='a-list-item-slider'>
                        <NavLink to="/">
                            <img className='product-image' src={item.images} />
                        </NavLink>
                    </span>
                </SwiperSlide>
            ))
            }
        </Swiper>
    );
}

export default SliderFooter;