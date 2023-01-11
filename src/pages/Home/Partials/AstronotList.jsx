import React, { useEffect, useState } from "react";
import Card from "../../../components/CardAstonot/Card";
import Rocket from "/image/rocket2.png";
import Astronot from "/image/astronotBro2.png";

const AstronotList = () => {
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY);
    });
  });
  return (
    <div
      style={{
        position: "relative",
      }}
    >
      <img
        src={Rocket}
        alt=""
        height={"400px"}
        style={{
          position: "absolute",
          top: -200,
          left: scroll / 20,
        }}
      />
      <img
        src={Astronot}
        alt=""
        height={"250px"}
        style={{
          position: "absolute",
          bottom: "-60px",
          right: "50px",
        }}
      />
      <div
        style={{
          backgroundColor: "#0A2A7A",
          display: "flex",
          justifyContent: "center",
          gap: "65px",
          padding: "125px 0px",
        }}
      >
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default AstronotList;
