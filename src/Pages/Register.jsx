import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Gmail from "../assets/gambar/Gmail.png";
import Facebook from "../assets/gambar/Facebook.png";
import Google from "../assets/gambar/google.png";
import gambar2 from "../assets/gambar/daftar.svg";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";
import { Modal, Button } from "react-bootstrap";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [showErrorModal, setShowErrorModal] = useState(false);

  const [registrationSuccess, setRegistrationSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const apiUrl = "http://localhost:3000/auth/register";

    try {
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setRegistrationSuccess(true);
        setShowSuccessModal(true);
      } else {
        console.error("Error during registration:", data.error);
        setShowErrorModal(true);
      }
    } catch (error) {
      console.error("Error during registration:", error);
      setShowErrorModal(true);
    }
  };

  if (registrationSuccess) {
    return (
      <div
        style={{
          background:
            "linear-gradient(to right, #388A8D, #50C2C9, #7FDEE3, #B2FDFF, #D9FEFF)",
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Container
          style={{
            width: "700px",
            border: "1px solid #fff",
            borderRadius: "10px",
            textAlign: "center",
            padding: "20px",
            background: "#fff",
            boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
          }}
        >
          <div className="kotak-2" style={{marginBottom: "-220px"}}>
            <h1 className="mb-4">Pendaftaran Berhasil!</h1>
            <p>Silakan masuk ke akun Anda.</p>
            <Link to="/login">
              <Button variant="primary" className="mt-3">
                Masuk
              </Button>
            </Link>
          </div>
        </Container>
      </div>
    );
  }

  return (
    <div
      style={{
        background:
          "linear-gradient(to right, #388A8D, #50C2C9, #7FDEE3, #B2FDFF, #D9FEFF)",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        paddingTop: "9%",
      }}
    >
      <Container>
        <img className="bg-2" src={gambar2} alt="" />
        <div className="kotak-2">
          <h1 className="mb-4">Daftar</h1>

          <form onSubmit={handleSubmit}>
            <div className="group mb-4 mt-1">
              <input
                required=""
                type="text"
                className="input"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
              />
              <span className="highlight"></span>
              <span className="bar"></span>
              <label className="text-black">Masukkan nama Anda</label>
            </div>

            <div className="group mt-4">
              <input
                required=""
                type="text"
                className="input"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />
              <span className="highlight"></span>
              <span className="bar"></span>
              <label className="text-black">Masukkan Email</label>
            </div>

            <div className="group mt-4">
              <input
                required=""
                type="password"
                className="input"
                value={formData.password}
                onChange={(e) =>
                  setFormData({ ...formData, password: e.target.value })
                }
              />
              <span className="highlight"></span>
              <span className="bar"></span>
              <label className="text-black">Masukkan Kata sandi</label>
            </div>

            <div className="group mt-4">
              <input
                required=""
                type="password"
                className="input"
                value={formData.confirmPassword}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    confirmPassword: e.target.value,
                  })
                }
              />
              <span className="highlight"></span>
              <span className="bar"></span>
              <label className="text-black">Konfirmasi kata sandi </label>
            </div>
            <button type="submit" className="btn tombol w-100 fw-semibold mt-4">
              Daftar
            </button>
            <Link to="/login">
              <p className="mt-1">Punya akun? Masuk</p>
            </Link>
          </form>

          <div className="d-flex atau ">
            <hr className="hr w-100 fw-semibold" />
            <p className="fw-semibold mx-2">atau</p>
            <hr className="hr w-100 fw-semibold" />
          </div>

          <div className="d-flex imeg justify-content-center gap-4">
            <a href="#">
              <img src={Gmail} alt="" />
            </a>
            <a href="#">
              <img src={Facebook} alt="" />
            </a>
            <a href="#">
              <img src={Google} alt="" />
            </a>
          </div>
        </div>
      </Container>

      <Modal show={showErrorModal} onHide={() => setShowErrorModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Gagal Masuk</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Password anda tidak sesuai. Silakan coba lagi.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowErrorModal(false)}>
            Tutup
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Register;
