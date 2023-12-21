import React from "react";
import Map from "./maps";
import { Link } from "react-router-dom";

const DetailKoscomp = ({ kos }) => {
  return (
    <div className="utama">
      <div className="head">
        <img src={kos.image1} alt={kos.title} />
        <img src={kos.image2} alt={kos.title} />
      </div>
      <h1>
        {kos.title}, {kos.detlok}
      </h1>
      <div className="ket">
        <p className="tipe">{kos.jenis}</p>
        <p className="sisa">{kos.sisa}</p>
        <i class="fa-solid fa-location-dot">
          <p>{kos.lokasi}</p>
        </i>
        <i class="fa-solid fa-phone">
          <p>{kos.no}</p>
        </i>
      </div>

      <h2 className="harga">{kos.harga}</h2>

      <div className="pilih">
        <a href={`https://wa.me/${kos.no}`} style={{ Color: "#B2FDFF" }}>
          <button className="nego">Negosiasi</button>
        </a>
        <Link to="/carikos">
          <button>Batal</button>
        </Link>
      </div>

      <hr style={{ margin: "20px 0", border: "1px solid #000" }} />

      <h4>Spesifikasi Kamar</h4>
      <div className="spek">
        <i class="fa-solid fa-user-group">
          <p>{kos.sk1}</p>
        </i>
        <i class="fa-solid fa-arrows-left-right-to-line">
          <p>{kos.sk2}</p>
        </i>
        <i class="fa-solid fa-shower">
          <p>{kos.sk3}</p>
        </i>
      </div>

      <hr style={{ margin: "20px 0", border: "1px solid #000" }} />

      <h4>Fasilitas Kamar</h4>
      <div className="fkamar">
        <i class="fa-solid fa-bed">
          <p>{kos.fk1}</p>
        </i>

        <p>{kos.fk2}</p>

        <i class="fa-solid fa-temperature-arrow-down">
          <p>{kos.fk3}</p>
        </i>

        <p>{kos.fk4}</p>
        <i class="fa-solid fa-tv">
          <p>{kos.fk5}</p>
        </i>

        <p>{kos.fk6}</p>
        <i class="fa-solid fa-mattress-pillow">
          <p>{kos.fk7}</p>
        </i>
      </div>

      <hr style={{ margin: "20px 0", border: "1px solid #000" }} />

      <h4>Fasilitas Kamar Mandi</h4>
      <div className="fkm">
        <i class="fa-solid fa-toilet">
          <p>{kos.fkm1}</p>
        </i>

        <i class="fa-solid fa-shower">
          <p>{kos.fkm2}</p>
        </i>

        <p>{kos.fkm3}</p>
        <p>{kos.fkm4}</p>
        <p>{kos.fkm5}</p>
      </div>

      <hr style={{ margin: "20px 0", border: "1px solid #000" }} />

      <div className="fumum">
        <h4>Fasilitas Umum</h4>
        <i class="fa-solid fa-wifi">
          <p>{kos.fu1}</p>
        </i>

        <i class="fa-solid fa-kitchen-set">
          <p>{kos.fu2}</p>
        </i>

        <p>{kos.fu3}</p>
        <p>{kos.fu4}</p>
        <p>{kos.fu5}</p>
      </div>

      <hr style={{ margin: "20px 0", border: "1px solid #000" }} />

      <div className="pkos">
        <h4>Peraturan Kost</h4>
        <p>{kos.pk1}</p>

        <i class="fa-solid fa-lock">
          <p>{kos.pk2}</p>
        </i>

        <p>{kos.pk3}</p>
        <p>{kos.pk4}</p>
      </div>

      <hr style={{ margin: "20px 0", border: "1px solid #000" }} />

      <div className="lokasidetail">
        <h4>Lokasi</h4>
        <h6>{kos.detlok}</h6>
        <a href={kos.peta} target="_blank" rel="noopener noreferrer">
          Lihat Peta
        </a>
      </div>
    </div>
  );
};

export default DetailKoscomp;
