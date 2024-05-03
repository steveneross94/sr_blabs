import { CoffeeContext } from "@/context/CoffeeContext";
import { useState, useEffect, useContext } from "react";

export const useOrderList = () => {
    const {
        coffeeState: { orders },
    } = useContext(CoffeeContext);
    const [orderList, setOrderList] = useState({});

    useEffect(() => {
        setOrderList(orders);
    }, [orders]);
    return orderList;
};
