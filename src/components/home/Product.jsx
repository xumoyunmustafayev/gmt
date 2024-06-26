import React, { useState, useEffect } from "react";
import { GrFormNextLink } from "react-icons/gr";
import { IoMdArrowBack } from "react-icons/io";
import { catalogCrData } from "../../data/data";
import { LiaChartBar } from "react-icons/lia";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

const Product = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [itemsPerSlide, setItemsPerSlide] = useState(3);

  const handleNext = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === catalogCrData.length - itemsPerSlide ? 0 : prevSlide + 1
    );
  };

  const handlePrev = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? catalogCrData.length - itemsPerSlide : prevSlide - 1
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
      <div className="ml-20 w-[15%]  mr-36 text-[30px] max-lg:ml-5 max-lg:mr-0 max-lg:mb-5">
        Новости компании
      </div>
      <div className="w-[85%] overflow-hidden max-lg:w-full">
        <div
          className="flex transition-transform duration-300 gap-10 relative"
          style={{
            transform: `translateX(-${currentSlide * (100 / itemsPerSlide)}%)`,
          }}
        >
          {catalogCrData.map((item, index) => (
            <div
              key={index}
              className={`w-[${
                90 / itemsPerSlide
              }%] flex-shrink-0 max-lg:w-full`}
            >
              <div className="relative">
                <img
                  src={item.img}
                  alt=""
                  className="w-full h-[250px] object-cover"
                />
                <div className="flex justify-between absolute top-2 gap-[85%] px-5">
                  <button className="py-1 px-3 border bg-[#dff1e6] text-[#088269] rounded-3xl border-[#088269]">
                    Новинка
                  </button>
                  <div className="flex items-center gap-2 ">
                    <div>
                      <FavoriteBorderIcon className=" bg-transparent hover:text-[#088269]" />
                    </div>
                    <div className="">
                      <LiaChartBar className=" bg-transparent  w-6 h-6 hover:text-[#088269]" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="border py-5 px-4">
                <h3 className="text-[18px] font-medium">{item.name}</h3>
                <p className="text-[#7A7687]">{item.common_name}</p>
                <p className="text-[#7A7687]">{item.price_title}</p>
                <h3 className="text-[18px] my-5 font-medium">{item.price}</h3>
                <button className=" py-3 w-full border rounded-3xl hover:text-white hover:bg-[#088269] text-[#088269]">
                  Добавить в корзину
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="flex items-center justify-between">
          <div className="flex gap-4 max-md:hidden  px-4">
            <div
              className="p-2 cursor-pointer border rounded-full bg-white"
              onClick={handlePrev}
            >
              <IoMdArrowBack className="text-black bg-white" />
            </div>
            <div
              className="p-2 cursor-pointer border rounded-full bg-white"
              onClick={handleNext}
            >
              <GrFormNextLink  className="bg-white"/>
            </div>
          </div>
          <div className="flex gap-3 items-center  mt-6  max-md:justify-center">
            <button className="px-7 py-3 text-[#088269] rounded-3xl border font-bold text-[14px]">
              Бесплатная консультация
            </button>
            <button className="px-7 py-3 bg-[#088269] rounded-3xl text-white font-bold text-[14px]">
              Сертификаты
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
