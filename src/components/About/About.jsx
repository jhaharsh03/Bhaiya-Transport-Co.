import React from "react";
import CarPng from "../../assets/car1.png";
import car2H from "../../assets/Car2H.png";
import AOS from "aos";





const About = () => {
  return (
    <div
      className="dark:bg-dark dark:text-white duration-300 sm:min-h-[600px] sm:grid
      bg-slate-200
    sm:place-items-center"
    >
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 place-items-center">
        <div data-aos="slide-right" data-aos-duration="1500">
            <img
              src={car2H}
              alt=""
              className="sm:scale-125 sm:-translate-x-11 max-h-[250px] drop-shadow-[2px_10px_6px_rgba(0,0,0,0.50)]"
            />
          </div>
          <div>
            <div className="space-y-5 sm:p-16 pb-6">
              <h1
                data-aos="fade-up"
                //   data-aos-duration="1500"
                className="text-3xl sm:text-4xl text-primary font-bold font-serif"
              >
                About Us
              </h1>
              <p data-aos="fade-up">
              Our aim is to make moving stuff easy for everyone. Whether you're a business or an individual, we're here to lend a hand.
              </p>
              <p data-aos="fade-up">
              We have a skilled team that knows how to move things safely and on time. We work with all kinds of businesses to make sure their goods reach their destination without costing a fortune.
              </p>
              <p data-aos="fade-up">
              We're all about keeping you happy. We're clear, punctual, and make sure your stuff gets where it needs to be, when it needs to be there.
              </p>
              {/* <button data-aos="fade-up" className="button-outline">
                {" "}
                Get Started
              </button> */}
              <br />
              <a href="tel:+91 8791404087"
          className="button-outline"
          data-aos="fade-up"
          data-aos-duration="1500"
          >Get Started</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
