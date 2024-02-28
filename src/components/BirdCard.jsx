import { faArrowAltCircleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

export default function BirdCard({id, mmName, engName, img }) {
  const getImageUrl = (imagePath) => {
    return `https://raw.githubusercontent.com/kaungpyaesoneaunggic/bird-json-server-vercel-main/main/${imagePath}`;
  };
  return (
    <div className="card col-md-12 allRounded m-2" key={id}>
      <div className="card-container bg-secondary p-3 allRounded">
        <img className="allRounded birdImage col-md-12" src={getImageUrl(img)} alt={mmName}></img>
        <div className="column mt-2">
          <p className="h6 text-start text-white">{mmName}</p>
          <p className="h6 text-start text-light">{engName}</p>
        </div>
  
        <Link to={'/bird/'+ id}>
          <FontAwesomeIcon
            icon={faArrowAltCircleRight}
            className="col-sm-4 text-white"
          />
        </Link>
      </div>
    </div>
  );
}
