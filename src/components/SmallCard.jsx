import React from "react";
export default function SmallCard({ Icon, Text, link }) {
  return (
    <div className="col-lg-5 col-md-6 col-sm-12 mx-3 mb-3">
      <a
        href={link}
        target="_blank"
        className="btn col-lg-12 card bg-secondary p-4 trblRounded d-flex flex-column justify-content-center align-items-center"
      >
        <img src={Icon} className="mb-2 birdImage" alt={Text} style={{ maxWidth: '100%', height: 'auto' }} />
        <p className="h3 text-white text-center">{Text}</p>
      </a>
    </div>
  );
}
