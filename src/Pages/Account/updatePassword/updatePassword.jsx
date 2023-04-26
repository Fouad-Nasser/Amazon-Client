import React, { useState } from "react";
import { Button, Card, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./updatePassword.css";
import Input from "../../../Components/Input/Input";
import axios from "axios";
const UpdatePasword = () => {
  const [values, setValues] = useState({
    password: "",
    newPassword: "",
    confirmNewPassword: "",
  });
  const [passwordShown, setPasswordShown] = useState(false);
  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };
  const handleUpatePassword = () => {
    axios
      .put(
        "http://localhost:8000/users/change_password",
        {
          password: values.password,
          newPassword: values.newPassword,
          confirmNewPassword: values.confirmNewPassword,
        },
        {
          headers: {
            "content-type": "application/json",
            Authorization: localStorage.getItem("Token"),
          },
        }
      )
      .then((res) => {
        console.log(res.data);
        alert("password updated succefully");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const inputs = [
    {
      id: 1,
      name: "password",
      type: `password`,
      placeholder: "enter current password",
      errorMessage: "password must match your current password",
      label: "Current Password",
      //   patter: `/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/`,
      required: true,
      //   ref: { emailRef },
    },
    {
      id: 2,
      name: "newPassword",
      type: "password",
      placeholder: "Enter new password",
      label: "New Password",
      errorMessage:
        "Password must be 8-20 characters and include at least 1 UpperCase letter, 1lowerCase letter, 1 number and 1 special character!",
      pattern: `^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$`,
      required: true,
    },
    {
      id: 3,
      name: "confirmNewPassword",
      type: "password",
      label: "Reenter new Password",
      placeholder: "re-enter your new password",
      errorMessage: "Passwords dosen't match!",
      pattern: values.newPassword,
      required: true,
    },
  ];
  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  return (
    <>
      <div className="container" id="containerAddressAccount">
        <Row id="RowTitleOrder">
          <div>
            <Link id="LinkitleOrder" to={"/Account"}>
              Your Account
            </Link>{" "}
            {">"}
            <Link id="LinkitleOrder" to={"/signin"}>
              Login & security
            </Link>{" "}
            {">"}
            <span id="spanTitleOrder"> Change Password</span>
          </div>
        </Row>
        <Row>
          <h2>Change Password</h2>
        </Row>
        <Card id="cardUpdatePassword">
          <Card.Title>
            <p>Use the form below to change password for your Amazon Account</p>
          </Card.Title>
          <Card.Body>
            {/* <div>
              <label htmlFor="currentPassword">
                <b>Current Password:</b>
              </label>
              <div className="mb-3">
                <input type="text" id="currentPassword" />
              </div>
            </div>
            <div>
              <label htmlFor="NewPassword">
                <b>New Password:</b>
              </label>
              <div className="mb-3">
                <input type="text" id="NewPassword" />
              </div>
            </div>
            <div>
              <label htmlFor="reenterNewPassword">
                <b>Reenter New Password:</b>
              </label>
              <div className="mb-3">
                <input type="text" id="reenterNewPassword" />
              </div>
            </div> */}
            {inputs.map((input) => (
              <Input
                key={input.id}
                {...input}
                value={values[input.name]}
                onChange={(e) => onChange(e)}
              />
            ))}
            {/* <button onClick={togglePassword}>Show Password</button> */}
            <div id="opsn">
              <Button
                variant="warning"
                id="buttonUpdatePassword"
                onClick={handleUpatePassword}
              >
                Save changes
              </Button>
            </div>
          </Card.Body>
        </Card>
      </div>
    </>
  );
};
export default UpdatePasword;
