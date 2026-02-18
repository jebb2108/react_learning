import "../app/globals.css";
import { Inter } from 'next/font/google';
import { Header } from "../components/header";
import { GameTitle } from '../components/game';
import { Profile } from '../components/profile';

const inter = Inter({ subsets: ['cyrillic', 'latin'] });

export default function HomePage() {
    return (
            <div className={`bg-slate-50 min-h-screen ${inter.className}`}>
                <Header />
                <main className="pt-6 mx-auto max-w-[616]">
                    <GameTitle />
                    <Profile />
                </main>
            </div>
    );
}
