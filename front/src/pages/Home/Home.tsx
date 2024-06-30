import React, { useEffect, useState } from 'react';
import { useCarsList } from '../../hooks/useCarsList';
import { Car } from '../../models';
import ErrorMessage from '../../components/ErrorMessage';
import FilterCars from '../../components/Filter/FilterCars';
import SortingFilter from '../../components/Sort/SortingFilter';
import CarItem from '../../components/CarItem/CarItem';
import { useBasket } from '../../pages/Baskets/BasketContext';
import './Home.css';
import SearchBar from '../../searchBar/SearchBar';

const Home = () => {
    const { carsList, isLoading, isError } = useCarsList();
    const { addToBasket } = useBasket(); 
    const [filteredCars, setFilteredCars] = useState<Car[]>([]);
    const [favoritedCars, setFavoritedCars] = useState<string[]>([]);
    const [searchTerm, setSearchTerm] = useState<string>("");

    useEffect(() => {
        setFilteredCars(carsList);
    }, [carsList]);

    useEffect(() => {
        const favoritedJson = localStorage.getItem('favoritedCars');
        const initialFavoritedCars = favoritedJson ? JSON.parse(favoritedJson) : [];
        setFavoritedCars(initialFavoritedCars);
    }, []);

    useEffect(() => {
        localStorage.setItem('favoritedCars', JSON.stringify(favoritedCars));
    }, [favoritedCars]);

    const handleSearch = (searchTerm: string) => {
        setSearchTerm(searchTerm);
        filterCars(searchTerm);
    };

    const filterCars = (searchTerm: string) => {
        const filtered = carsList.filter((car) =>
            car.manufacturer.toLowerCase().includes(searchTerm.toLowerCase()) ||
            car.model.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredCars(filtered);
    };

    const handleFilterChange = (filteredCars: Car[]) => {
        setFilteredCars(filteredCars);
    };

    const handleSortChange = (sortCriterion: string, sortOrder: string) => {
        sortCars(sortCriterion, sortOrder);
    };

    const sortCars = (sortCriterion: string, sortOrder: string) => {
        const sorted = [...filteredCars].sort((a, b) => {
            let comparison = 0;
            if (sortCriterion === 'manufacturer') {
                comparison = a.manufacturer.localeCompare(b.manufacturer);
            } else if (sortCriterion === 'model') {
                comparison = a.model.localeCompare(b.model);
            } else if (sortCriterion === 'constructionYear') {
                comparison = parseInt(a.constructionYear) - parseInt(b.constructionYear);
            }
            return sortOrder === 'ascending' ? comparison : -comparison;
        });
        setFilteredCars(sorted);
    };

    const toggleFavorite = (vin: string) => {
        let updatedFavorites: string[];

        if (favoritedCars.includes(vin)) {
            updatedFavorites = favoritedCars.filter(item => item !== vin);
        } else {
            updatedFavorites = [...favoritedCars, vin];
        }

        setFavoritedCars(updatedFavorites);
    };

    if (isLoading) {
        return <h1>Loading...</h1>;
    }

    return (
        <div className="home-container">
            <div className="sidebar">
                <SearchBar onSearch={handleSearch} />
                <SortingFilter onSortChange={handleSortChange} />
                <FilterCars cars={carsList} onFilterChange={handleFilterChange} />
            </div>
            <div className="main-content">
                {isError && <ErrorMessage />}
                <div className="car-list">
                    {filteredCars.map((car, index) => (
                        <CarItem
                            key={index}
                            car={car}
                            isFavorited={favoritedCars.includes(car.vin)}
                            onToggleFavorite={toggleFavorite}
                            onAddToBasket={addToBasket} 
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Home;
