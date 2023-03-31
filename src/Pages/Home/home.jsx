import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Carousel from 'react-bootstrap/Carousel';
import './Home.css'
import { NavLink } from 'react-router-dom';
import { Card, Row } from 'react-bootstrap';
import Slider from './../../Components/Slider/Slider';
import Footer from '../../Components/Footer/Footer';

function Home() {
    const [category, setCategory] = useState([]);
    const [product, setProduct] = useState([]);
    useEffect(() => {
        Promise.all([
            axios.get('http://localhost:3001/categorys').then((res) => {
                console.log(res.data.data);
                setCategory(res.data.data)
            }).catch((err) => {
                console.log(err);
            }),
            axios.get("http://localhost:3001/products").then((res) => {
                console.log(res.data.data);
                setProduct(res.data.data)
            }).catch((err) => {
                console.log(err);
            })
        ])
    }, [])
    const listRender = category.map((item) => (
        <div key={item.id}>
            <Card style={{ width: '22rem' }} className='bg-white text-dark mb-4'>
                <Card.Body>
                    <Card.Title>{item.name}</Card.Title>
                    <NavLink>
                        <Card.Img variant="top" style={{ width: '20rem', height: '17rem' }} src={item.image} />
                    </NavLink>
                    <NavLink className='mt-1 text-decoration-none '>
                        <span className='text-left see_More '>See more</span>
                    </NavLink>
                </Card.Body>
            </Card>
        </div>
    ))
    return (
        <div>
            <div className='home backgroundData' style={{ overflow: 'hidden', clear: 'both' }}>
                <div className="home__container">
                    <Carousel slide={true}>
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
                <div className='home-content'>
                    <div className="home__row">
                        <Row xs={1} md={4} className='m-4'>
                            {listRender}
                        </Row>
                    </div>
                </div>
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col-12'>
                            <div style={{ width: '91rem', marginLeft: '18px' }}>
                                <Card className='text-dark'>
                                    <Card.Body>
                                        <Card.Title className='card_title'>
                                            Large Appliances
                                            <span className='m-3 see_More'>See more</span>
                                        </Card.Title>
                                        <Slider slides={product} />
                                    </Card.Body>
                                </Card>
                            </div>
                        </div>
                    </div>
                    {/* Part SignUp */}
                    <div className='row bg-white mt-5'>
                        <hr className='mt-5' />
                        <div className='col-12'>
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
                    {/* btn Back to top */}
                </div>
            </div>
        </div >
    )
}

export default Home