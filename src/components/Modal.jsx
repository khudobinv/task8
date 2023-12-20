import React, { useEffect, useState } from "react";
import { RiCloseCircleLine } from "react-icons/ri";
import Input from "./UI/Input";
import Textarea from "./UI/Textarea";
import Checkbox from "./UI/Checkbox";

const Modal = ({ closeModalWindow }) => {
  const [fullName, setFullName] = useState(
    localStorage.getItem("fullName") || ""
  );
  const [email, setEmail] = useState(localStorage.getItem("email") || "");
  const [phone, setPhone] = useState(localStorage.getItem("phone") || "");
  const [organization, setOrganization] = useState(
    localStorage.getItem("organization") || ""
  );
  const [message, setMessage] = useState(localStorage.getItem("message") || "");
  const [agreement, setAgreement] = useState(
    localStorage.getItem("agreement") === "true"
  );
  const [systemMessage, setSystemMessage] = useState({
    type: "",
    textMessage: "",
  });

  const resetForm = () => {
    setFullName("");
    setEmail("");
    setPhone("");
    setOrganization("");
    setMessage("");
    setAgreement(false);
  };

  const sendForm = (e) => {
    e.preventDefault();
    e.stopPropagation();

    fetch("https://formcarry.com/s/VeeOCynEYS", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        fullName,
        email,
        phone,
        organization,
        message,
        agreement,
      }),
    })
      .then((response) => response.json())
      .then((response) => {
        if (response.code === 200) {
          alert("We received your submission, thank you!");
          localStorage.setItem("fullName", fullName);
          localStorage.setItem("email", email);
          localStorage.setItem("phone", phone);
          localStorage.setItem("organization", organization);
          localStorage.setItem("message", message);
          localStorage.setItem("agreement", agreement.toString());
          resetForm();
          setSystemMessage({
            type: "success",
            textMessage: "Данные успешно отправлены!",
          });
        }
      })
      .catch((error) => {
        console.log(error);
        setSystemMessage({
          type: "error",
          textMessage: `При отправке данных произошла ошибка!\nТекст ошибки: ${error}`,
        });
      });
  };

  return (
    <div className="absolute top-0 bottom-0 left-0 right-0 flex items-center justify-center">
      <div className="absolute top-0 bottom-0 left-0 right-0 h-screen w-screen bg-white opacity-5 -z-100" />
      <div className="bg-slate-800 p-5 rounded-xl w-1/4 z-50">
        <div className="flex flex-row w-full justify-between">
          <h1 className="text-2xl text-white font-semibold">Заполните форму</h1>
          <button
            className="flex items-center justify-center px-2 py-1 rounded-xl text-white  hover:bg-slate-700 hover:text-red-500 transition ease-in-out delay-150 duration-100"
            onClick={closeModalWindow}
          >
            <RiCloseCircleLine className="text-xl" />
          </button>
        </div>
        {systemMessage && systemMessage.type === "success" && (
          <div className="px-6 py-3 rounded-xl bg-green-900 text-white my-2">
            <div className="flex flex-row gap-3">
              <img src="./agree.svg" alt="" />
              <h1>{systemMessage.textMessage}</h1>
            </div>
          </div>
        )}
        {systemMessage && systemMessage.type === "error" && (
          <div className="px-6 py-3 rounded-xl bg-red-900 text-white my-2">
            <div className="flex flex-row gap-3">
              <img src="./error.svg" alt="" />
              <h1>{systemMessage.textMessage}</h1>
            </div>
          </div>
        )}

        <form
          className="flex flex-col mt-3 gap-2"
          onSubmit={(e) => sendForm(e)}
        >
          <Input
            label="Фамилия, имя и отчество"
            placeholder="Введите фамилию, имя и отчество"
            type="text"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
          <Input
            label="Адрес электронной почты"
            placeholder="Введите адрес электронной почты"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            label="Номер телефона"
            placeholder="Введите номер телефона"
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <Input
            label="Название организации"
            placeholder="Введите название организации"
            type="text"
            value={organization}
            onChange={(e) => setOrganization(e.target.value)}
          />
          <Textarea
            label="Сообщение"
            placeholder="Введите сообщение"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <Checkbox
            label="С политикой обработки персональных данных согласен(-на)"
            checked={agreement}
            onChange={(e) => setAgreement(e.target.checked)}
          />
          <button className="bg-violet-600 text-white font-semibold px-5 py-3 rounded-xl mt-1 transition ease-in-out delay-150 duration-100 hover:bg-violet-500 hover:drop-shadow-violet">
            Отправить
          </button>
        </form>
      </div>
    </div>
  );
};

export default Modal;
