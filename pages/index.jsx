import "../app/globals.css";
import { Inter } from 'next/font/google';
import { Header } from "../components/header";
import { GameTitle } from '../components/game';
import { GameInfo } from "../components/game";
import { GameField } from '../components/game'

const inter = Inter({ subsets: ['cyrillic', 'latin'] });

export default function HomePage() {
    return (
        <div className={`bg-slate-50 min-h-screen ${inter.className} text-slate-900`}>
            <Header />
            <main className="pt-6 mx-auto w-max">
                <GameTitle />
                <GameInfo className={'mt-4'} />
                <GameField className={'mt-6'} />
            </main>
        </div>
    );
}
