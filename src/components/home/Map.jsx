import  { useState } from "react";

const Map = () => {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    question: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({ ...prevForm, [name]: value }));
  };

  const validate = () => {
    const newErrors = {};
    if (!form.name) newErrors.name = "Name is required";
    if (!form.phone) newErrors.phone = "Phone number is required";
    if (!form.email) newErrors.email = "Email is required";
    if (!form.question) newErrors.question = "Question is required";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      console.log("Form submitted successfully", form);
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <div className="mt-32 px-4">
      <div className="container mx-auto flex gap-4 flex-col md:flex-row">
        <div className="md:w-1/2 ">
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
        <div className="md:w-1/2 p-10 bg-white shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">Остались вопросы?</h2>
          <p className="mb-4">
            Задайте их по номеру телефона +7 (495) 000-00-00 или оставьте свои
            координаты и наш менеджер перезвонит вам через 10 минут
          </p>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <input
                type="text"
                name="name"
                placeholder="Ваше имя"
                className="w-full border-b-2 p-2 bg-white outline-none"
                value={form.name}
                onChange={handleChange}
              />
              {errors.name && (
                <p className="text-red-500 text-sm">{errors.name}</p>
              )}
            </div>
            <div className="mb-4">
              <input
                type="number"
                name="phone"
                placeholder="Ваш телефон"
                className="w-full border-b-2 p-2 bg-white outline-none"
                value={form.phone}
                onChange={handleChange}
              />
              {errors.phone && (
                <p className="text-red-500 text-sm">{errors.phone}</p>
              )}
            </div>
            <div className="mb-4">
              <input
                type="email"
                name="email"
                placeholder="Ваш email"
                className="w-full border-b-2 p-2 bg-white outline-none"
                value={form.email}
                onChange={handleChange}
              />
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email}</p>
              )}
            </div>
            <div className="mb-4">
              <textarea
                name="question"
                placeholder="Ваш вопрос"
                className="w-full border-b-2 p-2 bg-white outline-none"
                value={form.question}
                onChange={handleChange}
              />
              {errors.question && (
                <p className="text-red-500 text-sm">{errors.question}</p>
              )}
            </div>
            <div className="flex max-md:flex-col gap-7">
              <button
                type="submit"
                className=" px-7  text-white py-2 mt-4 rounded-3xl bg-[#088269]  hover:bg-[#599b8e]"
              >
                Отправить
              </button>
              <span className="text-xs mt-4 bg-white">
                Нажимая «Отправить», я соглашаюсь с обработкой персональных
                данных и принимаю{" "}
                <a href="#" className="text-blue-500">
                  Политику конфиденциальности
                </a>
                .
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Map;
