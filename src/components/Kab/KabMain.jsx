import React from "react";
import { MdNavigateNext } from "react-icons/md";
import { Link } from "react-router-dom";

const KabMain = () => {
  return (
    <div>
      <div className="container">
        <p className="flex items-center gap-3 mt-3">
          <Link to="/" className="text-[#7A7687] hover:underline">
            Главная
          </Link>
          <MdNavigateNext />{" "}
          <span className="text-black">Кабинеты под ключ</span>
        </p>
        <div className="mt-20">
          <p className="text-[48px]">Кабинеты под ключ</p>
          <div className=" grid grid-cols-2 gap-3 mt-5">
            <Link to="/kabinet">
              <div>
                <img src="./kab.png" alt="img" />
                <div className="px-6 bg-white p-5 border w-full rounded-b-lg">
                  Реанимация
                </div>
              </div>
            </Link>
            <Link to="/kabinet">
              <div>
                <img src="./kab.png" alt="img" />
                <div className="px-6 bg-white p-5 border w-full rounded-b-lg">
                  Реанимация
                </div>
              </div>
            </Link>
            <Link to="/kabinet">
              <div>
                <img src="./kab.png" alt="img" />
                <div className="px-6 bg-white p-5 border w-full rounded-b-lg">
                  Реанимация
                </div>
              </div>
            </Link>
            <Link to="/kabinet">
              <div>
                <img src="./kab.png" alt="img" />
                <div className="px-6 bg-white p-5 border w-full rounded-b-lg">
                  Реанимация
                </div>
              </div>
            </Link>
            <Link to="/kabinet">
              <div>
                <img src="./kab.png" alt="img" />
                <div className="px-6 bg-white p-5 border w-full rounded-b-lg">
                  Реанимация
                </div>
              </div>
            </Link>
            <Link to="/kabinet">
              <div>
                <img src="./kab.png" alt="img" />
                <div className="px-6 bg-white p-5 border w-full rounded-b-lg">
                  Реанимация
                </div>
              </div>
            </Link>
            <Link to="/kabinet">
              <div>
                <img src="./kab.png" alt="img" />
                <div className="px-6 bg-white p-5 border w-full rounded-b-lg">
                  Реанимация
                </div>
              </div>
            </Link>
            <Link to="/kabinet">
              <div>
                <img src="./kab.png" alt="img" />
                <div className="px-6 bg-white p-5 border w-full rounded-b-lg">
                  Реанимация
                </div>
              </div>
            </Link>
            <Link to="/kabinet">
              <div>
                <img src="./kab.png" alt="img" />
                <div className="px-6 bg-white p-5 border w-full rounded-b-lg">
                  Реанимация
                </div>
              </div>
            </Link>
          </div>
        </div>
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

export default KabMain;
