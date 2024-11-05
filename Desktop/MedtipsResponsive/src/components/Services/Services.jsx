import React from "react";
import Img from "../../assets/website/image.png";
import Img2 from "../../assets/website/bgwhite.png";
import Img3 from "../../assets/website/imagecopy.png";

const ServicesData = [
  {
    id: 1,
    img: Img,
    name: "24/7 Delivery",
    description:
      "Medtips offers round the clock delivery of medicines right at your doorstep.",
  },
  {
    id: 2,
    img: Img2,
    name: "30 Mins Delivery",
    description:
      "Medtips helps to get medicines delivered at your doorstep within 30 Minutes",
  },
  {
    id: 3,
    img: Img3,
    name: "Medical Tourism",
    description:
      "Medtips offeres a range of services for Medical Tourism",
  },
];

const Services = () => {
  return (
    <>
      <div className="py-10">
        <div className="container">
          {/* Header section*/}

          <div className="text-center mb-20 max-w-[400px] mx-auto">
            <p className="text-sm bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
              Our Services
            </p>
            <h1 className="text-3xl font-bold">Services</h1>
            <p className="text-xs text-gray-400">
              {""}
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Provident optio voluptatum iusto voluptatibus excepturi facere
              repellendus maiores animi! Nostrum labore debitis, officia
              blanditiis similique nobis architecto a sit sequi rerum? Numquam,
              
            </p>
          </div>
          {/* Card section */}
          <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 gap-14 md:gap-5 place-items-center">
            {ServicesData.map(({ id, img, name, description }) => {
              return (
                <div
  key={id}
  className="max-w-[300px] group rounded-2xl bg-white dark:bg-gray-800 dark:hover:bg-primary hover:text-white duration-300 p-4 shadow-xl"
  style={{ transition: "background-color 0.3s ease" }}
  onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#89E5F0")}
  onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "white")}
>
                  <div className="h-[100px]">
                    <img
                      src={img}
                      alt=""s
                      className={`${
                        id === 3 ? " h-[150px]" : "max-w-[200px]"
                      } mx-auto block transform -translate-y-14 group-hover:scale-105 group-hover:rotate-6 duration-300`}
                    />
                  </div>
                  <div className="p-4 text-center">
                    <h1 className="text-xl font-bold">{name}</h1>
                    <p className="text-gray-500 group-hover:text-white duration-300 text-sm line-clamp-2">
                      {description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      ;
    </>
  );
};

export default Services;