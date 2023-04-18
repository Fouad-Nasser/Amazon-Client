import React, { useRef, useState } from "react";
import { Col, Form, Toast } from "react-bootstrap";
import Input from "../../Components/Input/Input";
import "./SignIn.css";
import axios from "axios";
import { Link } from "react-router-dom";

const SignIn = () => {
  const emailRef = useRef(null);
  const passRef = useRef(null);

  const handleSignIn = () => {
    axios
      .post(
        "http://localhost:8000/users/login",
        {
          email: values.email,
          password: values.password,
        },
        {
          headers: {
            "content-type": "application/json",
          },
        }
      )
      .then((response) => {
        console.log(response);
        var Token = response.data.token;
        localStorage.setItem("Token", Token);
      });
  };

  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const inputs = [
    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "",
      errorMessage: "It should be a valid email address!",
      label: "Email or mobile phone number",
      patter: `/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/`,
      required: true,
      ref: { emailRef },
    },
    {
      id: 4,
      name: "password",
      type: "password",
      placeholder: "Enter Password",
      errorMessage:
        "Password must be 8-20 characters and include at least 1 UpperCase letter, 1lowerCase letter, 1 number and 1 special character!",
      label: `Password `,
      pattern: `{8,}$`,
      // ^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).
      required: true,
      ref: { passRef },
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    const userData = { values };
    console.log(userData);
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  const [show, setShow] = useState(false);
  return (
    <>
      <div className="register">
        <img
          id="CreateAccountContinueImg2"
          src="https://thumbs.dreamstime.com/b/simple-vector-filled-flat-amazon-icon-logo-solid-black-pictogram-isolated-white-background-amazon-logo-159029074.jpg"
        ></img>
      </div>{" "}
      <div className="row ">
        <div className="SignIn">
          <div id="SignIn">
            <form onSubmit={handleSubmit}>
              <h3 id="CreateAccountSignInTitle">SignIn</h3>
              {inputs.map((input) => (
                <Input
                  key={input.id}
                  {...input}
                  value={values[input.name]}
                  onChange={(e) => onChange(e)}
                  ref={input.ref}
                />
              ))}
              <a
                href="#"
                class="myButton mb-3"
                id="CreateAccountContinueButton"
                onClick={handleSignIn}
              >
                Sign in
              </a>
              <Col xs={6} id="Toast">
                <Toast
                  onClose={() => setShow(false)}
                  show={show}
                  delay={30000}
                  autohide
                >
                  <Toast.Header>
                    <img
                      src="holder.js/20x20?text=%20"
                      className="rounded me-2"
                      alt=""
                    />
                    <strong className="m-auto" id="ToastTitle">
                      "Keep Me Signed In" Checkbox
                    </strong>
                  </Toast.Header>
                  <Toast.Body>
                    Choosing "Keep me signed in" reduces the number of times
                    you're asked to Sign-In on this device. <br />
                    To keep your account secure, use this option only on your
                    personal devices.
                  </Toast.Body>
                </Toast>
              </Col>
              <div className="row" id="CreateAccountContinueCheeck">
                <p>
                  <Form.Check
                    required
                    label="Agree to terms and conditions"
                    feedback="You must agree before submitting."
                    feedbackType="invalid"
                  />{" "}
                  Keep me Signed in,{" "}
                  <a href="#" onClick={() => setShow(true)}>
                    Details
                  </a>
                </p>
              </div>
              <div className="row">
                <div class="separator">or</div>
              </div>
              <div className="row">
                <Link to={"/forgetPassword"}>Forget Password ?</Link>
              </div>
              <div className="row d-flex justify-content-center">
                <Link to={"/forgetPassword"}>
                  <a href="#" class="myButton2 text-center">
                    get an OTP on your phone
                  </a>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignIn;
