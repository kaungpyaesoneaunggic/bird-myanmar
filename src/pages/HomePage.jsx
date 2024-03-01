import React from "react";
import BigCard from "../components/BigCard";
import SmallCard from "../components/SmallCard";
import wikiLogo from "../img/wikiLogo.png";
import facebook from "../img/facebook-svg.svg";
import arrowEast from "../img/arroweast.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom/cjs/react-router-dom";

export default function HomePage() {
  AOS.init({
    duration: 600,
    easing: "ease", // default easing for AOS animations
    once: false,
  });
  return (
    <div
      style={{ minHeight: "100vh", marginBottom:'8vh' }}
      className="col-lg-12 justify-content-center align-items-center bgApply pt-3 px-3"
    >
      <div className="row mb-3">
        <div data-aos="fade-up" className="col-md-7 px-3 order-md-1 order-2">
          <BigCard />
          <Link
            to="/birds"
            data-aos="fade-up"
            className="column col-md-12 card bg-secondary mt-3 text-decoration-none text-white"
            style={{ height: "18vh" }}
          >
            <div className="card-container d-flex align-items-center justify-content-around mt-4">
              <p className="col-sm-8 h2 ">
                Let's Explore <span className="text-info">together</span>
              </p>
              <img
                src={arrowEast}
                className="col-md-2"
                style={{ maxWidth: "200px" }}
              />
            </div>
          </Link>
        </div>
        <div className="col-md-5 px-3 order-md-2 order-1">
          <div className="row">
            <div className="d-flex flex-row" data-aos="fade-up">
              <SmallCard
                Icon={wikiLogo}
                Text={"WikiPedia MMBird"}
                link={"https://en.wikipedia.org/wiki/List_of_birds_of_Myanmar"}
              />
              <SmallCard
                Icon={facebook}
                Text={"Birds in Nature"}
                link={"https://www.facebook.com/bin.birdsinnature"}
              />
            </div>
            <div
              className="card col-md-11 moving-text-container mb-3 bg-secondary  allRounded"
              data-aos="zoom-in"
            >
              <p className=" pt-2 text-light">
                ငှက်အားလုံးသည် ပျံသန်းနိုင်စွမ်း မရှိကြပေ။ အချို့ငှက်များသည်
                အလွန်အပြေးသန်သူများဖြစ်ကြပြီး အချို့ကတော့ အလွန်ရေကူး
                ကျွမ်းကျင်သူများ ဖြစ်ကြသည်။ ငှက်သည် ကျောရိုးရှိသတ္တဝါဖြစ်ပြီး
                ဥ,ဥတတ်သော သတ္တဝါအမျိုးအစားလည်း ဖြစ်သည်။ ဥက ပေါက်ဖွားလာသော
                ကလေးငယ်များကို စောင့်ရှောက်လေ့ ရှိကြသည်။
              </p>
            </div>
          </div>
        </div>
        
      </div>
      <div className="row d-flex justify-content-center" >
        <div className="d-flex flex-row col-lg-11 card bg-secondary">
          <div className="col-md-3 card-container shadow m-2">
            <p className="h3 text-white m-1 ">၈၆၀၀</p>
            <p className="text-muted">ငှက်အမျိုးပေါင်း(မျိုးစိတ်ပေါင်း)</p>
          </div>
          <div className="col-md-3 card-container shadow">
            <p className="h3 text-white  m-1 ">၁၆၀၀</p>
            <p className="text-muted">မျိုးစုပေါင်း</p>
          </div>
          <div className="col-md-3 card-container shadow">
            <p className="h3 text-white  m-1 ">၁၅၅</p>
            <p className="text-muted">မျိုးရင်းပေါင်း</p>
          </div>
          <div className="col-md-3 card-container shadow">
            <p className="h3 text-white  m-1 ">၂၇</p>
            <p className="text-muted">မျိုးစဉ်ပေါင်း</p>
          </div>
        </div>
      </div>
    </div>
  );
}
