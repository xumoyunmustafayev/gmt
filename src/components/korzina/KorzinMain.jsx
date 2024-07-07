import React from "react";
import { MdNavigateNext } from "react-icons/md";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";


const KorzinMain = () => {
  const { list, users, like, statist } = useSelector((state) => state.addTo);
  console.log(list);

  return (
    <div className="container">
      <div className="flex items-center mt-3 gap-3 mb-3">
        <Link to="/" className="text-[#7A7687] hover:underline">
          Главная
        </Link>
        <MdNavigateNext />
        <p className="cursor-pointer">Корзина({list.length})</p>
      </div>

      <div className="mt-12">
        {list.map((item) => (
          <div key={item.id} className="flex  gap-4 mb-6">
            <div className="py-10 px-20 bg-white ">
              <img src={item.img} alt={item.name} className="w-40 h-40" />
            </div>
            <div className="flex">
              <div className="px-7 py-5">
                <p className="font-medium text-[18px]">{item.name}</p>
                <p className="text-[#7A7687]">Артикул:{item.id}</p>
                <p className="text-[#7A7687]">В наличии</p>
              </div>
              <div lassName="px-7 py-5">
                <p>{item.price}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default KorzinMain;
