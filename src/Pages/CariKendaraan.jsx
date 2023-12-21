import React, { useState } from "react";
import { Container, Row, Col, FormControl } from "react-bootstrap";
import { Link } from "react-router-dom";

import { semuaKendaraan } from "../Data/data";

const CariKendaraan = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredKendaraan = semuaKendaraan.filter(
    (kendaraan) =>
      kendaraan.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      kendaraan.lokasi.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="Kos min-vh-100" style={{marginTop: "4%"}}>
      <Container>
        <Row>
          <Col>
            <h1 className="fw-bold text-center animate__animated animate__fadeInUp animate__delay-1s">
              Segera Temukan Kendaraan Impian
            </h1>
            <h1 className="fw-bold text-center animate__animated animate__fadeInUp animate__delay-1s">
              Anda di Lombok
            </h1>
          </Col>
        </Row>

        <Row>
          <Col>
            <form className="mb-3">
              <div className="search-bar animate__animated animate__fadeInUp animate__delay-1s">
                <i className="fa-solid fa-magnifying-glass "></i>
                <FormControl
                  type="text"
                  placeholder="Cari Kendaraan"
                  onChange={handleSearch}
                />
              </div>
            </form>
          </Col>
        </Row>

        <Row>
          {filteredKendaraan.map((kendaraan) => (
            <Col
              key={kendaraan.id}
              data-aos="fade-in"
              data-aos-duration="1000"
              data-aos-delay={kendaraan.delay}
            >
              <Link
                to={`/detailkendaraan/${kendaraan.id}`}
                style={{ color: "black", textDecoration: "none" }}
              >
                <img
                  src={kendaraan.image}
                  alt=""
                  className="w-100 mb-5 rounded-top"
                />
              </Link>
              <div className="title">
                <h5>{kendaraan.title}</h5>
              </div>
              <div className="jenis">
                <h6>{kendaraan.jenis}</h6>
                <p>{kendaraan.sisa}</p>
              </div>
              <div className="detail">
                <p>{kendaraan.detail}</p>
              </div>
              <div className="lokasi">
                <h6>{kendaraan.lokasi}</h6>
              </div>
              <div className="fasilitas">
                <p>{kendaraan.fasilitas}</p>
              </div>
              <div className="harga">
                <h6>{kendaraan.harga}</h6>
              </div>
              <div className="star mb-2">
                <i className={kendaraan.star1}></i>
                <i className={kendaraan.star2}></i>
                <i className={kendaraan.star3}></i>
                <i className={kendaraan.star4}></i>
                <i className={kendaraan.star5}></i>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default CariKendaraan;
