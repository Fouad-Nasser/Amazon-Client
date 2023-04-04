import "./sell.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Col, Container, Row } from 'react-bootstrap';
import CardSell from "../../components/RightSign/CardSell";
import CardSellMore from "../../components/CardSellMore/Cards";
import {  NavLink } from "react-router-dom";



function Sell() {





    return (

        <>
            <div >

                <div className="TopPage">
                    <h4 style={{ fontWeight: "bolder" }}>Sell on Amazon</h4>
                    <div></div>

                    <NavLink to="/SignupS"> <Button id="button" style={{ width: "110px" }} >Sign up</Button></NavLink>
                </div>
            </div>



            <div className="Container">
                <Row >
                    <Col sm={6}>
                        <p style={{ fontSize: "85px", fontWeight: "bolder" }}>Become an Amazon seller</p>
                        <h5>The fastest-growing and preferred acquisition channel for over half our multichannel sellers.1</h5>
                        <NavLink to="/SignupS" ><Button id="button" style={{ marginTop: "40px", width: "180px", height: "60px", fontSize: "30px" }}>Sign up</Button></NavLink>

                    </Col>
                    <Col sm={6}>
                        <img src="https://m.media-amazon.com/images/G/01/sell/images/prime-boxes/prime-boxes-2-sm.pngg" alt="" style={{
                            width: "80vh",
                            height: "80vh"
                        }} />
                    </Col>
                </Row>
            </div >

            <div className="Container-2">
                <Row >
                    <Col sm={4}>
                        <img src="https://m.media-amazon.com/images/G/01/sell/images/illustration/illustration-growth-graph.svg" alt="" style={{
                            width: "80vh",
                            height: "63vh", marginLeft: "-20px"
                        }} />
                    </Col>
                    <Col sm={8}>
                        <Button style={{ width: "200px", height: "35px", fontSize: "16px", backgroundColor: "#008080" }}>New Seller  incentives</Button>

                        <p style={{ fontSize: "50px", fontWeight: "bolder" }}>Over $50K in potential benefits</p>
                        <h5>Ready to sell? Launch your brand today with a powerful playbook for new sellers and over $50K in potential benefits.</h5>
                        <div>
                            < CardSell
                                title="Get 5% back on your first $1,000,000 in branded sales"


                            />
                            < CardSell
                                title="Try FBA with free inbound shipping, storage, removals, and returns"

                            />
                            < CardSell
                                title="Get $200 credit for Sponsored Products CPC ads—bids are up to you"

                            />
                            < CardSell
                                title="Get a head start on brand protection, product reviews, and more"

                            />
                        </div>
                        <NavLink >
                            <span style={{ paddingLeft: "5vh" }}>Learn more</span>
                        </NavLink>
                    </Col>

                </Row>
            </div >

            <p style={{ fontSize: "70px", fontWeight: "bolder", marginLeft: "25%" }}>Sell more with Amazon</p>

            <Container >
                <Row >
                    <Col > < CardSellMore
                        imageSrc="https://m.media-amazon.com/images/G/01/sp-marketing-toolkit/guides/design/iconography/SOA_Desktop_Computer_USD._CB424651259_.svg"
                        title="They’re here, introduce yourself"
                        description="Hundreds of millions of worldwide active customer accounts. More than 200 million paid Prime members worldwide. Reduce the time, effort, and money you spend on customer acquisition with powerful ad products, unparalleled organic traffic, and a shopping experience that converts."

                    />

                    </Col>
                    <Col >
                        < CardSellMore
                            imageSrc="https://m.media-amazon.com/images/G/01/sp-marketing-toolkit/guides/design/iconography/Business_Growth._CB424651247_.svg"
                            title="Unrivaled scale, no cap"
                            description="Amazon customers buy roughly 7,400 products per minute from U.S. sellers. Build, grow, and scale your brand with our innovative toolkit: a proven customer experience, rich data insights, cutting-edge advertising & marketing solutions, and world-class logistics with Fulfillment by Amazon (FBA). There is no ceiling—how big do you want to go?"

                        />
                    </Col>
                </Row>
                <Row >
                    <Col > < CardSellMore
                        imageSrc="https://m.media-amazon.com/images/G/01/sp-marketing-toolkit/guides/design/iconography/Enhanced_Content._CB424651237_.svg"
                        title="Your brand experienced"
                        description="Connect your brand to millions of customers. Control the experience from discovery to your dedicated storefront, and from your product pages to their inboxes—Amazon customers following a brand spend more than double that of non-followers. Communicate your core values, build loyal relationships, and ignite your brand experience."

                    /></Col>
                    <Col >
                        < CardSellMore
                            imageSrc="https://m.media-amazon.com/images/G/01/sp-marketing-toolkit/guides/design/iconography/Chatting._CB424651247_.svg"
                            title="Your success supported"
                            description="Protect your brand and IP with powerful tools to defend against counterfeits and fraud, plus get critical performance metrics to monitor customer sentiment and ensure a top-tier, always-on brand experience. Get started with 1:1 Amazon seller onboarding support for insights to help you take your business to the next level"

                        />
                    </Col>
                </Row>
            </Container>

            <Container style={{ marginTop: "10vh", paddingBottom: "5vh", borderRadius: "30px", backgroundColor: "rgb(236, 236, 236)" }}>
                <p style={{ fontSize: "40px", fontWeight: "bolder", marginLeft: "15%" }}>Learn more about selling with Amazon</p>
                <Row>
                    <Col>
                        <ul style={{ paddingLeft: "20vh", listStyle: "none", }}>
                            <li>
                                Sell online: How to get started
                            </li>
                            <li>
                                The Beginner's Guide to Selling on Amazon
                            </li>
                            <li>
                                Grow your ecommerce business with Amazon
                            </li>
                            <li>
                                Build, grow, and protect your brand on Amazon
                            </li>
                            <li>
                                Build an online store featuring your brand
                            </li>
                            <li>
                                Watch free tutorial videos from Seller University
                            </li>
                        </ul>
                    </Col>

                    <Col>
                        <ul style={{ paddingLeft: "5vh", listStyle: "none", }}>
                            <li>

                                Get help from an Amazon account manager
                            </li>
                            <li>

                                How much does it cost to sell on Amazon?
                            </li>
                            <li>
                                Use FBA to scale your ecommerce business
                            </li>
                            <li>
                                Amazon Handmade, Amazon Business, and more
                            </li>
                            <li>

                                Advertise your products on Amazon
                            </li>
                            <li>

                                Advertise your products on Amazon
                            </li>
                        </ul>
                    </Col>
                </Row>
            </Container>
            <p style={{ fontSize: "50px", fontWeight: "bolder", marginLeft: "20%" }}>Introduction to ecommerce selling</p>

            <Container style={{}}>
                <Row >
                    <Col sm={4}> < CardSellMore
                        imageSrc="https://m.media-amazon.com/images/G/01/sp-marketing-toolkit/guides/design/iconography/Mobile_App.svg"
                        title="What is ecommerce?"
                        description="Electronic commerce (ecommerce) is the trading of goods and services on the internet. Learn about the advantages and disadvantages of this selling channel."

                    /></Col>
                    <Col sm={4}>
                        < CardSellMore
                            imageSrc="https://m.media-amazon.com/images/G/01/sp-marketing-toolkit/guides/design/iconography/Line_Chart.svg"
                            title="Build a business"
                            description="For entrepreneurs and growing businesses, ecommerce can be a profitable model to adapt either as the sole focus of your business, or as an additional selling channel."

                        />
                    </Col>
                    <Col sm={4} > < CardSellMore
                        imageSrc="https://m.media-amazon.com/images/G/01/sp-marketing-toolkit/guides/design/iconography/Delivery_Truck.svg"
                        title="Ecommerce fulfillment"
                        description="Ecommerce fulfillment is a vital ingredient to growing a successful online retail channel. Here’s what to consider when looking for an order fulfillment service."

                    /></Col>
                </Row>
                <Row >
                    <Col sm={4} > < CardSellMore
                        imageSrc="https://m.media-amazon.com/images/G/01/sp-marketing-toolkit/guides/design/iconography/Products_In_Boxes.svg"
                        title="Inventory management"
                        description="Maintaining the right amount of inventory to meet demand can help keep your business humming. Get effective inventory management tips for ecommerce business owners."

                    /></Col>
                    <Col sm={4} >
                        < CardSellMore
                            imageSrc="https://m.media-amazon.com/images/G/01/sp-marketing-toolkit/guides/design/iconography/Checklist.svg"
                            title="What is dropshipping?"
                            description="This guide covers the definition of dropshipping, how it works, pros and cons, related Amazon policies, and alternatives to consider for ecommerce businesses."

                        />
                    </Col>
                    <Col sm={4} > < CardSellMore
                        imageSrc="https://m.media-amazon.com/images/G/01/sp-marketing-toolkit/guides/design/iconography/Stores.svg"
                        title="Create an Amazon storefront"
                        description="Learn how to tell your brand story using Amazon tools. Build immersivei storefronts and customize product detail pages with rich media and content."

                    /></Col>
                </Row>
                <Row >
                    <Col sm={4} > < CardSellMore
                        imageSrc="https://m.media-amazon.com/images/G/01/sp-marketing-toolkit/guides/design/iconography/Books.svg"
                        title="Sell books on Amazon"
                        description="Learn how to sell used books, new books, or your own self-published books. We've got the steps to help you get started—and seven tips to help you succeed."

                    /></Col>
                    <Col sm={4} >
                        < CardSellMore
                            imageSrc="https://m.media-amazon.com/images/G/01/sp-marketing-toolkit/guides/design/iconography/Seller_University._CB424651257_.svg"
                            title="Seller University"
                            description="Our online training program is designed to help brands, businesses, and entrepreneurs learn how to succeed as Amazon selling partners."

                        />
                    </Col>
                    <Col sm={4}>
                        < CardSellMore
                            imageSrc="https://m.media-amazon.com/images/G/01/sp-marketing-toolkit/guides/design/iconography/Spotlight._CB424651253_.svg"
                            title="Amazon Selling Partner Blog"
                            description="Read updates, articles, and stories about getting started in ecommerce and growing your business in Amazon stores."

                        />
                    </Col>
                </Row>
            </Container>
            <div className="text">
                <p >
                    Just have a few items to sell?</p>
                <NavLink to="/SignupS">

                    <p style={{ fontSize: "15px", fontWeight: "bolder", marginLeft: ".8rem" }}>
                        Sign up to become an individual seller</p>

                </NavLink>
            </div>

            <div className="Container-3">
                <Row >
                    <Col sm={6}>
                        <p style={{ fontSize: "60px", fontWeight: "bolder" }}>Start selling today</p>
                        <h5>Put your products in front of the millions of customers who search Amazon.com every day.</h5>

                        <NavLink to="/SignupS">
                            <Button id="button" style={{ marginTop: "40px", width: "170px", height: "60px", fontSize: "30px" }}>Sign up</Button>

                        </NavLink>
                    </Col>
                    <Col sm={6}>
                        <img src="https://m.media-amazon.com/images/G/01/sell/images/prime-boxes/prime-boxes-6-sm.png" alt="" style={{
                            width: "60vh",
                            height: "60vh", marginLeft: "100px",
                        }} />
                    </Col>
                </Row>
            </div >
            <p style={{ fontSize: "11px", fontWeight: "bolder", marginLeft: "70vh", marginTop: "30px", opacity: ".5" }}>
                Amazon internal data, FY2021 survey of 21.2K U.S. multichannel sellers</p>
        </>
    )
}

export default Sell