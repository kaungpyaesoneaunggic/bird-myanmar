import React from "react";
export default function SmallCard({ Icon, Text,link }) {
  return (
    <div className="col-lg-6 mx-3">
      <a
        href={link}
        target="_blank"
        className="btn col-lg-12 card bg-secondary p-4"
        style={{ borderRadius: "0px 40px 0px 40px" }}
      >
        <div className="card-container d-flex justify-content-center row">
          <img src={Icon} className="col-md-10"></img>
          <p className="h3 text-white">{Text}</p>
        </div>
      </a>
    </div>
  );
}
