import React, { useEffect, useState } from "react";
import "./profile.css";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

function Profile() {
  const [user, setUser] = useState([]);
  // const routToEditProfile
  const navigate = useNavigate();

  const handleNavigationToEditProfile = () => {
    navigate("/editProfile");
    // navigate(-1) // will backword one page
  };
  useEffect(() => {
    axios
      .get("http://localhost:8000/users/6437dd1c4891d1237c3ad071", {
        headers: {
          "content-type": "application/json",
          Authorization:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NDM2MmJlNDYzZjA3ZjE3OTYzNmJmZTYiLCJ1c2VyUm9sZSI6ImFkbWluIiwiaWF0IjoxNjgxMzgyMDcyfQ.VRR-r6WGrCS_wTRgN4hmbhw7jYvxGCApDLFrW3GnU0c",
        },
      })
      .then((res) => {
        console.log(res.data.data);
        setUser(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <div className="container">
        <div className="profile">
          <div id="profile">
            <div className="row">
              <div className="row">
                <h2>
                  <b>Manage your Profiles</b>
                </h2>
              </div>
              <div className="row">
                <p>
                  Amazon programs may use these profiles to provide a
                  personalized experience.
                </p>
              </div>
              <hr />
            </div>
            <div className="row">
              {/* onClick={routToEditProfile} */}
              <div
                className="row title"
                onClick={handleNavigationToEditProfile}
              >
                <div className="col-10">{user.name}</div>
                <div className="col">
                  <b>
                    <i class="bi bi-chevron-right"></i>
                  </b>
                </div>
              </div>
              <div className="row">
                <div id="smallActive">Active Profile</div>
              </div>
              <hr className="mt-3" />
            </div>
            <div className="row">
              <p>
                Selecting an adult profile will switch profiles, allowing you to
                shop with and manage that profile.
              </p>
              <hr />
            </div>
            <div className="row">
              <div className="row title">
                <div className="col-10">Kids</div>
                <div className="col">
                  <b>
                    <i class="bi bi-chevron-right"></i>
                  </b>
                </div>
              </div>
              <hr className="mt-3" />
            </div>
            <div className="row" id="marginRowProfile">
              <p>
                Looking for your{" "}
                <Link id="profileLink">Amazon Public Profile</Link>?
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
