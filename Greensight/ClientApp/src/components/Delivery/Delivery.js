import React, { useState, useRef } from 'react';
import MaskedInput from "react-text-mask";
import './Delivery.css'

function Delivery() {
    const [name, setName] = useState(null);
    const [phone, setPhone] = useState(null);
    const [address, setAddress] = useState(null);
    const [comment, setComment] = useState(null);
    const [errorName, setErrorName] = useState(false);
    const [errorPhone, setErrorPhone] = useState(false);
    const [errorAddress, setErrorAddress] = useState(false);
    const [errorComment, setErrorComment] = useState(false);
    let isValid = [];
    const [disabled, setDisabled] = useState(false);
    const buttonRef = useRef(null);
    const [nameClass, setNameClass] = useState("input");
    const [phoneClass, setPhoneClass] = useState("input");
    const [addressClass, setAddressClass] = useState("input");
    const handleClickSubmit = (event) => {
        isValid = [];
        if ((name !== null) && (name.match(/^[а-яА-Я-]+[а-яА-Я\s-]+[а-яА-Я-]$/) !== null)) {
            isValid.push(true);
            setErrorName(false);
            setNameClass("input");
        }
        else {
            isValid.push(false);
            setErrorName(true);
            setNameClass("input-error");
        }
        if ((phone !== null) && (phone.match(/\+7+\([0-9]{3}\)+\s+[0-9]{3}-[0-9]{2}-[0-9]{2}$/) !== null)) {
            isValid.push(true);
            setErrorPhone(false);
            setPhoneClass("input");
        }
        else {
            isValid.push(false);
            setErrorPhone(true);
            setPhoneClass("input-error");
        }
        if ((address !== null) && (address !== "")) {
            isValid.push(true);
            setErrorAddress(false);
            setAddressClass("input");
        }
        else {
            isValid.push(false);
            setErrorAddress(true);
            setAddressClass("input-error");
        }
        if ((comment !== null) && (comment !== "")) {
            isValid.push(true);
            setErrorComment(false);
        }
        else {
            isValid.push(false);
            setErrorComment(true);
        }
        if (!isValid.includes(false)) {
            setDisabled(true);
            buttonRef.current.style = 'background-color: #EDEEEF; color: #999999;';
            setTimeout(() => alert("Заказ оформлен!"), 1000);
        }
    }
    const handleChangeName = (event) => {
        setName(event.target.value);
    }
    const handleChangePhone = (event) => {
        setPhone(event.target.value);
    }
    const handleChangeAddress = (event) => {
        setAddress(event.target.value);
    }
    const handleChangeComment = (event) => {
        setComment(event.target.value);
    }
    return (
        <>
            <div className="input-container">
                <form>
                    <div className="div-input-left display-mobile">
                        <label className="input-label">ФИО</label>
                        <input onChange={handleChangeName} className={nameClass} placeholder="Только кириллица" />
                        {errorName ? <label className="label-error">ФИО введено неверно, например, "Иванов Иван Иванович"</label> : null}
                    </div>
                    <div className="div-input-right display-mobile">
                        <label className="input-label">Телефон</label>
                        <MaskedInput
                            mask={['+', '7', '(', /[0-9]/, /[0-9]/, /[0-9]/, ')', ' ', /[0-9]/, /[0-9]/, /[0-9]/, '-', /[0-9]/, /[0-9]/, '-', /[0-9]/, /[0-9]/]}
                            className={phoneClass}
                            placeholder="+7(___) ___-__-__"
                            onChange={handleChangePhone}
                        />
                        {errorPhone ? <label className="label-error">Телефон введено неверно, например, "+7(000) 000-00-00"</label> : null}
                    </div>
                    <div className="div-input">
                        <label className="input-label">Адрес доставки</label>
                        <input onChange={handleChangeAddress} className={addressClass} placeholder="Город, улица, дом" />
                        {errorAddress ? <label className="label-error">Заполните поле</label> : null}
                    </div>
                    <div className="div-input">
                        <label className="input-label">Коментарий</label>
                        <textarea onChange={handleChangeComment} className="input" rows={4} />
                        {errorComment ? <label className="label-error">Заполните поле</label> : null}
                    </div>
                    <div className="div-confirm-button div-align">
                        <button
                            onClick={handleClickSubmit}
                            type="button"
                            className="confirm-button width-button"
                            ref={buttonRef}
                            disabled={disabled}
                        >
                            Оформить заказ
                        </button>
                    </div>
                </form>
            </div>
        </>
    );
}

export default Delivery;