import React from "react";
import BigCard from "../components/BigCard";
import SmallCard from "../components/SmallCard";
import wikiLogo from '../img/wikiLogo.png'
import facebook from '../img/facebook-svg.svg'

export default function HomePage() {
  return (
    <div className="d-flex col-lg-12 jusitify-content-center align-items-center h-100">
      <div className="col-lg-6 px-3">
        <BigCard/>
      </div>
      <div className='d-flex flex-row col-lg-6'>
        <SmallCard Icon={wikiLogo} Text={'Wikipedia'} link={'https://en.wikipedia.org/wiki/List_of_birds_of_Myanmar'}/>
        <SmallCard Icon={facebook} Text={'Birds in Nature'} link={'https://www.facebook.com/bin.birdsinnature'}/>
      </div>
    </div>
  );
}
