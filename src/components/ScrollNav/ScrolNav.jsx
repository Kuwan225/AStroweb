import React, { useEffect, useState } from "react";
import { Router, useNavigate, useNavigation } from "react-router-dom";
import ScrolNavStyle from "./ScrolNavStyle.module.css";
import Satelite from "/image/satelite.png";

const ScrolNav = () => {
  const [active, setActive] = useState(0);
  const router = useNavigate();

  useEffect(() => {
    window.addEventListener("scroll", () => {
      const scroll = window.scrollY;
      if (scroll >= 0 && scroll < 1565) {
        setActive(1);
      } else if (scroll >= 1565 && scroll < 3249) {
        setActive(2);
      } else {
        setActive(3);
      }
      console.log(scroll);
    });
  });

  return (
    <div className={ScrolNavStyle.scrollNav}>
      {[1, 2, 3].map((idx) => (
        <a
          href={"#planet"}
          key={idx}
          className={
            idx == active ? ScrolNavStyle.itemActive : ScrolNavStyle.item
          }
          // onClick={() => (idx == active ? alert("active") : router("#planet"))}
        >
          <img src={Satelite} alt="" />
        </a>
      ))}
    </div>
  );
};

export default ScrolNav;
