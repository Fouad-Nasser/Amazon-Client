
import 'bootstrap/dist/css/bootstrap.min.css';
import "./CustomerS.css"
import Nav from 'react-bootstrap/Nav';
import ReuseableHelp from "../../component/ReuseableHelp/ReuseableHelp";
import ReuseableService from "../../component/ReuseableService/ReuseableService";
import { Col, Container, Form, NavLink, Row } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import Tab from 'react-bootstrap/Tab';
// import { useSelector } from 'react-redux';



const CustomerService = () => {

    const navigate = useNavigate()
    const handelNavigation = () => {
        navigate("/Home")

    }

    // const {username} = useSelector((state) => state.user);

    return (
        <>
            <header className="navbar-header" >
                <NavLink className='text-decoration-none ' style={{ paddingRight: "5vh" }} >
                    <span className='customer-service' href="#">Customer Service</span>
                </NavLink>|
                <NavLink className='CustomerHome' style={{ paddingLeft: "8vh" }}>
                    <span className='customer-home' onClick={() => { handelNavigation() }}>Home</span>
                </NavLink>
            </header>
            <div className=" top-container">
                <Container >
                    <div className="service-body">
                        <h2>Welcome to Amazon Customer Service,{/*const {username} = useSelector(state=> state.yourReducerName)
                        */}</h2>
                        <p>What would you like help with today? You can quickly take care of most things here, or connect with us when needed.
                        </p>
                        <Row>
                            <Col l={4}>
                                <Link to={""}>
                                    <ReuseableService
                                        imgsrc="https://m.media-amazon.com/images/G/01/x-locale/cs/help/images/gateway/self-service/fshub/fshub_order_v2.png"
                                        title="A delivery, order or return"

                                    /> </Link> </Col>
                            <Col l={4}>
                                <Link to={""}>
                                    <ReuseableService
                                        imgsrc="https://m.media-amazon.com/images/G/01/x-locale/cs/help/images/gateway/self-service/fshub/fshub_AIS.png"
                                        title="International shopping"

                                    />  </Link></Col>
                            <Col l={4}> <Link to={""}>
                                <ReuseableService
                                    imgsrc="https://m.media-amazon.com/images/G/01/x-locale/cs/help/images/gateway/self-service/fshub/fshub_paymentgc_v2.png"
                                    title="
                                Payment, charges or gift cards"
                                /> </Link></Col>

                        </Row>

                        <Row>
                            <Col l={4}>
                                <Link to={""} >
                                    <ReuseableService
                                        imgsrc="https://m.media-amazon.com/images/G/01/x-locale/cs/help/images/gateway/self-service/fshub/fshub_login_security_v2.png"
                                        title="Login, address, security & privacy"

                                    />
                                </Link>
                            </Col>
                            <Col l={4}>
                                <Link to={""}><ReuseableService
                                    imgsrc="https://m.media-amazon.com/images/G/01/x-locale/cs/help/images/gateway/self-service/fshub/fshub_device_v2.png"
                                    title="Kindle, Fire or Alexa device"

                                /></Link></Col>
                            <Col l={4}> <Link to={""}><ReuseableService
                                imgsrc="https://m.media-amazon.com/images/G/01/x-locale/cs/help/images/gateway/self-service/fshub/fshub_paymentgc_v2.png"
                                title="eBooks, Prime Videos or Music"

                            /></Link></Col>

                        </Row>

                        <Row>
                            <Col l={4}>
                                <Link to={""} >
                                    <ReuseableService
                                        imgsrc="https://m.media-amazon.com/images/G/01/x-locale/cs/help/images/gateway/self-service/fshub/fshub_login_security_v2.png"
                                        title="Prime"

                                    />
                                </Link>
                            </Col>
                            <Col l={4}>
                                <Link to={""}><ReuseableService
                                    imgsrc="https://m.media-amazon.com/images/G/01/x-locale/cs/help/images/gateway/self-service/fshub/fshub_device_v2.png"
                                    title="Memberships,Subscriptions or communications"

                                /></Link></Col>
                            <Col l={4}> <Link to={""}><ReuseableService
                                imgsrc="https://m.media-amazon.com/images/G/01/x-locale/cs/help/images/gateway/self-service/fshub/fshub_paymentgc_v2.png"
                                title="eBooks, Prime Videos or Music"

                            /></Link></Col>

                        </Row>
                    </div>
                </Container>
            </div>


            <div className="bottom-container">
                <body className="body-H" >
                    <Form className="search">
                        Search our help library
                        <Form.Control style={{ marginTop: "10px" }}
                            type="search"
                            placeholder="Type something like, 'Question about charge'"
                            className="me-2"
                            aria-label="Search our help library"
                        />
                    </Form>
                    <h5 style={{ marginTop: "8vh" }}>All help topics</h5>

                    <div className="all-helps">

                        <section className="Hsidebar">

                            <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                                <Row>
                                    <Col sm={3}>
                                        <Nav variant="pills" id="tabs" className="flex-column">
                                            <Nav.Item>
                                                <Nav.Link eventKey="1">
                                                    Recommended Topics</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey="2">
                                                    Where's my stuff</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey="3">
                                                    Shipping and Delivery</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey="4">
                                                    Returns and Refunds</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey="5">
                                                    Managing Your Account</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey="6">

                                                    Security & Privacy</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey="7">

                                                    Payment, Pricing and Promotions</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey="8">

                                                    Devices & Digital Solutions</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey="9">
                                                    Other topics & Help sites</Nav.Link>
                                            </Nav.Item>

                                        </Nav>
                                    </Col>
                                    <Col sm={9}>

                                        <Tab.Content >
                                            <Tab.Pane eventKey="1" >
                                                <Row>
                                                    <Col sm={7}>
                                                        <ReuseableHelp
                                                            title='Find a missing package that shows as "Delivered"'
                                                            description="Most packages arrive on time, but, sometimes, the tracking may show as 'delivered' and you don't have your package."
                                                        />
                                                    </Col>
                                                    <Col sm={2}>
                                                        <ReuseableHelp
                                                            title='Late Deliveries'
                                                            description="Most packages arrive on time. Orders sometimes show up after the estimated delivery date."
                                                        />
                                                    </Col>
                                                </Row>

                                                <Row >
                                                    <Col sm={7}>
                                                        <ReuseableHelp
                                                            title='Track your package'
                                                            description="You can find tracking information in your order details. If an order includes multiple items, each may have separate delivery dates and tracking information."
                                                        />
                                                    </Col>
                                                    <Col sm={2}>
                                                        <ReuseableHelp
                                                            title='Check status of a refund'
                                                            description="You can check the status of your refund in Your Orders ."
                                                        />
                                                    </Col>
                                                </Row>

                                                <Row >
                                                    <Col sm={7}>
                                                        <ReuseableHelp
                                                            title='Find a missing item from your package'
                                                            description="If an item is missing from your package, it may have been shipped separately."
                                                        />
                                                    </Col>
                                                    <Col sm={2}>
                                                        <ReuseableHelp
                                                            title='Replace an item'
                                                            description="Replace an item"
                                                        />
                                                    </Col>
                                                </Row>

                                                <Row >
                                                    <Col sm={7}>
                                                        <ReuseableHelp
                                                            title='Cancel Items or Orders'
                                                            description="You can cancel items or orders that haven't entered the shipping process yet."
                                                        />
                                                    </Col>

                                                </Row>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="2" >
                                                <Row >
                                                    <Col sm={7}>
                                                        <ReuseableHelp
                                                            title='Find a missing package that shows as "Delivered"'
                                                            description="Most packages arrive on time, but, sometimes, the tracking may show as 'delivered' and you don't have your package."
                                                        />
                                                    </Col>
                                                    <Col sm={2}>
                                                        <ReuseableHelp
                                                            title='Late Deliveries"'
                                                            description="Most packages arrive on time. Orders sometimes show up after the estimated delivery date."
                                                        />
                                                    </Col>
                                                </Row>
                                                <Row >
                                                    <Col sm={7}>
                                                        <ReuseableHelp
                                                            title='Undeliverable Packages'
                                                            description="Undeliverable Packages"
                                                        />
                                                    </Col>
                                                    <Col sm={2}>
                                                        <ReuseableHelp
                                                            title='Find a missing item from your package'
                                                            description="If an item is missing from your package, it may have been shipped separately."
                                                        />
                                                    </Col>
                                                </Row>
                                                <Row >
                                                    <Col sm={7}>
                                                        <ReuseableHelp
                                                            title="More in Where's my Stuff"
                                                            description=""
                                                        />
                                                    </Col>

                                                </Row>
                                            </Tab.Pane>

                                            <Tab.Pane eventKey="3" >
                                                <Row >
                                                    <Col sm={7}>
                                                        <ReuseableHelp
                                                            title='Carrier Contact Information'
                                                            description="We work with the following carriers to deliver items. If you have an issue with your delivery, you can contact the carriers directly."
                                                        />
                                                    </Col>
                                                    <Col sm={2}>
                                                        <ReuseableHelp
                                                            title='International Free Shipping"'
                                                            description="If your order meets certain requirements and you're shipping to an eligible international destination, you can select the FREE AmazonGlobal Standard Shipping option during checkout."
                                                        />
                                                    </Col>
                                                </Row>
                                                <Row >
                                                    <Col sm={7}>
                                                        <ReuseableHelp
                                                            title='About Import Fees Deposit'
                                                            description="AmazonGlobal offer customers customs duties, taxes and fees (Import Fees) estimation during checkout and customs clearance on your behalf for certain eligible countries and regions."
                                                        />
                                                    </Col>
                                                    <Col sm={2}>
                                                        <ReuseableHelp
                                                            title='About Customs Regulations for Identity Documents'
                                                            description="When you place an order for a product from Amazon.com, Identity Documents (ID information) may be required for customs clearance."
                                                        />
                                                    </Col>
                                                </Row>
                                                <Row >
                                                    <Col sm={7}>
                                                        <ReuseableHelp
                                                            title="About Customs, Duties and Taxes"
                                                            description="When ordering from Amazon.com, you're responsible for assuring the product can be lawfully imported to the destination."
                                                        />
                                                    </Col>

                                                </Row>
                                                <Row >
                                                    <Col sm={7}>
                                                        <ReuseableHelp
                                                            title="More information on Shipping and Delivery"
                                                            description=""
                                                        />
                                                    </Col>

                                                </Row>
                                            </Tab.Pane>

                                            <Tab.Pane eventKey="4" >
                                                <Row >
                                                    <Col sm={7}>
                                                        <ReuseableHelp
                                                            title='Carrier Contact Information'
                                                            description="We work with the following carriers to deliver items. If you have an issue with your delivery, you can contact the carriers directly."
                                                        />
                                                    </Col>
                                                    <Col sm={2}>
                                                        <ReuseableHelp
                                                            title='International Free Shipping"'
                                                            description="If your order meets certain requirements and you're shipping to an eligible international destination, you can select the FREE AmazonGlobal Standard Shipping option during checkout."
                                                        />
                                                    </Col>
                                                </Row>
                                                <Row >
                                                    <Col sm={7}>
                                                        <ReuseableHelp
                                                            title='About Import Fees Deposit'
                                                            description="AmazonGlobal offer customers customs duties, taxes and fees (Import Fees) estimation during checkout and customs clearance on your behalf for certain eligible countries and regions."
                                                        />
                                                    </Col>
                                                    <Col sm={2}>
                                                        <ReuseableHelp
                                                            title='About Customs Regulations for Identity Documents'
                                                            description="When you place an order for a product from Amazon.com, Identity Documents (ID information) may be required for customs clearance."
                                                        />
                                                    </Col>
                                                </Row>
                                                <Row >
                                                    <Col sm={7}>
                                                        <ReuseableHelp
                                                            title="About Customs, Duties and Taxes"
                                                            description="When ordering from Amazon.com, you're responsible for assuring the product can be lawfully imported to the destination."
                                                        />
                                                    </Col>

                                                </Row>
                                                <Row >
                                                    <Col sm={7}>
                                                        <ReuseableHelp
                                                            title="More information on Shipping and Delivery"
                                                            description=""
                                                        />
                                                    </Col>

                                                </Row>
                                            </Tab.Pane>

                                            <Tab.Pane eventKey="5" >
                                                <Row >
                                                    <Col sm={7}>
                                                        <ReuseableHelp
                                                            title='Carrier Contact Information'
                                                            description="We work with the following carriers to deliver items. If you have an issue with your delivery, you can contact the carriers directly."
                                                        />
                                                    </Col>
                                                    <Col sm={2}>
                                                        <ReuseableHelp
                                                            title='International Free Shipping"'
                                                            description="If your order meets certain requirements and you're shipping to an eligible international destination, you can select the FREE AmazonGlobal Standard Shipping option during checkout."
                                                        />
                                                    </Col>
                                                </Row>
                                                <Row >
                                                    <Col sm={7}>
                                                        <ReuseableHelp
                                                            title='About Import Fees Deposit'
                                                            description="AmazonGlobal offer customers customs duties, taxes and fees (Import Fees) estimation during checkout and customs clearance on your behalf for certain eligible countries and regions."
                                                        />
                                                    </Col>
                                                    <Col sm={2}>
                                                        <ReuseableHelp
                                                            title='About Customs Regulations for Identity Documents'
                                                            description="When you place an order for a product from Amazon.com, Identity Documents (ID information) may be required for customs clearance."
                                                        />
                                                    </Col>
                                                </Row>
                                                <Row >
                                                    <Col sm={7}>
                                                        <ReuseableHelp
                                                            title="About Customs, Duties and Taxes"
                                                            description="When ordering from Amazon.com, you're responsible for assuring the product can be lawfully imported to the destination."
                                                        />
                                                    </Col>

                                                </Row>
                                                <Row >
                                                    <Col sm={7}>
                                                        <ReuseableHelp
                                                            title="More information on Shipping and Delivery"
                                                            description=""
                                                        />
                                                    </Col>

                                                </Row>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="6" >
                                                <Row >
                                                    <Col sm={7}>
                                                        <ReuseableHelp
                                                            title='Carrier Contact Information'
                                                            description="We work with the following carriers to deliver items. If you have an issue with your delivery, you can contact the carriers directly."
                                                        />
                                                    </Col>
                                                    <Col sm={2}>
                                                        <ReuseableHelp
                                                            title='International Free Shipping"'
                                                            description="If your order meets certain requirements and you're shipping to an eligible international destination, you can select the FREE AmazonGlobal Standard Shipping option during checkout."
                                                        />
                                                    </Col>
                                                </Row>
                                                <Row >
                                                    <Col sm={7}>
                                                        <ReuseableHelp
                                                            title='About Import Fees Deposit'
                                                            description="AmazonGlobal offer customers customs duties, taxes and fees (Import Fees) estimation during checkout and customs clearance on your behalf for certain eligible countries and regions."
                                                        />
                                                    </Col>
                                                    <Col sm={2}>
                                                        <ReuseableHelp
                                                            title='About Customs Regulations for Identity Documents'
                                                            description="When you place an order for a product from Amazon.com, Identity Documents (ID information) may be required for customs clearance."
                                                        />
                                                    </Col>
                                                </Row>
                                                <Row >
                                                    <Col sm={7}>
                                                        <ReuseableHelp
                                                            title="About Customs, Duties and Taxes"
                                                            description="When ordering from Amazon.com, you're responsible for assuring the product can be lawfully imported to the destination."
                                                        />
                                                    </Col>

                                                </Row>
                                                <Row >
                                                    <Col sm={7}>
                                                        <ReuseableHelp
                                                            title="More information on Shipping and Delivery"
                                                            description=""
                                                        />
                                                    </Col>

                                                </Row>
                                            </Tab.Pane>

                                            <Tab.Pane eventKey="7" >
                                                <Row >
                                                    <Col sm={7}>
                                                        <ReuseableHelp
                                                            title='Carrier Contact Information'
                                                            description="We work with the following carriers to deliver items. If you have an issue with your delivery, you can contact the carriers directly."
                                                        />
                                                    </Col>
                                                    <Col sm={2}>
                                                        <ReuseableHelp
                                                            title='International Free Shipping"'
                                                            description="If your order meets certain requirements and you're shipping to an eligible international destination, you can select the FREE AmazonGlobal Standard Shipping option during checkout."
                                                        />
                                                    </Col>
                                                </Row>
                                                <Row >
                                                    <Col sm={7}>
                                                        <ReuseableHelp
                                                            title='About Import Fees Deposit'
                                                            description="AmazonGlobal offer customers customs duties, taxes and fees (Import Fees) estimation during checkout and customs clearance on your behalf for certain eligible countries and regions."
                                                        />
                                                    </Col>
                                                    <Col sm={2}>
                                                        <ReuseableHelp
                                                            title='About Customs Regulations for Identity Documents'
                                                            description="When you place an order for a product from Amazon.com, Identity Documents (ID information) may be required for customs clearance."
                                                        />
                                                    </Col>
                                                </Row>
                                                <Row >
                                                    <Col sm={7}>
                                                        <ReuseableHelp
                                                            title="About Customs, Duties and Taxes"
                                                            description="When ordering from Amazon.com, you're responsible for assuring the product can be lawfully imported to the destination."
                                                        />
                                                    </Col>

                                                </Row>
                                                <Row >
                                                    <Col sm={7}>
                                                        <ReuseableHelp
                                                            title="More information on Shipping and Delivery"
                                                            description=""
                                                        />
                                                    </Col>

                                                </Row>
                                            </Tab.Pane>
                                            
                                            <Tab.Pane eventKey="8" >
                                                <Row >
                                                    <Col sm={7}>
                                                        <ReuseableHelp
                                                            title='Carrier Contact Information'
                                                            description="We work with the following carriers to deliver items. If you have an issue with your delivery, you can contact the carriers directly."
                                                        />
                                                    </Col>
                                                    <Col sm={2}>
                                                        <ReuseableHelp
                                                            title='International Free Shipping"'
                                                            description="If your order meets certain requirements and you're shipping to an eligible international destination, you can select the FREE AmazonGlobal Standard Shipping option during checkout."
                                                        />
                                                    </Col>
                                                </Row>
                                                <Row >
                                                    <Col sm={7}>
                                                        <ReuseableHelp
                                                            title='About Import Fees Deposit'
                                                            description="AmazonGlobal offer customers customs duties, taxes and fees (Import Fees) estimation during checkout and customs clearance on your behalf for certain eligible countries and regions."
                                                        />
                                                    </Col>
                                                    <Col sm={2}>
                                                        <ReuseableHelp
                                                            title='About Customs Regulations for Identity Documents'
                                                            description="When you place an order for a product from Amazon.com, Identity Documents (ID information) may be required for customs clearance."
                                                        />
                                                    </Col>
                                                </Row>
                                                <Row >
                                                    <Col sm={7}>
                                                        <ReuseableHelp
                                                            title="About Customs, Duties and Taxes"
                                                            description="When ordering from Amazon.com, you're responsible for assuring the product can be lawfully imported to the destination."
                                                        />
                                                    </Col>

                                                </Row>
                                                <Row >
                                                    <Col sm={7}>
                                                        <ReuseableHelp
                                                            title="More information on Shipping and Delivery"
                                                            description=""
                                                        />
                                                    </Col>

                                                </Row>
                                            </Tab.Pane>

                                            
                                            <Tab.Pane eventKey="9" >
                                                <Row >
                                                    <Col sm={7}>
                                                        <ReuseableHelp
                                                            title='Carrier Contact Information'
                                                            description="We work with the following carriers to deliver items. If you have an issue with your delivery, you can contact the carriers directly."
                                                        />
                                                    </Col>
                                                    <Col sm={2}>
                                                        <ReuseableHelp
                                                            title='International Free Shipping"'
                                                            description="If your order meets certain requirements and you're shipping to an eligible international destination, you can select the FREE AmazonGlobal Standard Shipping option during checkout."
                                                        />
                                                    </Col>
                                                </Row>
                                                <Row >
                                                    <Col sm={7}>
                                                        <ReuseableHelp
                                                            title='About Import Fees Deposit'
                                                            description="AmazonGlobal offer customers customs duties, taxes and fees (Import Fees) estimation during checkout and customs clearance on your behalf for certain eligible countries and regions."
                                                        />
                                                    </Col>
                                                    <Col sm={2}>
                                                        <ReuseableHelp
                                                            title='About Customs Regulations for Identity Documents'
                                                            description="When you place an order for a product from Amazon.com, Identity Documents (ID information) may be required for customs clearance."
                                                        />
                                                    </Col>
                                                </Row>
                                                <Row >
                                                    <Col sm={7}>
                                                        <ReuseableHelp
                                                            title="About Customs, Duties and Taxes"
                                                            description="When ordering from Amazon.com, you're responsible for assuring the product can be lawfully imported to the destination."
                                                        />
                                                    </Col>

                                                </Row>
                                                <Row >
                                                    <Col sm={7}>
                                                        <ReuseableHelp
                                                            title="More information on Shipping and Delivery"
                                                            description=""
                                                        />
                                                    </Col>

                                                </Row>
                                            </Tab.Pane>
                                        </Tab.Content>

                                       
                                    </Col>

                                </Row>
                            </Tab.Container>

                        </section>
                    </div>
                </body>
            </div>



        </>


    )
}

export default CustomerService;
