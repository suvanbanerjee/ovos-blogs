import Link from 'next/link';
import Logo from "./logo";

export default function Header() {
  return (
      <header>
          <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
              <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                  <Logo />
                  <div className="flex items-center">
                      <Link href="#" className="text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800">Home</Link>
                  </div>
              </div>
          </nav>
      </header>
  );
}