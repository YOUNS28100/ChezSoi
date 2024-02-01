import {
  NavLink,
  useLocation,
  useNavigate,
  // useOutletContext,
} from "react-router-dom";
import { Avatar, Dropdown } from "flowbite-react";
import logo from "../assets/chez-soi.png";

export default function NavigationBar() {
  // const { auth, setAuth } = useOutletContext();
  const location = useLocation().pathname;
  const navigate = useNavigate();

  const signOut = () => {
    // setAuth("");
    navigate("/accueil");
  };

  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
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
          <NavLink
            to="/recherche"
            className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
          >
            Recherche
          </NavLink>
          <NavLink
            to="/actualites"
            className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
          >
            Actualités
          </NavLink>
          <NavLink
            to="/apropos"
            className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
          >
            A propos de nous
          </NavLink>
        </div>
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
          <Dropdown.Header>
            <span className="block text-sm">Bonnie Green</span>
            <span className="block truncate text-sm font-medium">
              name@flowbite.com
            </span>
          </Dropdown.Header>
          <Dropdown.Item>Dashboard</Dropdown.Item>
          <Dropdown.Item>Settings</Dropdown.Item>
          <Dropdown.Item>Earnings</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item onClick={signOut}>Sign out</Dropdown.Item>
        </Dropdown>
      </div>
    </nav>
  );
}
