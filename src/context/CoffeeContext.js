import { createContext, useEffect, useState } from "react";

export const initialContext = {
    orders: {
        Bob: { coffee: "cappucino", hasPaid: false, cycleTotal: 0, price: 3.5 },
        Jeremy: {
            coffee: "black coffee",
            hasPaid: false,
            cycleTotal: 0,
            price: 2,
        },
        Steve: {
            coffee: "cold brew",
            hasPaid: false,
            cycleTotal: 0,
            price: 3,
        },
        Brock: {
            coffee: "cortado",
            hasPaid: false,
            cycleTotal: 0,
            price: 3.75,
        },
        Brandon: {
            coffee: "frappucino",
            hasPaid: false,
            cycleTotal: 0,
            price: 4,
        },
        George: {
            coffee: "espresso",
            hasPaid: false,
            cycleTotal: 0,
            price: 2.5,
        },
        Christian: {
            coffee: "latte",
            hasPaid: false,
            cycleTotal: 0,
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
