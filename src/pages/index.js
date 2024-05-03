import { PaymentCalculator } from "@/components/PaymentCalculator";

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
