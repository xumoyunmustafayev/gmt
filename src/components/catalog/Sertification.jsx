import React, { useState, useEffect } from "react";
import { GrFormNextLink } from "react-icons/gr";
import { IoMdArrowBack } from "react-icons/io";

const Sertification = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [itemsPerSlide, setItemsPerSlide] = useState(3);

  const newsItems = [
    {
      imgSrc: "../../../public/assets/Ser-min.png",
    },
    {
      imgSrc: "../../../public/assets/Ser-min.png",
    },
    {
      imgSrc: "../../../public/assets/Ser-min.png",
    },
    {
      imgSrc: "../../../public/assets/Ser-min.png",
    },
    {
      imgSrc: "../../../public/assets/Ser-min.png",
    },
    {
      imgSrc: "../../../public/assets/Ser-min.png",
    },
    {
      imgSrc: "../../../public/assets/Ser-min.png",
    },
    {
      imgSrc: "../../../public/assets/Ser-min.png",
    },
    {
      imgSrc: "../../../public/assets/Ser-min.png",
    },
    {
      imgSrc: "../../../public/assets/Ser-min.png",
    },

  ];

  const handleNext = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === Math.ceil(newsItems.length / itemsPerSlide) - 1
        ? 0
        : prevSlide + 1
    );
  };

  const handlePrev = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0
        ? Math.ceil(newsItems.length / itemsPerSlide) - 1
        : prevSlide - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(handleNext, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setItemsPerSlide(1);
      } else if (window.innerWidth < 1024) {
        setItemsPerSlide(2);
      } else {
        setItemsPerSlide(3);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="my-36 flex max-lg:flex-col">
      <div className="ml-20 w-[15%] mr-36 text-[30px] max-lg:ml-5 max-lg:mr-0 max-lg:mb-5">
        Новости компании
      </div>
      <div className="w-[85%] overflow-hidden max-lg:w-full">
        <div
          className="flex transition-transform duration-300 gap-6 relative"
          style={{
            transform: `translateX(-${currentSlide * (100 / itemsPerSlide)}%)`,
          }}
        >
          {newsItems.map((item, index) => (
            <div
              key={index}
              className={`w-[${90 / itemsPerSlide}%] flex-shrink-0 p-3 bg-white rounded-xl max-w-80`}
            >
              <img
                src={item.imgSrc}
                alt="img"
                className="w-full h-[200px] object-contain bg-white"
              />
              
            </div>
          ))}
        </div>
        <div className="flex items-center mt-10 justify-between">
          <div className="flex  gap-4 px-4 max-md:hidden">
            <div
              className="p-2 cursor-pointer border rounded-full bg-white"
              onClick={handlePrev}
            >
              <IoMdArrowBack className="bg-white" />
            </div>
            <div
              className="p-2 cursor-pointer border rounded-full bg-white"
              onClick={handleNext}
            >
              <GrFormNextLink className="bg-white" />
            </div>
          </div>
          <div className="">
            <button className="px-7 py-3 bg-[#088269] rounded-3xl text-white font-bold text-[14px]">
              Сертификаты
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sertification;
