import { NavLink, useLocation, useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import {
  Avatar,
  Button,
  Dropdown,
  DropdownDivider,
  DropdownHeader,
  DropdownItem,
} from "flowbite-react";
import logo from "../assets/chez-soi.png";

export default function NavBar({ auth, setAuth }) {
  const location = useLocation().pathname;
  const navigate = useNavigate();

  const signOut = () => {
    setAuth("");
    navigate("/accueil");
  };

  const buttons = [
    {
      name: "Recherche",
      to: "/recherche",
      className:
        "block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700",
    },
    {
      name: "Actualités",
      to: "/actualités",
      className:
        "block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700",
    },
    {
      name: "A propos",
      to: "/apropos",
      className:
        "block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700",
    },
  ];

  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900">
      <div className=" flex flex-wrap items-center justify-between mx-10 p-4">
        <NavLink to="/accueil" className="flex items-center space-x-3">
          <img src={logo} className="h-12" alt="logo Chez Soi" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            Chez Soi
          </span>
        </NavLink>
        <div className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
          {!location.includes("accueil") && (
            <NavLink
              to="/accueil"
              className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500"
            >
              Accueil
            </NavLink>
          )}
          {buttons.map((e) => (
            <NavLink key={e.to} to={e.to} className={e.className}>
              {e.name}
            </NavLink>
          ))}
        </div>
        {auth ? (
          <Dropdown
            arrowIcon={false}
            inline
            label={
              <Avatar
                alt="User settings"
                img="https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/836.jpg"
                rounded
              />
            }
          >
            <DropdownHeader>
              <span className="block text-sm">Bonnie Green</span>
              <span className="block truncate text-sm font-medium">
                name@flowbite.com
              </span>
            </DropdownHeader>
            <DropdownItem>Dashboard</DropdownItem>
            <DropdownItem>Settings</DropdownItem>
            <DropdownItem>Earnings</DropdownItem>
            <DropdownDivider />
            <DropdownItem onClick={signOut}>Sign out</DropdownItem>
          </Dropdown>
        ) : (
          <div className="flex md:order-2 ">
            <Button className="bg-blue-700 bg-cover px-2">
              Connexion / Inscription
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
}

NavBar.propTypes = {
  auth: PropTypes.shape.isRequired,
  setAuth: PropTypes.func.isRequired,
};
