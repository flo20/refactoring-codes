import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "./Testimonials.css";


import SectionCard from "../card/card";
import pic1 from "../../images/pic1.png";
import pic2 from "../../images/pic2.png";
import pic3 from "../../images/pic3.png";

function Testimonials() {
  const [display, setDisplay] = useState(false);

  useEffect(() => {
    window.addEventListener("resize", checkScreen);
    checkScreen();

    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  const checkScreen = () => {
    if (window.innerWidth <= 576) return setDisplay(true);
    setDisplay(false);
  };

  const settings = {
    autoplay: true,
    autoplaySpeed: 3000,
    dots: true,
    dotsClass: "slideDots",
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="testimonial_wrapper">
      <h2 className="blogger_heading">Bloggers’ journey within Globuzzer</h2>
      <div className="underline" />
      <p className="inspire">
        Get inspired by people who turned their dreams into reality. <br />
        Read their stories to find out more about their accomplishments.
      </p>

      {!display && (
        <div className="flex-container">
          <SectionCard
            url={pic1}
            title="Szandra Goda"
            content="Creating the Budapest section within Globuzzer has been the most
              fulfilling journey for me. Managing my city guide has enabled me
              to strengthen my blogger skills, staying up to date with SEO best
              practices, and building a community for expats in Budapest. I
              recommend the experience for anyone looking for a great home for
              their blog."
          />
          <SectionCard
            url={pic2}
            title="Chloë Commeren"
            content=" With Globuzzer's blog-concept I got the opportunity to start
              connecting with expats living in the Netherlands. With creating
              this community, I wanted to help others because I know how hard it
              can be to find the right information. This platform was perfect to
              start connecting with expats and sharing experiences, stories, and
              helpful tips."
          />
          <SectionCard
            url={pic3}
            title="Marina Pavlevska"
            content="My Globuzzer section has allowed me to create a solid relationship
              with travelers and expats living in Oslo in need of information. I
              have the freedom to choose between different revenue streams,
              while having access to marketing and SEO support guides, as well
              as IT tools that enable me to run the section seamlessly."
          />
        </div>
      )}

      {display && (
        <div className="slide">
          <Slider {...settings}>
            <SectionCard
              sClass="mobile"
              url={pic1}
              content="Creating the Budapest section within Globuzzer has been the most
              fulfilling journey for me. Managing my city guide has enabled me
              to strengthen my blogger skills, staying up to date with SEO best
              practices, and building a community for expats in Budapest. I
              recommend the experience for anyone looking for a great home for
              their blog."
            />
            <SectionCard
              sClass="mobile"
              url={pic2}
              content=" With Globuzzer's blog-concept I got the opportunity to start
              connecting with expats living in the Netherlands. With creating
              this community, I wanted to help others because I know how hard it
              can be to find the right information. This platform was perfect to
              start connecting with expats and sharing experiences, stories, and
              helpful tips."
            />
            <SectionCard
              sClass="mobile"
              url={pic3}
              content="My Globuzzer section has allowed me to create a solid relationship
              with travelers and expats living in Oslo in need of information. I
              have the freedom to choose between different revenue streams,
              while having access to marketing and SEO support guides, as well
              as IT tools that enable me to run the section seamlessly."
            />
          </Slider>
        </div>
      )}

    </div>
  );
}

export default Testimonials;
