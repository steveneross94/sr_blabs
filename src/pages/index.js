import { PaymentCalculator } from "@/components/PaymentCalculator";

// Design Note: `bg-wrinkled` is a custom background image class to give the application a receipt-like feel. Simple design for a funtionally simple app.

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center p-6 bg-wrinkled bg-cover">
            <div className="flex flex-col md:max-w-3xl w-full justify-between">
                <h1 className="text-center font-bold text-3xl">
                    Payment Roulette
                </h1>
                <PaymentCalculator />
            </div>
        </main>
    );
}
