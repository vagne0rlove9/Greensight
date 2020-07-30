import React, { useState } from 'react';
import { YMaps, Map, Placemark } from "react-yandex-maps";
import './Pickup.css'

function Pickup() {
    let mx = 0.00002138052075270898;
    let zoom = 15;
    const coordinates = [
        [55.981513, 37.162149],
        [55.984904, 37.152149],
    ];
    let mapData = {
        center: [(coordinates[0][0] + coordinates[1][0]) / coordinates.length, (coordinates[0][1] + coordinates[1][1]) / coordinates.length],
        //center: [55.981513, 37.162149],
        zoom: 5,
    };
    console.log(mapData.center[1]);
    let flag = [];
    while (zoom !== 0) {
        coordinates.map(c => {
            if ((document.body.clientWidth - 160) * mx > Math.abs(c[1] - mapData.center[1]))
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
    mapData.zoom = zoom;
    console.log(zoom);
    const handleClickSubmit = (event) => {
        //event.preventDefault()
        return false;
    }
    return (
        <>
            <div className="input-container">
                <form>
                    <div className="div-input-left display-mobile">
                        <input id="point1" type="radio" name="pointOfOrders" value="Пункт выдачи заказов 1" />
                        <label htmlFor="point1" className="label-orders display-label">Пункт выдачи заказов 1</label>
                    </div>
                    <div className="div-input-right display-mobile">
                        <input id="point2" type="radio" name="pointOfOrders" value="Пункт выдачи заказов 2" />
                        <label htmlFor="point2" className="label-orders display-label">Пункт выдачи заказов 2</label>
                    </div>
                </form>
                <div className="div-input">
                    <YMaps>
                        <Map width={"100%"} height={400} defaultState={mapData}>
                            {coordinates.map(coordinate => <Placemark geometry={coordinate} properties={{
                                hintContent: "Пункт выдачи",
                                iconCaption: 'Пункт выдачи',
                            }} options={{
                                iconContentSize: [100, 100],
                            }} />)}
                        </Map>
                    </YMaps>
                </div>
                <div className="div-confirm-button div-align">
                    <button onClick={handleClickSubmit} className="confirm-button width-button">
                        Оформить заказ
                    </button>
                </div>
            </div>
        </>
    );
}

export default Pickup;