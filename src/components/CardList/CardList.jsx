import React from "react";
import car1 from "../../assets/car1.png";
import car2 from "../../assets/car5.png";
import car3 from "../../assets/car6.png";
import car3H from "../../assets/Car3H.png";
import car4H from "../../assets/Car4H.png";
import car5H from "../../assets/Car5H.png";
import AOS from "aos";


const CarList = [
  {
    name: "Mini Truck",
    price: "70-90",
    image: car3H,
    aosDelay: "0",
  },
  {
    name: "KIA UX",
    price: "120-140",
    image: car4H,
    aosDelay: "500",
  },
  {
    name: "Standerd Truck",
    price: "150-200",
    image: car5H,
    aosDelay: "1000",
  },
];

const CardList = () => {
  return (
    <div
      className="pb-24 pt-12 bg-white dark:bg-dark 
    dark:text-white "
    >
      <div className="container">
        {/* heading */}
        <h1
          ata-aos="fade-up"
          data-aos-duration="400"
          className="text-3xl sm:text-4xl font-semibold font-serif mb-3"
        >
          Our Services And Pricings
        </h1>
        <p className="text-sm pb-10" data-aos="fade-up">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi,
          voluptates?
        </p>
        {/* Car Listing Cards */}
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-16">
            {CarList.map((car) => {
              return (
                <div
                  data-aos="fade-up"
                  data-aos-duration={car.aosDelay}
                  className="space-y-3 border-2 border-gray-300 hover:border-primary
                p-3 rounded-xl relative group"
                >
                  <div className="w-full h-[120px]">
                    <img
                      className="w-full h-[120px] object-contain sm:translate-x-8
                    group-hover:translate-x-16 duration-700"
                      src={car.image}
                      alt=""
                    />
                  </div>
                  <div className="space-y-2">
                    <h1 className="text-primary font-semibold">{car.name}</h1>
                  </div>
                  <div className="flex justify-between items-center text-xl font-semibold">
                    <p className="text-xl font-semibold absolute top-0 left-3">
                      Rs.{car.price}/Km.
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        {/* End of Car Listing */}
        {/* button */}
        <div className="grid place-content-center mt-8">
          {/* <button
            data-aos="fade-up"
            data-aos-duration="1500"
            className="button-outline"
          >
            <a href="tel:+91 8791404087">Get Started</a>
          </button> */}

          <a href="tel:+91 8791404087"
          className="button-outline"
          data-aos="fade-up"
          data-aos-duration="1500"
          >Get Started</a>
        </div>
      </div>
    </div>
  );
};

export default CardList;
