import { useOutletContext } from "react-router-dom";
import Banner from "../components/Banner";

export default function HomePage() {
  const { setSearch } = useOutletContext();
  return (
    <div>
      <Banner context={{ setSearch }} />
    </div>
  );
}
