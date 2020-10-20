import React from "react";
import "./WhyGlobuzzer.css";

const WhyGlobuzzer = () => {
  return (
    <div className="whyglo_wrapper">
      <div className="why_container container">
        <h2 className="sec3_heading">Why Globuzzer?</h2>
        <div className="underline" />
        <p className="blurb">
          Because we are a global platform built by a community of worldwide
          expats, locals, and travelers
          <br /> who seek to share their experiences, discover new topics, and
          connect with others.
        </p>
        <hr id="ruler" />
        {/* Why Globuzzer section-- Answer section 1 */}
        <div className="message2_wrapper message2_mobile">
          <div className="message_2">
            <div className="icon1 centerlized-col">
              <img src="/assets/internet.svg" alt="easy" />
            </div>
            <div className="message_3_mobile">
              <h4 className="set_up">Easy set-up</h4>
              <p className="set_up_instructions">
                Begin creating content right away! Our
                <br />
                platform provides you with the latest
                <br /> technology, making your experience seamless.
              </p>
            </div>
          </div>

          <div className="message_2">
            <div className="icon1 centerlized-col">
              <img src="/assets/travel.svg" alt="easy" />
            </div>
            <div className="message_3_mobile">
              <h4 className="set_up">World-class support team</h4>
              <p className="set_up_instructions">
                Get professional guidance in setting up your
                <br />
                travel blog or transfering your existing blog to
                <br /> Globuzzer’s platform. We'll support you
                <br />
                through each step!
              </p>
            </div>
          </div>

          {/* Why Globuzzer section-- Answer section 2 */}

          <div className="message_2">
            <div className="icon1 centerlized-col">
              <img src="/assets/crowd.svg" alt="easy" />
            </div>
            <div className="message_3_mobile">
              <h4 className="set_up">Established travel audience</h4>
              <p className="set_up_instructions">
                Reach a broader audience
                <br />
                settled community of travelers, locals, and
                <br /> and expats.
              </p>
            </div>
          </div>

          <div className="message_2">
            <div className="icon1 centerlized-col">
              <img src="/assets/future.svg" alt="easy" />
            </div>
            <div className="message_3_mobile">
              <h4 className="set_up">Earn money from your blog</h4>
              <p className="set_up_instructions">
                Choose between different revenue streams to
                <br />
                generate income. We will guide you along the
                <br /> way with innovative profit strategies.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyGlobuzzer;
