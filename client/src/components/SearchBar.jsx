/* eslint-disable react/jsx-props-no-spreading */
import { useForm } from "react-hook-form";
import { useNavigate, useOutletContext } from "react-router-dom";

export default function SearchBar() {
  const { setSearch } = useOutletContext();
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    setSearch(data.search);
    navigate(`/recherche?terms=${data.search}`);
  };

  return (
    <section className="md:w-auto mx-10 absolute">
      <form
        className="flex flex-row items-center w-58"
        onSubmit={handleSubmit(onSubmit)}
      >
        <input
          type="text"
          id="searchbar"
          className="p-4 text-base rounded-lg border-none bg-white bg-opacity-75 focus:outline-none w-56 md:w-96 "
          placeholder="Votre recherche ici"
          {...register("search")}
        />
        <button
          type="submit"
          className="absolute right-2 rounded-lg w-10 h-10 text-white bg-blue-700 bg-cover px-2 border-solid b-2 border-black"
          aria-label="submit"
        >
          Go
        </button>
      </form>
    </section>
  );
}
