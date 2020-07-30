import React, { useState } from 'react';
import Delivery from "../../components/Delivery/Delivery"
import Pickup from "../../components/Pickup/Pickup"
import './Home.css'

export function Home() {
    const [deliveryClass, setDeliveryClass] = useState("nav-buttons-active display-nav-buttons");
    const [pickupClass, setPickupClass] = useState("nav-buttons display-nav-buttons");
    const handleClickDelivery = () => {
        if (deliveryClass === "nav-buttons display-nav-buttons") {
            setDeliveryClass("nav-buttons-active display-nav-buttons");
            setPickupClass("nav-buttons display-nav-buttons");
        }
    }
    const handleClickPickup = () => {
        if (pickupClass === "nav-buttons display-nav-buttons") {
            setPickupClass("nav-buttons-active display-nav-buttons");
            setDeliveryClass("nav-buttons display-nav-buttons");
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
                {deliveryClass === "nav-buttons-active display-nav-buttons" ?
                    <Delivery /> : <Pickup/>
                }
            </div>
        </>
    );
}
