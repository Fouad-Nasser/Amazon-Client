import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/swiper-bundle.css";
import { NavLink } from 'react-router-dom';
// import { Navigation } from 'swiper';


const Slider = (Data) => {
    console.log(Data.slides.length);
    // var products = Data.slides;

    var products = Data.slides.splice(4, Data.slides.length);
    return (
        <Swiper
            modules={[Navigation]}
            spaceBetween={20}
            slidesPerView={5}
            navigation
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
        >
            {products.map((item) => (
                < SwiperSlide key={item.id} >
                    <NavLink to="/">
                        <img style={{ width: '15rem', height: "10rem" }} src={item.images} />
                    </NavLink>
                </SwiperSlide>
            ))
            }
        </Swiper>
    );
}
export default Slider