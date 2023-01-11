import React from "react";
import { Link } from "react-router-dom";
import Button from "../../../components/Button/Button";
import ISS from "/image/satelite2.png";

const IssTracker = () => {
  return (
    <div
      style={{
        position: "relative",
      }}
    >
      <div
        style={{
          gap: "10px",
          fontWeight: "700",
          fontSize: "35px",
          color: "white",
          textAlign: "end",
        }}
      >
        <p>
          <b style={{ color: "#0466C8" }}>ISS</b> Tracker
        </p>
      </div>
      <div
        style={{
          color: "white",
          textAlign: "end",
        }}
      >
        <p>
          <b>Apa itu ISS Satellite?</b> sebuah stasiun luar <br /> angkasa
          modular yang terletak di orbit bumi rendah.
        </p>
        <hr
          style={{
            margin: "23px 0px",
            height: "1px",
            width: "500px",
            border: "none",
            borderRadius: "12px",
            backgroundColor: "white",
          }}
        />
        <p>
          Digunakan untuk menyediakan lokasi yang relatif aman di orbit <br />{" "}
          rendah Bumi untuk menguji sistem pesawat ruang angkasa yang <br />{" "}
          akan diperlukan untuk misi jangka panjang ke Bulan dan Mars.
        </p>
        <div
          style={{
            marginTop: "85px",
          }}
        >
          <Link to={"/issTrackers"}>
            <Button style={{ borderRadius: "12px" }}>Track Now</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default IssTracker;
