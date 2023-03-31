import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import './Signup.css'

function Signup() {

    const [user, setUser] = useState(
        {
            name: "",
            userEmail: "",
            userName: "",
            userPassword: "",
            confirmPassword: ""
        }
    );
    const [errors, setErrors] = useState(
        {
            nameError: "",
            userEmailErrors: "",
            userNameError: "",
            userPasswordErrors: "",
            confirmPasswordError: ""
        }
    );
    const emailRegex = /^[a-zA-Z]{3,}[0-9]{3,}(@)(gmail|yahoo|outlook)(.com)$/;

    const passwordRegex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/

    const handleForm = (e) => {

        switch (e.target.name) {
            case "name":
                setUser({ ...user, name: e.target.value });
                setErrors({ ...errors, nameError: (e.target.value.length === 0) ? "Name is Required" : "" })
                break;

            case "userEmail":
                setUser({ ...user, userEmail: e.target.value });
                setErrors({
                    ...errors, userEmailErrors: (e.target.value.length === 0) ? "Email is Required" :
                        (emailRegex.test(e.target.value)) ? "" : "Invalid Email Format"
                })
                break;


            case "userPassword":
                setUser({ ...user, userPassword: e.target.value });
                setErrors({
                    ...errors, userPasswordErrors: (e.target.value.length === 0) ? "Password is Required" :
                        (passwordRegex.test(e.target.value) ? "" : "Invalid Password")
                })
                break;

            case "confirmPassword":
                setUser({ ...user, confirmPassword: e.target.value });
                setErrors({
                    ...errors, confirmPasswordError: (e.target.value.length === 0) ? "Password is Required" :
                        (e.target.value === user.userPassword) ? "" : "Not Match"
                })
                break;
            default:
                return;
        }
    };

    const handleSubmit = (e) => {
        if ((errors.userEmailErrors || errors.userPasswordErrors)) {
            e.preventDefault();
        }
    };

    return (
        <>
            <img alt='' src='https://th.bing.com/th/id/R.61d9101a6841f5cd92afce057830fd7a?rik=3ymuV1eRqA8jHA&pid=ImgRaw&r=0' width={100} />

            <div className='container sign'>
                <h3> Create account</h3>
                <Form onSubmit={(evt) => { handleSubmit(evt); }} autoComplete='off'>

                    <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Label>Your name</Form.Label>
                        <Form.Control id='input' className={`${errors.nameError ? 'border-danger shadow-none' : ''}`} name="name" type="text" placeholder="First and last name"
                            value={user.name} onChange={(evt) => { handleForm(evt); }} />
                        <small className='text-danger'>{errors.nameError}</small>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Mobile number or emails</Form.Label>
                        <Form.Control id='input' className={`${errors.userEmailErrors ? 'border-danger shadow-none' : ''}`} name="userEmail" type="text" placeholder=""
                            value={user.userEmail} onChange={(evt) => { handleForm(evt); }} />
                        <small className='text-danger'>{errors.userEmailErrors}</small>
                    </Form.Group>


                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control id='input' className={`${errors.userPasswordErrors ? 'border-danger  shadow-none' : ''}`} name="userPassword" type="text" placeholder="at least 6 characters"
                            value={user.userPassword} onChange={(evt) => { handleForm(evt); }} />
                        <small className='text-danger'>{errors.userPasswordErrors}</small>
                        {/* <Form.Check type="checkbox" label="Show Password"/> */}
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
                        <Form.Label>Re-enter password</Form.Label>
                        <Form.Control id='input' className={`${errors.confirmPasswordError ? 'border-danger  shadow-none' : ''}`} name="confirmPassword" type="text" placeholder=""
                            value={user.confirmPassword} onChange={(evt) => { handleForm(evt); }} />
                        <small className='text-danger'>{errors.confirmPasswordError}</small>
                        {/* <Form.Check type="checkbox" label="Show Password"/> */}
                    </Form.Group>
                    <p>By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.</p>

                    <Button variant="warning" type="submit" className="btnWidth">
                        continue
                    </Button>



                </Form>
            </div>



        </>
    );

}

export default Signup;