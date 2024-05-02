import { CoffeeContext } from "@/context/CoffeeContext";
import { useContext, useEffect, useState } from "react";
import { formatPrice } from "../../utils/context";

// {
//     "Bob": {
//         "coffee": "cold brew",
//         "price": 3
//     },
//     "Christian": {
//         "coffee": "frappucino",
//         "price": 4
//     }
// }

export const Orders = () => {
    const {
        coffeeState: { orders },
    } = useContext(CoffeeContext);
    const [orderList, setOrderList] = useState({});

    // NextJS quirk
    // Since I'm using local storage to persist state across refresh
    // this pattern is required to avoid hydration errors
    useEffect(() => {
        setOrderList(orders);
    }, [orders]);

    return (
        <div>
            {Object.keys(orderList).map((employee) => {
                const { coffee, price } = orderList[employee];
                return (
                    <div key={employee} className="flex flex-row gap-2">
                        <p>{employee}</p>
                        <p>
                            {coffee} - {formatPrice(price)}
                        </p>
                    </div>
                );
            })}
        </div>
    );
};
