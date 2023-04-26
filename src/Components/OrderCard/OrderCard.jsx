import React from "react";
import "./OrderCard.css";
import axios from "axios";
import Table from "react-bootstrap/Table";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
function OrderCard({ item }) {
  const { userInfo } = useSelector((state) => state.user);
  const { t, i18n } = useTranslation();
  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:8000/orders/${id}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((res) => {
        console.log(res.data);
        alert("order deleted succefully");
        window.location.reload();
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      <Table striped bordered hover>
        <thead>
          <tr>
            {/* <th>#</th> */}
            <th>{t("Ship to")}</th>
            <th>{t("Items Price")}</th>
            <th>{t("Order status")}</th>
            <th>{t("Shipping Info")}</th>
            <th>{t("Total Price")}</th>
            <th>{t("Email")}</th>
            <th>{t("Action")}</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            {/* <td>1</td> */}
            <td>{item.name}</td>
            <td>{item.itemsPrice}</td>
            <td>{item.orderStatus}</td>
            <td>
              {t("address")}:{item.shippingInfo.address} <br />
              {t("city")}:{item.shippingInfo.city} <br />
              {t("phone")}:{item.shippingInfo.phoneNo} <br />
            </td>
            <td>{item.totalPrice}</td>
            <td>{item.user.email}</td>
            <td>
              <button
                className="btn btn-outline-danger"
                disabled={
                  item.orderStatus === "shipped" ||
                  item.orderStatus === "delivered"
                }
                onClick={() => handleDelete(item._id)}
              >
                {" "}
                {t("cancel")}
              </button>
            </td>
          </tr>
        </tbody>
      </Table>
    </>
  );
}

export default OrderCard;
