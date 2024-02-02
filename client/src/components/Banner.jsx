import { useOutletContext } from "react-router-dom";
import banner from "../assets/banner.jpg";
import SearchBar from "./SearchBar";

export default function Banner() {
  const { setSearch } = useOutletContext();

  return (
    <div className="flex items-center justify-center h-full relative">
      <img
        src={banner}
        className="w-full bg-cover bg-center bg-no-repeat blur-sm"
        alt="banner background"
      />
      <SearchBar
        className="p-4 text-base rounded-lg border-none bg-white bg-opacity-75 focus:outline-none w-64"
        context={{ setSearch }}
      />
    </div>
  );
}
