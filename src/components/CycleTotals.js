import { data } from "../../data";

export const CycleTotals = () => {
    return (
        <>
            {data.employees.map((em, index) => {
                return <p key={index}>{em.name}</p>;
            })}
        </>
    );
};
