import React, { useState, useEffect } from "react";
import { MdNavigateNext, MdOutlineFavorite } from "react-icons/md";
import { Link } from "react-router-dom";
import Img from "../../../public/RacM-min.png";
import { useDispatch, useSelector } from "react-redux";
import {
  addToLike,
  addToList,
  addToStat,
  addToUser,
  removeFromLike,
  removeFromStat,
} from "../../store/addTo";
import { LiaChartBar } from "react-icons/lia";
import { catalogCrData } from "../../data/data";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

const KabinetMain = () => {
  const [count, setCount] = useState(true);
  const items = [
    "Аппарат искусственной вентиляции легких",
    "Аппарат искусственной вентиляции легких транспортный",
    "Занавески шторы для приборов искусственной вентиляции легких",
    "Монитор пациента на 5 параметров",
    "Монитор пациента на 8 параметров",
    "Инфузионный насос",
    "Шприцевой насос",
    "Набор для интубации трахеи",
    "Дефибриллятор",
    "Матрас термостабилизирующий",
    "Автоматический анализатор газов крови",
    "Электрокардиограф",
    "Транспортировочный реанимационный аппарат",
    "Портативный ультразвуковой диагностический аппарат",
    "Ультразвуковой сканер с принадлежностями",
    "Кровать-трансформер",
    "Электрохирургический блок",
    "Пневмокомпрессоры профилактика тромбоэмболических осложнений и лимфостаза",
  ];

  const { like, statist } = useSelector((state) => state.addTo);
  const dispatch = useDispatch();

  const [currentSlide, setCurrentSlide] = useState(0);
  const [itemsPerSlide, setItemsPerSlide] = useState(3);

  const handleNext = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === catalogCrData.length - itemsPerSlide ? 0 : prevSlide + 1
    );
  };

  useEffect(() => {
    const interval = setInterval(handleNext, 3000);
    return () => clearInterval(interval);
  }, [catalogCrData.length, itemsPerSlide]);

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

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className="container mx-auto p-4 sm:p-6 lg:p-8">
      <div className="mt-5">
        <div className="flex items-center gap-3 mb-24">
          <Link to="/" className="text-[#7A7687]">
            Главная
          </Link>
          <MdNavigateNext />
          <Link to="/kab" className="text-[#7A7687]">
            Кабинеты под ключ
          </Link>
          <MdNavigateNext />
          <p>Палата реанимации и интенсивной терапии</p>
        </div>
        <div>
          <h3 className="text-3xl md:text-4xl lg:text-5xl">
            Комплексное оснащение палаты <br /> реанимации и интенсивной терапии
          </h3>
          <div>
            <img src={Img} alt="img" className="my-10 mx-auto max-w-full" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-10">
            <div></div>
            <div>
              <p>
                Учитывая стремительное развитие мировых медицинских технологий,
                врачи в Российской Федерации и соседних странах столкнулись
                с вызовом, требующим обновления приборов в различных
                направлениях, от установок компьютерной томографии
                до ультразвуковых сканеров и ЛОР комбайнов. Переход на полностью
                цифровую платформу при диагностике и лечении заболеваний
                также стал серьёзным испытанием для большинства больниц
                и частных клиник.
              </p>
              <p className="text-[#07745E] mt-4">
                Скачать каталог "Стандарты оснащения отделений"
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-11">
        <div className="bg-white rounded-lg shadow-lg p-5">
          <div className="flex gap-4 border-b-2 border-gray-200 mb-5">
            <button
              className={
                !count
                  ? "text-lg font-semibold text-gray-400 pb-2"
                  : "text-lg font-semibold border-b-4 border-green-600 pb-2"
              }
              onClick={() => setCount(true)}
            >
              Стандарты оснащения
            </button>
            <button
              className={
                count
                  ? "text-lg font-semibold text-gray-400 pb-2"
                  : "text-lg font-semibold border-b-4 border-green-600 pb-2"
              }
              onClick={() => setCount(false)}
            >
              Список товаров
            </button>
          </div>
          {count ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 duration-200">
              {items.map((item, index) => (
                <div
                  key={index}
                  className="hover:bg-gray-100 rounded-lg cursor-pointer p-2"
                >
                  {index + 1}. {item}
                </div>
              ))}
            </div>
          ) : (
            <div className="flex overflow-hidden gap-3">
              {catalogCrData.map((item, index) => (
                <div
                  key={index}
                  className={`w-[${
                    90 / itemsPerSlide
                  }%] flex-shrink-0 max-lg:w-full border overflow-hidden`}
                >
                  <div className="relative">
                    <Link to="/katalog/laboratory/analiz">
                      <img
                        src={item.img}
                        alt=""
                        className="w-full h-[250px] object-cover"
                        onClick={() => {
                          dispatch(addToUser(item));
                          window.scrollTo({ top: 0, behavior: "smooth" });
                        }}
                      />
                    </Link>
                    <div className="flex justify-between absolute top-2 gap-[85%] px-3">
                      <button className="py-1 px-3 border bg-[#dff1e6] text-[#088269] rounded-3xl border-[#088269]">
                        Новинка
                      </button>
                      <div className="flex items-center gap-2">
                        <div>
                          {like.some((e) => e.id === item.id) ? (
                            <MdOutlineFavorite
                              className="text-[#088269] bg-transparent w-6 h-6"
                              onClick={() => dispatch(removeFromLike(item))}
                            />
                          ) : (
                            <FavoriteBorderIcon
                              className="bg-transparent hover:text-[#088269]"
                              onClick={() => dispatch(addToLike(item))}
                            />
                          )}
                        </div>
                        <div>
                          {statist.some((e) => e.id === item.id) ? (
                            <LiaChartBar
                              className="text-[#088269] bg-transparent w-6 h-6"
                              onClick={() => dispatch(removeFromStat(item))}
                            />
                          ) : (
                            <LiaChartBar
                              className="bg-transparent w-6 h-6 cursor-pointer"
                              onClick={() => dispatch(addToStat(item))}
                            />
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="border py-5 px-4">
                    <h3 className="text-[18px] font-medium">{item.name}</h3>
                    <p className="text-[#7A7687]">{item.common_name}</p>
                    <p className="text-[#7A7687]">{item.price_title}</p>
                    <h3 className="text-[18px] my-5 font-medium">
                      {item.price} руб
                    </h3>
                    <button
                      className="py-3 w-full border rounded-3xl hover:text-white hover:bg-[#088269] text-[#088269]"
                      onClick={() => dispatch(addToList(item))}
                    >
                      Добавить в корзину
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 bg-white rounded-lg shadow-lg p-5">
          <h2 className="text-2xl md:text-3xl lg:text-4xl mb-5">
            Закажите у нас комплексное <br /> оснащение
          </h2>
          <div>
            <form
              onSubmit={handleSubmit}
              className="flex flex-col md:flex-row gap-3 bg-white"
            >
              <input
                type="text"
                placeholder="Ваш телефон"
                className="w-full p-3 border-b outline-none rounded-lg bg-white"
              />
              <button
                type="submit"
                className="bg-[#088269] text-white rounded-3xl px-5 py-3 md:py-1"
              >
                Заказать
              </button>
            </form>
            <div className="flex mt-3 gap-5">
              <p className="text-sm mt-2">
                Нажимая «Отправить», я соглашаюсь с обработкой персональных
                данных на условиях
                <a href="#" className="text-green-600">
                  Политики конфиденциальности
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KabinetMain;
