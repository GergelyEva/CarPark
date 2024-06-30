import React, { useState, useEffect } from 'react';
import { Car } from '../../models';

interface CarItemProps {
  car: Car;
  isFavorited: boolean;
  onToggleFavorite: (vin: string) => void;
  onAddToBasket: (car: Car) => void;
}

const CarItem = ({ car, isFavorited, onToggleFavorite, onAddToBasket }: CarItemProps) => {
  const [isAddedToBasket, setIsAddedToBasket] = useState(false);

  const handleFavoriteClick = () => {
    onToggleFavorite(car.vin);
  };

  const handleAddToBasket = () => {
    onAddToBasket(car);
    setIsAddedToBasket(true);
  };

  useEffect(() => {
    if (isAddedToBasket) {
      const timer = setTimeout(() => {
        setIsAddedToBasket(false);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [isAddedToBasket]);

  return (
    <div className="car-item">
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
        <div className="actions-column">
          <div className="price">
            <strong>Price:</strong> {car.price} EUR
          </div>
          <button className="favorite-button" onClick={handleFavoriteClick}>
            {isFavorited ? "Added to Favorites" : "Favorite"}
          </button>
          <button className="basket-button" onClick={handleAddToBasket}>
            {isAddedToBasket ? "Added to Basket" : "Add to Basket"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CarItem;
