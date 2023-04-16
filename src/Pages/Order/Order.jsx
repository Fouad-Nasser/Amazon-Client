import React, { useEffect, useState } from "react";
import { Col, Form, Nav, Row, Tab, Tabs } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Order.css";
import ReactSearchBox from "react-search-box";
import OrderCard from "../../Components/OrderCard/OrderCard";
import axios from "axios";
import Table from "react-bootstrap/Table";
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
  const [order, setOrder] = useState([]);
  var [count, setCount] = useState(0);
  useEffect(() => {
    axios
      .get("http://localhost:8000/orders", {
        headers: {
          "content-type": "application/json",
          Authorization:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NDM2MmJlNDYzZjA3ZjE3OTYzNmJmZTYiLCJ1c2VyUm9sZSI6ImFkbWluIiwiaWF0IjoxNjgxMzgyMDcyfQ.VRR-r6WGrCS_wTRgN4hmbhw7jYvxGCApDLFrW3GnU0c",
        },
      })
      .then((res) => {
        console.log(res.data.data);
        setOrder(res.data.data);
        setCount(res.data.documentsCounts);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <>
      <div className="container">
        <Row id="RowTitleOrder">
          <div>
            <Link id="LinkitleOrder" to={"/Account"}>
              Your Account
            </Link>
            <span id="spanTitleOrder"> Your Orders</span>
          </div>
        </Row>
        <Row className="mt-4">
          <Col>
            <h3>Your Orders</h3>
          </Col>
          <Col xs={5}></Col>
          <Col>
            <div id="searchAndButton">
              <div id="searchTest">
                <ReactSearchBox
                  placeholder="Search All Orders"
                  value="Doe"
                  data={data}
                  callback={(record) => console.log(record)}
                />
              </div>
              <div>
                <a href="#" class="myButton3 buttonserachOrder">
                  Search Orders
                </a>
              </div>
            </div>
          </Col>
        </Row>

        <Row>
          <Row>
            <Tabs
              defaultActiveKey="Orders"
              id="fill-tab-example"
              className="mb-3"
              fill
            >
              <Tab eventKey="Orders" title="Orders">
                <Row>
                  <Col xs={2}>
                    <p>
                      <h6>
                        <b>{count} orders </b>placed in
                      </h6>{" "}
                    </p>
                  </Col>
                  <Col xs={2}>
                    <Form.Select size="sm" className="FormSelectOrder">
                      <option>
                        Past <b>3 months</b>
                      </option>
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
                <Row>
                  <div>
                    <Row xs={1} md={1} sm={1}>
                      {order.slice(0, 8).map((item) => (
                        <OrderCard item={item} />
                      ))}
                    </Row>
                  </div>
                  {/* <Table striped bordered hover variant="warning">
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>username</th>
                        <th>total price</th>
                        <th>address</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                      </tr>
                      <tr>
                        <td>2</td>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                      </tr>
                      <tr>
                        <td>3</td>
                        <td colSpan={2}>Larry the Bird</td>
                        <td>@twitter</td>
                      </tr>
                    </tbody>
                  </Table> */}
                </Row>
              </Tab>
              <Tab eventKey="buy" title="Buy Again">
                <Row id="sentnceInOrder">
                  <h6>
                    {" "}
                    Looks like you haven't placed an order in the last 3 months.{" "}
                    <Link>View orders in 2023</Link>
                  </h6>
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
  );
};
export default Order;
