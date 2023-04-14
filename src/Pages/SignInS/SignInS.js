import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import './SignInS.css'
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { InputGroup } from 'react-bootstrap';

// import image from 'react-bootstrap/Image'

function SignInS() {
    const [user, setUser] = useState({
        userEmail: "",
        userPass: ""
    })
    const [error, setError] = useState({
        errEmail: "",
        errPass: ""
    })
    const handelinput = (e) => {
        var reqEmail = /^[a-zA-Z]{3,}(@)(gmail|yahoo|outlook)(.com)$/
        switch (e.target.name) {
            case "email":
                setUser({ ...user, userEmail: e.target.value })
                setError({
                    ...error, errEmail: (e.target.value === 0) ?
                        "Email is Required" : (!reqEmail.test(e.target.value)) ? "Enter Vaild Email" : ""
                })
                break;
            case "password":
                setUser({ ...user, userPass: e.target.value })
                setError({
                    ...error, errPass: (e.target.value.length < 8) ?
                        "Enter Vaild Password" : ""
                })
                break;
            default:
                break;
        }
    }
    const handelSubmit = (e) => {
        e.preventDefault();
        const data = { user }
        console.log(data);
    }


    return (
        <>


            <img alt='' src='https://m.media-amazon.com/images/G/01/rainier/nav/SellerCentral_Bliss._CB485924389_.png' width={300} />
            <div className='container con'>
                <h3> Get started selling on Amazon</h3>
                <Form onSubmit={(ev) => { handelSubmit(ev) }}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email or mobile phone number</Form.Label>
                        <Form.Control id='input' name='email' type="email" placeholder="Enter email" value={user.userEmail}
                            onChange={(event) => { handelinput(event) }} />
                        <p className="text-danger">{error.errEmail}</p>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control id='input' name='password' type="password" placeholder="Password" value={user.userPass}
                            onChange={(event) => { handelinput(event) }}
                        />
                        <p className="text-danger">{error.errPass}</p>
                    </Form.Group>
                    <NavLink to="">
                        <Button variant="warning" style={{ backgroundColor: " #f0c14b" }} type="submit" className="btnWidth">
                            Next
                        </Button>
                    </NavLink>
                    <div className='Ckekbox'>
                        <div>
                        <input type={"checkbox"} id="assigned" style={{marginRight:"5px"}} ></input>
                        <label for="assigned">Keep me signed in</label>
                        </div>
                        <NavLink to="/SignupS">
                            <p style={{  fontWeight: "bolder", marginLeft: ".8rem" }}>
                                Details </p>
                        </NavLink>
                    </div>

                    <hr></hr>


                    <NavLink to="/SignupS">
                        <Button variant="warning" style={{
                            backgroundColor: " #e7e9ec", borderColor: "#adb1b8"
                            , marginTop: "5vh"
                        }} type="submit" className="btnWidth">
                            Create your Amazon account
                        </Button>
                    </NavLink>


                </Form>
            </div>




        </>


    );
}

export default SignInS;
