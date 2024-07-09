import React, { useState, useRef } from "react";
import { FaCamera } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import Cropper from "react-cropper";
import "cropperjs/dist/cropper.css";
import { useDispatch } from "react-redux";
import { updateImage } from "../../store/user";

const UploadImg = ({ setShowUpload }) => {
  const [src, setSrc] = useState(null);
  const cropperRef = useRef(null);
  const dispatch = useDispatch();

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setSrc(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const getCropData = () => {
    if (cropperRef.current && cropperRef.current.cropper) {
      return cropperRef.current.cropper.getCroppedCanvas().toDataURL();
    }
    return null;
  };

  const handleSave = () => {
    const croppedData = getCropData();
    if (croppedData) {
      dispatch(updateImage(croppedData));
      setShowUpload(false);
    }
  };

  return (
    <div className="fixed flex justify-center items-center h-[100vh] w-[100vw] top-0 left-0 bg-black bg-opacity-25 z-50">
      <div className="bg-white rounded-xl w-full max-w-[500px] px-6 py-5">
        <div className="flex mb-10 justify-between items-center">
          <p>Выбор изображения профиля</p>
          <IoClose
            className="w-5 h-5 cursor-pointer bg-transparent"
            onClick={() => setShowUpload(false)}
            aria-label="Close"
          />
        </div>
        <div className="border rounded-xl flex flex-col items-center justify-center">
          {src ? (
            <Cropper
              src={src}
              style={{ height: 400, width: "100%" }}
              initialAspectRatio={1}
              guides={false}
              ref={cropperRef}
            />
          ) : (
            <>
              <input
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                className="hidden"
                id="input"
              />
              <p className="text-[#7A7687] text-[14px] mt-20">
                Перетащите фотографию сюда, или
              </p>
              <p
                className="text-[#088269] mb-20 font-medium flex gap-2 items-center text-[14px] cursor-pointer"
                onChange={handleFileChange}
                onClick={() => document.getElementById("input").click()}
              >
                <FaCamera className="text-[#088269]" />
                Выберите файл
              </p>
            </>
          )}
        </div>
        {src && (
          <button
            className="bg-[#088269] px-2 py-3 text-white font-medium rounded-3xl block mx-auto mt-10"
            onClick={handleSave}
          >
            Сохранить
          </button>
        )}
        <button
          className="bg-[#088269] px-5 py-3 text-white font-medium rounded-3xl block mx-auto mt-10"
          onClick={() => setShowUpload(false)}
        >
          Отменить
        </button>
      </div>
    </div>
  );
};

export default UploadImg;
