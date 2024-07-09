import { useState } from "react";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";
import SliderItem from "./Slider";

const Hero = () => {
  const [isShow, setIsShow] = useState(0);
  const [show, setShow] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    organization: "",
    message: "",
  });

  const handlePrev = () => {
    if (isShow > 0) {
      setIsShow(isShow - 1);
    }
  };

  const handleNext = () => {
    if (isShow < 3) {
      setIsShow(isShow + 1);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    const { name, phone, email, organization, message } = formData;
    if (!name || !phone || !email || !organization || !message) {
      alert("Все поля обязательны для заполнения");
      return;
    }
    // Process the form data here
    setShow(false);
  };

  return (
    <div className="container mt-[30px] mb-[40px] md:mb-[84px] lg:mb-[120px] relative">
      <div className="overflow-hidden w-full z-0 relative bg-[#E5E4ED] rounded-[10px] max-h-[780px]">
        <div
          style={{ transform: `translateX(-${isShow * 100}% )` }}
          className="flex w-full transition-transform ease-out duration-500 z-0 relative"
        >
          <SliderItem setShow={setShow} />
          <SliderItem setShow={setShow} />
          <SliderItem setShow={setShow} />
          <SliderItem setShow={setShow} />
          <SliderItem setShow={setShow} />
        </div>

        <div className="hidden md:flex absolute z-10 bottom-[33px] right-10 gap-4 items-center">
          <button
            onClick={handlePrev}
            className="bg-[#F8F7F3] hover:border-[#07745E] border-[#088269] duration-200 focus:bg-[#e1efe6] focus:border-[#07745E] transition-all rounded-full border p-3"
          >
            <FaArrowLeft className="w-[17px] h-[17px]" />
          </button>
          <button
            onClick={handleNext}
            className="bg-[#F8F7F3] hover:border-[#07745E] border-[#088269] duration-200 focus:bg-[#e1efe6] focus:border-[#07745E] transition-all rounded-full border p-3"
          >
            <FaArrowRight className="w-[17px] h-[17px] bg-transparent" />
          </button>
        </div>
      </div>
      <div className="flex gap-[10px] absolute bottom-[-15px] left-1/2 -translate-x-1/2">
        {Array.from({ length: 4 }).map((_, index) => (
          <span
            key={index}
            onClick={() => setIsShow(index)}
            className={`${
              isShow === index
                ? "w-[36px] bg-[#7A7687]"
                : "w-[6px] bg-[#b9b6bc]"
            } cursor-pointer duration-500 h-[6px] block rounded`}
          ></span>
        ))}
      </div>
      {show && (
        <div className="bg-black right-0 fixed top-0 bg-opacity-25 h-[100vh] w-[100vw] z-[100] flex justify-center items-center">
          <div className="bg-white rounded-xl w-[500px] px-6 py-5">
            <div className="flex mb-10 justify-between items-center">
              <p className="text-[18px] font-bold">Запросить цену</p>
              <IoMdClose
                className="w-6 h-6 cursor-pointer bg-transparent"
                onClick={() => setShow(false)}
              />
            </div>
            <div className="grid grid-cols-2 gap-3 mb-6">
              <input
                type="text"
                className="border-b pb-2 bg-white outline-none"
                placeholder="Ваше имя*"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
              <input
                type="text"
                className="border-b pb-2 bg-white outline-none"
                placeholder="Ваш телефон*"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>
            <div className="grid grid-cols-1 gap-3 mb-6">
              <input
                type="text"
                className="border-b pb-2 bg-white outline-none"
                placeholder="Ваш email*"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className="grid grid-cols-1 gap-3 mb-6">
              <input
                type="text"
                className="border-b pb-2 bg-white outline-none"
                placeholder="Название вашей организации*"
                name="organization"
                value={formData.organization}
                onChange={handleChange}
              />
            </div>
            <div className="grid grid-cols-1 gap-3 mb-6">
              <textarea
                className="border-b pb-2 bg-white outline-none"
                placeholder="Сообщение*"
                name="message"
                value={formData.message}
                onChange={handleChange}
              />
            </div>
            <div className="flex gap-3">
              <button
                className="text-white rounded-3xl px-8 py-2 font-medium bg-[#088269]"
                onClick={handleSubmit}
              >
                Отправить
              </button>
              <p className="text-[12px]">
                Нажимая «Отправить», я соглашаюсь c обработкой персональных
                данных на условиях
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Hero;
