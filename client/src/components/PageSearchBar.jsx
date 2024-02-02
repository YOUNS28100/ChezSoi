/* eslint-disable react/jsx-props-no-spreading */
import { useForm } from "react-hook-form";
import PropTypes from "prop-types";

export default function PageSearchBar({
  setIsValidate,
  setTerms,
  filters,
  setFilters,
}) {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    const params = new URLSearchParams(filters);
    if (data.search !== "" && data.search !== null) {
      setTerms(data.search);
      params.set("terms", data.search);
      setFilters(params);
      setIsValidate(true);
    }
  };

  return (
    <section className="md:w-auto mx-10">
      <form className="flex flex-row" onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          id="searchbar"
          className="bg-neutral-200 rounded-lg px-2 md:w-96 w-48"
          placeholder="Votre recherche ici"
          {...register("search")}
        />
        <button
          type="submit"
          className="w-10 h-10 text-white bg-blue-700 bg-cover px-2 border-solid b-2 border-black"
          aria-label="submit"
        >
          Go
        </button>
      </form>
    </section>
  );
}

PageSearchBar.propTypes = {
  setIsValidate: PropTypes.func.isRequired,
  setTerms: PropTypes.func.isRequired,
  filters: PropTypes.shape.isRequired,
  setFilters: PropTypes.func.isRequired,
};
