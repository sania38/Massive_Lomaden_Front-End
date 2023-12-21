import React, { useState } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import { Modal, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const TambahKost = () => {
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [showErrorModal, setShowErrorModal] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [buildingPhotos, setBuildingPhotos] = useState(Array(4).fill(""));
  const [namaKost, setNamaKost] = useState("");
  const [detailKost, setDetailKost] = useState("");
  const [sisaKamar, setSisaKamar] = useState("");
  const [jenisKost, setJenisKost] = useState("");
  const [lokasiKost, setLokasiKost] = useState("");
  const [fasilitas, setFasilitas] = useState("");
  const [no, setNo] = useState("");
  const [harga, setHarga] = useState("");
  const [sk1, setSk1] = useState("");
  const [sk2, setSk2] = useState("");
  const [sk3, setSk3] = useState("");
  const [fk1, setFk1] = useState("");
  const [fk2, setFk2] = useState("");
  const [fk3, setFk3] = useState("");
  const [fk4, setFk4] = useState("");
  const [fk5, setFk5] = useState("");
  const [fk6, setFk6] = useState("");
  const [fk7, setFk7] = useState("");
  const [fkm1, setFkm1] = useState("");
  const [fkm2, setFkm2] = useState("");
  const [fkm3, setFkm3] = useState("");
  const [fkm4, setFkm4] = useState("");
  const [fkm5, setFkm5] = useState("");
  const [fu1, setFu1] = useState("");
  const [fu2, setFu2] = useState("");
  const [fu3, setFu3] = useState("");
  const [fu4, setFu4] = useState("");
  const [fu5, setFu5] = useState("");
  const [pk1, setPk1] = useState("");
  const [pk2, setPk2] = useState("");
  const [pk3, setPk3] = useState("");
  const [pk4, setPk4] = useState("");
  const [peta, setPeta] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      title: namaKost,
      jenis: jenisKost,
      sisa: sisaKamar,
      detail: detailKost,
      lokasi: lokasiKost,
      fasilitas: fasilitas,
      no: no,
      harga: harga,
      sk1: sk1,
      sk2: sk2,
      sk3: sk3,
      fk1: fk1,
      fk2: fk2,
      fk3: fk3,
      fk4: fk4,
      fk5: fk5,
      fk6: fk6,
      fk7: fk7,
      fkm1: fkm1,
      fkm2: fkm2,
      fkm3: fkm3,
      fkm4: fkm4,
      fkm5: fkm5,
      fu1: fu1,
      fu2: fu2,
      fu3: fu3,
      fu4: fu4,
      fu5: fu5,
      pk1: pk1,
      pk2: pk2,
      pk3: pk3,
      pk4: pk4,
      peta: peta,
    };

    try {
      const response = await fetch("http://localhost:3000/auth/kost", {
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

  const handleBuildingPhotoChange = (e, index) => {
    const files = e.target.files;
    setBuildingPhotos((prevPhotos) => {
      const newPhotos = [...prevPhotos];
      setDeskripsi(e.target.value);

      newPhotos[index] = files[0];
      return newPhotos;
    });
  };

  return (
    <div className="tambahkos min-vh-100" style={{ marginTop: "5%" }}>
      <Container>
        <h4>Tambah Kos</h4>
        <Row className="info">
          <h4 style={{ marginTop: "20px" }}>Informasi Kost</h4>
          <Row
            className="in"
            style={{ justifyContent: "center", alignItems: "center" }}
          >
            <Col md={3} style={{ marginRight: "8%", marginTop: "20px" }}>
              <h6 style={{ fontSize: "22px" }}>Nama Kost</h6>
              <p style={{ fontSize: "12px", opacity: 0.6 }}>
                Masukan nama Kost anda sesuai contoh yang ada
              </p>
            </Col>
            <Col md={8}>
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formNamaKost">
                  <Form.Control
                    type="text"
                    placeholder="Contoh : Kost 86"
                    style={{ opacity: 0.6, border: "1px solid #afafaf" }}
                    value={namaKost}
                    onChange={(e) => setNamaKost(e.target.value)}
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
              <h6 style={{ fontSize: "22px" }}>Detail Kost</h6>
              <p style={{ fontSize: "12px", opacity: 0.6 }}>
                Masukan detail nama Kost anda sesuai contoh yang ada
              </p>
            </Col>
            <Col md={8}>
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formDetailKost">
                  <Form.Control
                    type="text"
                    placeholder="Contoh : Kost Barokah, Jl.Maju bersama, RT.06 RW.04, Kertajaya"
                    style={{ opacity: 0.6, border: "1px solid #afafaf" }}
                    value={detailKost}
                    onChange={(e) => setDetailKost(e.target.value)}
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
              <h6 style={{ fontSize: "22px" }}>Ketersediaan Kost</h6>
              <p style={{ fontSize: "12px", opacity: 0.6 }}>
                Masukan sisa kamar kos yang anda miliki
              </p>
            </Col>
            <Col md={8}>
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formKetersediaanKost">
                  <Form.Control
                    type="text"
                    placeholder="Contoh : *sisa 1 kamar"
                    style={{ opacity: 0.6, border: "1px solid #afafaf" }}
                    value={sisaKamar}
                    onChange={(e) => setSisaKamar(e.target.value)}
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
              <h6 style={{ fontSize: "22px" }}>Kategori Kost</h6>
              <p style={{ fontSize: "12px", opacity: 0.6 }}>
                Kategori kost berisi mengenai jenis kos yang disediakan itu
                merupakan kost iuntuk laki-laki, perempuan, atau campur
              </p>
            </Col>
            <Col md={8}>
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formKategoriKost">
                  <Form.Control
                    type="text"
                    placeholder="Contoh : Laki-Laki"
                    style={{ opacity: 0.6, border: "1px solid #afafaf" }}
                    value={jenisKost}
                    onChange={(e) => setJenisKost(e.target.value)}
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
              <h6 style={{ fontSize: "22px" }}>Lokasi Kost</h6>
              <p style={{ fontSize: "12px", opacity: 0.6 }}>
                Masukan Kota dimana kost anda berada
              </p>
            </Col>
            <Col md={8}>
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formLokasiKost">
                  <Form.Control
                    type="text"
                    placeholder="Contoh : Lombok Timur"
                    style={{ opacity: 0.6, border: "1px solid #afafaf" }}
                    value={lokasiKost}
                    onChange={(e) => setLokasiKost(e.target.value)}
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
              <h6 style={{ fontSize: "22px" }}>Fasilitas utama</h6>
              <p style={{ fontSize: "12px", opacity: 0.6 }}>
                Masukan fasilitas unggulan kost anda
              </p>
            </Col>
            <Col md={8}>
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formFasilitasUtama">
                  <Form.Control
                    type="text"
                    placeholder="Contoh : K.M Dalam, WIFI, AC, Meja Belajar, Kloset Duduk"
                    style={{ opacity: 0.6, border: "1px solid #afafaf" }}
                    value={fasilitas}
                    onChange={(e) => setFasilitas(e.target.value)}
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
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formNomorTelepon">
                  <Form.Control
                    type="text"
                    placeholder="Contoh : 088227990636"
                    style={{ opacity: 0.6, border: "1px solid #afafaf" }}
                    value={no}
                    onChange={(e) => setNo(e.target.value)}
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
                Masukan Harga yang ditawarkan untuk bulanan
              </p>
            </Col>
            <Col md={8}>
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formDeskripsi">
                  <Form.Control
                    type="text"
                    placeholder="Contoh : Rp.1.000.000"
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
          <h4 style={{ marginTop: "20px" }}>Fasilitas Kost</h4>
          <Row
            className="in"
            style={{ justifyContent: "center", marginBottom: "5%" }}
          >
            <Col md={3} style={{ marginRight: "8%", marginTop: "20px" }}>
              <h6 style={{ fontSize: "22px" }}>Spesifikasi Kamar</h6>
              <p style={{ fontSize: "12px", opacity: 0.6 }}>
                Masukan Spesifikasi kamar seperti pada contoh
              </p>
            </Col>
            <Col md={8}>
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formDeskripsi">
                  <Form.Control
                    type="text"
                    placeholder="Contoh: 2 Orang"
                    value={sk1}
                    onChange={(e) => setSk1(e.target.value)}
                    style={{
                      opacity: 0.6,
                      border: "1px solid #afafaf",
                      marginBottom: "10px",
                    }}
                  />
                  <Form.Control
                    type="text"
                    placeholder="Contoh: 5x5 Meter"
                    value={sk2}
                    onChange={(e) => setSk2(e.target.value)}
                    style={{
                      opacity: 0.6,
                      border: "1px solid #afafaf",
                      marginBottom: "10px",
                    }}
                  />
                  <Form.Control
                    type="text"
                    placeholder="Contoh: Kamar Mandi dalam"
                    value={sk3}
                    onChange={(e) => setSk3(e.target.value)}
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
              <h6 style={{ fontSize: "22px" }}>Fasilitas Kost</h6>
              <p style={{ fontSize: "12px", opacity: 0.6 }}>
                Kategori kost berisi mengenai jenis kos yang disediakan itu
                merupakan kost iuntuk laki-laki, perempuan, atau campur
              </p>
            </Col>
            <Col md={8}>
              <Form>
                <Form.Group className="mb-3" controlId="formDeskripsi">
                  <Form.Control
                    type="text"
                    placeholder="Contoh : 2 Kasur"
                    value={fk1}
                    onChange={(e) => setFk1(e.target.value)}
                    style={{ opacity: 0.6, border: "1px solid #afafaf" }}
                  />
                </Form.Group>
              </Form>
              <Form>
                <Form.Group className="mb-3" controlId="formDeskripsi">
                  <Form.Control
                    type="text"
                    placeholder="Contoh : Meja Belajar"
                    value={fk2}
                    onChange={(e) => setFk2(e.target.value)}
                    style={{ opacity: 0.6, border: "1px solid #afafaf" }}
                  />
                </Form.Group>
              </Form>
              <Form>
                <Form.Group className="mb-3" controlId="formDeskripsi">
                  <Form.Control
                    type="text"
                    placeholder="Contoh : AC"
                    value={fk3}
                    onChange={(e) => setFk3(e.target.value)}
                    style={{ opacity: 0.6, border: "1px solid #afafaf" }}
                  />
                </Form.Group>
              </Form>
              <Form>
                <Form.Group className="mb-3" controlId="formDeskripsi">
                  <Form.Control
                    type="text"
                    placeholder="Contoh : Lemari"
                    value={fk4}
                    onChange={(e) => setFk4(e.target.value)}
                    style={{ opacity: 0.6, border: "1px solid #afafaf" }}
                  />
                </Form.Group>
              </Form>
              <Form>
                <Form.Group className="mb-3" controlId="formDeskripsi">
                  <Form.Control
                    type="text"
                    placeholder="Contoh : Smart TV"
                    value={fk5}
                    onChange={(e) => setFk5(e.target.value)}
                    style={{ opacity: 0.6, border: "1px solid #afafaf" }}
                  />
                </Form.Group>
              </Form>
              <Form>
                <Form.Group className="mb-3" controlId="formDeskripsi">
                  <Form.Control
                    type="text"
                    placeholder="Contoh : Lemari Pendingin"
                    value={fk6}
                    onChange={(e) => setFk6(e.target.value)}
                    style={{ opacity: 0.6, border: "1px solid #afafaf" }}
                  />
                </Form.Group>
              </Form>
              <Form>
                <Form.Group className="mb-3" controlId="formDeskripsi">
                  <Form.Control
                    type="text"
                    placeholder="Contoh : Bantal"
                    value={fk7}
                    onChange={(e) => setFk7(e.target.value)}
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
              <h6 style={{ fontSize: "22px" }}>Fasilitas Kamar Mandi</h6>
              <p style={{ fontSize: "12px", opacity: 0.6 }}>
                Kategori kost berisi mengenai jenis kos yang disediakan itu
                merupakan kost iuntuk laki-laki, perempuan, atau campur
              </p>
            </Col>
            <Col md={8}>
              <Form>
                <Form.Group className="mb-3" controlId="formDeskripsi">
                  <Form.Control
                    type="text"
                    placeholder="Contoh : Kloset Duduk"
                    value={fkm1}
                    onChange={(e) => setFkm1(e.target.value)}
                    style={{ opacity: 0.6, border: "1px solid #afafaf" }}
                  />
                </Form.Group>
              </Form>
              <Form>
                <Form.Group className="mb-3" controlId="formDeskripsi">
                  <Form.Control
                    type="text"
                    placeholder="Contoh : Shower"
                    value={fkm2}
                    onChange={(e) => setFkm2(e.target.value)}
                    style={{ opacity: 0.6, border: "1px solid #afafaf" }}
                  />
                </Form.Group>
              </Form>
              <Form>
                <Form.Group className="mb-3" controlId="formDeskripsi">
                  <Form.Control
                    type="text"
                    placeholder="Contoh : Penghangat Air"
                    value={fkm3}
                    onChange={(e) => setFkm3(e.target.value)}
                    style={{ opacity: 0.6, border: "1px solid #afafaf" }}
                  />
                </Form.Group>
              </Form>
              <Form>
                <Form.Group className="mb-3" controlId="formDeskripsi">
                  <Form.Control
                    type="text"
                    placeholder="Contoh : Bak Mandi"
                    value={fkm4}
                    onChange={(e) => setFkm4(e.target.value)}
                    style={{ opacity: 0.6, border: "1px solid #afafaf" }}
                  />
                </Form.Group>
              </Form>
              <Form>
                <Form.Group className="mb-3" controlId="formDeskripsi">
                  <Form.Control
                    type="text"
                    placeholder="Contoh : Wastafel"
                    value={fkm5}
                    onChange={(e) => setFkm5(e.target.value)}
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
              <h6 style={{ fontSize: "22px" }}>Fasilitas Umum</h6>
              <p style={{ fontSize: "12px", opacity: 0.6 }}>
                Kategori kost berisi mengenai jenis kos yang disediakan itu
                merupakan kost iuntuk laki-laki, perempuan, atau campur
              </p>
            </Col>
            <Col md={8}>
              <Form>
                <Form.Group className="mb-3" controlId="formDeskripsi">
                  <Form.Control
                    type="text"
                    placeholder="Contoh : WIFI"
                    value={fu1}
                    onChange={(e) => setFu1(e.target.value)}
                    style={{ opacity: 0.6, border: "1px solid #afafaf" }}
                  />
                </Form.Group>
              </Form>
              <Form>
                <Form.Group className="mb-3" controlId="formDeskripsi">
                  <Form.Control
                    type="text"
                    placeholder="Contoh : Dapur Umum"
                    value={fu2}
                    onChange={(e) => setFu2(e.target.value)}
                    style={{ opacity: 0.6, border: "1px solid #afafaf" }}
                  />
                </Form.Group>
              </Form>
              <Form>
                <Form.Group className="mb-3" controlId="formDeskripsi">
                  <Form.Control
                    type="text"
                    placeholder="Contoh : Mesin Cuci"
                    value={fu3}
                    onChange={(e) => setFu3(e.target.value)}
                    style={{ opacity: 0.6, border: "1px solid #afafaf" }}
                  />
                </Form.Group>
              </Form>
              <Form>
                <Form.Group className="mb-3" controlId="formDeskripsi">
                  <Form.Control
                    type="text"
                    placeholder="Contoh : Ruang Tamu"
                    value={fu4}
                    onChange={(e) => setFu4(e.target.value)}
                    style={{ opacity: 0.6, border: "1px solid #afafaf" }}
                  />
                </Form.Group>
              </Form>
              <Form>
                <Form.Group className="mb-3" controlId="formDeskripsi">
                  <Form.Control
                    type="text"
                    placeholder="Contoh : CCTV 24 Jam"
                    value={fu5}
                    onChange={(e) => setFu5(e.target.value)}
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
              <h6 style={{ fontSize: "22px" }}>Peraturan Kos</h6>
              <p style={{ fontSize: "12px", opacity: 0.6 }}>
                Masukan Peraturan yang dimiliki oleh kost anda. Maksimal 20
                kata.
              </p>
            </Col>
            <Col md={8}>
              <Form>
                <Form.Group className="mb-3" controlId="formDeskripsi">
                  <Form.Control
                    type="text"
                    placeholder="Contoh : Dilarang Membawa Hewan Peliharaan"
                    value={pk1}
                    onChange={(e) => setPk1(e.target.value)}
                    style={{ opacity: 0.6, border: "1px solid #afafaf" }}
                  />
                </Form.Group>
              </Form>
              <Form>
                <Form.Group className="mb-3" controlId="formDeskripsi">
                  <Form.Control
                    type="text"
                    placeholder="Contoh : Selalu Kunci Gerbang"
                    value={pk2}
                    onChange={(e) => setPk2(e.target.value)}
                    style={{ opacity: 0.6, border: "1px solid #afafaf" }}
                  />
                </Form.Group>
              </Form>
              <Form>
                <Form.Group className="mb-3" controlId="formDeskripsi">
                  <Form.Control
                    type="text"
                    placeholder="Contoh : Saling menghargai antar penghuni kost"
                    value={pk3}
                    onChange={(e) => setPk3(e.target.value)}
                    style={{ opacity: 0.6, border: "1px solid #afafaf" }}
                  />
                </Form.Group>
              </Form>
              <Form>
                <Form.Group className="mb-3" controlId="formDeskripsi">
                  <Form.Control
                    type="text"
                    placeholder="Contoh : Saling menghargai antar penghuni kost"
                    value={pk4}
                    onChange={(e) => setPk4(e.target.value)}
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
                    onChange={(e) => setPeta(e.target.value)}
                    style={{ opacity: 0.6, border: "1px solid #afafaf" }}
                  />
                </Form.Group>
              </Form>
            </Col>
          </Row>
        </Row>

        <Row className="info">
          <h4 style={{ marginTop: "20px" }}>Validasi</h4>

          <Row
            className="in"
            style={{ justifyContent: "center", marginBottom: "5%" }}
          >
            <Col md={3} style={{ marginRight: "8%", marginTop: "20px" }}>
              <h6 style={{ fontSize: "22px" }}>Unggah Foto Bangunan</h6>
              <p style={{ fontSize: "12px", opacity: 0.6 }}>
                Unggah gambar bangunan kost (maksimal 4 gambar)
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

export default TambahKost;
