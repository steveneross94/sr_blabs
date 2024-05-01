import { CalculatePayer } from "./CalculatePayer";
import { CycleTotals } from "./CycleTotals";
import { Menu } from "./Menu";
import { Orders } from "./Orders";

export const PaymentCalculator = () => {
    const labelStyles = "items-start md:items-center";
    const Heading = ({ text }) => {
        return <p className="font-bold">{text}</p>;
    };
    return (
        <>
            <div className="md:grid md:grid-cols-5 pt-6 gap-4 min-h-96 flex flex-col justify-evenly w-full">
                <div className={`md:col-span-3 min-h-60 ${labelStyles}`}>
                    <Heading text={"Coffees"} />
                    <Orders />
                </div>
                <div className={`flex flex-col md:col-span-2 ${labelStyles}`}>
                    <Heading text={"Menu"} />
                    <Menu />
                </div>
                <div>
                    <Heading text={"Cycle Totals"} />
                    <CycleTotals />
                </div>
            </div>
            <CalculatePayer />
        </>
    );
};

// 1. Initialization:
//    - Create a dictionary to keep track of each coworker's total payments.
//    - Create a list of coworkers, including Bob, Jeremy, and the others.
//    - Assign prices to each type of coffee they like.
//    - Initialize the last payer variable to None.
//    - Initialize a variable to keep track of the order of payments.

// 2. Calculate Total Cost:
//    - Iterate through the list of coworkers.
//    - For each coworker, check the price of their favorite coffee and sum it up to get the total cost.

// 3. Decide Who Pays:
//    - Iterate through the list of coworkers.
//    - Subtract the price of the drink from each person's running total.
//    - Determine the coworker with the lowest total, indicating they are most in debt to the group.
//    - If everyone has paid once in the current cycle, reset the order of payments and update the last payer.

// 4. Update Payment History:
//    - Add the total amount of all the drinks for that order to the payer's running total.

// 5. Return Payment Decision:
//    - Output the name of the coworker who will pay for the coffee.
