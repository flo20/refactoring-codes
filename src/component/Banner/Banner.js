import React,{useState,useEffect} from "react";
import Menu from "./../Menu/Menu";
import banner from "./../Banner/Banner.module.css";
import video from "./../../assets/vid.mp4"
import Flex from "../../Measurements/Flex/Flex";
import Center from "../../Measurements/Center/Center";

const Banner = () => {
  const [smallScreen, setSmallScreen] = useState(false);


  useEffect(() => {
    window.addEventListener("resize", checkScreen);
    checkScreen();

    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  const checkScreen = () => {
    window.innerWidth <= 500 ? setSmallScreen(true) : setSmallScreen(false);
  };

  return (
    <div className={banner.container}>
      <Menu />
      <Center>
        <Flex>
          <div className={banner.left}>
            {!smallScreen ? (
              <header>Start your travel blog with globuzzer</header>
            ) : (
              <header>
                <p>start your travel</p>
                <p>website</p>
                <p>with globuzzer</p>
              </header>
            )}

            <p className={banner.body}>
              Everything you need to begin sharing your travel experiences,
              reach a broader audience and gain profit
            </p>
            {!smallScreen && (
              <div className={banner.items}>
                <div>
                  <button>Get started</button>
                </div>
              </div>
            )}
          </div>
          <div className={banner.right}>
            <video autoPlay loop>
              <source src={video} type="video/mp4" />
            </video>
          </div>

          {smallScreen && (
            <div className={banner.btnSmall}>
              <button>Get statarted</button>
            </div>
          )}
        </Flex>
      </Center>
    </div>
  );
};

export default Banner;
