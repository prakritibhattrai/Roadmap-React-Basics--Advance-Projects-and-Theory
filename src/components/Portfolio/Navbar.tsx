import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

export function Navbar() {
  const { toggleTheme } = useContext(ThemeContext)!;

  return (
    <div className="sticky z-50 lg:border-b dark:border-b-slate-800">
      <ul className="container flex flex-wrap items-center justify-between py-4 lg:px-16 px-20 dark:bg-slate-900 border-b-2 lg:border-0 dark:border-slate-300/10">
        {/* Left side - Name */}
        <li className="text-md text-sky-500 font-semibold">
          Prakriti <span className="text-green-500">Bhattarai</span>
        </li>

        {/* Middle section - Navigation Links */}
        <div className="flex gap-9 items-center text-base h-3 text-gray-700 dark:text-gray-300 font-medium">
          <li className="group relative hover:text-sky-500 transition-all duration-400 ease-in-out">
            About
            <span className="absolute inset-0 bg-sky-500 opacity-0 group-hover:opacity-50 transition-opacity duration-300"></span>
          </li>
          <li className="group relative hover:text-sky-500 transition-all duration-300 ease-in-out">
            Projects
            <span className="absolute inset-0 bg-sky-500 opacity-0 group-hover:opacity-50 transition-opacity duration-300"></span>
          </li>
          <li className="group relative hover:text-sky-500 transition-all duration-300 ease-in-out">
            Skills
            <span className="absolute inset-0 bg-sky-500 opacity-0 group-hover:opacity-50 transition-opacity duration-300"></span>
          </li>
          <li className="group relative hover:text-sky-500 transition-all duration-300 ease-in-out">
            Contact
            <span className="absolute inset-0 bg-sky-500 opacity-0 group-hover:opacity-50 transition-opacity duration-300"></span>
          </li>
        </div>

        {/* Right side - Theme Toggle Button */}
        <div className="flex items-center">
          <button
            className="p-2 rounded-full dark:bg-slate-800 transition ease-in-out hover:bg-slate-800 duration-300 hover:text-white"
            onClick={toggleTheme}
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              className="w-6 h-6 text-sky-500"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M17.715 15.15A6.5 6.5 0 0 1 9 6.035C6.106 6.922 4 9.645 4 12.867c0 3.94 3.153 7.136 7.042 7.136 3.101 0 5.734-2.032 6.673-4.853Z"
                className="fill-sky-400/20"
              ></path>
              <path
                d="m17.715 15.15.95.316a1 1 0 0 0-1.445-1.185l.495.869ZM9 6.035l.846.534a1 1 0 0 0-1.14-1.49L9 6.035Zm8.221 8.246a5.47 5.47 0 0 1-2.72.718v2a7.47 7.47 0 0 0 3.71-.98l-.99-1.738Zm-2.72.718A5.5 5.5 0 0 1 9 9.5H7a7.5 7.5 0 0 0 7.5 7.5v-2ZM9 9.5c0-1.079.31-2.082.845-2.93L8.153 5.5A7.47 7.47 0 0 0 7 9.5h2Zm-4 3.368C5 10.089 6.815 7.75 9.292 6.99L8.706 5.08C5.397 6.094 3 9.201 3 12.867h2Zm6.042 6.136C7.718 19.003 5 16.268 5 12.867H3c0 4.48 3.588 8.136 8.042 8.136v-2Zm5.725-4.17c-.81 2.433-3.074 4.17-5.725 4.17v2c3.552 0 6.553-2.327 7.622-5.537l-1.897-.632Z"
                className="fill-sky-500"
              ></path>
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M17 3a1 1 0 0 1 1 1 2 2 0 0 0 2 2 1 1 0 1 1 0 2 2 2 0 0 0-2 2 1 1 0 1 1-2 0 2 2 0 0 0-2-2 1 1 0 1 1 0-2 2 2 0 0 0 2-2 1 1 0 0 1 1-1Z"
                className="fill-sky-500"
              ></path>
            </svg>
          </button>
        </div>
      </ul>
    </div>
  );
}
