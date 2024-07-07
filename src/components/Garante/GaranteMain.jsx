import React from "react";
import { MdNavigateNext } from "react-icons/md";
import { Link } from "react-router-dom";

const GaranteMain = () => {
  return (
    <div>
      <div className="container mx-auto p-4 sm:p-6 lg:p-8">
        <p className="flex items-center gap-3 mt-3">
          <Link to="/" className="text-[#7A7687] hover:underline">
            Главная
          </Link>
          <MdNavigateNext /> <span className="text-black">Гарантии</span>
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 mt-8 gap-4">
          <div>
            <h3 className="text-3xl md:text-4xl lg:text-5xl">Гарантии</h3>
            <p className="my-2">
              Регулярное сервисное обслуживание медицинской техники – залог ее
              надежной, беспроблемной эксплуатации, а также продолжительного
              срока службы. Периодическая диагностика позволяет выявить любые
              неисправности, отклонения от нормального рабочего режима на самых
              ранних сроках. Это предотвратит серьезные поломки, приводящие к
              дорогостоящим ремонтам.
            </p>
            <p className="my-2">
              Являясь авторизованным дилером брендов, продукция которых
              представлена в каталоге, компания:
            </p>
            <p className="m-2">
              1. Предоставляет услуги сервисного и гарантийного обслуживания.
              <br />
              2. Осуществляет поставку оригинальных запчастей и комплектующих
              <br />
              3. Обучает медицинский персонал работе с современным
              высокотехнологичным оборудованием.
            </p>
            <p className="my-2">
              Глобал Медикал Трейд является надежным поставщиком медицинского
              оборудовани, предлагая своим клиентам качественную продукцию по
              лучшей цене. Наша компания гарантирует всем клиентам возможность
              воспользоваться услугами квалифицированных мастеров в установке,
              пуско-наладке, сервисном и техническом обслуживании приобретенного
              оборудования.
            </p>
          </div>
        </div>
        <div className="mt-16">
          <h1 className="text-2xl md:text-3xl lg:text-4xl mb-5">
            Перечень гарантийных услуг
          </h1>
          <div className="flex justify-between mt-8 flex-wrap gap-4">
            <div className="border w-full md:w-[48%] lg:w-[23%] p-10 flex flex-col items-center justify-center flex-grow hover:bg-gray-100 transition-all duration-300">
              <img src="/Symbol.svg" alt="" className="mb-10" />
              <p className="text-center">Быстрая доставка</p>
            </div>
            <div className="border w-full md:w-[48%] lg:w-[23%] p-10 flex flex-col items-center justify-center flex-grow hover:bg-gray-100 transition-all duration-300">
              <img src="./Symbol1.svg" alt="" className="mb-10" />
              <p className="text-center">
                Весь товар <br /> сертифицирован
              </p>
            </div>
            <div className="border w-full md:w-[48%] lg:w-[23%] p-10 flex flex-col items-center justify-center flex-grow hover:bg-gray-100 transition-all duration-300">
              <img src="./Symbol2.svg" alt="" className="mb-10" />
              <p className="text-center">
                Гибкая система <br /> скидок
              </p>
            </div>
            <div className="border w-full md:w-[48%] lg:w-[23%] p-10 flex flex-col items-center justify-center flex-grow hover:bg-gray-100 transition-all duration-300">
              <img src="./Symbol3.svg" alt="" className="mb-10" />
              <p className="text-center">Лет рынке</p>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto p-4 sm:p-6 lg:p-8">
        <div className="rounded-xl mt-20 p-10 bg-[#088269] grid grid-cols-1 md:grid-cols-2 gap-4">
          <p className="text-2xl md:text-3xl lg:text-4xl text-white">
            Внимание!
          </p>
          <div>
            <p className="text-white mb-2">
              Рассмотрение заявки на замену товара осуществляется в срок до 30
              дней со дня её регистрации согласно п. 1 ст. 12 Закона № 59-ФЗ,
              при условии предоставления документов, перечисленных в договоре.
            </p>
            <p className="text-white">
              Оформление гарантийного случая осуществляется согласно
              Гражданскому кодексу РФ, при условии предоставления документов,
              перечисленных в договоре и при наличии заявления с указанием
              причины возврата, оформленного надлежащим образом.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GaranteMain;
