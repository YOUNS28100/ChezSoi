import { NavLink } from "react-router-dom";
import logo from "../assets/chez-soi.png";

export default function Footer() {
  return (
    <footer className="bg-white rounded-lg shadow dark:bg-gray-900 m-4">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <NavLink to="/" className="flex items-center mb-4 sm:mb-0 space-x-3">
            <img src={logo} className="h-8" alt="logo Chez Soi" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              Chez Soi
            </span>
          </NavLink>
          <div className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
            <NavLink
              to="/mentions-legales"
              className="hover:underline me-4 md:me-6"
            >
              Mentions Légales
            </NavLink>
            <NavLink to="/cgu" className="hover:underline me-4 md:me-6">
              CGU
            </NavLink>
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2024 <NavLink to="/">Chez Soi</NavLink>. Tous droits réservés.
        </span>
      </div>
    </footer>
  );
}
