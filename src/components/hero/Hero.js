import React from "react";
import "./Hero.scss";
import { useNavigate } from "react-router-dom";
import bannerImg from "../../assets/banner-3.jpg";

function Hero() {
  const navigate = useNavigate();
  return (
    <div className="Hero">
      <div className="hero-content center">
        <div className="center">
          <div className="text">
            <h3 className="heading"> Unlock the Magic of World: </h3>
            <h4 className="subheading">
              Discover,Connect and Explore with Our Book Oasis!
            </h4>
            {/* <button
              onClick={() => navigate("/category")}
              className="cta btn-primary"
            >
              Explore More
            </button> */}
          </div>
          <div>
            <img className="banner-img" src={bannerImg} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
