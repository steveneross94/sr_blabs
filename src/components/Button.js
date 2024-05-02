export const Button = ({ label, action }) => {
    return (
        <div className="mx-auto">
            <button className="rounded-md border p-2" onClick={() => action()}>
                {label}
            </button>
        </div>
    );
};
