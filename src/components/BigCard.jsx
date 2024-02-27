import React from "react";

import BurmeseYuhina from "../img/18_BurmeseYuhina.jpg";
import birdSVG from "../img/bird-svg.svg";

export default function BigCard() {
  return (
    <div className="card col-lg-12 bg-secondary" style={{ borderRadius:'40px 0px 40px 0px' }}>
      <div className="d-flex flex-row card-container p-3 col-lg-12">
        <img
          src={BurmeseYuhina}
          alt="BurmeseYuhina"
          className="object-fit-cover col-md-6"
          style={{ borderRadius:'40px 0px 40px 0px' }}
        ></img>
        <div className="row col-md-6">
          <p className="h5 text-white text-left p-0">Bird</p>
          <p className="h2 text-white">ငှက်</p>
          <p>
            ငှက်သည် အမွှေးအတောင်ရှိ၍ အတောင်နှစ်ဖက်ရှိသော
            သွေးနွေးသတ္တဝါအမျိုးအစားတွင်ပါဝင်သည်။
          </p>
          <div className=" d-flex justify-content-end col-md-6">
            <a className="btn d-inline-block col-md-6"> 
              <img
                src={birdSVG}
                className="mx-3 col-md-12"
              ></img>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
