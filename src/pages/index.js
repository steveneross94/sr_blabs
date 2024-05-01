import { PaymentCalculator } from "@/components/PaymentCalculator";
import Image from "next/image";

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center p-6">
            <h1 className="font-bold text-3xl">Payment Roulette</h1>
            <PaymentCalculator />
        </main>
    );
}
