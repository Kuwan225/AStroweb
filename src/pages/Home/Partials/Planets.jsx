import React from "react";
import InfoTag from "../../../components/InfoTag/InfoTag";
import ScrolNav from "../../../components/ScrollNav/ScrolNav";
import Jupiter from "/image/jupiter.png";
import CardPlanets from "../../../components/CardPlanets/Card";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";

const Planets = () => {
  return (
    <div
      style={{
        minHeight: "100vh",
        padding: "50px 150px",
      }}
      id="planet"
    >
      <ScrolNav />
      <div>
        <p
          style={{
            textAlign: "center",
            margin: "50px 0px",
            color: "white",
            fontSize: "35px",
            fontWeight: "700",
          }}
        >
          Macam Macam Planet
        </p>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <div
          style={{
            color: "white",
          }}
        >
          <p
            style={{
              fontSize: "30px",
              fontWeight: "700",
            }}
          >
            Jupiter
          </p>
          <div
            style={{
              marginTop: "26px",
              fontSize: "20px",
              fontWeight: "400",
            }}
          >
            <p>Planet ini merupakan planet terbesar di Tata Surya.</p>
            <p
              style={{
                marginTop: "26px",
                width: "400px",
              }}
            >
              Jupiter tidak memiliki dataran, didalamnya hanya terdapat gas.
            </p>
          </div>
          <div>
            <InfoTag />
          </div>
        </div>
        <div>
          <img
            style={{
              height: "336px",
            }}
            src={Jupiter}
            alt=""
          />
        </div>
      </div>
      <hr
        style={{
          width: "100%",
          height: "2px",
          backgroundColor: "white",
          marginTop: "50px",
        }}
      />
      <div>
        <p
          style={{
            fontSize: "26px",
            fontWeight: "600",
            color: "white",
            textAlign: "center",
            padding: "30px 0px",
          }}
        >
          Other Planets
        </p>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "50px",
            paddingTop: "50px",
          }}
        >
          <Swiper
            slidesPerView={3}
            slidesPerGroup={3}
            loop={true}
            loopFillGroupWithBlank={true}
            navigation={true}
            modules={[Pagination, Navigation]}
          >
            {[1, 2, 3, 4, 5, 6].map(() => {
              return (
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <SwiperSlide
                    style={{
                      textAlign: "center",
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    <CardPlanets backgroundColor="#3272E0" />
                  </SwiperSlide>
                </div>
              );
            })}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Planets;
