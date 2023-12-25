import React from "react";

const Contact = () => {
  return (
    <>
      <span id="contact"></span>
      <div data-aos="zoom-in" className="dark:bg-black dark:text-white py-14">
        <div className="container ">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 bg-gray-800 py-8 px-6">
            <div className="col-span-2 space-y-3">
              <h1 className="text-4xl sm:text-5xl font-bold text-white">
              Connect with our services today! 
              </h1>
              <h1 className="text-1xl sm:text-2xl font-bold text-white">
              Find our contact details below:
              </h1>
              <div className="text-primary">

              
              <p className="text-primary text-xl">
              Ghanshyam Sharma : <a href="tel:+91 9412671451">+91 9412671451</a>, <a href="tel:+91 8791404087">+91 8791404087</a> {" "}
              </p>
              <p className="text-primary text-xl">
              Aman Sharma : <a href="tel:+91 8171390067">+91 8171390067</a>{" "}
              </p>
              <p className="text-primary text-xl">
              Ajay Sharma : <a href="tel:+91 8057573500">+91 8057573500</a>{" "}
              </p>
              </div>
            </div>
            <div className="sm:grid sm:place-items-center">
              <a
                href="tel:+91 8171390067"
                className="inline-block font-semibold py-2 px-6 bg-primary text-white hover:bg-primary/80 duration-200 tracking-widest uppercase "
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;