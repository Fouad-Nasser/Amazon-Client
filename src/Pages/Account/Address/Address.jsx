import React, { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import { Link, Navigate } from "react-router-dom";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import "./Address.css";
import axios from "axios";

function Address() {
  const [user, setUser] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/users", {
        headers: {
          "content-type": "application/json",
          Authorization:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NDM2MmJlNDYzZjA3ZjE3OTYzNmJmZTYiLCJ1c2VyUm9sZSI6ImFkbWluIiwiaWF0IjoxNjgxMzgyMDcyfQ.VRR-r6WGrCS_wTRgN4hmbhw7jYvxGCApDLFrW3GnU0c",
        },
      })
      .then((res) => {
        console.log(res.data.data);
        setUser(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
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
                    <b id="nameOfUserStaticData">{user[3]?.name}</b>
                  </div>
                  <div id="streetOfUserStaticData">
                    street:
                    {user[3]?.address.street}
                  </div>
                  <div id="bulidingOfUserStaticData">
                    city:
                    {user[3]?.address.city}
                  </div>
                  <div id="streetOfUserStaticData">
                    postalCode:
                    {user[3]?.address.postalCode}
                  </div>
                  <div id="PhoneOfUserStaticData">
                    Phone number: {user[3]?.phone}
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
}

export default Address;
