import { createContext, useState } from "react";

export const CoffeeContext = createContext();

//Persist to localStorage
export const CoffeeProvider = ({ children }) => {
    const [orders, setOrders] = useState({});
    return (
        <CoffeeContext.Provider value={{ orders, setOrders }}>
            {children}
        </CoffeeContext.Provider>
    );
};
