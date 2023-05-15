import React, { useState } from "react";
import Styles from "./Styles/form.css";
import axios from "axios";
import { form } from "../Constants";

function Form() {
  const [data, setData] = useState({
    fullName: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setData((prev) => {
      const newData = { ...prev, [name]: value };
      return newData;
    });
  };

  const baseUrl = "https://api-guellas.vercel.app";

  function send() {
    const formData = new FormData();
    Object.keys(data).forEach((key) => formData.append(key, data[key]));
    axios
      .post(baseUrl + "/send", formData, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        alert("Email enviado com sucesso!");
      })
      .catch((response) => {
        alert("Ocorreu um erro, por favor tente novamente");
      });
  }

  const handleClick = (event) => {
    setData({
      fullName: "",
      email: "",
      phone: "",
      message: "",
    });
    event.preventDefault();
    send(data);
  };

  const calculateProgress = () => {
    let value = 0;
    let amountToAdd = 25;

    if (data.fullName) {
      const explodeString = data.fullName.split(" ");
      if (explodeString[1]) {
        value += amountToAdd;
      }
    }
    if (data.phone) {
      let regExPhone =
        /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
      if (regExPhone.test(data.phone)) {
        value += amountToAdd;
      }
    }
    if (data.email) {
      let regExEmail =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if (regExEmail.test(data.email)) {
        value += amountToAdd;
      }
    }
    if (data.message) {
      if (data.message !== " ") {
        value += amountToAdd;
      }
    }

    return value;
  };
  calculateProgress();

  return (
    <div className="container mx-auto">
      <h2 className="text-center font-black text-[32px] text-black my-5">
        {form[0]}
      </h2>

      <div className="bar-container">
        <div className="bar" style={{ width: `${calculateProgress()}%` }}></div>
      </div>

      <form
        className="px-4 py-5 max-w-7xl mx-auto space-y-6"
        onSubmit={handleClick}
      >
        <div className="flex space-x-4">
          <div className="w-1/2">
            <input
              className="border border-gray-400 block py-2 px-4 w-full rounded focus:outline-none focus:border-teal-500"
              type="text"
              name="fullName"
              placeholder="Nome Completo"
              value={data.fullName}
              onChange={handleChange}
            />
          </div>

          <div className="w-1/2">
            <input
              className="border border-gray-400 block py-2 px-4 w-full rounded focus:outline-none focus:border-teal-500"
              type="text"
              name="phone"
              placeholder="Telefone"
              maxLength="11"
              value={data.phone}
              onChange={handleChange}
            />
          </div>
        </div>

        <div>
          <input
            className="border border-gray-400 block py-2 px-4 w-full rounded focus:outline-none focus:border-teal-500"
            type="text"
            name="email"
            placeholder="Email"
            value={data.email}
            onChange={handleChange}
          />
        </div>

        <div>
          <textarea
            className="border border-gray-400 block py-2 px-4 w-full rounded focus:outline-none focus:border-teal-500 h-[200px]"
            type="text"
            name="message"
            placeholder="Mensagem"
            value={data.message}
            onChange={handleChange}
          />
        </div>

        <div>
          <button
            disabled={calculateProgress() !== 100}
            className={
              calculateProgress() !== 100
                ? `w-full bg-[#A9A9A9] font-bold py-auto px-auto rounded-full h-[60px] text-[16px] text-white my-5`
                : `w-full bg-[#00293F] font-bold py-auto px-auto rounded-full h-[60px] text-[16px] text-white my-5 hover:bg-[#013754] ease-linear transition-all duration-150`
            }
          >
            Enviar
          </button>
        </div>
      </form>
    </div>
  );
}

export default Form;
