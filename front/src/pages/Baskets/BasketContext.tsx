import React, { createContext, useContext, useState } from 'react';
import { Car } from '../../models';

type BasketContextType = {
    basketItems: Car[];
    addToBasket: (car: Car) => void;
    clearBasket: () => void;
};

const BasketContext = createContext<BasketContextType | undefined>(undefined);

export const BasketProvider = ({ children }: { children: React.ReactNode }) => {
    const [basketItems, setBasketItems] = useState<Car[]>([]);

    const addToBasket = (car: Car) => setBasketItems(prevItems => [...prevItems, car]);
    const clearBasket = () => setBasketItems([]);

    return <BasketContext.Provider value={{ basketItems, addToBasket, clearBasket }}>{children}</BasketContext.Provider>;
};

export const useBasket = () => {
    const context = useContext(BasketContext);
    if (!context) {
        throw new Error('useBasket must be used within a BasketProvider');
    }
    return context;
};
