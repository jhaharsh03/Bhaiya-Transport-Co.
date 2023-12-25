import React, { useEffect, useState } from "react";
import carPng from "../../assets/car.png";
import yellowCar from "../../assets/banner-car.png";
import car1H from "../../assets/car1H.png"; 
import AOS from "aos";

const Hero = ({ theme }) => {
  useEffect(() => {
    AOS.refresh();
  });
  return (
    <div className="dark:bg-black dark:text-white duration-300 ">
      <div className="container min-h-[620px] flex">
        <div className="grid grid-cols-1 sm:grid-cols-2 place-items-center">
          <div
            data-aos="zoom-in"
            data-aos-duration="1500"
            data-aos-once="false"
            className="order-1 sm:order-2"
          >
            <img
              src={theme === "dark" ? car1H : car1H}
              alt=""
              className="sm:scale-125 relative -z-10 max-h-[600px] drop-shadow-[2px_20px_6px_rgba(0,0,0,0.10)]"
            />
          </div>
          <div className="space-y-5 order-2 sm:order-1 sm:pr-32 ">
            <p data-aos="fade-up" className="text-primary text-2xl font-serif">
              Effortless
            </p>
            <h1
              data-aos="fade-up"
              data-aos-delay="600"
              className="text-3xl text-primary lg:text-7xl font-semibold font-serif"
          
            >
              Welcome to Bhaiya Transport Co.
            </h1>
            <p data-aos="fade-up" data-aos-delay="1000" className="text-lg">
            Based in Sirsagjanj, Uttar Pradesh, we offer transport services across India and Nepal at reasonable rates. Our goal is to provide simple and reliable transportation solutions for your goods.{" "}
            </p>

            <p data-aos="fade-up" data-aos-delay="1000" className="text-lg">
             Contact us at [your contact number] for more information. Thank you for considering us for your transportation needs!{" "}
            </p>
            <br />
            <a
              data-aos="fade-up"
              data-aos-delay="1500"
              onClick={() => {
                AOS.refreshHard();
              }}
              href="tel:+91 8791404087"
              className="rounded-md bg-primary hover:bg-primary/80 transition duration-500 py-2 px-6 text-black"
            >
              Get Started
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;