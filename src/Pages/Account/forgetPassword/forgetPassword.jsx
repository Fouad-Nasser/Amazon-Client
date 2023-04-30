import React, { useEffect, useRef } from "react";
import { Accordion, Button, Card } from "react-bootstrap";
import "./forgetPassword.css";
import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const ForgetPassword = () => {
  const [currentDiv, setCurrentDiv] = useState(1);

  const showDiv1 = () => setCurrentDiv(1);
  const showDiv2 = () => setCurrentDiv(2);
  const showDiv3 = () => setCurrentDiv(3);
  const [emailVal, setEmailVal] = useState("");
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const handleSendOTP = () => {
    axios
      .post(
        "http://localhost:8000/users/forgot_password",
        {
          email: email.current.value,
        },
        {
          headers: {
            "content-type": "application/json",
            Authorization: localStorage.getItem("token"),
          },
        }
      )
      .then((res) => {
        console.log(res.data);
        alert("chechk your email");

        // navigate("/OTP");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const handleEntertheOTP = () => {
    axios
      .post(
        "http://localhost:8000/users/verify_reset_code",
        {
          email: emailVal,
          restCode: restCode.current.value,
        },
        {
          headers: {
            "content-type": "application/json",
            Authorization: localStorage.getItem("token"),
          },
        }
      )
      .then((res) => {
        console.log(res.data);
        console.log(emailVal);
        alert("valid OTP next enter the new Password");
        // navigate("/OTP");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const handleEnterTheNewPassword = () => {
    axios
      .put(
        "http://localhost:8000/users/reset_password",
        {
          email: emailVal,
          newPassword: newPassword.current.value,
          confirmNewPassword: confirmNewPassword.current.value,
        },
        {
          headers: {
            "content-type": "application/json",
            Authorization: localStorage.getItem("token"),
          },
        }
      )
      .then((res) => {
        console.log(res.data);
        alert("Password updated");

        // navigate("/OTP");
      })
      .catch((err) => {
        console.log(err);
      });
  };
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
      pattern: `/^(\+\d{1,2}\s?)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/`,
      required: true,
    },
  ];
  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  const email = useRef();
  const restCode = useRef();
  const newPassword = useRef();
  const confirmNewPassword = useRef();
  return (
    <>
      {currentDiv === 1 && (
        <div>
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
                  {/* {inputs.map((input) => (
                <Input
                  key={input.id}
                  {...input}
                  value={values[input.name]}
                  onChange={(e) => onChange(e)}
                />
              ))} */}
                  <div>
                    <label htmlFor="emailVal">Enter your email</label>
                    <div>
                      <input type="text" className="form-control" ref={email} />
                    </div>
                  </div>
                  <button
                    class="myButton mb-3"
                    id="CreateAccountContinueButton"
                    onClick={() => {
                      handleSendOTP();
                      showDiv2();
                      setEmailVal(email.current.value);
                    }}
                  >
                    {t("Continue")}
                  </button>
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
        </div>
      )}
      {currentDiv === 2 && (
        <div>
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
                    <b>{t("Verification required")}</b>
                  </h3>
                </Card.Title>

                <Card.Body>
                  <p id="CreateAccountSignInTitle">
                    {t("this verification step")} <br />{" "}
                    {t("One Time Password")} <br />
                    {email?.current?.value} {t("Please enter it below")}.
                  </p>
                  {/* {inputs.map((input) => (
                <Input
                  key={input.id}
                  {...input}
                  value={values[input.name]}
                  onChange={(e) => onChange(e)}
                />
              ))} */}
                  <div>
                    <label htmlFor="emailVal">Enter the OTP</label>
                    <div>
                      <input
                        type="text"
                        className="form-control"
                        ref={restCode}
                      />
                    </div>
                  </div>
                  <a
                    href="#"
                    class="myButton mb-3"
                    id="CreateAccountContinueButton"
                    onClick={() => {
                      handleEntertheOTP();
                      showDiv3();
                    }}
                  >
                    {t("Continue")}
                  </a>
                  <div className="row text-center">
                    <Link>{t("Resend OTP")}</Link>
                  </div>
                  <div className="row">
                    <Accordion>
                      <Accordion.Item eventKey="0">
                        <Accordion.Header>
                          {t("I need more help")}
                        </Accordion.Header>
                        <Accordion.Body>
                          {t("If you've already")}
                          <br /> {t("but haven't received")}
                          <br /> {t("check your Junk")} <br />{" "}
                          {t("If you can't access")}
                          <br /> {t("try resetting that first")} <br />{" "}
                          {t("through your email provider.")}
                        </Accordion.Body>
                      </Accordion.Item>
                    </Accordion>
                  </div>
                </Card.Body>
              </Card>
            </div>
          </div>
        </div>
      )}
      {currentDiv === 3 && (
        <div>
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
                    <b>{t("Enter the new password")}</b>
                  </h3>
                </Card.Title>

                <Card.Body>
                  <p id="to reset ur password">
                    {" "}
                    {t("to reset ur password")} <br />
                    {t("enter pas and confPas")} <br />
                    <br />
                    {email?.current?.value} {t("Please enter it below")}.
                  </p>
                  <div>
                    <label htmlFor="emailVal">Enter the new Password</label>
                    <div>
                      <input
                        type="password"
                        className="form-control"
                        ref={newPassword}
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="emailVal">confirme your new password</label>
                    <div>
                      <input
                        type="password"
                        className="form-control"
                        ref={confirmNewPassword}
                      />
                    </div>
                  </div>
                  <a
                    href="#"
                    class="myButton mb-3"
                    id="CreateAccountContinueButton"
                    onClick={handleEnterTheNewPassword}
                  >
                    {t("Continue")}
                  </a>
                  <div className="row text-center">
                    <Link>{t("Remember ur pasword")}</Link>
                  </div>
                  <div className="row">
                    <Accordion>
                      <Accordion.Item eventKey="0">
                        <Accordion.Header>
                          {t("I need more help")}
                        </Accordion.Header>
                        <Accordion.Body>
                          {t("If you've already")}
                          <br /> {t("but haven't received")}
                          <br /> {t("check your Junk")} <br />{" "}
                          {t("If you can't access")}
                          <br /> {t("try resetting that first")} <br />{" "}
                          {t("through your email provider.")}
                        </Accordion.Body>
                      </Accordion.Item>
                    </Accordion>
                  </div>
                </Card.Body>
              </Card>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
export default ForgetPassword;
