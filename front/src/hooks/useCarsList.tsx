import { useEffect, useState } from "react";

export function useCarsList(){
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    const [carsList, setCarsList] = useState([]);

    async function getCarList() {
        setIsLoading(true);
        try {
            const res = await fetch("http://localhost:3019/car");
            if (res.ok) {
                setIsError(false);
                const data = await res.json(); 
                setCarsList(data); 
            } else {
                setIsError(true);
            }
        } catch (error: any) {
            setIsError(true);
        } finally {
            setIsLoading(false);
        }
    }

    useEffect(() => {
        getCarList();
    }, []);

    return {
        carsList,
        isError,
        isLoading
    };
}
