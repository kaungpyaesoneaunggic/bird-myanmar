import React from "react";
import useFetch from "../useFetch";
import BirdCard from "../components/BirdCard";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

export default function BirdPage() {
  const {
    error,
    isPending,
    data: birds,
  } = useFetch("https://bird-json-server-six.vercel.app/Tbl_Bird");
  return (
    <div style={{ minHeight:'100vh' }} className="container-fluid bgApply d-flex flex-wrap justify-content-center">
      <ResponsiveMasonry>
        <Masonry className="" style={{ width: "90vw" }}>
          {error && <div>{error}</div>}
          {isPending && <div className="text-white h1 text-center">Loading...</div>}
          {birds &&
            birds.map((bird) => (
              <div className="m-1" key={bird.id}>
                <BirdCard
                key={bird.id}
                id={bird.id}
                img={bird.ImagePath}
                mmName={bird.BirdMyanmarName}
                engName={bird.BirdEnglishName}
              />
              </div>
              
            ))}
        </Masonry>
      </ResponsiveMasonry>
    </div>
  );
}
