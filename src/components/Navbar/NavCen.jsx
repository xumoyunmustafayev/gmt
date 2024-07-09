import { IoLocationOutline, IoSearch } from "react-icons/io5";
import Logo from "../../../public/Logo.svg";
import { FaRegUser, FaSortDown } from "react-icons/fa";
import { useRef, useState } from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { SlBasket } from "react-icons/sl";
import { LiaChartBar } from "react-icons/lia";
import { Link, useNavigate } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { FiPhone } from "react-icons/fi";
import { RiHome3Line, RiMenuSearchLine } from "react-icons/ri";
import { IoMdClose } from "react-icons/io";
import { MdNavigateNext } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../../store/user";
import { catalogCrData } from "../../data/data";
import { addToUser } from "../../store/addTo";

const NavCen = () => {
  const { list, users, like, statist } = useSelector((state) => state.addTo);

  const [currentSlide, setCurrentSlide] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { user } = useSelector((state) => state.user);

  const Refrence = useRef();

  const handleRegister = (e) => {
    e.preventDefault();
    dispatch(register({ email, password }));
    setShow(false);
    navigate("/profile");
  };

  const handleClick = () => {
    Refrence.current.focus();
  };

  const handleFocus = () => {
    setIsSearchFocused(true);
  };

  const handleBlur = () => {
    setTimeout(() => {
      setIsSearchFocused(false);
    }, 200);
  };

  const filteredData = catalogCrData.filter((item) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleItemClick = (item) => {
    dispatch(addToUser(item));
    navigate(`/katalog/laboratory/analiz`);
    setIsSearchFocused(false);
  };

  return (
    <div className="bg-[#F8F7F3] relative">
      <hr />
      <div className="container flex items-center justify-between cursor-pointer py-7 xl:py-5">
        <div className="flex relative items-center max-sm:flex-col max-md:flex-col lg:gap-12 md:gap-7 md:flex md:w-full overflow-hidden py-4 w-full">
          <div className="flex overflow-hidden justify-between max-md:w-full max-sm:w-full ">
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
          <div className="rounded-3xl border-t border-l border-[#D5D1E1] flex max-lg:w-full items-center bg-[#D5D1E1] mt-3 md:mt-0 ">
            <div className="flex overflow-hidden bg-[#F8F7F3] h-full rounded-3xl w-full">
              <div
                className="flex items-center gap-1 py-[10px] rounded-3xl px-[15px] bg-[#EFEFEF] xl:min-w-[150px] min-w-[120px]"
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
                onFocus={handleFocus}
                onBlur={handleBlur}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
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
          {user ? (
            <Link
              to={"/profile"}
              className="text-center relative cursor-pointer"
            >
              <FaRegUser className="block mx-auto w-6 h-6 " />
              <p className="text-[#7A7687] hidden lg:block">Войти</p>
            </Link>
          ) : (
            <div
              className="text-center relative cursor-pointer"
              onClick={() => setShow(true)}
            >
              <FaRegUser className="block mx-auto w-6 h-6 " />
              <p className="text-[#7A7687] hidden lg:block">Войти</p>
            </div>
          )}
          <Link to="/like">
            <div className="text-center relative">
              <FavoriteBorderIcon className="mx-7 " />
              <p className="text-[#7A7687] hidden lg:block">Избранное</p>
              <span className="top-[-5px] left-11 px-[4px] text-[12px] rounded-full text-white bg-[#088269] font-bold absolute">
                {like.length}
              </span>
            </div>
          </Link>
          <Link to="/compare">
            <div className="text-center relative">
              <LiaChartBar className="block mx-auto w-6 h-6 " />
              <p className="text-[#7A7687] hidden lg:block">Сравнить</p>
              <span className="top-[-5px] left-10 px-[4px] text-[12px] rounded-full text-white bg-[#088269] font-bold absolute">
                {statist.length}
              </span>
            </div>
          </Link>
          <Link to="/korzin">
            <div className="text-center relative ">
              <SlBasket className="block mx-auto w-6 h-6 " />
              <p className="text-[#7A7687] hidden lg:block">Корзина</p>
              <span className="top-[-5px] left-8 px-[4px] text-[12px] rounded-full text-white bg-[#088269] font-bold absolute">
                {list.length}
              </span>
            </div>
          </Link>
        </div>
      </div>
      <hr />
      {currentSlide && (
        <div className="bg-white border py-3 left-60 rounded-md absolute z-40 top-[74px]">
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
                className="text-[12px] px-5 py-[10px] whitespace-nowrap w-full hover:bg-[#f8f7f3]"
              >
                <Link
                  to={`/katalog/${category.toLowerCase().replace(/ /g, "-")}`}
                >
                  {category}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
      {isSearchFocused && (
        <div className="absolute z-40 left-[20%] top-20 transform  bg-white border w-full max-w-md rounded-md shadow-lg mt-1">
          <div className="h-96 overflow-y-scroll">
            {filteredData.length > 0 ? (
              filteredData.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center gap-2 p-2 hover:bg-gray-100"
                  onMouseDown={() => handleItemClick(item)}
                >
                  <img
                    src={item.img}
                    alt={item.name}
                    className="w-10 h-10 object-cover"
                  />
                  <div>
                    <p className="text-sm font-medium">{item.name}</p>
                    <p className="text-xs text-gray-500">{item.category}</p>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-center p-4">No results found</p>
            )}
          </div>
        </div>
      )}
      {show && (
        <div className="fixed z-50 inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-8 rounded-lg shadow-lg w-96">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold">Регистрация</h2>
              <IoMdClose
                className="w-6 h-6 cursor-pointer bg-transparent"
                onClick={() => setShow(false)}
              />
            </div>
            <form onSubmit={handleRegister}>
              <div className="mb-4">
                <label className="block text-sm font-medium bg-transparent text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="mt-1 bg-transparent block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block bg-transparent text-sm font-medium text-gray-700">
                  Пароль
                </label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="mt-1 bg-transparent block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#088269] hover:bg-[#08826ae6] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Зарегистрироваться
              </button>
            </form>
          </div>
        </div>
      )}
      <div
        className={`fixed inset-0 z-40 bg-black bg-opacity-25 backdrop-blur-sm transition-transform duration-300 ease-in-out ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="w-80 bg-white h-full p-4">
          <div className="flex justify-between items-center mb-4">
            <img src={Logo} alt="Logo" className="h-10 w-auto" />
            <IoMdClose
              className="w-6 h-6 cursor-pointer"
              onClick={() => setMenuOpen(false)}
            />
          </div>
          <div className="flex items-center gap-2 mb-4">
            <IoLocationOutline className="w-6 h-6" />
            <p className="text-sm font-medium">Введите адрес доставки</p>
          </div>
          <div className="flex items-center gap-2 mb-4">
            <RiMenuSearchLine className="w-6 h-6" />
            <p className="text-sm font-medium">Поиск по сайту</p>
          </div>
          <div className="mb-4">
            <Link to="/profile" className="flex items-center gap-2">
              <FaRegUser className="w-6 h-6" />
              <p className="text-sm font-medium">Профиль</p>
            </Link>
          </div>
          <div className="mb-4">
            <Link to="/like" className="flex items-center gap-2">
              <FavoriteBorderIcon className="w-6 h-6" />
              <p className="text-sm font-medium">Избранное</p>
            </Link>
          </div>
          <div className="mb-4">
            <Link to="/compare" className="flex items-center gap-2">
              <LiaChartBar className="w-6 h-6" />
              <p className="text-sm font-medium">Сравнить</p>
            </Link>
          </div>
          <div className="mb-4">
            <Link to="/korzin" className="flex items-center gap-2">
              <SlBasket className="w-6 h-6" />
              <p className="text-sm font-medium">Корзина</p>
            </Link>
          </div>
          <div className="mb-4">
            <Link to="/" className="flex items-center gap-2">
              <RiHome3Line className="w-6 h-6" />
              <p className="text-sm font-medium">Главная</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavCen;
