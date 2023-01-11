import React, { useEffect, useRef, useState } from "react";
import Button from "../../../components/Button/Button";
import LandingWhiteBg from "/image/backgroundLanding.png";
import StarBg from "/image/starBg.png";
import Rocket from "/image/rocket.png";
import Planets from "/image/Planets.png";
import Astronot from "/image/astronotBro.png";

const LandingView = () => {
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY);
    });
  });

  return (
    <div
      style={{
        minHeight: "91vh",
        overflow: "hidden",
      }}
    >
      <div>
        <img
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            left: "0",
            top: "0",
            right: "0",
            bottom: "0",
            zIndex: "-10",
          }}
          src={LandingWhiteBg}
          alt=""
        />
        <img
          style={{
            position: "absolute",
            height: "65%",
            bottom: scroll / 5,
            right: "200px",
            zIndex: "-11",
          }}
          src={StarBg}
          alt=""
        />
        <img
          style={{
            position: "absolute",
            height: "500px",
            left: "170px",
            bottom: scroll,
            zIndex: "90",
          }}
          src={Rocket}
          alt=""
        />
        <img
          style={{
            position: "absolute",
            height: "85%",
            right: "60px",
            bottom: "10px",
            zIndex: "-10",
          }}
          src={Planets}
          alt=""
        />
        <img
          style={{
            position: "absolute",
            height: "40%",
            right: "430px",
            bottom: "0px",
            zIndex: "-10",
          }}
          src={Astronot}
          alt=""
        />
      </div>

      <div
        style={{
          maxWidth: "100vw",
          minHeight: "80vh",
          display: "flex",
          alignItems: "center",
          margin: "0px 100px",
        }}
      >
        <div>
          <div>
            <p
              style={{
                fontSize: "60px",
                fontWeight: "700",
                color: "#0466C8",
              }}
            >
              Learning More
            </p>
            <p
              style={{
                fontSize: "45px",
                fontWeight: "700",
                color: "#424242",
              }}
            >
              About Astronomy
            </p>
            <p
              style={{
                width: "450px",
                marginTop: "30px",
                fontSize: "20px",
                fontWeight: "400",
              }}
            >
              Mari belajar dan mengenal banyak hal yang luar biasa di luar
              angkasa
            </p>
            <div
              style={{
                marginTop: "100px",
              }}
            >
              <Button>Read More</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingView;
