import { useOutletContext } from "react-router-dom";
import banner from "../assets/banner.jpg";
import SearchBar from "./SearchBar";

export default function Banner() {
  const { setSearch } = useOutletContext();

  return (
    <div className="relative">
      <img src={banner} className="w-screen h-1/2" alt="banner background" />
      <SearchBar className="" context={{ setSearch }} />
    </div>
  );
}
