import { current } from "@reduxjs/toolkit";
import React, { useState, useEffect } from "react";
import { GrFormNextLink } from "react-icons/gr";
import { IoMdArrowBack } from "react-icons/io";

const Kabinet = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const newsItems = [
    {
      date: "07.11.2022",
      title: "Экспресс лаборатория",
      description: "Допускает внедрение поэтапного и развития общества.",
      imgSrc: "/Photot-min.png",
    },
    {
      date: "07.11.2022",
      title: "Лазерная терапия",
      description: "Допускает внедрение поэтапного и развития общества.",
      imgSrc: "/Photo(1)-min.png",
    },
    {
      date: "07.11.2022",
      title: "Операционный блок",
      description: "Допускает внедрение поэтапного и развития общества.",
      imgSrc: "/Photo(2)-min.png",
    },
    {
      date: "07.11.2022",
      title: "Операционный блок",
      description: "Допускает внедрение поэтапного и развития общества.",
      imgSrc: "/Photo(2)-min.png",
    },
    {
      date: "07.11.2022",
      title: "Операционный блок",
      description: "Допускает внедрение поэтапного и развития общества.",
      imgSrc: "/Photo(2)-min.png",
    },
    {
      date: "07.11.2022",
      title: "Операционный блок",
      description: "Допускает внедрение поэтапного и развития общества.",
      imgSrc: "/Photo(2)-min.png",
    },
    {
      date: "07.11.2022",
      title: "Операционный блок",
      description: "Допускает внедрение поэтапного и развития общества.",
      imgSrc: "/Photo(2)-min.png",
    },
    {
      date: "07.11.2022",
      title: "Операционный блок",
      description: "Допускает внедрение поэтапного и развития общества.",
      imgSrc: "/Photo(2)-min.png",
    },
    {
      date: "07.11.2022",
      title: "Операционный блок",
      description: "Допускает внедрение поэтапного и развития общества.",
      imgSrc: "/Photo(2)-min.png",
    },
    {
      date: "07.11.2022",
      title: "Операционный блок",
      description: "Допускает внедрение поэтапного и развития общества.",
      imgSrc: "/Photo(2)-min.png",
    },
    {
      date: "07.11.2022",
      title: "Операционный блок",
      description: "Допускает внедрение поэтапного и развития общества.",
      imgSrc: "/Photo(2)-min.png",
    },
    {
      date: "07.11.2022",
      title: "Операционный блок",
      description: "Допускает внедрение поэтапного и развития общества.",
      imgSrc: "/Photo(2)-min.png",
    },
  ];
  if (currentSlide == 3) {
    setCurrentSlide(0);
  }

  const handleNext = () => {
    if (currentSlide > 1) {
      setCurrentSlide(0);
    } else {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % newsItems.length);
    }
  };

  const handlePrev = () => {
    setCurrentSlide(
      (prevSlide) => (prevSlide - 1 + newsItems.length) % newsItems.length
    );
  };

  useEffect(() => {
    if (currentSlide > 1) {
      setCurrentSlide(0);
    } else {
      const interval = setInterval(handleNext, 3000);
      return () => clearInterval(interval);
    }
  }, []);

  return (
    <div className="my-36">
      <div className="container">
        <div>
          <h2 className="text-[30px] py-7">Комплексное оснащение кабинетов</h2>
        </div>
        <div className="w-[100%] overflow-hidden">
          <div
            className="flex transition-transform duration-300 gap-6"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {newsItems.map((item, index) => (
              <div key={index} className="w-[31.5%] flex-shrink-0">
                <img src={item.imgSrc} alt="" className="w-full" />
                <div className="border py-5 pl-4 pr-8 rounded-b-xl">
                  <h3 className="text-[18px] font-medium max-lg:text-[16px] max-md:text-[14px] max-sm:text-[12px]">
                    {item.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
          <div className="flex mt-9 justify-between">
            <div className="flex items-center gap-4 max-md:hidden">
              <div
                className="p-2 cursor-pointer border rounded-full"
                onClick={handlePrev}
              >
                <IoMdArrowBack />
              </div>
              <div
                className="p-2 cursor-pointer border rounded-full"
                onClick={handleNext}
              >
                <GrFormNextLink />
              </div>
            </div>
            <div className="flex max-sm:flex-col max-sm:justify-center gap-6">
              <button className="px-7 py-3 text-[#088269] border rounded-3xl border-[#088269] font-bold text-[14px]">
                Бесплатная консультация
              </button>
              <button className="px-7 py-3 bg-[#088269] rounded-3xl text-white font-bold text-[14px]">
                Рассчитать стоимость
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="mt-16">
          <h1 className="text-[30px]">Почему выбирают нас?</h1>
          <div className="flex justify-between mt-8 flex-wrap">
            <div className="border w-[300px] p-[86px] flex flex-col items-center justify-center flex-grow">
              <img src="/Symbol.svg" alt="" className="mb-10" />
              <p className="text-center">Быстрая доставка</p>
            </div>
            <div className="border w-[320px] p-[86px] flex flex-col items-center justify-center flex-grow">
              <img src="./Symbol1.svg" alt="" className="mb-10" />
              <p className="text-center">
                Весь товар <br /> сертифицирован
              </p>
            </div>
            <div className="border w-[320px] p-[86px] flex flex-col items-center justify-center flex-grow">
              <img src="./Symbol2.svg" alt="" className="mb-10" />
              <p className="text-center">
                Гибкая система <br /> скидок
              </p>
            </div>
            <div className="border w-[320px] p-[86px] flex flex-col items-center justify-center flex-grow">
              <img src="./Symbol3.svg" alt="" className="mb-10" />
              <p className="text-center">Лет рынке</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Kabinet;
