import React from "react";
import Menu from "./../Menu/Menu";
import banner from "./../Banner/Banner.module.css";
import video from "./../../assets/vid.mp4"
import Flex from "../../Measurements/Flex/Flex";

const Banner = () => {
  return (
    <div className={banner.container}>
      <Menu />
      <Flex>
        <div className={banner.left}>
          <header>Start your travel blog with globuzzer</header>
          <p className={banner.body}>
            Everything you need to begin sharing your travel experiences, reach
            a broader audience and gain profit
          </p>
          <div className={banner.items}>
            <div>
              <button>Get statarted</button>
            </div>
          </div>
        </div>
        <div className={banner.right}>
          <video autoPlay loop>
            <source src={video} type="video/mp4" />
          </video>
        </div>
      </Flex>
    </div>
  );
};

export default Banner;
