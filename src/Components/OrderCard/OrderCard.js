import React from "react"
import { Col, Row } from "react-bootstrap"
import { Link } from "react-router-dom"
import "./OrderCard.css"
class OrderCard extends React.Component {
    render() {
        const { date, diliverdDate, total, price, shippedTo, productName, soldBy, imgUrl } = this.props;
        return (
            <>
                <Row>
                    <div className="header">
                        <Row>
                            <Col><h4>Order Placed</h4> {date}</Col>
                            <Col><h4>TOTAL</h4> {total}</Col>
                            <Col><h4>SHIP TO</h4> {shippedTo}</Col>
                            <Col> <Link id="orderDetails">Order Details </Link> <Link id="Invoc"> Invoice</Link></Col>
                        </Row>
                    </div>
                    <div className="body">
                        <Row>
                            <h4 id="DiliverdDate"> <b>Diliverd</b> {diliverdDate} </h4>
                        </Row>

                        <Row>
                            <Col xs={3}>{imgUrl && <img id='imgAccountCard' src={imgUrl} alt="" />}</Col>
                            <Col xs={6}>
                                <h4 className="card-title" id='AccountCardTitleCard'>{productName}</h4>
                                {soldBy && <p className="card-description" id='AccountCardTitleCardP'> <b id="soldBy">Sold By : </b><Link>{soldBy}</Link></p>}
                                <h4 id="priceInOrderCard">{price}</h4>

                                <a href="#" class="myButton mb-3">Buy it again</a>
                                <a href="#" class="myButton2">View your item</a>
                            </Col>
                            <Col xs={3}>
                                <a href="#" class="myButton mb-3">Return or replace item</a>
                                <a href="#" class="myButton2">Share gift receipt</a>
                                <a href="#" class="myButton2">write a product review</a>
                            </Col>
                        </Row>
                        <div className="footer">

                            <Row>
                                <Link id="ArchiveOrderInORderCard">Archive Order</Link>
                            </Row>
                        </div>

                    </div>
                </Row>
            </>
        )
    }
}

export default OrderCard