import React, { useState } from "react";
import { Container, Row, Col, FormControl } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";

import { semuaKos } from "../Data/data";

const CariKost = () => {
  const [searchTerm, setSearchTerm] = useState("");
  
  

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredKos = semuaKos.filter(
    (kos) =>
      (kos.title &&
        kos.title.toLowerCase().includes(searchTerm.toLowerCase())) ||
      (kos.lokasi &&
        kos.lokasi.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div className="Kos min-vh-100" style={{ marginTop: "4%" }}>
      <Container>
        <Row>
          <Col>
            <h1 className="fw-bold text-center animate__animated animate__fadeInUp animate__delay-1s">
              Segera Temukan Kost Impian
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
                <i className="fa-solid fa-magnifying-glass"></i>
                <FormControl
                  type="text"
                  placeholder="Cari kost"
                  onChange={handleSearch}
                />
              </div>
            </form>
          </Col>
        </Row>

        <Row>
          {filteredKos.map((kos) => (
            <Col
              key={kos.id}
              data-aos="fade-in"
              data-aos-duration="1000"
              data-aos-delay={kos.delay}
            >
              <Link
                to={`/detailkos/${kos.id}`}
                style={{ color: "black", textDecoration: "none" }}
              >
                <img
                  src={kos.image}
                  alt=""
                  className="w-100 mb-5 rounded-top"
                />
                <div className="title">
                  <h5>{kos.title}</h5>
                </div>
                <div className="jenis">
                  <h6>{kos.jenis}</h6>
                  <p>{kos.sisa}</p>
                </div>
                <div className="detail" style={{ fontWeight: "400" }}>
                  <p>{kos.detail}</p>
                </div>
                <div className="lokasi">
                  <h6>{kos.lokasi}</h6>
                </div>
                <div className="fasilitas">
                  <p>{kos.fasilitas}</p>
                </div>
                <div className="harga">
                  <h6>{kos.harga}</h6>
                </div>
                <div className="star mb-2">
                  <i className={kos.star1}></i>
                  <i className={kos.star2}></i>
                  <i className={kos.star3}></i>
                  <i className={kos.star4}></i>
                  <i className={kos.star5}></i>
                </div>
              </Link>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default CariKost;
