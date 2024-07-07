import React from "react";
import { MdNavigateNext } from "react-icons/md";
import { Link } from "react-router-dom";
import { FaVk, FaTelegramPlane, FaWhatsapp } from "react-icons/fa";

const KontactMain = () => {
  return (
    <div className="container mx-auto p-4">
      <div className="flex items-center mt-3 gap-3 cursor-pointer">
        <Link to="/" className="text-[#7A7687] hover:underline">
          Главная
        </Link>
        <MdNavigateNext />
        <p>Контакты</p>
      </div>
      <div className="mt-20">
        <h3 className="text-[48px]">Контакты</h3>
        <div className="flex flex-col lg:flex-row mt-6 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md flex-1">
            <h2 className="text-xl font-semibold mb-4">
              ООО Глобал Медикал Трейд
            </h2>
            <p>
              <strong>Юридический адрес:</strong>
              <br />
              Россия, г. Москва, ул. Докучина, 8, стр. 2
            </p>
            <p className="mt-2">
              <strong>Фактический адрес:</strong>
              <br />
              Россия, г. Москва, ул. Докучина, 8, стр. 2
            </p>
            <p className="mt-2">
              <strong>Режим работы:</strong>
              <br />
              Пн-Пт: с 09:00-19:00
              <br />
              Сб-Вс: выходной
            </p>
            <p className="mt-2">
              <strong>Звоните. Звонки по России бесплатны:</strong>
            </p>
            <p>8-800-000-00-00, +7-000-000-00-00, +7-495-000-00-00</p>
            <p className="mt-2">
              <strong>Пишите:</strong>
              <br />
              info@mail.ru
            </p>
            <p className="mt-2">
              <strong>Реквизиты:</strong>
              <br />
              ИНН: 9717039181
              <br />
              ОГРН: 1167746796986
            </p>
            <p className="mt-2">
              <strong>Мы в соцсетях:</strong>
            </p>
            <div className="flex items-center gap-2 mt-2">
              <a href="#" className="text-[#7A7687] hover:text-[#1da1f2]">
                <FaVk size={24} className="  bg-white" />
              </a>
              <a href="#" className="text-[#7A7687] hover:text-[#0088cc]">
                <FaTelegramPlane size={24} className="  bg-white" />
              </a>
              <a href="#" className="text-[#7A7687] hover:text-[#25d366]">
                <FaWhatsapp size={24} className="  bg-white" />
              </a>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md flex-1">
            <h2 className="text-xl font-semibold mb-4">
              Бесплатная консультация
            </h2>
            <p>
              Оставьте свои координаты и наш менеджер перезвонит вам через 10
              минут
            </p>
            <form className="mt-4 space-y-4">
              <input
                type="text"
                placeholder="Ваше имя"
                className="w-full p-2 border-b border-gray-300  focus:outline-none focus:border-[#088269] bg-white"
              />
              <input
                type="text"
                placeholder="Ваш телефон"
                className="w-full p-2 border-b border-gray-300  focus:outline-none focus:border-[#088269] bg-white"
              />
              <input
                type="email"
                placeholder="Ваш email"
                className="w-full p-2 border-b border-gray-300  focus:outline-none focus:border-[#088269] bg-white"
              />
              <textarea
                placeholder="Ваш вопрос"
                className="w-full p-2 border-b border-gray-300  focus:outline-none focus:border-[#088269] bg-white"
              />
              <button
                type="submit"
                className="w-full py-2 bg-[#088269] text-white rounded-lg hover:bg-[#066e56]"
              >
                Отправить
              </button>
            </form>
            <p className="mt-4 text-xs text-gray-500">
              Нажимая «Отправить», я соглашаюсь с обработкой персональных данных
              на условиях{" "}
              <a href="#" className="text-[#088269] hover:underline">
                Политики конфиденциальности
              </a>
              .
            </p>
          </div>
        </div>
      </div>
      <div className="mt-5 rounded-xl opacity-70 h-[350px] overflow-hidden">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11991.677007140437!2d69.18159484863281!3d41.2888618263866!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae89dcd046ab2d%3A0xae86543ab050fd5!2sJahon%20tillari%20universiteti!5e0!3m2!1sen!2s!4v1719166743925!5m2!1sen!2s"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default KontactMain;
