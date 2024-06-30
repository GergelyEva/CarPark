import React from 'react';
import { useBasket } from './BasketContext';
import { Car } from '../../models';
import './Basket.css'; 

const Basket = () => {
  const { basketItems } = useBasket();

  // Calculate total price
  const calculateTotalPrice = () => {
    return basketItems.reduce((total, car) => total + parseFloat(car.price), 0).toFixed(3);
  };

  return (
    <div className="basket-container">
      <h1>Basket</h1>
      {basketItems.length > 0 ? (
        <>
          {basketItems.map((car: Car, index: number) => (
            <div key={index} className="car-item">
              <div className="image-container">
                <img
                  src={`http://localhost:3019/img/${car.image}`}
                  className="car-image"
                  alt={car.model}
                />
              </div>
              <div className="details">
                <div className="info-column">
                  <p>
                    <strong>Manufacturer:</strong> {car.manufacturer}
                  </p>
                  <p>
                    <strong>Model:</strong> {car.model}
                  </p>
                  <p>
                    <strong>Construction Year:</strong> {car.constructionYear}
                  </p>
                  <p>
                    <strong>Fuel Type:</strong> {car.fuelType}
                  </p>
                  <p>
                    <strong>Engine Size:</strong> {car.engineSize}
                  </p>
                </div>
                <div className="equipments-column">
                  <p>
                    <strong>Equipments:</strong>
                  </p>
                  <ul className="list">
                    {car.equipment.split(',').slice(0, 10).map((item, index) => (
                      <li key={index}>{item.trim()}</li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="column">
                <div className="price">
                  <strong>Price:</strong> {car.price} EUR
                </div>
              </div>
            </div>
          ))}
          <div className="total">
            <strong>Total Price:</strong> {calculateTotalPrice()} EUR
          </div>
        </>
      ) : (
        <p>Your basket is empty.</p>
      )}
    </div>
  );
};

export default Basket;
