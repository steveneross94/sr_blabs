import { CoffeeProvider } from "@/context/CoffeeContext";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
    return (
        <CoffeeProvider>
            <Component {...pageProps} />
        </CoffeeProvider>
    );
}
