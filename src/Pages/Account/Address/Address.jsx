import React from "react";
import { Row } from "react-bootstrap";
import { Link, Navigate } from "react-router-dom";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import "./Address.css";

const Address = () => {
  //   function handleRouteToAddAddress() {
  //     Navigate("/SignIn");
  //   }
  return (
    <>
      <div className="container" id="containerAddressAccount">
        <Row id="RowTitleOrder">
          <div>
            <Link id="LinkitleOrder" to={"/Account"}>
              Your Account
            </Link>{" "}
            {">"} <span id="spanTitleOrder"> Your Addresses</span>
          </div>
        </Row>

        <Row>
          <h2 id="yourAddressAddressOrder">Your Addresses</h2>
        </Row>
        <Row>
          <div className="col-4" style={{ height: "20rem" }}>
            <Link to={"/AddAddress"} id="LinkAccount">
              <div
                id="addAddressPlusAccount"
                //   onClick={() => {
                //     handleRouteToAddAddress();
                //   }}
              >
                <i className="bi bi-plus" id="addressPlusIcon"></i>
                <h3>
                  <b>Add Address</b>
                </h3>
              </div>
            </Link>
          </div>
          <div className="col-4">
            <Card id="cardOfAddress">
              <Card.Header>
                Default :
                <img
                  id="AddressCardImg"
                  src="https://thumbs.dreamstime.com/b/simple-vector-filled-flat-amazon-icon-logo-solid-black-pictogram-isolated-white-background-amazon-logo-159029074.jpg"
                ></img>
              </Card.Header>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <div>
                    <b id="nameOfUserStaticData">اسامه بركات كمال</b>
                  </div>
                  <div id="streetOfUserStaticData">المهندس مجدي صلاح ١٦</div>
                  <div id="bulidingOfUserStaticData">
                    عمار 20 عماير البنك المركزي / الحي الثالث / المجاورة الثالثه
                  </div>
                  <div id="streetOfUserStaticData">
                    6th of October City Giza 3rd District Egypt
                  </div>
                  <div id="PhoneOfUserStaticData">
                    Phone number: ‪+201100435756‬
                  </div>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Link id="EditLinkAccountAddress">Edit</Link>

                  <Link id="removeLinkAccountAddress">Remove</Link>
                </ListGroup.Item>
              </ListGroup>
            </Card>
          </div>
        </Row>
        <Row>
          <h5>
            <b>Related</b>
          </h5>
        </Row>
        <Row>
          <Link id="EditLinkAccountAddress">1-Click Settings</Link>
          <Link id="EditLinkAccountAddress" to={"/Order"}>
            Change address on an open order
          </Link>
        </Row>
      </div>
    </>
  );
};

export default Address;
