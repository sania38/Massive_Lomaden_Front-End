import React, { useState } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import { Modal, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const TambahKendaraan = () => {
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [showErrorModal, setShowErrorModal] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [buildingPhotos, setBuildingPhotos] = useState(Array(4).fill(""));
  const [namakendaraan, setnamakendaraan] = useState("");
  const [detailkendaraaan, setdetailkendaraaan] = useState("");
  const [jenisKendaraan, setjenisKendaraan] = useState("");
  const [lokasikendaraan, setlokasikendaraan] = useState("");
  const [fasilitas, setFasilitas] = useState("");
  const [no, setNo] = useState("");
  const [harga, setHarga] = useState("");
  const [sk1, setsk1] = useState("");
  const [sk2, setsk2] = useState("");
  const [sk3, setsk3] = useState("");
  const [sk4, setsk4] = useState("");
  const [sk5, setsk5] = useState("");
  const [ketharga1, setketharga1] = useState("");
  const [ketharga2, setketharga2] = useState("");
  const [ketharga3, setketharga3] = useState("");
  const [ketharga4, setketharga4] = useState("");
  const [ketharga5, setketharga5] = useState("");
  const [ketharga6, setketharga6] = useState("");
  const [psewa1, setpsewa1] = useState("");
  const [psewa2, setpsewa2] = useState("");
  const [psewa3, setpsewa3] = useState("");
  const [ssewa1, setssewa1] = useState("");
  const [ssewa2, setssewa2] = useState("");
  const [ssewa3, setssewa3] = useState("");
  const [ssewa4, setssewa4] = useState("");
  const [peta, setpeta] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      title: namakendaraan,
      jenis: jenisKendaraan,
      detail: detailkendaraaan,
      lokasi: lokasikendaraan,
      fasilitas: fasilitas,
      no: no,
      harga: harga,
      sk1: sk1,
      sk2: sk2,
      sk3: sk3,
      sk4: sk4,
      sk5: sk5,
      ketharga1: ketharga1,
      ketharga2: ketharga2,
      ketharga3: ketharga3,
      ketharga4: ketharga4,
      ketharga5: ketharga5,
      ketharga6: ketharga6,
      psewa1: psewa1,
      psewa2: psewa2,
      psewa3: psewa3,
      ssewa1: ssewa1,
      ssewa2: ssewa2,
      ssewa3: ssewa3,
      ssewa4: ssewa4,
      peta: peta,
    };

    try {
      const response = await fetch("http://localhost:3000/auth/kendaraan", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setShowSuccessModal(true);
        console.log("Kost berhasil ditambahkan!");
      } else {
        setShowErrorModal(true);
        console.error("Gagal menambahkan kost");
      }
    } catch (error) {
      console.error("Terjadi kesalahan:", error);
      setShowErrorModal(true);
    }
  };

  return (
    <div className="tambahkendaraan min-vh-100" style={{ marginTop: "5%" }}>
      <Container>
        <h4>Tambah Kendaraan</h4>
        <Row className="info">
          <h4 style={{ marginTop: "20px" }}>Informasi Kendaraan</h4>
          <Row
            className="in"
            style={{ justifyContent: "center", alignItems: "center" }}
          >
            <Col md={3} style={{ marginRight: "8%", marginTop: "20px" }}>
              <h6 style={{ fontSize: "22px" }}>Merek Kendaraan</h6>
              <p style={{ fontSize: "12px", opacity: 0.6 }}>
                Masukan merek kendaraan yang meliputi brand dan tipe kendaraan.
              </p>
            </Col>
            <Col md={8}>
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formDeskripsi">
                  <Form.Control
                    type="text"
                    placeholder="Contoh : Honda WRV"
                    value={namakendaraan}
                    onChange={(e) => setnamakendaraan(e.target.value)}
                    style={{ opacity: 0.6, border: "1px solid #afafaf" }}
                  />
                </Form.Group>
              </Form>
            </Col>
          </Row>

          <Row
            className="in"
            style={{ justifyContent: "center", alignItems: "center" }}
          >
            <Col md={3} style={{ marginRight: "8%", marginTop: "20px" }}>
              <h6 style={{ fontSize: "22px" }}>Deskripsi Kendaran</h6>
              <p style={{ fontSize: "12px", opacity: 0.6 }}>
                Informasi kost min.40 karakter, yang didalamnya memuat nama kost
                dan wilayahnya
              </p>
            </Col>
            <Col md={8}>
              <Form>
                <Form.Group className="mb-3" controlId="formDeskripsi">
                  <Form.Control
                    type="text"
                    placeholder="Contoh : Toyota Avanza, Jl.Maju bersama, RT.06 RW.04, Kertajaya....."
                    value={detailkendaraaan}
                    onChange={(e) => setdetailkendaraaan(e.target.value)}
                    style={{ opacity: 0.6, border: "1px solid #afafaf" }}
                  />
                </Form.Group>
              </Form>
            </Col>
          </Row>

          <Row
            className="in"
            style={{ justifyContent: "center", alignItems: "center" }}
          >
            <Col md={3} style={{ marginRight: "8%", marginTop: "20px" }}>
              <h6 style={{ fontSize: "22px" }}>Jenis Transmisi</h6>
              <p style={{ fontSize: "12px", opacity: 0.6 }}>
                Masukan transmisi kendaraan yang akan anda sewakan.
              </p>
            </Col>
            <Col md={8}>
              <Form>
                <Form.Group className="mb-3" controlId="formDeskripsi">
                  <Form.Control
                    type="text"
                    placeholder="Contoh : Transmisi Otomatis"
                    value={jenisKendaraan}
                    onChange={(e) => setjenisKendaraan(e.target.value)}
                    style={{ opacity: 0.6, border: "1px solid #afafaf" }}
                  />
                </Form.Group>
              </Form>
            </Col>
          </Row>

          <Row
            className="in"
            style={{ justifyContent: "center", alignItems: "center" }}
          >
            <Col md={3} style={{ marginRight: "8%", marginTop: "20px" }}>
              <h6 style={{ fontSize: "22px" }}>spesifikasi utama</h6>
              <p style={{ fontSize: "12px", opacity: 0.6 }}>
                Masukan spesifikasi utama yang dimiliki kendaraan yang akan anda
                sewakan.
              </p>
            </Col>
            <Col md={8}>
              <Form>
                <Form.Group className="mb-3" controlId="formDeskripsi">
                  <Form.Control
                    type="text"
                    placeholder="Contoh : 1.300 cc, KM. 45.000, 7 Kursi"
                    value={fasilitas}
                    onChange={(e) => setFasilitas(e.target.value)}
                    style={{ opacity: 0.6, border: "1px solid #afafaf" }}
                  />
                </Form.Group>
              </Form>
            </Col>
          </Row>

          <Row
            className="in"
            style={{ justifyContent: "center", alignItems: "center" }}
          >
            <Col md={3} style={{ marginRight: "8%", marginTop: "20px" }}>
              <h6 style={{ fontSize: "22px" }}>No.Telepon</h6>
              <p style={{ fontSize: "12px", opacity: 0.6 }}>
                Masukan nomor telepon yang bisa dihubungi untuk proses negosiasi
                selanjutnya. Lebih baik nomor yang terhubung dengan WhatsApp
              </p>
            </Col>
            <Col md={8}>
              <Form>
                <Form.Control
                  type="text"
                  placeholder="Contoh : 088227990636"
                  value={no}
                  onChange={(e) => setNo(e.target.value)}
                  style={{ opacity: 0.6, border: "1px solid #afafaf" }}
                />
              </Form>
            </Col>
          </Row>

          <Row
            className="in"
            style={{ justifyContent: "center", alignItems: "center" }}
          >
            <Col md={3} style={{ marginRight: "8%", marginTop: "20px" }}>
              <h6 style={{ fontSize: "22px" }}>Harga utama</h6>
              <p style={{ fontSize: "12px", opacity: 0.6 }}>
                Masukan harga terendah untuk penawaran kendaraan yang anda
                sewakan.
              </p>
            </Col>
            <Col md={8}>
              <Form>
                <Form.Group className="mb-3" controlId="formDeskripsi">
                  <Form.Control
                    type="text"
                    placeholder="Rp.1.000.000/24 Jam"
                    value={harga}
                    onChange={(e) => setHarga(e.target.value)}
                    style={{ opacity: 0.6, border: "1px solid #afafaf" }}
                  />
                </Form.Group>
              </Form>
            </Col>
          </Row>
        </Row>

        <Row className="info">
          <h4 style={{ marginTop: "20px" }}>Spesifikasi dan Harga</h4>
          <Row
            className="in"
            style={{ justifyContent: "center", marginBottom: "5%" }}
          >
            <Col md={3} style={{ marginRight: "8%", marginTop: "20px" }}>
              <h6 style={{ fontSize: "22px" }}>Spesifikasi Kendaraan</h6>
              <p style={{ fontSize: "12px", opacity: 0.6 }}>
                Masukan Spesifikasi Kendaraan seperti pada contoh
              </p>
            </Col>
            <Col md={8}>
              <Form>
                <Form.Group className="mb-3" controlId="formDeskripsi">
                  <Form.Control
                    type="text"
                    placeholder="Contoh: 5 Tempat duduk"
                    value={sk1}
                    onChange={(e) => setsk1(e.target.value)}
                    style={{
                      opacity: 0.6,
                      border: "1px solid #afafaf",
                      marginBottom: "10px",
                    }}
                  />
                  <Form.Control
                    type="text"
                    placeholder="Contoh: 18 km/l"
                    value={sk2}
                    onChange={(e) => setsk2(e.target.value)}
                    style={{
                      opacity: 0.6,
                      border: "1px solid #afafaf",
                      marginBottom: "10px",
                    }}
                  />
                  <Form.Control
                    type="text"
                    placeholder="Contoh: 1.500 cc"
                    value={sk3}
                    onChange={(e) => setsk3(e.target.value)}
                    style={{
                      opacity: 0.6,
                      border: "1px solid #afafaf",
                      marginBottom: "10px",
                    }}
                  />
                  <Form.Control
                    type="text"
                    placeholder="Contoh: Otomatis"
                    value={sk4}
                    onChange={(e) => setsk4(e.target.value)}
                    style={{
                      opacity: 0.6,
                      border: "1px solid #afafaf",
                      marginBottom: "10px",
                    }}
                  />
                  <Form.Control
                    type="text"
                    placeholder="Contoh: 14.000 KM Berjalan"
                    value={sk5}
                    onChange={(e) => setsk5(e.target.value)}
                    style={{
                      opacity: 0.6,
                      border: "1px solid #afafaf",
                      marginBottom: "10px",
                    }}
                  />
                </Form.Group>
              </Form>
            </Col>
          </Row>

          <Row
            className="in"
            style={{ justifyContent: "center", marginBottom: "5%" }}
          >
            <Col md={3} style={{ marginRight: "8%", marginTop: "20px" }}>
              <h6 style={{ fontSize: "22px" }}>Harga</h6>
              <p style={{ fontSize: "12px", opacity: 0.6 }}>
                Masukan harga secara lengkap sesuai yang tertera pada contoh
              </p>
            </Col>
            <Col md={8}>
              <Form>
                <Form.Group className="mb-3" controlId="formDeskripsi">
                  <Form.Control
                    type="text"
                    placeholder="Contoh : 12 Jam tanpa sopir Rp.400.000"
                    value={ketharga1}
                    onChange={(e) => setketharga1(e.target.value)}
                    style={{ opacity: 0.6, border: "1px solid #afafaf" }}
                  />
                </Form.Group>
              </Form>
              <Form>
                <Form.Group className="mb-3" controlId="formDeskripsi">
                  <Form.Control
                    type="text"
                    placeholder="Contoh : 12 Jam dengan sopir Rp.550.000"
                    value={ketharga2}
                    onChange={(e) => setketharga2(e.target.value)}
                    style={{ opacity: 0.6, border: "1px solid #afafaf" }}
                  />
                </Form.Group>
              </Form>
              <Form>
                <Form.Group className="mb-3" controlId="formDeskripsi">
                  <Form.Control
                    type="text"
                    placeholder="Contoh : 24 Jam tanpa sopir Rp.700.000"
                    value={ketharga3}
                    onChange={(e) => setketharga3(e.target.value)}
                    style={{ opacity: 0.6, border: "1px solid #afafaf" }}
                  />
                </Form.Group>
              </Form>
              <Form>
                <Form.Group className="mb-3" controlId="formDeskripsi">
                  <Form.Control
                    type="text"
                    placeholder="Contoh : 24 Jam tanpa sopir Rp.900.000"
                    value={ketharga4}
                    onChange={(e) => setketharga4(e.target.value)}
                    style={{ opacity: 0.6, border: "1px solid #afafaf" }}
                  />
                </Form.Group>
              </Form>
              <Form>
                <Form.Group className="mb-3" controlId="formDeskripsi">
                  <Form.Control
                    type="text"
                    placeholder="Contoh : Bulanan 9.000.000"
                    value={ketharga5}
                    onChange={(e) => setketharga5(e.target.value)}
                    style={{ opacity: 0.6, border: "1px solid #afafaf" }}
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formDeskripsi">
                  <Form.Control
                    type="text"
                    placeholder="Contoh : Tahunan 108.000.000"
                    value={ketharga6}
                    onChange={(e) => setketharga6(e.target.value)}
                    style={{ opacity: 0.6, border: "1px solid #afafaf" }}
                  />
                </Form.Group>
              </Form>
            </Col>
          </Row>
        </Row>

        <Row className="info">
          <h4 style={{ marginTop: "20px" }}>Peraturan dan lokasi</h4>
          <Row
            className="in"
            style={{ justifyContent: "center", marginBottom: "5%" }}
          >
            <Col md={3} style={{ marginRight: "8%", marginTop: "20px" }}>
              <h6 style={{ fontSize: "22px" }}>Peraturan Sewa</h6>
              <p style={{ fontSize: "12px", opacity: 0.6 }}>
                Masukan Peraturan yang harus dipatuhi penyewa. Maksimal 20 kata.
              </p>
            </Col>
            <Col md={8}>
              <Form>
                <Form.Group className="mb-3" controlId="formDeskripsi">
                  <Form.Control
                    type="text"
                    placeholder="Contoh : BBM ditanggung penyewa"
                    value={psewa1}
                    onChange={(e) => setpsewa1(e.target.value)}
                    style={{ opacity: 0.6, border: "1px solid #afafaf" }}
                  />
                </Form.Group>
              </Form>
              <Form>
                <Form.Group className="mb-3" controlId="formDeskripsi">
                  <Form.Control
                    type="text"
                    placeholder="Contoh :Segala kerusakan ditanggung penyewa"
                    value={psewa2}
                    onChange={(e) => setpsewa2(e.target.value)}
                    style={{ opacity: 0.6, border: "1px solid #afafaf" }}
                  />
                </Form.Group>
              </Form>
              <Form>
                <Form.Group className="mb-3" controlId="formDeskripsi">
                  <Form.Control
                    type="text"
                    placeholder="Contoh : Memiliki SIM"
                    value={psewa3}
                    onChange={(e) => setpsewa3(e.target.value)}
                    style={{ opacity: 0.6, border: "1px solid #afafaf" }}
                  />
                </Form.Group>
              </Form>
            </Col>
          </Row>

          <Row className="in" style={{ justifyContent: "center" }}>
            <Col md={3} style={{ marginRight: "8%", marginTop: "20px" }}>
              <h6 style={{ fontSize: "22px" }}>Lokasi</h6>
              <p style={{ fontSize: "12px", opacity: 0.6 }}>
                Masukan kota lokasi kendaraan anda disewakan
              </p>
            </Col>
            <Col md={8}>
              <Form>
                <Form.Group className="mb-3" controlId="formDeskripsi">
                  <Form.Control
                    type="text"
                    placeholder="Contoh : Lombok Utara"
                    value={lokasikendaraan}
                    onChange={(e) => setlokasikendaraan(e.target.value)}
                    style={{ opacity: 0.6, border: "1px solid #afafaf" }}
                  />
                </Form.Group>
              </Form>
            </Col>
          </Row>

          <Row className="in" style={{ justifyContent: "center" }}>
            <Col md={3} style={{ marginRight: "8%", marginTop: "20px" }}>
              <h6 style={{ fontSize: "22px" }}>Lokasi</h6>
              <p style={{ fontSize: "12px", opacity: 0.6 }}>
                Masukan Link google maps lokasi kost anda
              </p>
            </Col>
            <Col md={8}>
              <Form>
                <Form.Group className="mb-3" controlId="formDeskripsi">
                  <Form.Control
                    type="text"
                    placeholder="Contoh : https://maps.app.goo.gl/bgRKpTDB5HcwZths7 "
                    value={peta}
                    onChange={(e) => setpeta(e.target.value)}
                    style={{ opacity: 0.6, border: "1px solid #afafaf" }}
                  />
                </Form.Group>
              </Form>
            </Col>
          </Row>
        </Row>

        <Row className="info">
          <h4 style={{ marginTop: "20px" }}>Validasi dan Syarat</h4>
          <Row
            className="in"
            style={{ justifyContent: "center", marginBottom: "5%" }}
          >
            <Col md={3} style={{ marginRight: "8%", marginTop: "20px" }}>
              <h6 style={{ fontSize: "22px" }}>Syarat Sewa</h6>
              <p style={{ fontSize: "12px", opacity: 0.6 }}>
                Masukan Harga yang ditawarkan untuk bulanan
              </p>
            </Col>
            <Col md={8}>
              <Form>
                <Form.Group className="mb-3" controlId="formDeskripsi">
                  <Form.Control
                    type="text"
                    placeholder="Contoh : KTP"
                    value={ssewa1}
                    onChange={(e) => setssewa1(e.target.value)}
                    style={{ opacity: 0.6, border: "1px solid #afafaf" }}
                  />
                </Form.Group>
              </Form>
              <Form>
                <Form.Group className="mb-3" controlId="formDeskripsi">
                  <Form.Control
                    type="text"
                    placeholder="Contoh : SIM"
                    value={ssewa2}
                    onChange={(e) => setssewa2(e.target.value)}
                    style={{ opacity: 0.6, border: "1px solid #afafaf" }}
                  />
                </Form.Group>
              </Form>
              <Form>
                <Form.Group className="mb-3" controlId="formDeskripsi">
                  <Form.Control
                    type="text"
                    placeholder="Contoh : KK"
                    value={ssewa3}
                    onChange={(e) => setssewa3(e.target.value)}
                    style={{ opacity: 0.6, border: "1px solid #afafaf" }}
                  />
                </Form.Group>
              </Form>
              <Form>
                <Form.Group className="mb-3" controlId="formDeskripsi">
                  <Form.Control
                    type="text"
                    placeholder="Contoh : Bayar Ditempat"
                    value={ssewa4}
                    onChange={(e) => setssewa4(e.target.value)}
                    style={{ opacity: 0.6, border: "1px solid #afafaf" }}
                  />
                </Form.Group>
              </Form>
            </Col>
          </Row>

          <Row
            className="in"
            style={{ justifyContent: "center", marginBottom: "5%" }}
          >
            <Col md={3} style={{ marginRight: "8%", marginTop: "20px" }}>
              <h6 style={{ fontSize: "22px" }}>Unggah Foto Kendaraan</h6>
              <p style={{ fontSize: "12px", opacity: 0.6 }}>
                Unggah gambar kendaraan (maksimal 4 gambar)
              </p>
            </Col>
            <Col md={8}>
              <Form>
                {buildingPhotos.map((photo, index) => (
                  <Form.Group
                    key={index}
                    className="mb-3"
                    controlId={`formPhoto${index}`}
                  >
                    <Form.Control
                      type="file"
                      onChange={(e) => handleBuildingPhotoChange(e, index)}
                    />
                  </Form.Group>
                ))}
              </Form>
            </Col>
          </Row>
        </Row>

        <Modal
          show={showSuccessModal}
          onHide={() => setShowSuccessModal(false)}
        >
          <Modal.Header closeButton>
            <Modal.Title>Simpan Berhasil</Modal.Title>
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
            <Modal.Title>Gagal Menyimpan</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            Terjadi kesalahan saat menyimpan data Kost. Silakan coba lagi.
          </Modal.Body>
          <Modal.Footer>
            <Button
              variant="secondary"
              onClick={() => setShowErrorModal(false)}
            >
              Tutup
            </Button>
          </Modal.Footer>
        </Modal>

        <div className="button">
          <button style={{ backgroundColor: "#B2FDFF" }} onClick={handleSubmit}>
            Simpan
          </button>
          <Link to="/carikos">
            <button>Batal</button>
          </Link>
        </div>
      </Container>
    </div>
  );
};

export default TambahKendaraan;
