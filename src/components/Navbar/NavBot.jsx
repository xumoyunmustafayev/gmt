import React from "react";
import { HiMiniBars3CenterLeft } from "react-icons/hi2";
import { IoLocationOutline } from "react-icons/io5";
import { PiPhoneDuotone } from "react-icons/pi";
import { Link } from "react-router-dom";

const NavBot = () => {
  return (
    <div className="bg-[#F8F7F3] relative sm:hidden xl:block max-xl:hidden">
      <div className="container py-6 flex justify-between items-center ">
        <div className="flex items-center gap-7 md:gap-4 cursor-pointer py-10">
          <div className="group relative flex items-center gap-2">
            <Link to="/katalog" className="flex items-center gap-1">
              <HiMiniBars3CenterLeft className="text-[#202020]" />
              <p className="text-[#202020] font-bold text-[14px] md:text[10px]">
                Каталог
              </p>
            </Link>
            <div className="hidden group-hover:block bg-white border py-3 left-0 pr-10 rounded-md absolute z-50 top-[40px]">
              <ul className="h-[430px] custom-scrollbar">
                <li className="text-[12px] px-5 py-1 md:text[10px] hover:bg-slate-100 rounded-md cursor-pointer">
                  Реанимация
                </li>
                <li className="text-[12px] md:text[10px] hover:bg-slate-100 px-5 py-1 rounded-md cursor-pointer">
                  Хирургия
                </li>
                <li className="text-[12px] md:text[10px] hover:bg-slate-100 px-5 py-1 rounded-md cursor-pointer">
                  Офтальмология
                </li>
                <li className="text-[12px] md:text[10px] hover:bg-slate-100 px-5 py-1 rounded-md cursor-pointer">
                  Лабораторная диагностика
                </li>
                <li className="text-[12px] md:text[10px] hover:bg-slate-100 px-5 py-1 rounded-md cursor-pointer">
                  Акушерство
                </li>
                <li className="text-[12px] md:text[10px] hover:bg-slate-100 px-5 py-1 rounded-md cursor-pointer">
                  Гинекология
                </li>
                <li className="text-[12px] md:text[10px] hover:bg-slate-100 px-5 py-1 rounded-md cursor-pointer">
                  Гистология
                </li>
                <li className="text-[12px] hover:bg-slate-100 px-5 py-1 rounded-md cursor-pointer">
                  Косметология
                </li>
                <li className="text-[12px] hover:bg-slate-100 px-5 py-1 rounded-md cursor-pointer">
                  Оториноларингология
                </li>
                <li className="text-[12px] md:text[10px] hover:bg-slate-100 px-5 py-1 rounded-md cursor-pointer">
                  Рентгенология и томография
                </li>
                <li className="text-[12px] md:text[10px] hover:bg-slate-100 px-5 py-1 rounded-md cursor-pointer">
                  Гинекология
                </li>
                <li className="text-[12px] md:text[10px] hover:bg-slate-100 px-5 py-1 rounded-md cursor-pointer">
                  Стерилизация
                </li>
                <li className="text-[12px] md:text[10px] hover:bg-slate-100 px-5 py-1 rounded-md cursor-pointer">
                  Физиотерапия и реабилитация
                </li>
                <li className="text-[12px] md:text[10px] hover:bg-slate-100 px-5 py-1 rounded-md cursor-pointer">
                  Функциональная диагностика
                </li>
                <li className="text-[12px] md:text[10px] hover:bg-slate-100 px-5 pt-1  pb-3 rounded-md cursor-pointer">
                  Эндоскопия
                </li>
                <li className="text-[12px] md:text[10px] hover:bg-slate-100 px-5 py-1 rounded-md cursor-pointer">
                  Новинки
                </li>
                <li className="text-[12px] md:text[10px] hover:bg-slate-100 px-5 py-1 rounded-md cursor-pointer">
                  Распродажи
                </li>
                <li className="text-[12px] md:text[10px] hover:bg-slate-100 px-5 py-1 rounded-md cursor-pointer">
                  Кабинеты под ключ
                </li>
              </ul>
            </div>
          </div>
          <div className="group relative">
            <p className="text-[#202020] font-bold text-[14px]">
              Производители
            </p>
            <div className="hidden group-hover:block bg-white border py-3 left-0 rounded-md absolute z-50 top-[40px]">
              <ul>
                <li className="text-[12px] px-5 py-1 hover:bg-slate-100 rounded-md cursor-pointer">
                  A. KRÜSS Optronic
                </li>
                <li className="text-[12px] hover:bg-slate-100 px-5 py-1 rounded-md cursor-pointer">
                  AnD
                </li>
                <li className="text-[12px] hover:bg-slate-100 px-5 py-1 rounded-md cursor-pointer">
                  ATAGO
                </li>
                <li className="text-[12px] hover:bg-slate-100 px-5 py-1 rounded-md cursor-pointer">
                  AWARENESS TECHNOLOGY
                </li>
                <li className="text-[12px] hover:bg-slate-100 px-5 py-1 rounded-md cursor-pointer">
                  BEGER
                </li>
                <li className="text-[12px] hover:bg-slate-100 px-5 py-1 rounded-md cursor-pointer">
                  Berrcom
                </li>
                <li className="text-[12px] hover:bg-slate-100 px-5 py-1 rounded-md cursor-pointer">
                  BESTMAN
                </li>
              </ul>
            </div>
          </div>
          <div className="group relative">
            <p className="text-[#202020] font-bold text-[14px]">Покупателям</p>
            <div className="hidden group-hover:block bg-white border py-3 left-0 rounded-md absolute z-50 top-[40px]">
              <ul>
                <li className="text-[12px] px-5 py-1 hover:bg-slate-100 rounded-md cursor-pointer">
                  Покупателям
                </li>
                <li className="text-[12px] hover:bg-slate-100 px-5 py-1 rounded-md cursor-pointer">
                  AnD
                </li>
                <li className="text-[12px] hover:bg-slate-100 px-5 py-1 rounded-md cursor-pointer">
                  ATAGO
                </li>
                <li className="text-[12px] hover:bg-slate-100 px-5 py-1 rounded-md cursor-pointer">
                  AWARENESS TECHNOLOGY
                </li>
                <li className="text-[12px] hover:bg-slate-100 px-5 py-1 rounded-md cursor-pointer">
                  BEGER
                </li>
                <li className="text-[12px] hover:bg-slate-100 px-5 py-1 rounded-md cursor-pointer">
                  Berrcom
                </li>
                <li className="text-[12px] hover:bg-slate-100 px-5 py-1 rounded-md cursor-pointer">
                  BESTMAN
                </li>
              </ul>
            </div>
          </div>
          <p className="text-[#202020] font-bold text-[14px]">
            Кабинеты под ключ
          </p>
          <p className="text-[#202020] font-bold text-[14px]">Услуги</p>
          <p className="text-[#202020] font-bold text-[14px]">Акции</p>
          <p className="text-[#202020] font-bold text-[14px]">Контакты</p>
        </div>
        <div className="flex xl:flex gap-3 cursor-pointer ">
          <div className="flex gap-2 items-center">
            <p className="text-[#202020] font-bold text-[14px] ">Контакты</p>
            <IoLocationOutline className="text-[#202020] font-bold text-lg " />
          </div>
          <div className="border px-5 py-3 font-bold rounded-3xl md:text-[13px] xl:block 2xl:block md:hidden sm:hidden">
            <p className="text-[14px]">+7(495)000-00-00</p>
          </div>
          <button
            className="px-7 py-3 bg-[#088269] rounded-3xl md:text-[13px] xl:block  2xl:block  md:hidden sm:hidden text-[#F8F7F3] font-bold text-[14px]"
          >
            Заказать звонок
          </button>
          <button className="p-2 bg-[#088269] text-white rounded-full xl:hidden ">
            <PiPhoneDuotone className="bg-transparent" />
          </button>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default NavBot;
