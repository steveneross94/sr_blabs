import { useContext, useState, useEffect } from "react";
import { Button } from "./Button";
import { CycleTotals } from "./CycleTotals";
import { Menu } from "./Menu";
import { Orders } from "./Orders";
import { CoffeeContext } from "@/context/CoffeeContext";
import { formatPrice } from "../../utils/context";

const Heading = ({ text }) => {
    return <p className="font-bold">{text}</p>;
};

//TODO: check most expensive order list against previous employees who have paid
// if no employees have paid from that list, randomize result

export const PaymentCalculator = () => {
    const [lastPaid, setLastPaid] = useState([]);
    const [totalCost, setTotalCost] = useState(0);
    const [averageCost, setAverageCost] = useState(0);
    const [mostExpensiveOrders, setMostExpensiveOrders] = useState("");
    const [rouletteWinner, setRouletteWinner] = useState("");
    const {
        coffeeState: { orders },
    } = useContext(CoffeeContext);

    useEffect(() => {
        const total = Object.values(orders).reduce(
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
        setAverageCost(formatPrice(average));
    }, [orders]);

    const calculateMostExpensiveOrder = ({ orders, average }) => {
        let mostExpensiveList = [];
        let highestPriceInList = 0;

        for (const employee in orders) {
            if (orders[employee].price > average) {
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

    const labelStyles = "items-start md:items-center";

    return (
        <>
            <div className="flex flex-col md:flex-row justify-evenly pt-6 gap-4 min-h-96 w-full">
                <div className={`flex flex-col min-h-60 ${labelStyles}`}>
                    <Heading text={"Coffees"} />
                    <Orders />
                    <div className="inline-flex gap-2 pt-4">
                        <p className="font-bold">Order Total:</p>
                        <p>{totalCost}</p>
                    </div>
                </div>
                <div className={`flex flex-col ${labelStyles}`}>
                    <Heading text={"Menu"} />
                    <Menu />
                </div>
                <div>
                    <Heading text={"Cycle Totals"} />
                    <CycleTotals />
                </div>
            </div>
            <div className="inline-flex w-full p-6">
                <Button label={"Calculate Payer"} action={() => {}} />
                <Button label={"End Cycle"} action={() => {}} />
            </div>
        </>
    );
};
