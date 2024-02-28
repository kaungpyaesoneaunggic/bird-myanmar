import React from "react";

import BurmeseYuhina from "../img/18_BurmeseYuhina.jpg";
import birdSVG from "../img/bird-svg.svg";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

export default function BigCard() {
  return (
    <div className="card col-lg-12 bg-secondary tlbrRounded">
      <div className="d-flex flex-row card-container p-3 col-lg-12 ">
        <img
          src={BurmeseYuhina}
          alt="BurmeseYuhina"
          className="tlbrRounded"
          style={{ width:'33vw', height:'auto', objectFit:'cover'}}
        ></img>
        <div className="row col-md-5">
          <p className="text-white text-lg-left p-0">Bird</p>
          <p className="h2 text-md-left text-white">ငှက်</p>
          <p className="text-sm-left text-white" style={{ fontSize:'15px' }}>
            ငှက်သည် အမွှေးအတောင်ရှိ၍ အတောင်နှစ်ဖက်ရှိသော
            သွေးနွေးသတ္တဝါအမျိုးအစားတွင်ပါဝင်သည်။
          </p>
          <div className=" d-flex justify-content-end col-md-6">
            <Link to="/birds" className="col-md-6"> 
              <img
                src={birdSVG}
                className="mx-3"
                style={{ width:'4vw'}}
              ></img>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
