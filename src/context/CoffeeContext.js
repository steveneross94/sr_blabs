import { createContext, useEffect, useState } from "react";

const initialContext = {
    orders: {
        Bob: { coffee: "cappucino", price: 3.5 },
        Jeremy: {
            coffee: "black coffee",
            price: 2,
        },
        Steve: {
            coffee: "cold brew",
            price: 3,
        },
        Brock: {
            coffee: "cortado",
            price: 3.75,
        },
        Brandon: {
            coffee: "frappucino",
            price: 4,
        },
        George: {
            coffee: "espresso",
            price: 2.5,
        },
        Christian: {
            coffee: "latte",
            price: 3.5,
        },
    },
    isCycleCurrent: true,
};

export const CoffeeContext = createContext();

export const CoffeeProvider = ({ children }) => {
    const initialState =
        typeof window !== "undefined" && localStorage.getItem("coffeeState")
            ? JSON.parse(localStorage.getItem("coffeeState"))
            : initialContext;

    const [coffeeState, setCoffeeState] = useState(initialState);

    useEffect(() => {
        localStorage.setItem("coffeeState", JSON.stringify(coffeeState));
    }, [coffeeState]);

    return (
        <CoffeeContext.Provider value={{ coffeeState, setCoffeeState }}>
            {children}
        </CoffeeContext.Provider>
    );
};
