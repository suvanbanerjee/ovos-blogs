import Link from 'next/link';
import Logo from "./logo";

export default function Header() {
    return (
        <header className='sticky top-0 z-50 backdrop-blur-md'>
            <nav className="bg-white/90 dark:bg-stone-900/90 border-gray-200 px-4 mt-2 lg:px-6 py-2.5">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                    <Logo />
                    <div className="flex items-center">
                        <Link href="#" className="text-white dark:text-black bg-black dark:bg-white font-bold rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2">Home</Link>
                    </div>
                </div>
            </nav>
        </header>
    );
}