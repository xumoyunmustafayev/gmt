import React, { useState } from "react";
import { IoClose, IoSearch } from "react-icons/io5";

const cities = [
  "Москва",
  "Апрелевка",
  "Балашиха",
  "Бронницы",
  "Верея",
  "Видное",
  "Волоколамск",
  "Воскресенск",
  "Высоковск",
  "Голицыно",
  "Дедовск",
  "Дзержинский",
  "Дмитров",
  "Долгопрудный",
  "Домодедово",
  "Дрезна",
  "Санкт-Петербург",
  "Абакан",
  "Азов",
  "Александров",
  "Алексин",
  "Альметьевск",
  "Анапа",
  "Ангарск",
  "Анжеро-Судженск",
  "Апатиты",
  "Арзамас",
  "Армавир",
  "Артем",
  "Архангельск",
];

const translateToLatin = (text) => {
  const cyrillicToLatin = {
    а: "a",
    б: "b",
    в: "v",
    г: "g",
    д: "d",
    е: "e",
    ё: "yo",
    ж: "j",
    з: "z",
    и: "i",
    й: "y",
    к: "k",
    л: "l",
    м: "m",
    н: "n",
    о: "o",
    п: "p",
    р: "r",
    с: "s",
    т: "t",
    у: "u",
    ф: "f",
    х: "x",
    ц: "ts",
    ч: "ch",
    ш: "sh",
    щ: "sh",
    ъ: "",
    ы: "i",
    ь: "",
    э: "e",
    ю: "yu",
    я: "ya",
  };
  return text
    .split("")
    .map((char) => cyrillicToLatin[char] || char)
    .join("");
};

const CitySearch = ({ setShow, setCity }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredCities = cities.filter((city) => {
    const cityLatin = translateToLatin(city.toLowerCase());
    const searchTermLatin = translateToLatin(searchTerm.toLowerCase());
    return cityLatin.includes(searchTermLatin);
  });

  const handleCityClick = (city) => {
    setCity(city);
    setShow(false);
  };

  return (
    <div className="fixed bg-black top-0 right-0 w-[100vw] z-50 bg-opacity-25 h-[100vh] flex justify-center items-center">
      <div className="w-[90vw] max-w-[500px] px-6 bg-white rounded-md py-5">
        <div className="flex justify-between items-center">
          <p className="text-[18px] font-medium">Укажите свой город</p>
          <IoClose
            className="w-5 h-5 bg-transparent cursor-pointer"
            onClick={() => setShow(false)}
          />
        </div>
        <div className="border overflow-hidden rounded-3xl bg-[#D5D1E1] flex mt-7 items-center">
          <input
            type="text"
            className="bg-white rounded-3xl p-2 outline-none w-full"
            placeholder="Поиск населенного пункта"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <IoSearch className="w-6 h-6 bg-transparent mx-4 text-[#7A7687]" />
        </div>
        <div className="mt-5 grid grid-cols-2 gap-2 sm:grid-cols-3">
          {filteredCities.map((city) => (
            <div
              key={city}
              className="px-1 cursor-pointer hover:bg-gray-200 rounded"
              onClick={() => handleCityClick(city)}
            >
              {city}
            </div>
          ))}
        </div>
        <button className="mt-5 px-5 py-2 bg-[#088269] text-white rounded-3xl w-full">
          Все города
        </button>
      </div>
    </div>
  );
};

export default CitySearch;
