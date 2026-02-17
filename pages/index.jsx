import "../app/globals.css";
import {Inter} from 'next/font/google';
import { Header } from "../components/header";

const inter = Inter({ subsets: ['cyrillic', 'latin']})

export default function HomePage() {
    return <html lang="ru" className={inter.className}>
            <div className="bg-slate-50 min-h-screen">
                <Header />
            </div>
        </html>
}
