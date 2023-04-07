import React from "react"
import { Col, Form, Nav, Row, Tab, Tabs } from "react-bootstrap"
import { Link } from "react-router-dom"
import "./Order.css"
import ReactSearchBox from "react-search-box";
import OrderCard from "../../Components/OrderCard/OrderCard";
const Order = () => {
    var data = [
        {
            key: "toys",
            value: "toys and dolls",
        },
        {
            key: "makup",
            value: "makeup",
        },
        {
            key: "toys",
            value: "toys and dolls",
        },
        {
            key: "toys",
            value: "toys and dolls",
        },
        {
            key: "Clothes",
            value: "men clothes",
        },
        {
            key: "Clothes",
            value: "women clothes",
        },
        {
            key: "baby",
            value: "baby clothes",
        },
        {
            key: "Clothes",
            value: "all clothes",
        },
    ];
    return (
        <>
            <div className="container">
                <Row id="RowTitleOrder">
                    <div><Link id="LinkitleOrder" to={"/Account"}>Your Account</Link> {'>'} <span id="spanTitleOrder"> Your Orders</span></div>
                </Row>
                <Row className="mt-4">
                    <Col>
                        <h3>Your Orders</h3>
                    </Col>
                    <Col xs={5}></Col>
                    <Col>
                        <div id="searchAndButton">
                            <div id="searchTest" >
                                <ReactSearchBox
                                    placeholder="Search All Orders"
                                    value="Doe"
                                    data={data}
                                    callback={(record) => console.log(record)}

                                />
                            </div>
                            <div >
                                <a href="#" class="myButton3 buttonserachOrder">Search Orders</a>
                            </div>
                        </div>
                    </Col>
                </Row>

                <Row>
                    <Row>
                        <Tabs
                            defaultActiveKey="profile"
                            id="fill-tab-example"
                            className="mb-3"
                            fill
                        >
                            <Tab eventKey="home" title="Orders">
                                <Row>
                                    <Col xs={2}><p><h6><b>3 orders </b>placed in</h6> </p>

                                    </Col>
                                    <Col xs={2}>
                                        <Form.Select size="sm" className="FormSelectOrder">
                                            <option>Past <b>3 months</b></option>
                                            <option>2023</option>
                                            <option>2022</option>
                                            <option>2021</option>
                                            <option>2020</option>
                                            <option>2019</option>
                                            <option>Archived Orders</option>
                                        </Form.Select>
                                    </Col>
                                    <Col xs={6}></Col>
                                </Row>
                                <Row id="sentnceInOrder">

                                    <div className="orderCardOrder">
                                        <OrderCard
                                            date="Aug 23 , 2022"
                                            total="25.6"
                                            price="22.99"
                                            diliverdDate="Sep 21, 2022"
                                            shippedTo="Fouad Nasser"
                                            productName="T-shirt"
                                            soldBy="Osama Barakat"
                                            imgUrl="https://m.media-amazon.com/images/I/71HXm-2zusL._AC_SX522._SX._UX._SY._UY_.jpg"
                                        />
                                    </div>
                                    <div className="orderCardOrder">
                                        <OrderCard
                                            date="Jan 13 , 2023"
                                            total="35.6"
                                            price="33.99"
                                            diliverdDate="feb 1, 2023"
                                            shippedTo="Youssef Shaaban"
                                            productName="T-shirt"
                                            soldBy="Beshoy"
                                            imgUrl="https://m.media-amazon.com/images/I/81SnF8wV47S._AC_UY741_.jpg"
                                        />
                                    </div>
                                    <div className="orderCardOrder">
                                        <OrderCard
                                            date="Aug 23 , 2022"
                                            total="25.6"
                                            price="22.99"
                                            diliverdDate="Sep 21, 2022"
                                            shippedTo="Radwa"
                                            productName="womens top"
                                            soldBy="Osama Barakat"
                                            imgUrl="https://m.media-amazon.com/images/I/61df6KHBOwL._AC_UY741_.jpg"
                                        />
                                    </div>



                                </Row>

                            </Tab>
                            <Tab eventKey="profile" title="Buy Again">
                                <Row id="sentnceInOrder">

                                    <h6> Looks like you haven't placed an order in the last 3 months. <Link>View orders in 2023</Link></h6>

                                </Row>
                            </Tab>
                            <Tab eventKey="Not-yet-Shipped" title="Not yet Shipped">
                                <h1>3decvfgbferwf</h1>
                            </Tab>
                            <Tab eventKey="Digital-Orders" title="Digital Orders">
                                <h1>3decvfgbferwf</h1>
                            </Tab>
                            <Tab eventKey="Local-Store-Orders" title="Local Store Orders">
                                <h1>3decvfgbferwf</h1>
                            </Tab>
                            <Tab eventKey="Cancelled-Orders" title="Cancelled Orders">
                                <h1>3decvfgbferwf</h1>
                            </Tab>

                        </Tabs>
                    </Row>
                </Row>
            </div>
        </>
    )
}
export default Order