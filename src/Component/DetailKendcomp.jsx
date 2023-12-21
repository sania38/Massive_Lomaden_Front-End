import React from "react";
import Map from "./maps";
import { Link } from "react-router-dom";

const DetailKendcomp = ({ kendaraan }) => {
  return (
    <div className="utama">
      <div className="head">
        <img src={kendaraan.image1} alt={kendaraan.title} />
        <img src={kendaraan.image2} alt={kendaraan.title} />
      </div>
      <h1>
        {kendaraan.title}, {kendaraan.detlok}
      </h1>
      <div className="ket">
        <p className="tipe">{kendaraan.jenis}</p>
        <p className="sisa">{kendaraan.sisa}</p>
        <i class="fa-solid fa-location-dot">
          <p>{kendaraan.lokasi}</p>
        </i>
        <i class="fa-solid fa-phone">
          <p>{kendaraan.no}</p>
        </i>
      </div>

      <h2 className="harga">{kendaraan.harga}</h2>

      <div className="pilih">
        <a href={`https://wa.me/${kendaraan.no}`} style={{ Color: "#B2FDFF" }}>
          <button className="nego">Negosiasi</button>
        </a>
        <Link to="/carikos">
          <button>Batal</button>
        </Link>
      </div>

      <hr style={{ margin: "20px 0", border: "1px solid #000" }} />

      <h4>Spesifikasi Kendaraan</h4>
      <div className="spek">
        <i class="fa-solid fa-user-group">
          <p>{kendaraan.sken1}</p>
        </i>

        <i class="fa-solid fa-gas-pump">
          <p>{kendaraan.sken2}</p>
        </i>

        <i class="fa-solid fa-gears">
          <p>{kendaraan.sken3}</p>
        </i>

        <p>{kendaraan.sken4}</p>

        <i class="fa-solid fa-gauge">
          <p>{kendaraan.sken5}</p>
        </i>
      </div>

      <hr style={{ margin: "20px 0", border: "1px solid #000" }} />

      <h4>Ketentuan Harga</h4>
      <div className="fkamar">
        <i class="fa-solid fa-car">
          <p>{kendaraan.ketharga1}</p>
        </i>

        <i class="fa-solid fa-car">
          <p>{kendaraan.ketharga2}</p>
        </i>

        <i class="fa-solid fa-car">
          <p>{kendaraan.ketharga3}</p>
        </i>

        <i class="fa-solid fa-car">
          <p>{kendaraan.ketharga4}</p>
        </i>

        <i class="fa-solid fa-car">
          <p>{kendaraan.ketharga5}</p>
        </i>

        <i class="fa-solid fa-car">
          <p>{kendaraan.ketharga6}</p>
        </i>
      </div>

      <hr style={{ margin: "20px 0", border: "1px solid #000" }} />

      <h4>Peraturan Sewa</h4>
      <div className="fkm">
        <i class="fa-solid fa-gas-pump">
          <p>{kendaraan.psewa1}</p>
        </i>

        <i class="fa-solid fa-car-burst">
          <p>{kendaraan.psewa2}</p>
        </i>

        <i class="fa-solid fa-id-card">
          <p>{kendaraan.psewa3}</p>
        </i>
      </div>

      <hr style={{ margin: "20px 0", border: "1px solid #000" }} />

      <h4>Syarat Sewa</h4>
      <div className="fumum">
        <i class="fa-solid fa-id-card">
          <p>{kendaraan.ssewa1}</p>
        </i>

        <i class="fa-solid fa-id-card">
          <p>{kendaraan.ssewa2}</p>
        </i>

        <i class="fa-solid fa-id-card">
          <p>{kendaraan.ssewa3}</p>
        </i>

        <i class="fa-solid fa-sack-dollar">
          <p>{kendaraan.ssewa4}</p>
        </i>
      </div>

      <hr style={{ margin: "20px 0", border: "1px solid #000" }} />

      <div className="lokasi">
        <h4>Lokasi</h4>
        <h6>{kendaraan.detlok}</h6>
        <a href={kendaraan.peta} target="_blank" rel="noopener noreferrer">
          Lihat Peta
        </a>
      </div>
    </div>
  );
};

export default DetailKendcomp;
