import { IoSearch } from "react-icons/io5";
import Logo from "../../../public/Logo.svg";
import { FaRegUser, FaSortDown } from "react-icons/fa";
import { useRef, useState } from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { SlBasket } from "react-icons/sl";
import { LiaChartBar } from "react-icons/lia";
import { Link } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { FiPhone } from "react-icons/fi";

const NavCen = () => {
  const [currentSlide, setCurrentSlide] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const Refrence = useRef();
  const handleClick = () => {
    Refrence.current.focus();
  };

  return (
    <div className="bg-[#F8F7F3] relative">
      <hr />
      <div className="container flex items-center justify-between cursor-pointer py-7 xl:py-5">
        <div className="flex items-center max-sm:flex-col max-md:flex-col lg:gap-12 md:gap-7 md:flex md:w-full py-4 w-full">
          <div className="flex justify-between  max-md:w-full max-sm:w-full ">
            <Link to="/">
              <img src={Logo} alt="img" className="h-full w-auto" />
            </Link>
            <div className="gap-4 sm:flex max-sm:flex md:hidden items-center lg:hidden xl:hidden">
              <FiPhone className="h-full w-7" />
              <RxHamburgerMenu
                className="h-full w-7"
                onClick={() => setMenuOpen(!menuOpen)}
              />
            </div>
          </div>
          <div className="rounded-3xl flex max-lg:w-full items-center bg-[#D5D1E1] mt-3 md:mt-0 ">
            <div className="flex bg-[#F8F7F3] h-full rounded-3xl w-full">
              <div
                className="flex items-center  gap-1 py-[10px] rounded-3xl px-[15px] bg-[#EFEFEF] min-w-[150px] xl:min-w-[200px]"
                onClick={() => setCurrentSlide(!currentSlide)}
              >
                <p className="text-[#7A7687] h-full bg-transparent max-sm:text-[10px] sm:text-[10px] md:text-[14px]">
                  Все категории
                </p>
                <FaSortDown
                  className={
                    currentSlide
                      ? "text-[#7A7687] bg-transparent rotate-180 duration-150"
                      : "text-[#7A7687] bg-transparent duration-150"
                  }
                />
              </div>
              <input
                ref={Refrence}
                type="text"
                placeholder="Поиск"
                className="pr-20 pl-5 rounded-3xl outline-none w-full "
              />
            </div>
            <IoSearch
              className="w-6 h-6 my-[10px] bg-transparent text-[#7A7687] mx-3 cursor-pointer"
              onClick={handleClick}
            />
          </div>
          <p className="text-[#7A7687] text-[12px] hidden lg:block">
            Пн-Пт с 09:00-19:00 <br /> Сб-Вс - выходной
          </p>
        </div>
        <div className="flex items-center gap-7 xl:gap-5 md:gap-3 md:flex xl:flex max-md:hidden sm:hidden">
          <div className="text-center">
            <FaRegUser className="block mx-auto w-6 h-6 hover:text-[#088269]" />
            <p className="text-[#7A7687] hidden lg:block">Войти</p>
          </div>
          <div className="text-center">
            <FavoriteBorderIcon className="mx-7 hover:text-[#088269]" />
            <p className="text-[#7A7687] hidden lg:block">Избранное</p>
          </div>
          <div className="text-center">
            <LiaChartBar className="block mx-auto w-6 h-6 hover:text-[#088269]" />
            <p className="text-[#7A7687] hidden lg:block">Сравнить</p>
          </div>
          <div className="text-center">
            <SlBasket className="block mx-auto w-6 h-6 hover:text-[#088269]" />
            <p className="text-[#7A7687] hidden lg:block">Корзина</p>
          </div>
        </div>
      </div>
      <hr />
      {currentSlide && (
        <div className="bg-white border py-3 left-60 rounded-md absolute z-50 top-[74px]">
          <ul>
            {[
              "Реанимация",
              "Хирургия",
              "Офтальмология",
              "Лабораторная диагностика",
              "Акушерство",
              "Гинекология",
              "Гистология",
              "Косметология",
              "Оториноларингология",
              "Рентгенология и томография",
              "Гинекология",
              "Стерилизация",
              "Физиотерапия и реабилитация",
              "Функциональная диагностика",
              "Эндоскопия",
              "Новинки",
              "Распродажи",
              "Кабинеты под ключ",
            ].map((category) => (
              <li
                key={category}
                className="text-[12px] px-5 py-1 hover:bg-slate-100 rounded-md cursor-pointer"
              >
                {category}
              </li>
            ))}
          </ul>
        </div>
      )}
      {menuOpen && (
        <div className="absolute top-0 left-0 w-full h-full bg-gray-800 bg-opacity-75 z-50 flex flex-col items-center justify-center space-y-5">
          <Link to="/" className="text-white text-2xl">
            Главная
          </Link>
          <Link to="/about" className="text-white text-2xl">
            О нас
          </Link>
          <Link to="/contact" className="text-white text-2xl">
            Контакты
          </Link>
          <Link to="/services" className="text-white text-2xl">
            Услуги
          </Link>
          <RxHamburgerMenu
            className="h-10 w-10 text-white"
            onClick={() => setMenuOpen(false)}
          />
        </div>
      )}
    </div>
  );
};

export default NavCen;
