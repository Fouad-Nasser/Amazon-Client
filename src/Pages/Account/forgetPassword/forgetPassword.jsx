import React from "react";
import { Button, Card } from "react-bootstrap";
import "./forgetPassword.css";
import Input from "../../../Components/Input/Input";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const ForgetPassword = () => {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  // const handleSignIn = () => {
  //   axios
  //     .put(
  //       "http://localhost:8000/users/6437dd1c4891d1237c3ad071",
  //       {
  //         email: values.email,
  //       },
  //       {
  //         headers: {
  //           "content-type": "application/json",
  //           Authorization:
  //             "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NDM2MmJlNDYzZjA3ZjE3OTYzNmJmZTYiLCJ1c2VyUm9sZSI6ImFkbWluIiwiaWF0IjoxNjgxMzgyMDcyfQ.VRR-r6WGrCS_wTRgN4hmbhw7jYvxGCApDLFrW3GnU0c",
  //         },
  //       }
  //     )
  //     .then((res) => {
  //       console.log(res.data);
  //       alert("update Password");
  //       navigate("/OTP");
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };
  const [values, setValues] = useState({
    email: "",
  });
  const inputs = [
    {
      id: 1,
      name: "email",
      type: "text",
      placeholder: "enter the email",
      errorMessage: "It should be a valid email address!",
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
                <b>{t("Password assistance")}</b>
              </h3>
            </Card.Title>

            <Card.Body>
              <p id="CreateAccountSignInTitle text-center">
                {t("Enter the")} <br /> {t("associated")}
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
                onClick={navigate("/OTP")}
              >
                {t("Continue")}
              </a>
            </Card.Body>
          </Card>
          <h5 className="mt-3">{t("Has your email")}</h5>
          <div className="row">
            <p>
              {t("If you no longer")} <br />{" "}
              <a href="">{t("Customer Service")}</a>
              <br /> {t("help restoring")}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default ForgetPassword;
