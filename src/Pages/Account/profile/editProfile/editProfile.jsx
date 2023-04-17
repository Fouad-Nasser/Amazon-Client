import React, { useEffect, useRef, useState } from "react";
import { Button, Modal, ModalBody, ModalFooter, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./editProfile.css";
import axios from "axios";
function EditProfile() {
  const [user, setUser] = useState([]);
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
  const newName = useRef();
  const handleSubmit = () => {
    axios
      .put(
        "http://localhost:8000/users/6437dd1c4891d1237c3ad071",
        {
          name: newName.current.value,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization:
              "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NDM2MmJlNDYzZjA3ZjE3OTYzNmJmZTYiLCJ1c2VyUm9sZSI6ImFkbWluIiwiaWF0IjoxNjgxMzgyMDcyfQ.VRR-r6WGrCS_wTRgN4hmbhw7jYvxGCApDLFrW3GnU0c",
          },
        }
      )
      .then((res) => {
        console.log(res.data);
        alert("user name updated succefully");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const [showPhone, setShowPhone] = useState(false);
  const handleShowPhone = () => setShowPhone(true);
  const handleClosePhone = () => setShowPhone(false);
  const handleSubmitPhone = () => {
    axios
      .put(
        "http://localhost:8000/users/6437dd1c4891d1237c3ad071",
        {
          phone: newPhone.current.value,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization:
              "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NDM2MmJlNDYzZjA3ZjE3OTYzNmJmZTYiLCJ1c2VyUm9sZSI6ImFkbWluIiwiaWF0IjoxNjgxMzgyMDcyfQ.VRR-r6WGrCS_wTRgN4hmbhw7jYvxGCApDLFrW3GnU0c",
          },
        }
      )
      .then((res) => {
        console.log(res.data);
        alert("phone updated succefully");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const newPhone = useRef();

  useEffect(() => {
    axios
      .get("http://localhost:8000/users/6437dd1c4891d1237c3ad071", {
        headers: {
          "Content-Type": "application/json",
          Authorization:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NDM2MmJlNDYzZjA3ZjE3OTYzNmJmZTYiLCJ1c2VyUm9sZSI6ImFkbWluIiwiaWF0IjoxNjgxMzgyMDcyfQ.VRR-r6WGrCS_wTRgN4hmbhw7jYvxGCApDLFrW3GnU0c",
        },
      })
      .then((res) => {
        setUser(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  });
  return (
    <div className="container">
      <Row id="RowTitleEditProfile">
        <div>
          <Link id="LinkitleOrder" to={"/Account"}>
            <b>Your Account</b>
          </Link>{" "}
          {">"}{" "}
          <span>
            {" "}
            <b>Manage your Profiles</b>
          </span>
        </div>
      </Row>
      <div className="container">
        <div className="manageProfile">
          <div id="manageProfile">
            <div className="row">
              <h3>
                <b>Manage your Profiles</b>
              </h3>
            </div>
            <div className="row" id="rowNameManageProfile">
              <h4 className="mt-5">
                <b>{user.name}</b>{" "}
                <i class="bi bi-pencil-fill" onClick={handleShow}></i>
              </h4>
              <p>Account holder</p>
            </div>
            <Modal show={show} onHide={handleClose} className="text-center">
              <Modal.Header closeButton id="modalTitle">
                <Modal.Title>
                  <h5>Edit your name</h5>
                </Modal.Title>
              </Modal.Header>
              <ModalBody className="modalBody">
                <div className="row">
                  <p>
                    Changes made to your profile name here, will be shown
                    anywhere your profile is used.
                  </p>
                </div>
                <div className="row">
                  <input
                    type="text"
                    ref={newName}
                    className="form-control"
                    placeholder={user.name}
                  />
                </div>
              </ModalBody>
              <ModalFooter>
                <div className="row">
                  <div className="col-9"></div>
                  <div className="col">
                    <Button
                      className="btn btn-warning"
                      onClick={() => {
                        handleSubmit();
                      }}
                    >
                      Save Changes
                    </Button>
                  </div>
                </div>
              </ModalFooter>
            </Modal>
            <div className="row" id="cardOnManageProfile">
              <div className="row">
                {" "}
                <h5>
                  <b>Contact Details</b>
                </h5>
              </div>
              <div className="row">
                <p>Receive important alerts for your profile here.</p>
              </div>
              <div className="row">
                <div className="col-10">
                  <b>Mobile number</b>
                </div>
                <div className="col">
                  <i class="bi bi-pencil-fill" onClick={handleShowPhone}></i>
                </div>
              </div>
              <div className="row">
                <p>+0-{user.phone}</p>
              </div>
            </div>
            <Modal
              show={showPhone}
              onHide={handleClosePhone}
              className="text-center"
            >
              <Modal.Header closeButton id="modalTitle">
                <Modal.Title>
                  <h5>Edit your Phone</h5>
                </Modal.Title>
              </Modal.Header>
              <ModalBody className="modalBody">
                <div className="row">
                  <p>
                    Changes made to your profile phone here, will be shown
                    anywhere your profile is used.
                  </p>
                </div>
                <div className="row">
                  <input
                    type="number"
                    ref={newPhone}
                    className="form-control"
                    placeholder={user.phone}
                  />
                </div>
              </ModalBody>
              <ModalFooter>
                <div className="row">
                  <div className="col-9"></div>
                  <div className="col">
                    <Button
                      className="btn btn-warning"
                      onClick={() => {
                        handleSubmitPhone();
                      }}
                    >
                      Save Changes
                    </Button>
                  </div>
                </div>
              </ModalFooter>
            </Modal>
            <div className="row" id="cardOnManageProfile">
              <div className="row">
                {" "}
                <h5>
                  <b>Settings</b>
                </h5>
              </div>
              <div className="row">
                <p>
                  Some Amazon programs require a PIN for additional security.
                </p>
              </div>
              <div className="row">
                <div className="col-10">
                  <b>PIN</b>
                </div>
                <div className="col">
                  <i class="bi bi-pencil-fill"></i>
                </div>
              </div>
              <div className="row">
                <p>No set</p>
              </div>
            </div>
            <div className="row" id="cardOnManageProfile">
              <div className="row">
                {" "}
                <h5>
                  <b>Enrolled Programs</b>
                </h5>
              </div>
              <div className="row">
                <p>
                  This profile is enrolled in the following Amazon programs. Tap
                  a program to customize program settings.
                </p>
              </div>
              <div className="row">
                <div className="row title">
                  <div className="col-10">Prime Videos</div>
                  <div className="col">
                    <b>
                      <i class="bi bi-chevron-right"></i>
                    </b>
                  </div>
                </div>
                <hr />
              </div>
              {/* <hr /> */}
              <div className="row">
                <div className="row title">
                  <div className="col-10">Shopping</div>
                  <div className="col">
                    <b>
                      <i class="bi bi-chevron-right"></i>
                    </b>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default EditProfile;
