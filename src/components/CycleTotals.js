import { data } from "../../data";
import { formatPrice } from "../../utils/context";
import { useOrderList } from "@/hooks/useOrderList";

export const CycleTotals = () => {
    const orderList = useOrderList();

    return (
        <div className="flex flex-col">
            {data.employees.map((em, index) => {
                return (
                    <div
                        key={index}
                        className="inline-flex w-full justify-between"
                    >
                        <p className="font-semibold">
                            {em.name} {orderList[em.name]?.hasPaid && "*"}
                        </p>
                        <p>
                            {orderList &&
                                formatPrice(orderList[em.name]?.cycleTotal)}
                        </p>
                    </div>
                );
            })}
        </div>
    );
};
