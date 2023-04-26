import React, { useEffect, useState } from "react";
import { Col, Form, Nav, Row, Tab, Tabs } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Order.css";
import ReactSearchBox from "react-search-box";
import OrderCard from "../../Components/OrderCard/OrderCard";
import axios from "axios";
import { useSelector } from "react-redux";
import { t } from "i18next";
import { useTranslation } from "react-i18next";
const Order = () => {
  const { userInfo } = useSelector((state) => state.user);
  const { t, i18n } = useTranslation();
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
      .get(`http://localhost:8000/orders?user=6416d0c1792b554cdcf54953`, {
        headers: {
          "content-type": "application/json",
          Authorization: localStorage.getItem("token"),
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
              {t("Your Account")}
            </Link>
            {"  >  "}
            <span id="spanTitleOrder"> {t("Orders")}</span>
          </div>
        </Row>
        <Row className="mt-4">
          <Col>
            <h3>{t("Your Orders")}</h3>
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
                  {t("Search Orders")}
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
              <Tab eventKey="Orders" title={t("Your Orders")}>
                <Row>
                  <Col xs={2}>
                    <p>
                      <h6>
                        <b>
                          {count} {t("orders")}{" "}
                        </b>
                        {t("placed in")}
                      </h6>{" "}
                    </p>
                  </Col>
                  <Col xs={2}>
                    <Form.Select size="sm" className="FormSelectOrder">
                      <option>{t("Past")}</option>
                      <option>2023</option>
                      <option>2022</option>
                      <option>2021</option>
                      <option>2020</option>
                      <option>2019</option>
                      <option>{t("Archived Orders")}</option>
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
              <Tab eventKey="buy" title={t("Buy Again")}>
                <Row id="sentnceInOrder">
                  <h6>
                    {" "}
                    {/* Looks like you haven't placed an order in the last 3 months.{" "}
                    <Link>View orders in 2023</Link> */}
                  </h6>
                </Row>
              </Tab>
              <Tab eventKey="Not-yet-Shipped" title={t("Not yet Shipped")}>
                <h1></h1>
              </Tab>
              <Tab eventKey="Digital-Orders" title={t("Digital Orders")}>
                <h1></h1>
              </Tab>
              <Tab
                eventKey="Local-Store-Orders"
                title={t("Local Store Orders")}
              >
                <h1></h1>
              </Tab>
              <Tab eventKey="Cancelled-Orders" title={t("Cancelled Orders")}>
                <h1></h1>
              </Tab>
            </Tabs>
          </Row>
        </Row>
      </div>
    </>
  );
};
export default Order;
