import React, { useState } from "react";
import { IoSearch } from "react-icons/io5";
import { MdNavigateNext, MdNavigateBefore } from "react-icons/md";
import { Link } from "react-router-dom";

const faqData = [
  {
    id: 1,
    question: "Преимущества сотрудничества",
    answer:
      "Но синтетическое тестирование, в своём классическом представлении, допускает внедрение поэтапного и последовательного развития общества. В рамках спецификации современных стандартов, сторонники тоталитаризма в науке будут функционально разнесены.",
  },
  {
    id: 2,
    question: "Достижения компании",
    answer:
      "Но синтетическое тестирование, в своём классическом представлении, допускает внедрение поэтапного и последовательного развития общества. В рамках спецификации современных стандартов, сторонники тоталитаризма в науке будут функционально разнесены.",
  },
  {
    id: 3,
    question: "Возврат товара или заказа",
    answer:
      "Но синтетическое тестирование, в своём классическом представлении, допускает внедрение поэтапного и последовательного развития общества. В рамках спецификации современных стандартов, сторонники тоталитаризма в науке будут функционально разнесены.",
  },
  {
    id: 4,
    question: "Стоимость доставки",
    answer:
      "Но синтетическое тестирование, в своём классическом представлении, допускает внедрение поэтапного и последовательного развития общества. В рамках спецификации современных стандартов, сторонники тоталитаризма в науке будут функционально разнесены.",
  },
  {
    id: 5,
    question: "Стать поставщиком",
    answer:
      "Но синтетическое тестирование, в своём классическом представлении, допускает внедрение поэтапного и последовательного развития общества. В рамках спецификации современных стандартов, сторонники тоталитаризма в науке будут функционально разнесены.",
  },
  {
    id: 6,
    question: "Возможен ли возврат денежных средств?",
    answer:
      "Но синтетическое тестирование, в своём классическом представлении, допускает внедрение поэтапного и последовательного развития общества. В рамках спецификации современных стандартов, сторонники тоталитаризма в науке будут функционально разнесены.",
  },
  {
    id: 7,
    question: "Правила расторжения договора?",
    answer:
      "Но синтетическое тестирование, в своём классическом представлении, допускает внедрение поэтапного и последовательного развития общества. В рамках спецификации современных стандартов, сторонники тоталитаризма в науке будут функционально разнесены.",
  },
  {
    id: 8,
    question: "Почему не отгружаем по платежному поручению?",
    answer:
      "Но синтетическое тестирование, в своём классическом представлении, допускает внедрение поэтапного и последовательного развития общества. В рамках спецификации современных стандартов, сторонники тоталитаризма в науке будут функционально разнесены.",
  },
  {
    id: 9,
    question: "Как можно купить товар за наличный расчет?",
    answer:
      "Но синтетическое тестирование, в своём классическом представлении, допускает внедрение поэтапного и последовательного развития общества. В рамках спецификации современных стандартов, сторонники тоталитаризма в науке будут функционально разнесены.",
  },
  {
    id: 10,
    question: "Как сравнить товары на сайте?",
    answer:
      "Но синтетическое тестирование, в своём классическом представлении, допускает внедрение поэтапного и последовательного развития общества. В рамках спецификации современных стандартов, сторонники тоталитаризма в науке будут функционально разнесены.",
  },
];

const ITEMS_PER_PAGE = 5;




const FaqMain = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [openIndex, setOpenIndex] = useState(null);

  const indexOfLastItem = currentPage * ITEMS_PER_PAGE;
  const indexOfFirstItem = indexOfLastItem - ITEMS_PER_PAGE;
  const currentItems = faqData.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(faqData.length / ITEMS_PER_PAGE);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const toggleAnswer = (index) => {
    if (openIndex === index) {
      setOpenIndex(null);
    } else {
      setOpenIndex(index);
    }
  };

   


  return (
    <div className="container mx-auto p-4">
      <p className="flex items-center gap-3 mt-3 cursor-pointer">
        <Link to="/" className="text-[#7A7687] hover:underline">
          Главная
        </Link>
        <MdNavigateNext /> <span className="text-black">FAQ</span>
      </p>
      <div className="grid md:grid-cols-2 gap-60 mt-10">
        <div>
          <h2 className="text-[48px] mb-10">Часто задаваемые вопросы</h2>
          <div className="border border-[#d7cfe4] overflow-hidden flex items-center bg-[#d7cfe4] rounded-3xl">
            <div className="w-full h-full bg-white rounded-3xl overflow-hidden py-2">
              <input
                type="text"
                className="w-full h-full bg-white outline-none px-2"
                placeholder="Поиск по вопросам"
              />
            </div>
            <IoSearch className="w-6 h-6 bg-transparent mx-2 text-[#7A7687]" />
          </div>
        </div>
        <div>
          <div className="mt-6">
            {currentItems.map((item, index) => (
              <div key={item.id} className="border-b border-gray-200 py-4">
                <div
                  className="flex justify-between items-center cursor-pointer"
                  onClick={() => toggleAnswer(index)}
                >
                  <h3 className="text-lg font-medium text-gray-800">
                    {item.question}
                  </h3>
                  <span
                    className={`w-6 h-6 flex items-center justify-center rounded-full ${
                      openIndex === index
                        ? "bg-[#088269] text-white"
                        : "bg-gray-200 text-black"
                    }`}
                  >
                    {openIndex === index ? "-" : "+"}
                  </span>
                </div>
                {openIndex === index && (
                  <p className="mt-2 text-gray-600">{item.answer}</p>
                )}
              </div>
            ))}
          </div>
          <div className="flex justify-center items-center mt-6">
            <button
              onClick={prevPage}
              className="mx-2 px-2 py-1 border rounded  hover:bg-gray-300 h-full"
              disabled={currentPage === 1}
            >
              <MdNavigateBefore className="bg-transparent h-full" />
            </button>
            <nav>
              <ul className="flex overflow-hidden">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                  (number) => (
                    <li
                      key={number}
                      className={`mx-1 ${
                        currentPage === number
                          ? "text-white bg-blue-400  "
                          : "text-gray-600"
                      }`}
                    >
                      <button
                        onClick={() => paginate(number)}
                        className="px-3 py-1 border rounded"
                      >
                        {number}
                      </button>
                    </li>
                  )
                )}
              </ul>
            </nav>
            <button
              onClick={nextPage}
              className="mx-2 px-2 py-1 border rounded hover:bg-gray-300"
              disabled={currentPage === totalPages}
            >
              <MdNavigateNext className="bg-transparent" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FaqMain;
