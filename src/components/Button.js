export const Button = ({ label, action }) => {
    return (
        <div className="mx-auto">
            <button
                className="rounded-md min-w-36 border-black p-2 shadow-2xl border-2 font-bold"
                onClick={() => action()}
            >
                {label}
            </button>
        </div>
    );
};
