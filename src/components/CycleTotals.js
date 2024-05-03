import { data } from "../../data";
import { formatPrice } from "../../utils/context";
import { useOrderList } from "@/hooks/useOrderList";

// I had considered collecting a cycle total to check against,
// allowing us to assign the payment responsibility to the user that is most in debt to the group.
// However, this felt nit-picky in practice, if I'm opting for a lavish drink I should (and would) offer to pay for the group.
// I'll inevitably be made whole or near whole when it's my turn to be paid for.

export const CycleTotals = () => {
    const orderList = useOrderList();

    return (
        <div className="flex flex-col">
            {data.employees.map((employee, index) => {
                return (
                    <div
                        key={index}
                        className="inline-flex w-full justify-between"
                    >
                        <p className="font-semibold">
                            {employee.name}{" "}
                            {orderList[employee.name]?.hasPaid && "*"}
                        </p>
                        <p>
                            {orderList &&
                                formatPrice(
                                    orderList[employee.name]?.cycleTotal
                                )}
                        </p>
                    </div>
                );
            })}
        </div>
    );
};
