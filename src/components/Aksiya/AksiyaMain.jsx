import { LiaChartBar } from "react-icons/lia";
import { MdNavigateNext } from "react-icons/md";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { useState } from "react";
import { MdOutlineFavorite } from "react-icons/md";
import { Link } from "react-router-dom";
import { catalogCrData } from "../../data/data";
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

const AksiyaMain = () => {
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
    <div className="container mx-auto p-4">
      <div className="flex items-center mt-3 gap-3">
        <Link to="/" className="text-[#7A7687] hover:underline">
          Главная
        </Link>
        <MdNavigateNext />
        <p>Акции</p>
      </div>
      <div className="flex flex-col lg:flex-row gap-3 mt-10">
        <div className="w-full lg:w-1/4">
          <div className="border rounded-xl p-5">
            <p>Категории</p>
            <hr className="my-4" />
            <div className="flex justify-between py-1 items-center">
              <p className="text-[14px]">Группы товаров</p>
              <MdNavigateNext />
            </div>
            <div className="flex justify-between py-1 items-center">
              <p className="text-[14px]">Мониторы</p>
              <MdNavigateNext />
            </div>
            <div className="flex justify-between py-1 items-center">
              <p className="text-[14px]">Лампы</p>
              <MdNavigateNext />
            </div>
            <div className="flex justify-between py-1 items-center">
              <p className="text-[14px]">Кровати</p>
              <MdNavigateNext />
            </div>
            <div className="flex justify-between py-1 items-center">
              <p className="text-[14px]">Рентгены</p>
              <MdNavigateNext />
            </div>
          </div>
        </div>
        <div className="w-full lg:w-3/4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {displayItems.map((item, index) => (
              <div key={index}>
                <div className="relative rounded-lg overflow-hidden">
                  <Link to="/katalog/laboratory/analiz">
                    <img
                      src={item.img}
                      alt=""
                      className="w-full h-[200px] sm:h-[250px] object-cover"
                      onClick={() => {
                        dispatch(addToUser(item));
                        window.scrollTo({ top: 0, behavior: "smooth" });
                      }}
                    />
                  </Link>
                  <div className="flex justify-between absolute top-2 w-full px-3">
                    <button className="py-1 px-3 bg-[#FFE095] text-[#855E00] rounded-3xl">
                      -30%
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
                            className="bg-transparent hover:text-[#088269] cursor-pointer"
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
                <div className="border py-5 px-4 mt-3">
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
    </div>
  );
};

export default AksiyaMain;
