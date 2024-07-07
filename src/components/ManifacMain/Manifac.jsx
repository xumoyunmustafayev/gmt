import React, { useState } from "react";
import { LiaChartBar } from "react-icons/lia";
import { LuTable } from "react-icons/lu";
import { MdNavigateNext, MdOutlineFavorite } from "react-icons/md";
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
import { IoIosSearch } from "react-icons/io";

const itemsPerPage = 6;

const Manifac = () => {
  const { list, users, like, statist } = useSelector((state) => state.addTo);
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(0);
  const [minPrice, setMinPrice] = useState(20000);
  const [maxPrice, setMaxPrice] = useState(950000);

  const [count, setCount] = useState(false);
  const [count1, setCount1] = useState(false);

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
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <p className="flex items-center gap-3">
          <Link to="/" className="text-[#7A7687]">
            Главная
          </Link>
          <MdNavigateNext /> <span className="text-black">Покупателям</span>
        </p>
        <div className="flex gap-5 cursor-pointer justify-between mt-7"></div>
        <div className="flex flex-col lg:flex-row mt-5">
          <div className="w-full lg:w-1/4 mb-5 lg:mb-0">
            <div className="border rounded-lg cursor-pointer">
              <div
                className="px-5 py-4 w-full flex justify-between items-center"
                onClick={() => {
                  setCount(!count);
                  setCount1(false);
                }}
              >
                <p>Направления</p>
                <MdNavigateNext
                  className={
                    count
                      ? `rotate-90 duration-200`
                      : "rotate-[-90deg] duration-150"
                  }
                />
              </div>
              {count && (
                <div className="px-5 py-4 w-full">
                  <div className="bg-white border rounded-3xl px-5 py-2 flex justify-between items-center">
                    <input
                      type="text"
                      className="border-none outline-none w-full bg-white"
                      placeholder="Поиск по стране"
                    />
                    <IoIosSearch className="bg-white w-5 h-5" />
                  </div>
                  <div className="flex mt-3 items-center cursor-pointer gap-4 my-1">
                    <input
                      type="checkbox"
                      className="w-4 h-4 cursor-pointer"
                      defaultChecked
                    />
                    <p>Австралия</p>
                  </div>
                  <div className="flex mt-3 items-center cursor-pointer gap-4 my-1">
                    <input type="checkbox" className="w-4 h-4 cursor-pointer" />
                    <p>Беларусь</p>
                  </div>
                  <div className="flex mt-3 items-center cursor-pointer gap-4 my-1">
                    <input
                      type="checkbox"
                      className="w-4 h-4 cursor-pointer"
                      defaultChecked
                    />
                    <p>Бельгия</p>
                  </div>
                  <div className="flex mt-3 items-center cursor-pointer gap-4 my-1">
                    <input
                      type="checkbox"
                      className="w-4 h-4 cursor-pointer"
                      defaultChecked
                    />
                    <p>Великобритания</p>
                  </div>
                  <div className="flex mt-3 items-center cursor-pointer gap-4 my-1">
                    <input type="checkbox" className="w-4 h-4 cursor-pointer" />
                    <p>Германия</p>
                  </div>
                  <div className="flex mt-3 items-center cursor-pointer gap-4 my-1">
                    <input
                      type="checkbox"
                      className="w-4 h-4 cursor-pointer"
                      defaultChecked
                    />
                    <p>Германия</p>
                  </div>
                  <div className="flex mt-3 items-center cursor-pointer gap-4 my-1">
                    <input
                      type="checkbox"
                      className="w-4 h-4 cursor-pointer"
                      defaultChecked
                    />
                    <p>Германия</p>
                  </div>
                </div>
              )}
            </div>
            <div className="border rounded-lg cursor-pointer mt-5">
              <div
                className="px-5 py-4 w-full flex justify-between items-center"
                onClick={() => {
                  setCount1(!count1);
                  setCount(false);
                }}
              >
                <p>Страны</p>
                <MdNavigateNext
                  className={
                    count1
                      ? `rotate-90 duration-200`
                      : "rotate-[-90deg] duration-150"
                  }
                />
              </div>
              {count1 && (
                <div className="px-5 py-4 w-full">
                  <div className="bg-white border rounded-3xl px-5 py-2 flex justify-between items-center">
                    <input
                      type="text"
                      className="border-none outline-none w-full bg-white"
                      placeholder="Поиск по стране"
                    />
                    <IoIosSearch className="bg-white w-5 h-5" />
                  </div>
                  <div className="flex mt-3 items-center cursor-pointer gap-4 my-1">
                    <input
                      type="checkbox"
                      className="w-4 h-4 cursor-pointer"
                      defaultChecked
                    />
                    <p>Австралия</p>
                  </div>
                  <div className="flex mt-3 items-center cursor-pointer gap-4 my-1">
                    <input type="checkbox" className="w-4 h-4 cursor-pointer" />
                    <p>Беларусь</p>
                  </div>
                  <div className="flex mt-3 items-center cursor-pointer gap-4 my-1">
                    <input
                      type="checkbox"
                      className="w-4 h-4 cursor-pointer"
                      defaultChecked
                    />
                    <p>Бельгия</p>
                  </div>
                  <div className="flex mt-3 items-center cursor-pointer gap-4 my-1">
                    <input
                      type="checkbox"
                      className="w-4 h-4 cursor-pointer"
                      defaultChecked
                    />
                    <p>Великобритания</p>
                  </div>
                  <div className="flex mt-3 items-center cursor-pointer gap-4 my-1">
                    <input type="checkbox" className="w-4 h-4 cursor-pointer" />
                    <p>Германия</p>
                  </div>
                  <div className="flex mt-3 items-center cursor-pointer gap-4 my-1">
                    <input
                      type="checkbox"
                      className="w-4 h-4 cursor-pointer"
                      defaultChecked
                    />
                    <p>Германия</p>
                  </div>
                  <div className="flex mt-3 items-center cursor-pointer gap-4 my-1">
                    <input
                      type="checkbox"
                      className="w-4 h-4 cursor-pointer"
                      defaultChecked
                    />
                    <p>Германия</p>
                  </div>
                </div>
              )}
            </div>

            <div className="mt-6 flex justify-between gap-2">
              <button className="flex-1 rounded-3xl bg-gray-200 py-2">
                Сбросить
              </button>
              <button className="flex-1 rounded-3xl bg-[#088269] text-white py-2 px-3">
                Показать
              </button>
            </div>
          </div>
          <div className="w-full lg:w-3/4 lg:ml-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
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
                        <div className="">
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
                    <p className="text-[#7A7687]">{item.price_title} </p>
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
                pageClassName="border border-gray-300 rounded-lg px-4 py-2"
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

export default Manifac;
