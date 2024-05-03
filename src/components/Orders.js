import { formatPrice } from "../../utils/context";
import { useOrderList } from "@/hooks/useOrderList";

export const Orders = () => {
    const orderList = useOrderList();

    return (
        <div className="w-full">
            {Object.keys(orderList).map((employee) => {
                const { coffee, price, hasPaid } = orderList[employee];
                return (
                    <div
                        key={employee}
                        className="flex flex-row gap-2 justify-between"
                    >
                        <p className="font-semibold">
                            {employee} {hasPaid && "*"}
                        </p>
                        <p>
                            {coffee} - {formatPrice(price)}
                        </p>
                    </div>
                );
            })}
        </div>
    );
};
