import React from "react";
import "./BasketContent.css";
import { Car } from "../../models";

type BasketContentProps = {
    basketItems: Car[];
};

const BasketContent = ({ basketItems }: BasketContentProps) => {

    const calculateTotalAmount = (basketItems: Car[]): number => {
        return basketItems.reduce((total, car) => total + parseFloat(car.price), 0);
    };

    return (
        <div className="basket-content">
            <div className="basket-items">
                {basketItems.map((car, index) => (
                    <div key={index} className="basket-item">
                        <img src={`http://localhost:3019/img/${car.image}`} alt={car.model} className="basket-item-image" />
                        <div className="basket-item-details">
                            <div className="item-name">{car.manufacturer} {car.model}</div>
                            <div className="item-price">Price: {car.price} EUR</div>
                        </div>
                    </div>
                ))}
            </div>
            {basketItems.length > 0 && (                
                    <div className="total-amount">Total: {calculateTotalAmount(basketItems)} EUR</div>
            )}
        </div>
    );
};

export default BasketContent;
