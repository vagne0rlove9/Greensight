import React, { useState, useRef } from 'react';
import { YMaps, Map, Placemark } from "react-yandex-maps";

import './Pickup.css'

function Pickup() {
    let mx = 0.00002138052075270898;
    let zoom = 15;
    const coordinates = [
        [55.981513, 37.162149],
        [55.984904, 37.152149]
    ];
    let sumX = 0;
    let sumY = 0;
    for (let i = 0; i < coordinates.length; i++) {
        sumX += coordinates[i][0];
        sumY += coordinates[i][1];
    }
    let mapData = {
        center: [sumX / coordinates.length, sumY / coordinates.length],
        zoom: 5,
    };
    let flag = [];
    while (zoom !== 1) {
        coordinates.map(c => {
            if ((document.body.clientWidth - 160) * mx > Math.abs(c[1] - mapData.center[1]) && (350 * mx > Math.abs(c[0] - mapData.center[0])))
                flag.push(true);
            else flag.push(false);
        });
        if (flag.includes(false)) {
            zoom--;
            mx *= 2;
            flag = [];
        }
        else break;
    }
    const [choice, setChoice] = useState(null);
    const [error, setError] = useState(false);
    const [disabled, setDisabled] = useState(false);
    const buttonRef = useRef(null);
    mapData.zoom = zoom;
    const handleClickSubmit = (event) => {
        if (choice !== null) {
            setDisabled(true);
            setError(false);
            buttonRef.current.style = 'background-color: #EDEEEF; color: #999999;';
            setTimeout(() => alert("Заказ оформлен!"), 1000);
        }
        else {
            setError(true);
        }
    }
    const handleChangePoint1 = (event) => {
        setChoice(event.target.value);
    }
    const handleChangePoint2 = (event) => {
        setChoice(event.target.value);
    }
    const [isChecked, setCheck] = useState(false);
    const handleClickRadio = (event) => {
        setCheck(!isChecked);
    }
    return (
        <>
            <div className="input-container">
                <form className="form-radio">
                    <div className="div-input-left-radio display-mobile">
                        <input onChange={handleChangePoint1} id="point1" type="radio" name="pointOfOrders" value="Пункт выдачи заказов 1" />
                        <label htmlFor="point1" className="label-orders display-label">Пункт выдачи заказов 1</label>
                    </div>
                    <div className="div-input-right-radio display-mobile">
                        <input onChange={handleChangePoint2} id="point2" type="radio" name="pointOfOrders" value="Пункт выдачи заказов 2" />
                        <label htmlFor="point2" className="label-orders display-label">Пункт выдачи заказов 2</label>
                    </div>
                    {error ? <label className="label-error">Выберите пункт выдачи заказов</label> : null}
                </form>
                <div className="div-input-last">
                    <YMaps>
                        <Map width={"100%"} height={400} defaultState={mapData}>
                            {coordinates.map(coordinate => <Placemark geometry={coordinate} properties={{
                                hintContent: "Пункт выдачи",
                                iconCaption: 'Пункт выдачи',
                            }} options={{
                                iconLayout: 'default#image',
                                iconImageHref: 'icon/geo.png',
                                iconImageSize: [33, 39],
                                iconImageOffset: [-17, -39]
                            }}
                            />)}
                        </Map>
                    </YMaps>
                </div>
                <div className="div-confirm-button div-align">
                    <button
                        onClick={handleClickSubmit}
                        className="confirm-button width-button"
                        ref={buttonRef}
                        disabled={disabled}
                    >
                        Оформить заказ
                    </button>
                </div>
            </div>
        </>
    );
}

export default Pickup;