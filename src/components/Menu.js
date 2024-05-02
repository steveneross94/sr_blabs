import { CoffeeContext } from "@/context/CoffeeContext";
import { useContext } from "react";
import { formatPrice } from "../../utils/context";
import { data } from "../../data";

export const Menu = () => {
    const {
        coffeeState: { orders },
        setCoffeeState,
    } = useContext(CoffeeContext);

    const handleChange = ({ e, user }) => {
        const data = JSON.parse(e.target.value);
        const { name, price } = data;
        setCoffeeState({
            orders: {
                ...orders,
                [user.name]: {
                    coffee: name,
                    price,
                },
            },
        });
    };
    return (
        <div className="w-full">
            {data.employees.map((user, index) => {
                const preferred = data.coffee.find(
                    (coffee) => coffee.name === user.preferredCoffee
                );
                return (
                    <div key={index} className="flex flex-row justify-between">
                        <p>{user.name}</p>
                        <select
                            defaultValue={JSON.stringify(preferred)}
                            onChange={(e) => handleChange({ e, user })}
                        >
                            {data.coffee.map((data, index) => {
                                const value = JSON.stringify(data);
                                return (
                                    <option
                                        key={index}
                                        className="text-center"
                                        value={value}
                                    >
                                        {data.name} - {formatPrice(data.price)}
                                    </option>
                                );
                            })}
                        </select>
                    </div>
                );
            })}
        </div>
    );
};

// Users: Bob (cappucino), Jeremy (black coffee), + 5
