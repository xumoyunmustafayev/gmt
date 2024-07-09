import React from "react";
import { MdNavigateNext, MdOutlineFavorite } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  addToLike,
  addToListSecend,
  addToStat,
  addToUserMinus,
  addToUserPlus,
  removeFromLike,
  removeFromStat,
} from "../../store/addTo";
import { LiaChartBar } from "react-icons/lia";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

const Analizetic = () => {
  const { users, like, statist } = useSelector((state) => state.addTo);
  const dispatch = useDispatch();

  const handleAddToList = (user) => {
    dispatch(addToListSecend(user));
  };

  const handleAddToLike = (user) => {
    dispatch(addToLike(user));
  };

  const handleRemoveFromLike = (user) => {
    dispatch(removeFromLike(user));
  };

  const handleAddToStat = (user) => {
    dispatch(addToStat(user));
  };

  const handleRemoveFromStat = (user) => {
    dispatch(removeFromStat(user));
  };

  const handleAddToUserPlus = (user) => {
    dispatch(addToUserPlus(user));
  };

  const handleAddToUserMinus = (user) => {
    dispatch(addToUserMinus(user));
  };

  return (
    <div className="container mx-auto p-4">
      <div className="mb-4 hidden md:block">
        <div className="flex items-center gap-3">
          <Link to="/" className="text-[#7A7687]">
            Главная
          </Link>
          <MdNavigateNext />
          <Link to="/katalog" className="text-[#7A7687]">
            Каталог
          </Link>
          <MdNavigateNext />
          <Link to="/katalog/laboratory" className="text-[#7A7687]">
            Лабораторное оборудование
          </Link>
          <MdNavigateNext />
          <Link to="/katalog/laboratory/analiz" className="text-black">
            Анализатор мочи MINDRAY UA-66
          </Link>
        </div>
      </div>
      <div className="mt-10">
        {users.length === 0 ? (
          <img
            src="https://tradebharat.in/assets/catalogue/img/no-product-found.png"
            alt="No product found"
            className="w-full h-[400px]"
          />
        ) : (
          users.map((user, index) => (
            <div key={index} className="flex flex-col lg:flex-row gap-10">
              <div className="w-full lg:w-2/3 rounded-xl overflow-hidden">
                <div className="relative">
                  <div className="relative">
                    <img
                      src={user.img}
                      alt="img"
                      className="w-full h-[65vh] object-cover cursor-pointer"
                      onClick={() => {
                        handleAddToStat(user);
                        window.scrollTo({ top: 0, behavior: "smooth" });
                      }}
                    />
                    <div className="flex gap-3 bottom-2 left-[40%] absolute cursor-pointer md:bottom-5 md:left-5">
                      <img
                        src={user.img}
                        alt="thumbnail"
                        className="w-[50px] border rounded-lg h-[50px]"
                      />
                      <img
                        src={user.img}
                        alt="thumbnail"
                        className="w-[50px] border rounded-lg h-[50px]"
                      />
                      <img
                        src={user.img}
                        alt="thumbnail"
                        className="w-[50px] border rounded-lg h-[50px]"
                      />
                    </div>
                  </div>
                  <div className="flex justify-between absolute top-5 right-5 left-5">
                    <button className="py-1 px-3 border bg-[#dff1e6] text-[#088269] rounded-3xl border-[#088269]">
                      Новинка
                    </button>
                    <div className="flex items-center gap-2">
                      <div>
                        {like.some((e) => e.id === user.id) ? (
                          <MdOutlineFavorite
                            className="text-[#088269] cursor-pointer bg-transparent w-6 h-6"
                            onClick={() => handleRemoveFromLike(user)}
                          />
                        ) : (
                          <FavoriteBorderIcon
                            className="bg-transparent cursor-pointer hover:text-[#088269]"
                            onClick={() => handleAddToLike(user)}
                          />
                        )}
                      </div>
                      <div>
                        {statist.some((e) => e.id === user.id) ? (
                          <LiaChartBar
                            className="text-[#088269] bg-transparent w-6 h-6"
                            onClick={() => handleRemoveFromStat(user)}
                          />
                        ) : (
                          <LiaChartBar
                            className="bg-transparent w-6 h-6 cursor-pointer"
                            onClick={() => handleAddToStat(user)}
                          />
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full lg:w-1/3">
                <div className="p-4 rounded-md">
                  <h2 className="text-[23px] font-semibold">
                    Анализатор мочи MINDRAY UA-66
                  </h2>
                  <div className="flex items-center mt-2">
                    <span className="text-yellow-500">★★★★☆</span>
                    <span className="ml-2">4.0</span>
                  </div>
                  <div className="mt-4">
                    <p className="text-sm text-gray-500">
                      Категория: Лабораторное оборудование
                    </p>
                    <p className="text-sm text-gray-500">
                      Производитель: Labst
                    </p>
                    <p className="text-sm text-gray-500">Артикул: 253315</p>
                    <p className="text-sm text-gray-500">В наличии</p>
                  </div>
                  <div className="mt-4">
                    <p className="text-xl font-semibold">Цена по запросу</p>
                    <div className="flex items-center my-2 gap-2">
                     
                      <button
                        className="px-3 py-3 border border-[#088269] rounded-3xl text-[#088269] font-bold text-[12px]"
                        onClick={() => handleAddToList(user)}
                      >
                        Задать вопрос
                      </button>
                      <Link>
                        <button
                          className="px-2 py-3 bg-[#088269] border border-[#088269] rounded-3xl text-[#F8F7F3] font-bold text-[14px]"
                          onClick={() => handleAddToList(user)}
                        >
                          Добавить в корзину
                        </button>
                      </Link>
                    </div>
                  </div>
                  <div className="mt-4">
                    <h3 className="text-lg font-semibold">О товаре</h3>
                    <p className="text-sm text-gray-600 mt-2">
                      На современном тестировании, с высокими показателями
                      воспроизводимости, допустимы варьирования показателей в
                      зависимости от области применения. Важно использовать
                      только стандартные, строгими требованиями, иначе будут
                      функциональные расхождения.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Analizetic;
