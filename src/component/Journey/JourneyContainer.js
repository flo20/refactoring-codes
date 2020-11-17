import React, { useContext, useEffect } from "react";
import styles from "./JourneyContainer.module.css";
import "./BloggersJourney.css";
import BloggersData from "./../../Measurements/JourneyData/JourneyData";
import Journey from "./Journey";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { GetWindowDimension } from "./../../Measurements/Window/GetWindowDimension";
import { BloggerContext } from "./../../Measurements/contexts/contexts";
import BlogHeader from "./../../Measurements/BlogHeader/BlogHeader";
import Section from "../../Measurements/Section/Section";

const BloggersJourney = () => {
  const { width } = GetWindowDimension();
  const myRef = useContext(BloggerContext);

  const BloggersJourneyMobile = () => {
    useEffect(() => {
      window.addEventListener("load", () => {
        const active = document.querySelector(".slick-active");
        active.style.backgroundColor = "green";
      });
    });
    const settings = {
      dots: true,
      dotsClass: "custom-dots",
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
    };
      return (
        <Section>
          <div className={styles.mobile}>
            <Slider {...settings} className={styles.slider}>
              {BloggersData.map(({ img, name, text, url, index }) => (
                <div className={styles.eachSlide} key={index}>
                  <Journey img={img} name={name} text={text} url={url} />
                </div>
              ))}
            </Slider>
          </div>
        </Section>
      );
  };

    const BloggersJourneyDesk = () => (
      <Section>
        <div className={styles.container}>
          {BloggersData.map(({ img, name, text, url, index }) => (
            <Journey img={img} name={name} text={text} url={url} key={index} />
          ))}
        </div>
      </Section>
    );

    return (
      <Section>
        <div className={styles.wrapper} ref={myRef}>
          <BlogHeader
            label="Bloggers' journey within Globuzzer"
            className={styles.header}
          />
          <p className={styles.description}>
            Get inspired by people who turned their dreams into reality. Read
            their stories to find out more about their accomplishments.
          </p>
          {width >= 768 ? <BloggersJourneyDesk /> : <BloggersJourneyMobile />}
        </div>
      </Section>
    );
};

export default BloggersJourney;
