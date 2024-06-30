import React, { useState } from "react";
import "./FilterCars.css";
import { Car } from "../../models";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";

type Props = {
  cars: Car[];
  onFilterChange: (filteredCars: Car[]) => void;
};

const FilterCars = ({ cars, onFilterChange }: Props) => {
  const [manufacturerFilter, setManufacturerFilter] = useState<string | null>(null);
  const [constructionYearFilter, setConstructionYearFilter] = useState<string | null>(null);
  const [fuelTypeFilter, setFuelTypeFilter] = useState<string | null>(null);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 10000]);

  const applyFilters = () => {
    let filteredCars = cars;

    if (manufacturerFilter) {
      filteredCars = filteredCars.filter((car) => car.manufacturer === manufacturerFilter);
    }

    if (constructionYearFilter) {
      filteredCars = filteredCars.filter((car) => car.constructionYear === constructionYearFilter);
    }

    if (fuelTypeFilter) {
      filteredCars = filteredCars.filter((car) => car.fuelType === fuelTypeFilter);
    }

    if (priceRange) {
      filteredCars = filteredCars.filter(
        (car) => parseInt(car.price) >= priceRange[0] && parseInt(car.price) <= priceRange[1]
      );
    }

    onFilterChange(filteredCars);
  };

  const clearFilters = () => {
    setManufacturerFilter(null);
    setConstructionYearFilter(null);
    setFuelTypeFilter(null);
    setPriceRange([0, 100000]);
  };

  return (
    <div className="filter-cars">
      <div className="filters-container">
        <div className="filter-section">
          <label>Manufacturer:</label>
          
          <select
            value={manufacturerFilter || ""}
            onChange={(e) => setManufacturerFilter(e.target.value || null)}
          >
            <option value="">Select Manufacturer</option>
            {[...new Set(cars.map((car) => car.manufacturer))].map((manufacturer, index) => (
              <option key={index} value={manufacturer}>
                {manufacturer}
              </option>
            ))}
          </select>
        </div>
        <div className="filter-section">
          <label>Construction Year:</label>
          <select
            value={constructionYearFilter || ""}
            onChange={(e) => setConstructionYearFilter(e.target.value || null)}
          >
            <option value="">Select Year</option>
            {[...new Set(cars.map((car) => car.constructionYear))].map((year, index) => (
              <option key={index} value={year}>
                {year}
              </option>
            ))}
          </select>
        </div>
        <div className="filter-section">
          <label>Fuel Type:</label>
          <select
            value={fuelTypeFilter || ""}
            onChange={(e) => setFuelTypeFilter(e.target.value || null)}
          >
            <option value="">Select Fuel Type</option>
            {[...new Set(cars.map((car) => car.fuelType))].map((fuelType, index) => (
              <option key={index} value={fuelType}>
                {fuelType}
              </option>
            ))}
          </select>
        </div>
        <div className="filter-section">
          <label>Price Range (EUR):</label>
          <Slider
            range
            min={0}
            max={100000}
            defaultValue={priceRange}
            onChange={(range: [number, number]) => setPriceRange(range)}
          />
          <div className="price-range-values">
            <span>{`€${priceRange[0]}`}</span>
            <span>{`€${priceRange[1]}`}</span>
          </div>
        </div>
        <div className="filter-actions">
          <button onClick={applyFilters}>Apply Filters</button>
          <button onClick={clearFilters}>Clear Filters</button>
        </div>
      </div>
    </div>
  );
};

export default FilterCars;
