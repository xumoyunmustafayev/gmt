import React, { useState } from "react";
import { AiTwotoneEdit } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";

const ProfileEdit = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);
  const phone = useSelector((state) => state.user.phone);
  const image = useSelector((state) => state.user.image);

  const [editable, setEditable] = useState(false);
  const [formData, setFormData] = useState({
    company: user?.company || "",
    inn: user?.inn || "",
    address: user?.address || "",
    position: user?.position || "",
    website: user?.website || "",
    email: user?.email || "",
    phone: phone || "",
    image: image || "",
  });

  const handleEdit = () => {
    setEditable(!editable);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSave = () => {
    dispatch(register(formData));
    dispatch(updatePhone(formData.phone));
    dispatch(updateImage(formData.image));
    setEditable(false);
  };

  return (
    <div className="container mx-auto p-4 ">
      <div className=" mt-36 flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">Данные о плательщике</h2>
        <button
          className="bg-[#088269] text-white px-4 py-2 rounded-3xl"
          onClick={handleEdit}
        >
          {editable ? "Сохранить" : "Добавить плательщика"}
        </button>
      </div>
      <div className="border rounded-lg p-4 bg-white shadow">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-semibold">
            {editable ? (
              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleChange}
                className="border px-2 py-1 rounded bg-transparent"
              />
            ) : (
              formData.company
            )}
          </h3>
          
        </div>
        <div className="flex justify-between">
          <p className="text-gray-700 mb-2">
            ИНН:
            {editable ? (
              <input
                type="text"
                name="inn"
                value={formData.inn}
                onChange={handleChange}
                className="border px-2 py-1 rounded bg-transparent"
              />
            ) : (
              formData.inn
            )}
          </p>
          <AiTwotoneEdit
            className="bg-transparent text-[#088269] w-6 h-6 mr-4"
            onClick={handleEdit}
          />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="text-gray-700 mb-2">
              Адрес доставки:{" "}
              {editable ? (
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  className="border px-2 py-1 rounded w-full bg-transparent"
                />
              ) : (
                formData.address
              )}
            </p>
            <p className="text-gray-700 mb-2">
              Сайт:{" "}
              {editable ? (
                <input
                  type="text"
                  name="website"
                  value={formData.website}
                  onChange={handleChange}
                  className="border px-2 py-1 rounded w-full bg-transparent"
                />
              ) : (
                formData.website
              )}
            </p>
            <p className="text-gray-700 mb-2">
              Email:{" "}
              {editable ? (
                <input
                  type="text"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="border px-2 py-1 rounded w-full bg-transparent outline-none"
                />
              ) : (
                formData.email
              )}
            </p>
          </div>
          <div>
            <p className="text-gray-700 mb-2">
              Ваша должность:{" "}
              {editable ? (
                <input
                  type="text"
                  name="position"
                  value={formData.position}
                  onChange={handleChange}
                  className="border px-2 py-1 rounded w-full bg-transparent"
                />
              ) : (
                formData.position
              )}
            </p>
            <p className="text-gray-700 mb-2">
              Тип организации:{" "}
              {editable ? (
                <input
                  type="text"
                  name="orgType"
                  value={formData.orgType}
                  onChange={handleChange}
                  className="border px-2 py-1 rounded w-full bg-transparent"
                />
              ) : (
                formData.orgType
              )}
            </p>
            <p className="text-gray-700 mb-2">
              Телефон:{" "}
              {editable ? (
                <input
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="border px-2 py-1 rounded w-full bg-transparent"
                />
              ) : (
                formData.phone
              )}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileEdit;
