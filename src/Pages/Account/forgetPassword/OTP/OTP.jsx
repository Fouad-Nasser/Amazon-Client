import React from "react";
import { Button, Card } from "react-bootstrap";
import { useState } from "react";
import axios from "axios";
import { Link, Navigate } from "react-router-dom";
import Input from "../../../../Components/Input/Input";
import Accordion from "react-bootstrap/Accordion";

const OTP = () => {
  const handleSignIn = () => {
    axios
      .put(
        "http://localhost:8000/users/6437dd1c4891d1237c3ad071",
        {
          OTP: values.OTP,
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
        Navigate("/OTP");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const [values, setValues] = useState({
    OTP: "",
  });
  const inputs = [
    {
      id: 1,
      name: "OTP",
      type: "text",
      placeholder: "",
      errorMessage: "It should be a valid OTP!",
      label: "Enter OTP",
      //   patter: `/^(\+\d{1,2}\s?)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/`,
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
                <b>Verification required</b>
              </h3>
            </Card.Title>

            <Card.Body>
              <p id="CreateAccountSignInTitle">
                To continue, complete this verification step. We've <br /> sent
                a One Time Password (OTP) to the mobile <br /> number
                +201100435756. Please enter it below.
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
              <div className="row text-center">
                <Link>Resend OTP</Link>
              </div>
              <div className="row">
                <Accordion>
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>I need more help</Accordion.Header>
                    <Accordion.Body>
                      If you've already tried to reset your password, but
                      haven't <br /> received an email from Amazon, check your
                      Junk or Spam <br /> folder. <br /> If you can't access
                      your email, try resetting that first <br /> through your
                      email provider. <br /> If you've recently updated your
                      password, your old <br /> password could still be saved in
                      your browser. Try <br /> clearing your browser history and
                      re-typing your <br /> password. <br /> If you need more
                      password help, call us at 1-800-383- <br /> 9484 or, if
                      outside the U.S. or Canada, 1-206-577-1364 <br />{" "}
                      (International, charges may apply).
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </div>
            </Card.Body>
          </Card>
        </div>
      </div>
    </>
  );
};
export default OTP;
