import React from "react";

const NavTop = () => {
  return (
    <div className="bg-[#f7f8f2] max-md:hidden ">
      <div className="container  ">
        <div className="flex justify-between items-center py-[10px]  cursor-pointer  ">
          <ul className="flex gap-5 bg-transparent">
            <li className="text-[#7A7687] text-[12px] ">О компании</li>
            <li className="text-[#7A7687] text-[12px] ">Доставка</li>
            <li className="text-[#7A7687] text-[12px] ">Оплата</li>
            <li className="text-[#7A7687] text-[12px] ">Гарантии</li>
            <li className="text-[#7A7687] text-[12px] ">Блог</li>
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
