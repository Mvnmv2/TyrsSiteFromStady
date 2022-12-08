import {useForm} from "react-hook-form";
import React from "react";
import style from "./form.module.css"
import axios from "axios";

export default function Form() {

    const {register, handleSubmit, formState: {errors}} = useForm();
    const onSubmit = (data) => {
        axios.post("https://637f91ce2f8f56e28e904f0a.mockapi.io/form", data);
        alert("Заявка отправлена")
    }

    return (
        <div className={style.form}>
            <form id="form" onSubmit={handleSubmit(onSubmit)}>
                <h1>Заполните заявку на обратный звонок</h1>
                <div>
                    <div className="input-group md-3">
                        <input {...register("lastName", {
                            required: true,
                            maxLength: 50,
                            pattern: /^[А-Яа-я]+$/i
                        })}
                               type="text"
                               className="form-control"
                               placeholder="Фамилия"
                        />
                    </div>
                    {errors?.lastName?.type === "required" && (
                        <p>Поле Фамилия обязательно для заполнения</p>
                    )}
                    {errors?.lastName?.type === "maxLength" && (
                        <p>Фамилия не может превышать 50 символов</p>
                    )}
                    {errors?.lastName?.type === "pattern" && (
                        <p>Поле заполнено не корректно</p>
                    )}
                    <br/>
                    <div className="input-group md-3">
                        <input {...register("firstName", {
                            required: true,
                            maxLength: 50,
                            pattern: /^[А-Яа-я]+$/i
                        })}
                               type="text"
                               className="form-control"
                               placeholder="Имя"
                        />
                    </div>
                    {errors?.firstName?.type === "required" && (
                        <p>Поле Имя обязательно для заполнения</p>
                    )}
                    {errors?.firstName?.type === "maxLength" && (
                        <p>Имя не может превышать 50 символов</p>
                    )}
                    {errors?.firstName?.type === "pattern" && (
                        <p>Поле заполнено не корректно</p>
                    )}
                    <br/>
                    <div className="input-group md-3">
                        <input {...register("middleName", {
                            required: true,
                            maxLength: 50,
                            pattern: /^[А-Яа-я]+$/i
                        })}
                               type="text"
                               className="form-control"
                               placeholder="Отчество"
                        />
                    </div>

                    {errors?.middleName?.type === "maxLength" && (
                        <p>Отчество не может превышать 50 символов</p>
                    )}
                    {errors?.middleName?.type === "pattern" && (
                        <p>Поле заполнено не корректно</p>
                    )}

                    <br/>
                    <div className="input-group md-3">
                        <input {...register("eMail", {
                            required: true,
                            maxLength: 50,
                            pattern: /^[A-Za-z@._-]+$/i
                        })}
                               type="text"
                               className="form-control"
                               placeholder="Имя"
                        />
                    </div>
                    {errors?.eMail?.type === "required" && (
                        <p>Поле eMail обязательно для заполнения</p>
                    )}
                    {errors?.eMail?.type === "maxLength" && (
                        <p>Имя не может превышать 50 символов</p>
                    )}
                    {errors?.eMail?.type === "pattern" && (
                        <p>Поле заполнено не корректно</p>
                    )}




                </div>
                <br/>
                <div>
                    <input className="btn btn-outline-primary" type="submit"/>
                </div>
            </form>
        </div>
    )
}