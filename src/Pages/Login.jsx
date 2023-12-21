import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Gmail from "../assets/gambar/Gmail.png";
import Facebook from "../assets/gambar/Facebook.png";
import Google from "../assets/gambar/google.png";
import gambar1 from "../assets/gambar/Login.svg";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";
import { Modal, Button } from "react-bootstrap";

const Login = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const navigate = useNavigate();
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [showErrorModal, setShowErrorModal] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:3000/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json().catch(() => null);

      if (!data) {
        console.error("Non-JSON response:", response);
      } else {
        if (response.ok) {
          console.log("Login successful:", data);
          navigate("/beranda");
          setShowSuccessModal(true);
        } else {
          console.error("Login failed:", data.error);
          setShowErrorModal(true);
        }
      }
    } catch (error) {
      console.error("Error during login:", error);
      setShowErrorModal(true);
    }
  };

  return (
    <div
      style={{
        background:
          "linear-gradient(to right, #388A8D, #50C2C9, #7FDEE3, #B2FDFF, #D9FEFF)",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Container>
        <img className="bg" src={gambar1} alt="" />
        <div className="kotak-1" style={{ marginTop: "-1%" }}>
          <h1 className="text-black">Masuk</h1>
          <form onSubmit={handleLogin}>
            <div className="group-2 mb-4 mt-1">
              <input
                required=""
                type="text"
                className="input-2"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={{
                  borderBottomColor: email ? "#000" : "#000", 
                }}
              />
              <span className="highlight-2" style={{}}></span>
              <span
                className="bar-2"
                style={{
                  backgroundColor: email ? "#50C2C9" : "#000", 
                }}
              ></span>
              <label
                className={`text-black ${email ? "up" : ""}`}
                style={{
                  top: email ? "-10px" : "8px", 
                }}
              >
                Email
              </label>
            </div>

            <div className="group mt-4">
              <input
                required=""
                type="password"
                className="input-2"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                style={{
                  borderBottomColor: password ? "#50C2C9" : "#000", 
                }}
              />
              <span className="highlight-2" style={{}}></span>
              <span
                className="bar-2"
                style={{
                  backgroundColor: password ? "#50C2C9" : "#000", 
                }}
              ></span>
              <label
                className={`text-black ${password ? "up" : ""}`}
                style={{
                  top: password ? "-10px" : "8px", 
                }}
              >
                Masukkan kata sandi
              </label>
              <a href="">
                <p className="mt-2">Lupa password?</p>
              </a>
              <Link to="/Register">
                <p className>belum punya akun? Daftar</p>
              </Link>
            </div>

            <button type="submit" className="btn tombol w-100 fw-semibold mt-4">
              Masuk
            </button>
          </form>

          <div className="d-flex atau">
            <hr className="hr w-100 fw-semibold" />
            <p className="fw-semibold mx-2 text-white">atau</p>
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

      <Modal show={showSuccessModal} onHide={() => setShowSuccessModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Login Berhasil</Modal.Title>
        </Modal.Header>
        <Modal.Body>Data Kost berhasil disimpan!</Modal.Body>
        <Modal.Footer>
          <Button
            variant="secondary"
            onClick={() => setShowSuccessModal(false)}
          >
            Tutup
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal show={showErrorModal} onHide={() => setShowErrorModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Gagal Masuk</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Password atau email anda salah. Silakan coba lagi.
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

export default Login;
