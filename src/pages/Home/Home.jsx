import React from "react";
import AstronotList from "./Partials/AstronotList";
import HomeFeature from "./Partials/HomeFeature";
import IssTracker from "./Partials/IssTrackerDesk";
import LandingView from "./Partials/LandingView";
import Planets from "./Partials/Planets";
import Sun from "/image/sun.png";
import EarthV2 from "/image/earthv2.png";
import ISS from "/image/satelite2.png";

const Home = () => {
  return (
    <>
      <div>
        <LandingView />
      </div>
      <div>
        <HomeFeature />
      </div>
      <div>
        <Planets />
      </div>
      <div
        style={{
          marginTop: "100px",
          minHeight: "80vh",
        }}
      >
        <p
          style={{
            fontWeight: "700",
            fontSize: "37px",
            textAlign: "center",
            color: "white",
            marginBottom: "45px",
          }}
        >
          Astronot
        </p>
        <div>
          <AstronotList />
        </div>
      </div>
      <div
        style={{
          minHeight: "100vh",
          position: "relative",
          padding: "0px 100px",
        }}
      >
        <p
          style={{
            color: "white",
            fontSize: "35px",
            fontWeight: "700",
            textAlign: "center",
          }}
        >
          ISS Tracker
        </p>
        <div
          style={{
            position: "relative",
            display: "flex",
            justifyContent: "end",
            paddingTop: "130px",
          }}
        >
          <img
            style={{
              position: "absolute",
              bottom: "0px",
              left: "220px",
              zIndex: 10,
            }}
            src={ISS}
            height="230px"
          />
          <img
            src={Sun}
            alt=""
            height={"150px"}
            style={{
              position: "absolute",
              left: "0",
            }}
          />
          <IssTracker />
        </div>
        <img
          src={EarthV2}
          alt=""
          style={{
            width: "100%",
            position: "absolute",
            right: "0px",
            bottom: "-300px",
            zIndex: "-99",
          }}
        />
      </div>
    </>
  );
};

export default Home;
