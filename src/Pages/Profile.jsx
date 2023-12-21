import React from "react";
import "../dist/css/style.css";
import Profile2 from "../assets/gambar/profile2.svg";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";

const Profile = () => {
  return (
    <div>
      {/* Profile Content */}
      <Container>
        <div className="isi-profile d-grid ">
          <div
            className="col-md-12 d-flex justify-content-center"
            style={{ marginTop: "10%", marginBottom: "-10%" }}
          >
            <h3>Profile Anda</h3>
          </div>
          <div className="row  kolom-1 d-flex justify-content-center"></div>
          <div className="row-md-10 d-flex kolom-2">
            <div className="col-md-6 baris-2 justify-content-center d-grid justify-content-center align-items-left  ">
              <div className="row data-diri">
                <div className="col data-anda">Nama</div>
                <div className="col data-anda">Eka Tata Rosyana</div>
              </div>
              <div className="row data-diri">
                <div className="col data-anda">Nama panggilan</div>
                <div className="col data-anda">Tata</div>
              </div>
              <div className="row data-diri">
                <div className="col data-anda">Email</div>
                <div className="col data-anda">ekatatarosyana@gmail.com</div>
              </div>
              <div className="row data-diri">
                <div className="col data-anda">Alamat</div>
                <div className="col data-anda">Lombok Timur</div>
              </div>
              <div className="row data-diri">
                <div className="col data-anda">No Telpon</div>
                <div className="col data-anda">088227990636</div>
              </div>
            </div>
            <div className="col-md-4 baris-3 d-grid justify-content-center align-items-center">
              <img src={Profile2} alt="" />
              <h5>Eka tata rosyana</h5>
              <p>@tatasyana</p>
              <Link to="/editprofile">
                <button
                  style={{
                    background: "rgba(178, 253, 255, 1)",
                    color: "black",
                  }}
                >
                  Edit profile
                </button>
              </Link>
            </div>
          </div>
          <Link to="/">
            <button
              className="logout"
              style={{
                background: "rgba(178, 253, 255, 1)",
                color: "black",
                textAlign: "center",
                marginLeftLeft: "200px",
              }}
            >
              Logout
            </button>
          </Link>
        </div>
      </Container>
    </div>
  );
};

export default Profile;
