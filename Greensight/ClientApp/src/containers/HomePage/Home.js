import React, { useState } from 'react';
import './Home.css'

export function Home() {
    const [deliveryClass, setDeliveryClass] = useState("nav-buttons-active");
    const [pickupClass, setPickupClass] = useState("nav-buttons");
    const handleClickDelivery = () => {
        if (deliveryClass === "nav-buttons") {
            setDeliveryClass("nav-buttons-active");
            setPickupClass("nav-buttons");
        }
    }
    const handleClickPickup = () => {
        if (pickupClass === "nav-buttons") {
            setPickupClass("nav-buttons-active");
            setDeliveryClass("nav-buttons");
        }
    }
    return (
        <>
            <div className="div-delivery">
                <div>
                    Выберите способ доставки
                </div>
                <div onClick={handleClickDelivery} className={deliveryClass}>
                    Доставка
                </div>
                <div onClick={handleClickPickup} className={pickupClass}>
                    Самовывоз
                </div>
                {deliveryClass === "nav-buttons-active" ? 
                <div className="input-container">
                    <form>
                        <div className="div-input-left">
                            <label className="input-label">ФИО</label>
                            <input className="input" placeholder="Только кириллица" />
                        </div>
                        <div className="div-input-right">
                            <label className="input-label">Телефон</label>
                            <input className="input" placeholder="+7(___) ___-__-__" />
                        </div>
                        <div className="div-input">
                            <label className="input-label">Адрес доставки</label>
                            <input className="input" placeholder="Город, улица, дом" />
                        </div>
                        <div className="div-input">
                            <label className="input-label">Коментарий</label>
                            <textarea className="input" rows={4} />
                        </div>
                        <div className="div-confirm-button">
                            <button className="confirm-button">
                                Оформить заказ
                            </button>
                        </div>
                    </form>
                </div> : null }
            </div>
        </>
    );
}
