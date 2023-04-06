import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import Input from "../../Components/Input/Input";
import "./CreateAccount.css"
const CreateAccount = () => {
    const navigate = useNavigate()

    const handleNavigation = () => {
        navigate("/Login")
        // navigate(-1) // will backword one page
    }

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
            name: "username",
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
            label: "Mobile number or Email",
            patter: `/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/`,
            required: true,
        },
        {
            id: 3,
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
            id: 4,
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
            <img id="CreateAccountContinueImg2" src="https://thumbs.dreamstime.com/b/simple-vector-filled-flat-amazon-icon-logo-solid-black-pictogram-isolated-white-background-amazon-logo-159029074.jpg"></img>
            <div className="register" >
                <div id="CreateAccount">
                    <form onSubmit={handleSubmit}>
                        <h3 id="CreateAccountContinueTitle">Create account</h3>
                        {inputs.map((input) => (
                            <Input
                                key={input.id}
                                {...input}
                                value={values[input.name]}
                                onChange={(e) => onChange(e)}
                            />
                        ))}
                        <a href="#" class="myButton" id="CreateAccountContinueButton">Continue</a>
                        <div className="row" id="CreateAccountContinueTerms">
                            <p>By creating an account, you agree to Amazon's <br /><a href="#" id="CreateAccountContinueA">Conditions</a> of Use and <a href="#" id="CreateAccountContinueA">Privacy Notice.</a></p>
                        </div>

                        <hr id="CreateAccountContinueHr" />

                        <div className="row" id="CreateAccountContinueTerms">
                            <p>
                                Already have an account? <Link to="/SignIn">Sign in</Link> <br />
                                Buying for work? Create a <a href="#">free business account</a>
                            </p>
                        </div>
                        {/* <Button variant="outline-success" onClick={() => { handleNavigation() }}>back to Login</Button> */}
                    </form>
                </div>
            </div>
        </>
    );

}

export default CreateAccount;

