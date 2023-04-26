import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import Input from "../../Components/Input/Input";
import "./CreateAccount.css";
import axios from "axios";
import { useTranslation } from "react-i18next";
const CreateAccount = () => {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate("/Login");
    // navigate(-1) // will backword one page
  };

  const createAccount = () => {
    axios
      .post(
        `http://localhost:8000/users`,
        {
          name: values.name,
          email: values.email,
          phone: values.phone,
          password: values.password,
          confirmPassword: values.confirmPassword,
        },
        {
          headers: {
            "content-type": "application/json",
            Authorization:
              "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NDNmNGIyMmQ1OTQ5Mzc3MWMzN2UwOWEiLCJ1c2VyUm9sZSI6ImFkbWluIiwiaWF0IjoxNjgxODY5OTcwfQ.s0Xf_mcpUGvfupHL5wFtenDYrdSxg2qWFHsmDYFZR-U",
          },
        }
      )
      .then((res) => {
        console.log(res.data.data);
        alert("done");
        if (res) {
          navigate("/SignIn");
        }
      })
      .catch((err) => {
        alert(err);
      });
  };

  const [values, setValues] = useState({
    username: "",
    email: "",
    birthday: "",
    password: "",
    confirmPassword: "",
  });

  const inputs = [
    {
      id: 1,
      name: "name",
      type: "text",
      placeholder: "First and Last name",
      errorMessage:
        "Username should be 3-16 characters and shouldn't include any special character!",
      label: "Your name",
      pattern: "^[A-Za-z0-9]{3,16}$",
      required: true,
    },
    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "",
      errorMessage: "It should be a valid email address!",
      label: "Enter your Email address",
      pattern: `/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/`,
      required: true,
    },
    {
      id: 3,
      name: "phone",
      type: "text",
      placeholder: "",
      errorMessage: "It should be a valid mobile number!",
      label: "Enter your mobile number",
      required: true,
    },
    {
      id: 4,
      name: "password",
      type: "password",
      placeholder: "At least 6 charchters",
      errorMessage:
        "Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!",
      label: "Password",
      pattern: `^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$`,
      required: true,
    },
    {
      id: 5,
      name: "confirmPassword",
      type: "password",
      placeholder: "",
      errorMessage: "Passwords dose not match!",
      label: "Re-enter password",
      pattern: values.password,
      required: true,
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

  return (
    <>
      <div className="register">
        <img
          id="CreateAccountContinueImg2"
          src="https://thumbs.dreamstime.com/b/simple-vector-filled-flat-amazon-icon-logo-solid-black-pictogram-isolated-white-background-amazon-logo-159029074.jpg"
        ></img>
      </div>

      <div className="register text-center">
        <div id="CreateAccount">
          <form onSubmit={handleSubmit}>
            <h3 id="CreateAccountContinueTitle">{t("Create account")}</h3>
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
              class="myButton"
              id="CreateAccountContinueButton"
              onClick={() => createAccount()}
            >
              {t("Continue")}
            </a>
            <div className="row" id="CreateAccountContinueTerms">
              <p>
                <br />
                <a href="#" id="CreateAccountContinueA">
                  {t("Amazon's Conditions")}
                </a>{" "}
                {t("of Use and")}{" "}
                <a href="#" id="CreateAccountContinueA">
                  {t("Privacy Notice.")}
                </a>
              </p>
            </div>

            <hr id="CreateAccountContinueHr" />

            <div className="row" id="CreateAccountContinueTerms">
              <p>
                {t("Already have an account")}{" "}
                <Link to="/SignIn">{t("SignIn")}</Link>
              </p>
            </div>
            {/* <Button variant="outline-success" onClick={() => { handleNavigation() }}>back to Login</Button> */}
          </form>
        </div>
      </div>
    </>
  );
};

export default CreateAccount;
