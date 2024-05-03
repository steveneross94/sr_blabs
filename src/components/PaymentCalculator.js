import { useContext, useState, useEffect } from "react";
import { Button } from "./Button";
import { Menu } from "./Menu";
import { Orders } from "./Orders";
import { CoffeeContext, initialContext } from "@/context/CoffeeContext";
import { formatPrice } from "../../utils/context";

const Heading = ({ text }) => {
    return (
        <p className="font-bold text-2xl border-b border-black w-full text-left">
            {text}
        </p>
    );
};

export const PaymentCalculator = () => {
    const [totalCost, setTotalCost] = useState(0);
    const [mostExpensiveOrders, setMostExpensiveOrders] = useState([]);
    const {
        coffeeState: { orders },
        setCoffeeState,
    } = useContext(CoffeeContext);

    useEffect(() => {
        const total = Object.values(orders)?.reduce(
            (acc, curr) => acc + curr.price,
            0
        );
        const numEmployees = Object.keys(orders).length;
        const average = total / numEmployees;

        const highestPricedOrders = calculateMostExpensiveOrder({
            orders,
            average,
        });
        setMostExpensiveOrders(highestPricedOrders);
        setTotalCost(formatPrice(total));
    }, [orders]);

    const menuStyles = "items-start md:items-center md:w-full";

    const MIN_ORDER_PRICE = 2;

    const calculateMostExpensiveOrder = ({ orders, average }) => {
        let mostExpensiveList = [];
        let highestPriceInList = 0;

        for (const employee in orders) {
            if (
                (orders[employee].price > average ||
                    orders[employee].price >= MIN_ORDER_PRICE) &&
                !orders[employee].hasPaid
            ) {
                mostExpensiveList.push({
                    name: employee,
                    order: orders[employee],
                });
            }
        }

        mostExpensiveList.forEach((el) => {
            if (el.order.price > highestPriceInList) {
                highestPriceInList = el.order.price;
            }
        });

        return mostExpensiveList.filter(
            (employee) => employee.order.price >= highestPriceInList
        );
    };

    const handleCalculatePayer = () => {
        if (mostExpensiveOrders.length === 0) return handleEndCycle();

        if (mostExpensiveOrders.length > 1) {
            handleRouletteWinner({
                winner: mostExpensiveOrders[
                    Math.floor(Math.random() * mostExpensiveOrders.length)
                ],
            });
        } else {
            handleRouletteWinner({ winner: mostExpensiveOrders[0] });
        }
    };

    const handleRouletteWinner = ({ winner }) => {
        const { name } = winner;
        setCoffeeState({
            orders: {
                ...orders,
                [name]: {
                    ...orders[name],
                    hasPaid: true,
                },
            },
        });
    };

    const handleEndCycle = () => {
        setCoffeeState(initialContext);
    };

    console.log({ mostExpensiveOrders, orders });

    return (
        <div className="flex flex-col items-center">
            <div className="flex flex-col md:flex-row justify-between pt-6 gap-4 md:gap-10 min-h-96 w-full">
                <div className={`flex flex-col min-h-60 ${menuStyles}`}>
                    <Heading text={"Coffees"} />
                    <Orders />
                    <div className="inline-flex gap-2 pt-4">
                        <p className="font-bold">Order Total:</p>
                        <p>{totalCost}</p>
                    </div>
                </div>
                <div className={`flex flex-col ${menuStyles}`}>
                    <Heading text={"Menu"} />
                    <Menu />
                </div>
            </div>
            <div className="inline-flex py-6 gap-2 justify-center  md:max-w-md">
                <Button
                    label={"Calculate Payer"}
                    action={handleCalculatePayer}
                />
                <Button label={"End Cycle"} action={handleEndCycle} />
            </div>
            <p className="text-center">
                <strong>*</strong> indicates employee has paid this cycle
            </p>
        </div>
    );
};
