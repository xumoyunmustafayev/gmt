import React, { useState } from "react";
import { AiFillInstagram, AiTwotoneEdit } from "react-icons/ai";
import { DiApple } from "react-icons/di";
import { FaFacebookF, FaTwitter } from "react-icons/fa";
import { MdNavigateNext } from "react-icons/md";
import { SlSocialVkontakte } from "react-icons/sl";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  deleteImage,
  updatePhone,
  updateEmail,
  updateLinks,
} from "../../store/user";
import UploadImg from "../Modal/UploadImg";
import { IoClose } from "react-icons/io5";

const ProfileMain = () => {
  const { user, image, phone, links } = useSelector((state) => state.user);
  const [show, setShow] = useState(false);
  const [showUpload, setShowUpload] = useState(false);
  const [isEditingPhone, setIsEditingPhone] = useState(false);
  const [isEditingEmail, setIsEditingEmail] = useState(false);
  const [phoneInput, setPhoneInput] = useState(phone || "");
  const [emailInput, setEmailInput] = useState(user?.email || "");
  const [phoneError, setPhoneError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [nameInput, setNameInput] = useState(user?.name || "");
  const [surnameInput, setSurnameInput] = useState(user?.surname || "");
  const [nameError, setNameError] = useState("");
  const [surnameError, setSurnameError] = useState("");
  const [linkInputs, setLinkInputs] = useState(links);
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteImage());
    setShow(false);
  };

  const [showLink, setShowLink] = useState(false);

  const validatePhone = (phone) => {
    const phoneRegex = /^\+998\s\d{2}\s\d{3}\s\d{2}\s\d{2}$/;
    return phoneRegex.test(phone);
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSavePhone = () => {
    if (validatePhone(phoneInput)) {
      dispatch(updatePhone(phoneInput));
      setIsEditingPhone(false);
      setPhoneError("");
    } else {
      setPhoneError("Invalid phone number format. Example: +998 00 000 00 00");
    }
  };

  const handleSaveEmail = () => {
    if (validateEmail(emailInput)) {
      dispatch(updateEmail(emailInput));
      setIsEditingEmail(false);
      setEmailError("");
    } else {
      setEmailError("Invalid email format.");
    }
  };

  const handleSaveLinks = () => {
    if (!nameInput.trim()) {
      setNameError("Имя обязательно.");
      return;
    } else {
      setNameError("");
    }

    if (!surnameInput.trim()) {
      setSurnameError("Фамилия обязательна.");
      return;
    } else {
      setSurnameError("");
    }

    dispatch(updateLinks(linkInputs));

    setShowLink(false);
  };

  const handleLinkChange = (e) => {
    const { name, value } = e.target;
    setLinkInputs((prevLinks) => ({ ...prevLinks, [name]: value }));
  };

  return (
    <div className="container mx-auto p-4">
      <div className="flex items-center mt-3 gap-3 cursor-pointer">
        <Link to="/" className="text-[#7A7687] hover:underline">
          Главная
        </Link>
        <MdNavigateNext />
        <p>Личный кабинет</p>
      </div>
      <div className="mt-10 md:mt-32 flex flex-col md:flex-row gap-8 md:gap-32 items-center md:items-start">
        <div className="w-[210px] h-[210px] bg-[#E1EFE6] relative rounded-full flex flex-col justify-center items-center">
          {image ? (
            <img
              src={image}
              alt="Profile"
              className="w-[210px] h-[210px] rounded-full object-cover"
            />
          ) : (
            <p className="text-[100px]">{user.email.charAt(0)}</p>
          )}
          <div
            className="p-1 bg-[#07745E] rounded-full cursor-pointer absolute bottom-3"
            onClick={() => setShow(!show)}
          >
            <AiTwotoneEdit className="text-white bg-transparent w-6 h-6" />
          </div>
          {show && (
            <div className="bg-white border absolute bottom-[-65px] p-3 rounded-xl">
              <p
                onClick={() => {
                  setShowUpload(true);
                  setShow(false);
                }}
                className="cursor-pointer"
              >
                Редактировать
              </p>
              <p className="text-red-600 cursor-pointer" onClick={handleDelete}>
                Удалить фото
              </p>
            </div>
          )}
        </div>
        <div className="mt-10">
          <h3 className="text-[30px]">{`${user.name} ${user.surname}`}</h3>
          <div className="flex gap-4 mt-2">
            <a
              href={links.vkontakte || "#"}
              target="_blank"
              rel="noopener noreferrer"
            >
              <SlSocialVkontakte className="w-6 h-6" />
            </a>
            <a
              href={links.facebook || "#"}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookF className="w-6 h-6" />
            </a>
            <a
              href={links.instagram || "#"}
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiFillInstagram className="w-6 h-6" />
            </a>
            <a
              href={links.twitter || "#"}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter className="w-6 h-6" />
            </a>
            <a
              href={links.apple || "#"}
              target="_blank"
              rel="noopener noreferrer"
            >
              <DiApple className="w-6 h-6" />
            </a>
          </div>
          <button
            className="px-5 py-3 border rounded-3xl mt-9"
            onClick={() => setShowLink(true)}
          >
            Изменить персональную информацию
          </button>
          <div className="mt-12 flex flex-col md:flex-row gap-4 md:gap-48">
            <div>
              {isEditingPhone ? (
                <div className="flex flex-col gap-2">
                  <input
                    type="text"
                    value={phoneInput}
                    onChange={(e) => setPhoneInput(e.target.value)}
                    className="border p-1"
                    placeholder="+998 00 000 00 00"
                  />
                  <button
                    onClick={handleSavePhone}
                    className="text-[#07745E] self-start"
                  >
                    Save
                  </button>
                  {phoneError && (
                    <p className="text-red-600 text-sm">{phoneError}</p>
                  )}
                </div>
              ) : (
                <div className="flex gap-2 items-center">
                  <span>{phone || "+998 00 000 00 00"}</span>
                  <AiTwotoneEdit
                    className="cursor-pointer text-[#07745E] w-6 h-6"
                    onClick={() => setIsEditingPhone(true)}
                  />
                </div>
              )}
              <p className="text-[#7A7687]">Телефон</p>
            </div>
            <div>
              {isEditingEmail ? (
                <div className="flex flex-col gap-2">
                  <input
                    type="text"
                    value={emailInput}
                    onChange={(e) => setEmailInput(e.target.value)}
                    className="border p-1"
                    placeholder="example@mail.com"
                  />
                  <button
                    onClick={handleSaveEmail}
                    className="text-[#07745E] self-start"
                  >
                    Save
                  </button>
                  {emailError && (
                    <p className="text-red-600 text-sm">{emailError}</p>
                  )}
                </div>
              ) : (
                <div className="flex gap-2 items-center">
                  <span>{user?.email}</span>
                  <AiTwotoneEdit
                    className="cursor-pointer text-[#07745E] w-6 h-6"
                    onClick={() => setIsEditingEmail(true)}
                  />
                </div>
              )}
              <p className="text-[#7A7687]">Email</p>
            </div>
          </div>
        </div>
      </div>
      {showUpload && <UploadImg setShowUpload={setShowUpload} />}
      {showLink && (
        <div className=" fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white rounded-lg py-5 px-6 w-[500px]">
            <div className="flex justify-between mb-10 items-center">
              <p className="text-[18px] font-medium">Персональные данные</p>
              <IoClose
                className="bg-transparent w-5 h-5 cursor-pointer"
                onClick={() => setShowLink(false)}
              />
            </div>
            <input
              type="text"
              className="w-full border-b bg-transparent mb-7 outline-none"
              placeholder="Имя*"
              value={nameInput}
              onChange={(e) => setNameInput(e.target.value)}
            />
            {nameError && <p className="text-red-600 text-sm">{nameError}</p>}
            <input
              type="text"
              className="w-full border-b bg-transparent mb-3 outline-none"
              placeholder="Фамилия*"
              value={surnameInput}
              onChange={(e) => setSurnameInput(e.target.value)}
            />
            {surnameError && (
              <p className="text-red-600 text-sm">{surnameError}</p>
            )}
            <p className="text-[18px] my-10 font-medium">Социальные сети</p>
            <input
              type="text"
              className="w-full border-b bg-transparent mb-5 outline-none"
              placeholder="Вконтакте*"
              name="vkontakte"
              value={linkInputs.vkontakte || ""}
              onChange={handleLinkChange}
            />
            <input
              type="text"
              className="w-full border-b bg-transparent mb-5 outline-none"
              placeholder="Instagram*"
              name="instagram"
              value={linkInputs.instagram || ""}
              onChange={handleLinkChange}
            />
            <input
              type="text"
              className="w-full border-b bg-transparent mb-5 outline-none"
              placeholder="Facebook*"
              name="facebook"
              value={linkInputs.facebook || ""}
              onChange={handleLinkChange}
            />
            <input
              type="text"
              className="w-full border-b bg-transparent mb-5 outline-none"
              placeholder="Одноклассники*"
              name="odnoklassniki"
              value={linkInputs.odnoklassniki || ""}
              onChange={handleLinkChange}
            />
            <input
              type="text"
              className="w-full border-b bg-transparent mb-10 outline-none"
              placeholder="Твиттер*"
              name="twitter"
              value={linkInputs.twitter || ""}
              onChange={handleLinkChange}
            />
            <div className="flex gap-3 items-center ">
              <button
                className="px-7 py-2 text-white bg-[#088269] rounded-3xl"
                onClick={handleSaveLinks}
              >
                Добавить
              </button>
              <p className="text-[12px]">
                Нажимая «Добавить», я соглашаюсь c обработкой персональных
                данных на условиях Политики конфиденциальности.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfileMain;
