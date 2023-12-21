import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import {} from "react-bootstrap";
import Counter from "../Component/counter";

import { semuaKos } from "../Data/data";

const AturKost = () => {
  return (
    <div className="aturkos min-vh-100">
      <Container>
        <Col>
          {semuaKos.map((atur) => {
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
