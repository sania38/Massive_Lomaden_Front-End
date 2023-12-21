import React, { useEffect } from "react";
import { Container, Row, Col, FormControl } from "react-bootstrap";
import { useParams } from "react-router-dom";
import DetailKendcomp from "../Component/DetailKendcomp";

import { semuaKendaraan } from "../Data/data";

const DetailKendaraan = () => {
  const { id } = useParams();
  const selectedKendaraaan = semuaKendaraan.find(
    (kendaraan) => kendaraan.id === parseInt(id, 10)
  );

  if (!selectedKendaraaan) {
    return <div>Data tidak ditemukan</div>;
  }

  return (
    <div className="detaikos min-vh-100" style={{ marginTop: "6%" }}>
      <Container>
        <Row>
          <Col>
            <form
              className="mb-3"
              style={{
                display: "flex",
                textAlign: "center",
                alignItems: "center",
              }}
            >
              <div
                className="search-bar animate__animated animate__fadeInUp animate__delay-1s"
                style={{ flex: "1" }}
              >
                <i className="fa-solid fa-magnifying-glass"></i>
                <FormControl type="text" placeholder="Cari kost" />
              </div>
            </form>
          </Col>
        </Row>

        <Row>
          <DetailKendcomp kendaraan={selectedKendaraaan} />
        </Row>
      </Container>
    </div>
  );
};

export default DetailKendaraan;
