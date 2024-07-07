import React, { useState } from "react";
import { LiaChartBar } from "react-icons/lia";
import { LuTable } from "react-icons/lu";
import { MdOutlineFavorite } from "react-icons/md";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link } from "react-router-dom";
import { catalogCrData } from "../../data/data";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import {
  addToLike,
  addToList,
  addToStat,
  addToUser,
  removeFromLike,
  removeFromStat,
} from "../../store/addTo";
import { useDispatch, useSelector } from "react-redux";
import ReactPaginate from "react-paginate";

const itemsPerPage = 6;

const Pagination = () => {
  const { list, users, like, statist } = useSelector((state) => state.addTo);
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(0);
  const [minPrice, setMinPrice] = useState(20000);
  const [maxPrice, setMaxPrice] = useState(950000);

  const pageCount = Math.ceil(catalogCrData.length / itemsPerPage);

  const handlePageClick = (event) => {
    setCurrentPage(event.selected);
  };

  const displayItems = [];
  for (let i = 0; i < itemsPerPage; i++) {
    displayItems.push(
      catalogCrData[(currentPage * itemsPerPage + i) % catalogCrData.length]
    );
  }

  return (
    <div className="my-10">
      <div className="container mx-auto">
        <h2 className="text-2xl">Оборудование Draeger</h2>
        <div className="flex mt-10">
          <div className="px-8 py-3 bg-white border rounded-3xl">
            <p className="text-sm">Дерматологическое оборудование</p>
          </div>
          <div className="px-8 py-3 bg-white border rounded-3xl">
            <p className="text-sm">Ветеринарное оборудование</p>
          </div>
          <div className="px-8 py-3 bg-white border rounded-3xl">
            <p className="text-sm">Мебель медицинская</p>
          </div>
          <div className="px-8 py-3 bg-white border rounded-3xl">
            <p className="text-sm">Анестезиология</p>
          </div>
          <div className="px-8 py-3 border rounded-3xl">
            <p className="text-sm text-green-600">Показать все</p>
          </div>
        </div>
        <div className="flex gap-5 cursor-pointer justify-between mt-7">
          <select className="w-1/4 outline-none rounded-xl px-5 py-3 border">
            <option>Направления</option>
            <option>Направления</option>
            <option>Направления</option>
            <option>Направления</option>
            <option>Направления</option>
            <option>Направления</option>
          </select>
          <div className="w-3/4 flex justify-between rounded-xl px-5 py-3 border">
            <select className="border-none outline-none">
              <option>По популярности</option>
              <option>По популярности</option>
              <option>По популярности</option>
              <option>По популярности</option>
            </select>
            <div className="flex gap-32">
              <div className="flex items-center gap-2">
                <p className="text-gray-500">Показать</p>
                <select className="border-none outline-none">
                  <option>36</option>
                  <option>46</option>
                  <option>56</option>
                </select>
              </div>
              <div className="flex gap-2">
                <RxHamburgerMenu className="w-5 h-5" />
                <LuTable className="w-5 h-5" />
              </div>
            </div>
          </div>
        </div>
        <div className="flex mt-5">
          <div className="w-1/4 ">
            <div className="p-5 rounded-xl shadow-md">
              <h3 className="text-lg mb-4">Фильтр по товарам</h3>
              <div className="mb-4">
                <label className="block mb-2">Цена</label>
                <input
                  type="range"
                  min="20000"
                  max="950000"
                  value={minPrice}
                  onChange={(e) => setMinPrice(Number(e.target.value))}
                  className="w-full "
                />
                <input
                  type="range"
                  min="20000"
                  max="950000"
                  value={maxPrice}
                  onChange={(e) => setMaxPrice(Number(e.target.value))}
                  className="w-full mt-2"
                />
                <div className="flex justify-between text-sm mt-2">
                  <span>От: {minPrice.toLocaleString()}</span>
                  <span>До: {maxPrice.toLocaleString()}</span>
                </div>
              </div>
              <div className="mb-4">
                <label className="block mb-2">Страна</label>
                <input
                  type="text"
                  placeholder="Поиск по стране"
                  className="w-full p-2 border outline-none rounded mb-2"
                />
                <div className="space-y-2">
                  <label className="block">
                    <input type="checkbox" className="mr-2" defaultChecked />{" "}
                    Австралия
                  </label>
                  <label className="block">
                    <input type="checkbox" className="mr-2" defaultChecked />{" "}
                    Австрия
                  </label>
                  <label className="block">
                    <input type="checkbox" className="mr-2" defaultChecked />{" "}
                    Беларусь
                  </label>
                  <label className="block">
                    <input type="checkbox" className="mr-2" /> Бельгия
                  </label>
                  <label className="block">
                    <input type="checkbox" className="mr-2" /> Великобритания
                  </label>
                  <label className="block">
                    <input type="checkbox" className="mr-2" /> Германия
                  </label>
                  <label className="block">
                    <input type="checkbox" className="mr-2" defaultChecked />{" "}
                    Израиль
                  </label>
                  <label className="block">
                    <input type="checkbox" className="mr-2" /> Испания
                  </label>
                </div>
              </div>
              <div className="mb-4">
                <label className="block mb-2">Состояние</label>
                <label className="block">
                  <input type="checkbox" className="mr-2" defaultChecked />{" "}
                  Новый
                </label>
                <label className="block">
                  <input type="checkbox" className="mr-2" /> Демонстрационный
                </label>
              </div>
              <div className="mb-4">
                <label className="block mb-2">Назначение</label>
              </div>
              <div className="mb-4">
                <label className="block mb-2">Комплектация</label>
              </div>
            </div>
            <div className="mt-6 flex justify-between">
              <button className="flex-1  rounded-3xl bg-gray-200 p-2 ">
                Сбросить
              </button>
              <button className="flex-1 rounded-3xl bg-green-600 text-white p-2 ">
                Показать
              </button>
            </div>
          </div>
          <div className="w-3/4 ml-5">
            <div className="grid grid-cols-3 gap-3">
              {displayItems.map((item, index) => (
                <div key={index}>
                  <div className="relative rounded-lg overflow-hidden">
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
                      <div className="flex items-center gap-2 ">
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
                        <div className="">
                          {statist.some((e) => e.id === item.id) ? (
                            <LiaChartBar
                              className=" text-[#088269] bg-transparent w-6 h-6"
                              onClick={() => dispatch(removeFromStat(item))}
                            />
                          ) : (
                            <LiaChartBar
                              className="bg-transparent  w-6 h-6 cursor-pointer"
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
                    <p className="text-[#7A7687]">{item.price_title} </p>
                    <h3 className="text-[18px] my-5 font-medium">
                      {item.price} руб
                    </h3>
                    <button
                      className=" py-3 w-full border rounded-3xl hover:text-white hover:bg-[#088269] text-[#088269]"
                      onClick={() => dispatch(addToList(item))}
                    >
                      Добавить в корзину
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex mt-6 items-center justify-center gap-2 text-xl">
              <ReactPaginate
                breakLabel="..."
                nextLabel=">"
                onPageChange={handlePageClick}
                pageRangeDisplayed={2}
                pageCount={pageCount}
                previousLabel="<"
                renderOnZeroPageCount={null}
                containerClassName="flex gap-2"
                pageClassName="border border-gray-300 rounded-lg px-4 py-2 "
                activeClassName="bg-teal-600 text-white rounded-lg"
                previousClassName="border border-gray-300 rounded-lg px-4 py-2 bg-transparent"
                nextClassName="border border-gray-300 rounded-lg px-4 py-2 bg-transparent"
                breakClassName="border border-gray-300 rounded-lg px-4 py-2 bg-transparent"
              />
            </div>
          </div>
        </div>
        <div className="flex gap-2 mt-5"></div>
      </div>
    </div>
  );
};

export default Pagination;
