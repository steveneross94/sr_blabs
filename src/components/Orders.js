import { CoffeeContext } from "@/context/CoffeeContext";
import { useContext } from "react";
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
    const { orders } = useContext(CoffeeContext);
    return (
        <div>
            {Object.keys(orders).map((employee) => {
                const { coffee, price } = orders[employee];
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
