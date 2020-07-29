import React, { useState } from 'react';
import { YMaps, Map, Placemark } from "react-yandex-maps";
import './Home.css'

export function Home() {
    const [deliveryClass, setDeliveryClass] = useState("nav-buttons");
    const [pickupClass, setPickupClass] = useState("nav-buttons-active");
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
    const coordinates = [
        [55.981513, 37.162149],
        [55.981513, 40.697974],
        //[55.984904, 37.151667],
    ];

    if (document.body.clientHeight > window.screen.availHeight)
        console.log("asd")
    //if (abs(coordinates[0][1] - coordinates[1][1]) / (document.body.clientWidth-148))

    const mapData = {
        //center: [(coordinates[0][0] + coordinates[1][0]) / coordinates.length, (coordinates[0][1] + coordinates[1][1]) / coordinates.length],
        center: [55.981513, 37.162149],
        zoom: 7,
    };
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
                    </div> : <div className="input-container">
                        <form>
                            <div className="div-input-left">
                                <input id="point1" type="radio" name="pointOfOrders" value="Пункт выдачи заказов 1" />
                                <label htmlFor="point1" className="label-orders">Пункт выдачи заказов 1</label>
                            </div>
                            <div className="div-input-right">
                                <input id="point2" type="radio" name="pointOfOrders" value="Пункт выдачи заказов 2" />
                                <label htmlFor="point2" className="label-orders">Пункт выдачи заказов 2</label>
                            </div>
                        </form>
                        <div className="div-input">
                            <YMaps>
                                <Map width={"100%"} height={400} defaultState={mapData}>
                                    {coordinates.map(coordinate => <Placemark geometry={coordinate} properties={{
                                        hintContent: "Пункт выдачи",
                                        iconCaption: 'Пункт выдачи',
                                    }} options={{
                                        iconContentSize: [1000, 1000],
                                    }} />)}
                                </Map>
                            </YMaps>
                        </div>
                        <div className="div-confirm-button">
                            <button className="confirm-button">
                                Оформить заказ
                                </button>
                        </div>
                    </div>
                }
            </div>
        </>
    );
}
