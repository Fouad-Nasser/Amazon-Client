import React from "react";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./OrderCard.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
function OrderCard({ item }) {
  return (
    <>
      <Card className="text-center mt-4">
        <Card.Header>
          <Row>
            <Col>
              <p>
                <b>Tax Price:</b> {item.taxPrice}
              </p>
            </Col>
            <Col>
              <p>
                <b>shippingPrice:</b> {item.shippingPrice}
              </p>
            </Col>
            <Col>
              <p>
                <b>ship to :</b> {item.user?.name}
              </p>
            </Col>
            <Col>
              {" "}
              <Link id="orderDetails">Order Details </Link>{" "}
              <Link id="Invoc"> Invoice</Link>
            </Col>
          </Row>
        </Card.Header>

        <Card.Body>
          {/* <Card.Title>Details:</Card.Title> */}
          <div className="row ">
            <div className="col">
              <div>
                <b>address</b>:
              </div>
              <div>
                {item.user?.address.city},{item.user?.address.street}
              </div>
            </div>
            <div className="col"></div>
            <div className="col"></div>
          </div>
          <div className="row ">
            <div className="col">
              <div>
                <b>phone number</b>:
              </div>
              <div>{item.user?.phone}</div>
            </div>
            <div className="col"></div>
            <div className="col"></div>
          </div>
          <Card.Img variant="center" src="holder.js/100px180?text=Image cap" />
          <Card.Text>
            <Row>
              <p>
                <b>Item Price</b>: {item.itemsPrice}
              </p>
            </Row>
            <Row>
              <p>
                <b>totalPrice</b>:{" "}
                {item.itemsPrice + item.shippingPrice + item.taxPrice}
              </p>
            </Row>
          </Card.Text>
          <Row>
            <Col>{/* <Button variant="warning">view details</Button> */}</Col>
            <Col>{/* <Button variant="warning">return</Button> */}</Col>
            <Col>
              <Row>
                <Button variant="outline-warning">review product</Button>
              </Row>
              <Row>
                <Button variant="outline-danger">delete</Button>
              </Row>
            </Col>
          </Row>
        </Card.Body>
        <Card.Footer className="text-muted">2 days ago</Card.Footer>
      </Card>
    </>
  );
}

export default OrderCard;
