import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Carousel from 'react-bootstrap/Carousel';
import './Home.css'
import { NavLink } from 'react-router-dom';
import { Card, Row } from 'react-bootstrap';
import Slider from '../../Components/Slider/SliderCategory';
import CardData from '../../Components/CardData/CardData';
import SliderCategory from '../../Components/Slider/SliderCategory';
import SliderFooter from '../../Components/Slider/SliderFooter';

function Home() {
    const [category, setCategory] = useState([]);
    // const [product, setProduct] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:3000/categorys').then((res) => {
            console.log(res.data.data);
            setCategory(res.data.data)
        }).catch((err) => {
            console.log(err);
        })
    }, [])
    return (
        <div>
            <div className='home backgroundData' style={{ overflow: 'hidden', clear: 'both' }}>
                {/* Carousel Part */}
                <div className="home__container row">
                    <Carousel slide={true} className='col-12'>
                        <Carousel.Item interval={1000}>
                            <img
                                className="d-block w-100 home__image"
                                src="https://m.media-amazon.com/images/I/71bcYN6wsrL._SX3000_.jpg"
                                alt="First slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item interval={1000}>
                            <img
                                className="d-block w-100 home__image"
                                src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
                                alt="First slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item interval={1000}>
                            <img
                                className="d-block w-100 home__image"
                                src="https://m.media-amazon.com/images/I/61rqgjwR2gL._SX3000_.jpg"
                                alt="Second slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100 home__image"
                                src="https://m.media-amazon.com/images/I/61DUO0NqyyL._SX3000_.jpg"
                                alt="Third slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item><Carousel.Item>
                            <img
                                className="d-block w-100 home__image"
                                src="https://m.media-amazon.com/images/I/71qid7QFWJL._SX3000_.jpg"
                                alt="Third slide"
                            />
                        </Carousel.Item>
                            <img
                                className="d-block w-100 home__image"
                                src="https://m.media-amazon.com/images/I/71PGj+t64KL._SX3000_.jpg"
                                alt="Third slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item interval={1000}>
                            <img
                                className="d-block w-100 home__image"
                                src="https://m.media-amazon.com/images/I/7102I1D+77L._SX3000_.jpg"
                                alt="First slide"
                            />
                        </Carousel.Item>
                    </Carousel>
                </div>
                {/* Category Part 1 */}
                <div className="home__row">
                    <Row xs={3} md={4} sm={3} className='m-4'>
                        {category.slice(0, 8).map((item) => (
                            <CardData item={item} />
                        ))}
                    </Row>
                </div>
                {/*Slider Part 1*/}
                <div className='container-fluid mb-3'>
                    <div className='row'>
                        <div className='col-12'>
                            <div style={{ width: '91rem', marginLeft: '18px' }}>
                                <Card className='text-dark'>
                                    <Card.Body>
                                        <Card.Title className='card_title'>
                                            Large Appliances
                                            <span className='m-3 see_More'>See more</span>
                                        </Card.Title>
                                        {/* Kitchen essentials Category */}
                                        <SliderCategory categoryID='64233ff9213d64eea40879d3' flag={false} />
                                    </Card.Body>
                                </Card>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Category Part 2 */}
                <div>
                    <Row xs={3} md={4} sm={3} className='m-4' >
                        {category.slice(8, 12).map((item) => (
                            <CardData item={item} />
                        ))}
                    </Row>
                </div>
                {/*Slider Part 2*/}
                <div className='container-fluid mb-3'>
                    <div className='row'>
                        <div className='col-12'>
                            <div style={{ width: '91rem', marginLeft: '18px' }} >
                                <Card className='text-dark'>
                                    <Card.Body>
                                        <Card.Title className='card_title'>
                                            Frequently repurchased in Beauty & Personal Care
                                            <span className='m-3 see_More'>See more</span>
                                        </Card.Title>
                                        {/* Beauty Category */}
                                        <SliderCategory categoryID='642c7a29d5411cb75202c639' flag={false} />
                                    </Card.Body>
                                </Card>
                            </div>
                        </div>
                    </div>
                </div>
                {/*Slider Part 3*/}
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col-12'>
                            <div style={{ width: '91rem', marginLeft: '18px' }} >
                                <Card className='text-dark'>
                                    <Card.Body>
                                        <Card.Title className='card_title'>
                                            Frequently repurchased in Beauty & Personal Care
                                            {/* <span className='m-3 see_More'>See more</span> */}
                                        </Card.Title>
                                        {/* Food Product */}
                                        <SliderCategory categoryID='642dcc3e2ae53d421296f949' flag={false} />
                                    </Card.Body>
                                </Card>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Part SignUp */}
                <div className='row bg-white mt-5'>
                    <hr className='mt-5' />
                    <SliderCategory categoryID='642c7a29d5411cb75202c639' flag={true} />
                    {/* <SliderFooter categoryID='642dcc3e2ae53d421296f949'/> */}
                    <hr className='mt-5' />
                    <div className='text-center'>
                        <span className='text-footer'>See personalized recommendations</span>
                        <NavLink to="/SignIn" className="text-decoration-none">
                            <p className='loginbtn m-2 p-1' width='50px'>Sign in</p>
                        </NavLink>
                        <div>
                            <span className='text-footer'>
                                New customer?
                                <NavLink to="/SignUp" className='p-2 text-decoration-none see_More'>Start here.</NavLink>
                            </span>
                        </div>
                        <hr className='mt-4' />
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Home