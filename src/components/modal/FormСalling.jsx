import React, { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import { yupResolver } from "@hookform/resolvers/yup";

import { dataKindDoctors } from "../../data/dataListKindDoctors";
import { ModalContext } from "../../context/ModelContext";
import { validationSchema } from "./formShema";

export default function FormCallingDoctor() {
  const [message, setMessage] = useState("");
  const { close } = useContext(ModalContext);

  const {
    register,
    handleSubmit,
    reset,
    setFocus,
    formState: { errors, isSubmitSuccessful },
  } = useForm({ resolver: yupResolver(validationSchema) });

  const onSubmit = async (data) => {
    console.log(errors, isSubmitSuccessful);
    await emailjs
      .send("service_3v0hnkn", "template_ooahi3b", data, "PhUOVu-NXcTpMJR7t")
      .then((response) => {
        if (response.status === 200) {
          setMessage("Сообщение отправлено!");
        }
        reset();
        setTimeout(() => {
          close();
        }, 2000);
      })
      .catch((err) => {
        console.log("Упс! Ошибочка...", err);
      });
  };

  useEffect(() => {
    setFocus("user_name");
  }, [setFocus]);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <div className="form-group mb-3">
          <input
            id="name"
            placeholder="Имя*"
            name="user_name"
            type="text"
            {...register("user_name")}
            className={`form-control ${errors.user_name ? "is-invalid" : ""}`}
          />
          <div className="invalid-feedback">{errors.user_name?.message}</div>
        </div>
        <div className="form-group mb-3">
          <input
            id="phone"
            placeholder="Телефон*"
            name="user_phone"
            type="text"
            {...register("user_phone")}
            className={`form-control ${errors.user_phone ? "is-invalid" : ""}`}
          />
          <div className="invalid-feedback">{errors.user_phone?.message}</div>
        </div>
        <div className="form-group mb-3">
          <input
            name="address"
            type="text"
            placeholder="Адрес"
            {...register("address")}
            className={`form-control ${errors.address ? "is-invalid" : ""}`}
          />
          <div className="invalid-feedback">{errors.address?.message}</div>
        </div>
        <div className="form-group mb-3">
          <select
            name="address"
            type="text"
            {...register("doctor")}
            className="form-select"
          >
            <option>Выберите врача...</option>
            {dataKindDoctors &&
              dataKindDoctors.map((item) => (
                <option key={item.id} value={item.name}>
                  {item.name}
                </option>
              ))}
          </select>
        </div>
        <div className="form-group mb-3">
          <textarea
            s="textarea"
            placeholder="Сообщение"
            style={{ height: "100px" }}
            id="message"
            {...register("message")}
            className="form-control "
          />
        </div>
        <div className="form-group form-check mb-3">
          <input
            name="accept"
            type="checkbox"
            defaultChecked={true}
            {...register("accept")}
            className={`form-check-input ${errors.accept ? "is-invalid" : ""}`}
          />
          <label htmlFor="accept" className="form-check-label">
            Я согласен(на) на обработку персональных данных.
          </label>
          <div className="invalid-feedback">{errors.accept?.message}</div>
        </div>
        <button className="btn btn-primary mt-3" type="submit">
          Отправить
        </button>
      </div>

      {isSubmitSuccessful && (
        <div className="form-group mt-2">
          <div
            className={
              isSubmitSuccessful ? "alert alert-success" : "alert alert-danger"
            }
            role="alert"
          >
            {message}
          </div>
        </div>
      )}
    </form>
  );
}
