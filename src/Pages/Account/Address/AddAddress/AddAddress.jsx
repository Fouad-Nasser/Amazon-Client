import { render } from "@testing-library/react";
import React, { useState, useEffect, useRef } from "react";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import {
  CountryDropdown,
  RegionDropdown,
  CountryRegionData,
} from "react-country-region-selector";
import "./AddAddress.css";
import "react-phone-number-input/style.css";
import axios from "axios";

function AddAddress() {
  const FocusInput = () => {
    // useEffect(() => {
    axios
      .put(
        "http://localhost:8000/users/6437dd1c4891d1237c3ad071",
        {
          name: name.current.value,
          phone: phone?.current.value,
          address: {
            city: city.current.value,
            street: street.current.value,
            buliding: postalCode.current.value,
            postalCode: postalCode.current.value,
          },
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
      })
      .catch((err) => {
        console.log(err);
      });
    // }, []);
  };
  const name = useRef();
  const phone = useRef();
  const city = useRef();
  const street = useRef();
  const postalCode = useRef();

  const [country, setCountry] = useState("");
  const [region, setRegion] = useState("");
  const [radioValue, setRadioValue] = useState("");
  let outputValue = null;
  if (radioValue === "option1") {
    outputValue = <div></div>;
  } else if (radioValue === "option2") {
    outputValue = (
      <div>
        <p>Is your office open on weekends?</p>
        <Row>
          <Col>
            {" "}
            <input
              type="checkbox"
              name="checkBox1"
              id=""
              className="form-check-input"
            />
            <label className="form-check-label" for="checkBox1">
              Friday
            </label>
          </Col>
          <Col>
            {" "}
            <input
              type="checkbox"
              name="checkBox2"
              id=""
              className="form-check-input"
            />
            <label className="form-check-label" for="checkBox2">
              Saturday
            </label>
          </Col>
        </Row>
      </div>
    );
  } else {
    outputValue = <p></p>;
  }

  return (
    <>
      <div className="container">
        <div className="AddAddress">
          <div id="AddAddressInternal">
            <Row>
              <div>
                <Link id="LinkitleOrder" to={"/Account"}>
                  Your Account
                </Link>{" "}
                {">"}
                <Link id="LinkitleOrder" to={"/Address"}>
                  Your Adresses
                </Link>{" "}
                {">"}
                <span id="spanTitleOrder"> Add Address</span>
              </div>
            </Row>
            <Row id="AddnewAddressTitle">
              <h3>
                <b>Add a new address</b>
              </h3>
            </Row>
            <Row>
              <Link id="findAmazonPickup">
                <i id="geoAlt" class="bi bi-geo-alt-fill"></i>
                <span>Or find an Amazon pickup location near you</span>
              </Link>
            </Row>
            <Row className="mt-3">
              <h6>
                <b>Country/Region</b>
              </h6>
            </Row>
            <Row>
              <div>
                <CountryDropdown
                  className="form-select"
                  value={country}
                  onChange={(val) => setCountry(val)}
                />
              </div>
            </Row>
            <Row className="mt-3">
              <h6>
                <b>Full name (First and Last name)</b>
              </h6>
            </Row>
            <Row>
              <input type="text" className="form-control" ref={name} />
            </Row>
            <Row className="mt-3">
              <h6>
                <b>Mobile number</b>
              </h6>
            </Row>
            <Row>
              {/* <PhoneInput
                className="form-control"
                placeholder="e.g. 1XXXXXXXXX"
                // value={phoneValue}
                ref={phone}
                onChange={setPhoneValue}
              /> */}
              <input
                type="number"
                className="form-control"
                placeholder="e.g. 1XXXXXXXXX"
                ref={phone}
              />
              <small>
                <b>May be used to assist delivery</b>
              </small>
            </Row>
            <Row className="mt-3">
              <h6>
                <b>Street address</b>
              </h6>
            </Row>
            <Row>
              <input
                type="text"
                ref={street}
                className="form-control"
                placeholder="e.g. Talaat Harb street"
              />
            </Row>
            <Row className="mt-3">
              <h6>
                <b>postalCode no</b>
              </h6>
            </Row>
            <Row>
              <input
                type="text"
                ref={postalCode}
                className="form-control"
                placeholder="postalCode number"
              />
            </Row>
            <Row className="mt-3">
              <h6>
                <b>City/Area</b>
              </h6>
            </Row>
            <Row>
              <input
                className="form-select mt-2"
                // country={country}
                // value={region}
                ref={city}
                onChange={(val) => setRegion(val)}
              />
              <small>Can't find you city/area? Try a different spelling</small>
            </Row>
            <Row className="mt-3">
              <h6>
                <b>Nearest Landmark</b>
              </h6>
            </Row>
            <Row>
              <input
                type="text"
                className="form-control"
                placeholder="e.g. Cairo festival city"
              />
            </Row>
            <Row className="mt-3">
              <h4>Add delivery instructions (optional)</h4>
            </Row>
            <Row className="mt-3">
              <h6>
                <b>Address Type</b>
              </h6>
            </Row>
            <Row className="mt-3">
              <Col>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault"
                    value="option1"
                    checked={radioValue === "option1"}
                    onChange={(e) => setRadioValue(e.target.value)}
                  />
                  <label className="form-check-label" for="flexRadioDefault">
                    Home (7am-9pm, all days)
                  </label>
                </div>
              </Col>
              <Col>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="flexRadioDefault2"
                    id="flexRadioDefault2"
                    value="option2"
                    checked={radioValue === "option2"}
                    onChange={(e) => setRadioValue(e.target.value)}
                  />
                  <label className="form-check-label" for="flexRadioDefault2">
                    Office (delivery from Sun-Thu)
                  </label>
                </div>
                <div>
                  <div>{outputValue}</div>
                </div>
              </Col>
            </Row>
            <Row className="mt-5">
              <a
                href="#"
                class="myButton"
                id="CreateAccountContinueButton"
                onClick={FocusInput}
              >
                Add Address
              </a>
            </Row>
          </div>
        </div>
      </div>
    </>
  );
}

export default AddAddress;
