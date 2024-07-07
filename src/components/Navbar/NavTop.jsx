import React from "react";
import { Link } from "react-router-dom";

const NavTop = () => {
  return (
    <div className="bg-[#f7f8f2] max-md:hidden ">
      <div className="container  ">
        <div className="flex justify-between items-center py-[10px]  cursor-pointer  ">
          <ul className="flex gap-5 bg-transparent">
            <Link to="kompane">
              <li className="text-[#7A7687] text-[12px] ">О компании</li>
            </Link>
            <Link to="delevery">
              <li className="text-[#7A7687] text-[12px] ">Доставка</li>
            </Link>
            <Link to="oplata">
              <li className="text-[#7A7687] text-[12px] ">Оплата</li>
            </Link>
            <Link to="/grante">
              <li className="text-[#7A7687] text-[12px] ">Гарантии</li>
            </Link>
            <Link to="/blog/informatsionny">
              <li className="text-[#7A7687] text-[12px] ">Блог</li>
            </Link>
          </ul>
          <ul className="flex gap-11 bg-transparent">
            <li className="text-[#7A7687] text-[12px]">info@mail.ru</li>
            <li className="text-[#7A7687] text-[12px]">
              г. Москва, ул. Московская, д. 35
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavTop;
