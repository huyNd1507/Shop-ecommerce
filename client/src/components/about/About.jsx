import React from "react";
import Marquee from "react-fast-marquee";

import banner from "./banner-data";
import Brands from "./brand";

const About = (props) => {
  return (
    <>
      <section className="banners">
        <div className="row">
          <div className="col-6 col-sm-12">
            <div className="main-banner">
              <img src="./images/main-banner.jpg" alt="" />
              <div className="main-banner-content">
                <h4>SUPERCHARGED FOR PROS.</h4>
                <h5>iPad S13+ Pro.</h5>
                <p>From $999.00 or $41.62/mo.</p>
                <button className="--btn --btn-primary"> BUY NOW</button>
              </div>
            </div>
          </div>
          <div className="col-6 col-sm-12">
            <div className="row">
              {banner.map((ban, id) => {
                return (
                  <div className="col-6 col-sm-6  " key={id}>
                    <div className="small-banner">
                      <img src={ban.img} alt="main banner" />
                      <div className="small-banner-content ">
                        <h4>{ban.title1}</h4>
                        <h5>{ban.title2}</h5>
                        <p>
                          {ban.title3}
                          <br /> {ban.title4}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="brands">
        <div className="row">
          <Marquee>
            {Brands.map((brand, id) => {
              return (
                <div className="col-2" key={id}>
                  <img src={brand.img} alt="" />
                </div>
              );
            })}
          </Marquee>
        </div>
      </section>
    </>
  );
};

export default About;
