import React from 'react'
import { IoClose } from 'react-icons/io5';

const NeedHelp = ({ setShow }) => {
  return (
    <div className="bg-black fixed top-0 w-[100vw] h-[100vh] bg-opacity-25 z-50 flex justify-center items-center">
      <div className="w-[500px] bg-white rounded-xl p-6">
        <div className="flex justify-between items-center ">
          <p className="text-[18px] font-medium">Вам нужна помощь?</p>
          <IoClose className="bg-transparent w-6 h-6 "  onClick={()=>setShow(false)} />
        </div>
        <p className="text-[#7A7687] mr-20 mb-5">
          Наши менеджеры всегда готовы помочь. Напишите нам сообщение
        </p>
        <div className="flex mb-5 justify-between">
          <input
            type="text"
            className="border-b mb-1 bg-transparent outline-none"
            placeholder="Ваше имя*"
          />
          <input
            type="text"
            className="border-b mb-1 bg-transparent outline-none"
            placeholder="Ваш телефон*"
          />
        </div>
        <textarea
          className="w-full border-b h-40 bg-transparent outline-none resize-none"
          placeholder="Ваше сообщени*"
        ></textarea>
        <div className="flex gap-3 items-center">
          <button className="bg-[#088269] px-5 py-2 text-white font-medium rounded-3xl ">
            Сохранить
          </button>
          <p className="text-[12px] text-[#7A7687]">
            Нажимая «Отправить», я соглашаюсь c обработкой персональных данных
            на условиях Политики конфиденциальности.
          </p>
        </div>
      </div>
    </div>
  );
};

export default NeedHelp