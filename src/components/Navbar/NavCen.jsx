import { IoLocationOutline, IoSearch } from "react-icons/io5";
import Logo from "../../../public/Logo.svg";
import { FaRegUser, FaSortDown } from "react-icons/fa";
import { useRef, useState } from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { SlBasket } from "react-icons/sl";
import { LiaChartBar } from "react-icons/lia";
import { Link } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { FiPhone } from "react-icons/fi";
import { RiHome3Line, RiMenuSearchLine } from "react-icons/ri";
import { IoMdClose } from "react-icons/io";
import { MdNavigateNext } from "react-icons/md";
import { useSelector } from "react-redux";

const NavCen = () => {
  const { list, users, like, statist } = useSelector((state) => state.addTo);

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
        <div className="flex  items-center max-sm:flex-col max-md:flex-col lg:gap-12 md:gap-7 md:flex md:w-full overflow-hidden py-4 w-full">
          <div className="flex  overflow-hidden justify-between  max-md:w-full max-sm:w-full ">
            <Link to="/">
              <img src={Logo} alt="img" className="h-full w-auto" />
            </Link>
            <div className="gap-4 sm:flex max-sm:flex md:hidden items-center lg:hidden xl:hidden">
              <FiPhone className="h-full w-7" />
              {menuOpen ? (
                <IoMdClose
                  className="h-full w-7"
                  onClick={() => setMenuOpen(!menuOpen)}
                />
              ) : (
                <RxHamburgerMenu
                  className="h-full w-7"
                  onClick={() => setMenuOpen(!menuOpen)}
                />
              )}
            </div>
          </div>
          <div className="rounded-3xl border-t  border-l border-[#D5D1E1] flex max-lg:w-full items-center bg-[#D5D1E1] mt-3 md:mt-0 ">
            <div className="flex overflow-hidden  bg-[#F8F7F3] h-full rounded-3xl w-full">
              <div
                className="flex items-center  gap-1 py-[10px] rounded-3xl px-[15px] bg-[#EFEFEF]  xl:min-w-[150px] min-w-[120px]"
                onClick={() => setCurrentSlide(!currentSlide)}
              >
                <p className="text-[#7A7687] h-full bg-transparent max-sm:text-[10px] sm:text-[10px] md:text-[10px] xl:text-[14px]">
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
                className="pr-20 max-md:pr-5 pl-5 rounded-3xl outline-none w-full "
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
          <div className="text-center relative">
            <FaRegUser className="block mx-auto w-6 h-6 text-[#088269]" />
            <p className="text-[#7A7687] hidden lg:block">Войти</p>
          </div>
          <div className="text-center relative">
            <FavoriteBorderIcon className="mx-7 text-[#088269]" />
            <p className="text-[#7A7687] hidden lg:block">Избранное</p>
            <span className=" top-[-5px] left-11 px-[4px] text-[12px] rounded-full text-white  bg-[#088269] font-bold absolute">
              {like.length}
            </span>
          </div>
          <div className="text-center relative">
            <LiaChartBar className="block mx-auto w-6 h-6 text-[#088269]" />
            <p className="text-[#7A7687] hidden lg:block">Сравнить</p>
            <span className=" top-[-5px] left-10 px-[4px] text-[12px] rounded-full text-white  bg-[#088269] font-bold absolute">
              {statist.length}
            </span>
          </div>
          <div className="text-center  relative ">
            <SlBasket className="block mx-auto w-6 h-6 text-[#088269]" />
            <p className="text-[#7A7687] hidden lg:block">Корзина</p>
            <span className=" top-[-5px] left-8 px-[4px] text-[12px] rounded-full text-white  bg-[#088269] font-bold absolute">
              {list.length}
            </span>
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
        <div className="absolute z-40   left-0 right-0 bottom-0 bg-[#E5E4ED]  w-full h-full top-[65px] ">
          <div className="flex justify-between p-4 bg-[#E5E4ED]">
            <div className="flex gap-2 items-center">
              <p className="text-[#202020] font-bold text-[14px] ">Москва</p>
              <IoLocationOutline className="text-[#202020] bg-transparent font-bold text-lg " />
            </div>
            <p className="text-[#7A7687]">Изменить</p>
          </div>
          <div className="p-3 bg-[#f7f8f2]">
            <div className="flex mb-2 justify-between bg-[#f7f8f2]">
              <p className="text-[14px]">+7(495)000-00-00</p>
              <p className="text-[#7A7687] text-[14px]">Пн-Пт с 09:00-19:00</p>
            </div>
            <div className="flex mb-2 justify-between bg-[#f7f8f2]">
              <p className="text-[14px]">info@mail.ru</p>
              <p className="text-[#7A7687] text-[14px]">Сб-Вс - выходной</p>
            </div>
            <p className="text-[#7A7687] bg-[#f7f8f2] text-[14px]">
              г. Москва, ул. Московская, д. 35
            </p>
          </div>
          <div className="p-3 py-5 bg-[#f7f8f2]">
            <hr />
            <Link className="flex justify-between py-3">
              <p className="text-[14px]">Каталог товаров</p>
              <MdNavigateNext />
            </Link>
            <hr />
            <Link className="flex justify-between py-3">
              <p className="text-[14px]">Информация</p>
              <MdNavigateNext />
            </Link>
            <hr />
            <Link className="flex justify-between py-3">
              <p className="text-[14px]">Контакты</p>
              <MdNavigateNext />
            </Link>
            <hr />
            <Link className="flex justify-between py-3">
              <p className="text-[14px]">О нас</p>
            </Link>
            <hr />
            <Link className="flex justify-between py-3">
              <p className="text-[14px]">Сравнение</p>
            </Link>
            <hr />
          </div>
        </div>
      )}
      <div className="flex justify-between md:hidden py-3 px-4 fixed w-full z-40 bg-[#f7f8f2] bottom-0">
        <div className="text-center">
          <RiHome3Line className="block mx-auto w-6 h-6 hover:text-[#088269]" />
          <p className="text-[#7A7687]  lg:block text-[12px]">Главная</p>
        </div>

        <Link to="/katalog">
          <div className="text-center">
            <RiMenuSearchLine className="block mx-auto w-6 h-6 hover:text-[#088269]" />
            <p className="text-[#7A7687]  lg:block text-[12px]">Каталог</p>
          </div>
        </Link>
        <div className="text-center">
          <SlBasket className="block mx-auto w-6 h-6 hover:text-[#088269]" />
          <p className="text-[#7A7687]  lg:block text-[12px]">Корзина</p>
        </div>
        <div className="text-center">
          <FavoriteBorderIcon className="mx-7 hover:text-[#088269]" />
          <p className="text-[#7A7687]  lg:block text-[12px]">Избранное</p>
        </div>
        <div className="text-center">
          <FaRegUser className="block mx-auto w-6 h-6 hover:text-[#088269]" />
          <p className="text-[#7A7687]  lg:block text-[12px]">Войти</p>
        </div>
      </div>
    </div>
  );
};

export default NavCen;
