import React, { useState } from "react";
import { HiMiniBars3CenterLeft } from "react-icons/hi2";
import { IoLocationOutline } from "react-icons/io5";
import { PiPhoneDuotone } from "react-icons/pi";
import { Link } from "react-router-dom";
import CitySearch from "../Modal/CitySearch";

const NavBot = () => {
  const [show, setShow] = useState(false);
  const [city, setCity] = useState("Москва");

  return (
    <div className="bg-[#F8F7F3] relative sm:hidden xl:block max-xl:hidden">
      <div className="container py-6 flex justify-between items-center">
        <div className="flex items-center gap-7 md:gap-4 cursor-pointer py-10">
          <div className="group relative flex items-center gap-2">
            <Link to="/katalog" className="flex items-center gap-1">
              <HiMiniBars3CenterLeft className="text-[#202020]" />
              <p className="text-[#202020] font-bold text-[14px] md:text[10px]">
                Каталог
              </p>
            </Link>
            <div className="hidden group-hover:block bg-white border py-3 left-0 pr-10 rounded-md absolute z-10 top-[40px]">
              <ul className="h-[430px] custom-scrollbar">
                <li className="text-[12px] w-full px-5 py-1 md:text[10px] hover:bg-slate-100 rounded-md cursor-pointer">
                  Реанимация
                </li>
              </ul>
            </div>
          </div>
          <div className="group relative">
            <Link to="/katalog/manifactures">
              <p className="text-[#202020] font-bold text-[14px]">
                Производители
              </p>
            </Link>
            <div className="hidden group-hover:block bg-white border py-3 left-0 rounded-md absolute z-10 top-[40px]">
              <ul>
                <li className="text-[12px] px-5 py-1 hover:bg-slate-100 rounded-md cursor-pointer">
                  A. KRÜSS Optronic
                </li>
              </ul>
            </div>
          </div>
          <div className="group relative">
            <Link to="manifac">
              <p className="text-[#202020] font-bold text-[14px]">
                Покупателям
              </p>
            </Link>
            <div className="hidden group-hover:block bg-white border py-3 left-0 rounded-md absolute z-10 top-[40px]">
              <ul>
                <li className="text-[12px] px-5 py-1 hover:bg-slate-100 rounded-md cursor-pointer">
                  Покупателям
                </li>
              </ul>
            </div>
          </div>
          <Link to="/kab">
            <p className="text-[#202020] font-bold text-[14px]">
              Кабинеты под ключ
            </p>
          </Link>
          <Link to="/usluga">
            <p className="text-[#202020] font-bold text-[14px]">Услуги</p>
          </Link>
          <Link to="/aksiya">
            <p className="text-[#202020] font-bold text-[14px]">Акции</p>
          </Link>
          <Link to="/kontact">
            <p className="text-[#202020] font-bold text-[14px]">Контакты</p>
          </Link>
        </div>
        <div className="flex xl:flex gap-3 cursor-pointer">
          <div className="flex gap-2 items-center">
            <p
              className="text-[#202020] font-bold text-[14px]"
              onClick={() => setShow(true)}
            >
              {city}
            </p>
            <IoLocationOutline className="text-[#202020] font-bold text-lg" />
          </div>
          <div className="border px-5 py-3 font-bold rounded-3xl md:text-[13px] xl:block 2xl:block md:hidden sm:hidden">
            <p className="text-[14px]">+7(495)000-00-00</p>
          </div>
          <button className="px-7 py-3 bg-[#088269] rounded-3xl md:text-[13px] xl:block 2xl:block md:hidden sm:hidden text-[#F8F7F3] font-bold text-[14px]">
            Заказать звонок
          </button>
          <button className="p-2 bg-[#088269] text-white rounded-full xl:hidden">
            <PiPhoneDuotone className="bg-transparent" />
          </button>
        </div>
      </div>
      <hr />
      {show && <CitySearch setShow={setShow} setCity={setCity} />}
    </div>
  );
};

export default NavBot;
