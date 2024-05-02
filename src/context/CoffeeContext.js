import { createContext, useEffect, useState } from "react";

const initialState = {
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

//Persist to localStorage
export const CoffeeProvider = ({ children }) => {
    const [coffeeState, setCoffeeState] = useState(initialState);

    // useEffect(() => {
    //     // Set local storage on mount
    //     if (typeof window !== undefined) {
    //         const localStorageCheck = localStorage.getItem("coffeeState");
    //         const localStorageState = localStorageCheck
    //             ? JSON.parse(localStorageCheck)
    //             : initialState;
    //         localStorage.setItem(
    //             "coffeeState",
    //             JSON.stringify(localStorageState)
    //         );
    //         setCoffeeState(localStorageState);
    //     }
    // }, []);

    return (
        <CoffeeContext.Provider value={{ coffeeState, setCoffeeState }}>
            {children}
        </CoffeeContext.Provider>
    );
};
