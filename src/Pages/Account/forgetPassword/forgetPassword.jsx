import React from "react";
import { Button, Card } from "react-bootstrap";
import "./forgetPassword.css";
import Input from "../../../Components/Input/Input";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const ForgetPassword = () => {
  const navigate = useNavigate();
  const handleSignIn = () => {
    axios
      .put(
        "http://localhost:8000/users/6437dd1c4891d1237c3ad071",
        {
          phone: values.phone,
        },
        {
          headers: {
            "content-type": "application/json",
            Authorization:
              "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NDM2MmJlNDYzZjA3ZjE3OTYzNmJmZTYiLCJ1c2VyUm9sZSI6ImFkbWluIiwiaWF0IjoxNjgxMzgyMDcyfQ.VRR-r6WGrCS_wTRgN4hmbhw7jYvxGCApDLFrW3GnU0c",
          },
        }
      )
      .then((res) => {
        console.log(res.data);
        alert("update Password");
        navigate("/OTP");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const [values, setValues] = useState({
    phone: "",
  });
  const inputs = [
    {
      id: 1,
      name: "phone",
      type: "text",
      placeholder: "enter the phone",
      errorMessage: "It should be a valid phone number!",
      label: "Email or mobile phone number",
      patter: `/^(\+\d{1,2}\s?)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/`,
      required: true,
    },
  ];
  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  return (
    <>
      <div className="register">
        <img
          id="CreateAccountContinueImg2"
          src="https://thumbs.dreamstime.com/b/simple-vector-filled-flat-amazon-icon-logo-solid-black-pictogram-isolated-white-background-amazon-logo-159029074.jpg"
        ></img>
      </div>{" "}
      <div className="forgetPassword">
        <div id="forgetPassword">
          <Card className="p-3">
            <Card.Title className="text-center mt-4">
              <h3>
                <b>Password assistance</b>
              </h3>
            </Card.Title>

            <Card.Body>
              <p id="CreateAccountSignInTitle">
                Enter the email address or mobile phone number <br /> associated
                with your Amazon account.
              </p>
              {inputs.map((input) => (
                <Input
                  key={input.id}
                  {...input}
                  value={values[input.name]}
                  onChange={(e) => onChange(e)}
                />
              ))}
              <a
                href="#"
                class="myButton mb-3"
                id="CreateAccountContinueButton"
                onClick={handleSignIn}
              >
                Continue
              </a>
            </Card.Body>
          </Card>
          <h5 className="mt-3">Has your email or mobile number changed?</h5>
          <div className="row">
            <p>
              If you no longer use the email address associated with your <br />{" "}
              Amazon account, you may contact <a href="">Customer Service</a>{" "}
              for <br /> help restoring access to your account.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default ForgetPassword;
