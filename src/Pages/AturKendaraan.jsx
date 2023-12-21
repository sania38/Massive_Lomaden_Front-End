import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import {} from "react-bootstrap";
import Counter from "../Component/counter";

import { semuaKendaraan } from "../Data/data";

const AturKost = () => {
  return (
    <div className="aturkendaraan min-vh-100">
      <Container>
        <Col>
          {semuaKendaraan.map((atur) => {
            return (
              <div
                className="belakang"
                key={atur.id}
                data-aos="fade-in"
                data-aos-duration="1000"
                data-aos-delay={atur.delay}
              >
                <Row>
                  <img src={atur.image} alt="" />
                </Row>
                <Row>
                  <div className="title">
                    <h5>{atur.title}</h5>
                    <p>{atur.detail}</p>
                    <p>{atur.fasilitas}</p>
                  </div>
                </Row>
                <Row>
                  <Counter />
                </Row>
              </div>
            );
          })}
        </Col>
      </Container>
    </div>
  );
};

export default AturKost;
