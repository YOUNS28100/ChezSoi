import {
  // useNavigate,
  useOutletContext,
  useSearchParams,
} from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { formatString } from "../services/formatting";
import PageSearchBar from "../components/PageSearchBar";
import OfferCard from "../components/OfferCard";

export default function SearchPage() {
  // const navigate = useNavigate();
  const { search } = useOutletContext();
  const object = [
    {
      id: 1,
      title: "Caritas aegrotatio pecus vero ago.",
      description:
        "Usitas provident aestas denego. Vulticulus volubilis beatus recusandae admoveo. Curia hic considero admoveo tenetur adsidue caput conventus cilicium. Terreo thalassinus crepusculum corroboro. Crapula caelum suadeo cernuus vos voro. Certe voluptas occaecati cernuus suspendo cursim strues casso suffragium. Tergo vociferor adficio considero succedo vitiosus. Corpus decerno doloremque atque inflammatio solium ultra sequi placeat. Solio sophismata carus. Aut abstergo creptio coaegresco aiunt versus.",
      size: 61,
      coordinates: {
        x: 48.873787,
        y: 2.295047,
      },
      city: "Montauban",
      country: "Maldives",
      type: "sell",
      creation_date: "2024-01-31T17:00:04.000Z",
      price: 847496,
      commercial_id: 2,
    },
    {
      id: 1,
      title: "Caritas aegrotatio pecus vero ago.",
      description:
        "Usitas provident aestas denego. Vulticulus volubilis beatus recusandae admoveo. Curia hic considero admoveo tenetur adsidue caput conventus cilicium. Terreo thalassinus crepusculum corroboro. Crapula caelum suadeo cernuus vos voro. Certe voluptas occaecati cernuus suspendo cursim strues casso suffragium. Tergo vociferor adficio considero succedo vitiosus. Corpus decerno doloremque atque inflammatio solium ultra sequi placeat. Solio sophismata carus. Aut abstergo creptio coaegresco aiunt versus.",
      size: 61,
      coordinates: {
        x: 48.873787,
        y: 2.295047,
      },
      city: "Montauban",
      country: "Maldives",
      type: "sell",
      creation_date: "2024-01-31T17:00:04.000Z",
      price: 847496,
      commercial_id: 2,
    },
    {
      id: 1,
      title: "Caritas aegrotatio pecus vero ago.",
      description:
        "Usitas provident aestas denego. Vulticulus volubilis beatus recusandae admoveo. Curia hic considero admoveo tenetur adsidue caput conventus cilicium. Terreo thalassinus crepusculum corroboro. Crapula caelum suadeo cernuus vos voro. Certe voluptas occaecati cernuus suspendo cursim strues casso suffragium. Tergo vociferor adficio considero succedo vitiosus. Corpus decerno doloremque atque inflammatio solium ultra sequi placeat. Solio sophismata carus. Aut abstergo creptio coaegresco aiunt versus.",
      size: 61,
      coordinates: {
        x: 48.873787,
        y: 2.295047,
      },
      city: "Montauban",
      country: "Maldives",
      type: "sell",
      creation_date: "2024-01-31T17:00:04.000Z",
      price: 847496,
      commercial_id: 2,
    },
  ];
  // Mes différents états lier à mon GET & les potentiels filtres via les query.
  const [data, setData] = useState(object);
  const [terms, setTerms] = useState("");
  const [price, setPrice] = useState(0);
  const [size, setSize] = useState(0);
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [type, setType] = useState("none");
  const [isValidate, setIsValidate] = useState(false);
  const [filters, setFilters] = useSearchParams();

  const handleSelectTypeChange = (e) => {
    if (e.target.value !== "none") {
      setType(e.target.value);
    }
  };

  /* Hook permettant de récupérer les données dynamiquement selon la recherche et les filtres utilisés */
  useEffect(() => {
    try {
      if (isValidate) {
        axios
          .get(`${import.meta.env.VITE_API_URL}/search?${filters.toString()}`)
          .then((res) => setData(res.data));
        setIsValidate(false);
      } else {
        axios
          .get(`${import.meta.env.VITE_API_URL}/search?${filters.toString()}`)
          .then((res) => setData(res.data));
      }
    } catch (e) {
      console.info(e);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isValidate, search]);

  // TODO GERER LES FONCTIONS DE FILTRES DYNAMIQUEMENT

  /**
   * Fonction qui vient appliquer les filtres via les params.
   */
  const handleFilters = () => {
    const params = new URLSearchParams(filters);
    params.set("terms", terms);
    if (city !== "") {
      params.set("city", city);
    }
    if (country !== "") {
      params.set("country", country);
    }
    if (size !== 0) {
      params.set("size", size);
    }
    if (price !== 0) {
      params.set("price", price);
    }
    if (type !== "none") {
      params.set("type", type);
    }
    setFilters(params);
    setIsValidate(true);
  };

  /**
   * Fonction qui vient réinitialiser les filtres tout en gardant la recherche initiale.
   */
  const handleReset = () => {
    const params = new URLSearchParams(filters);
    params.delete("city");
    setCity("");

    params.delete("country");
    setCountry("");

    params.delete("size");
    setSize(0);

    params.delete("price");
    setPrice(0);

    params.delete("type");
    setType("none");

    setFilters(params);
    setIsValidate(true);
  };

  // TODO REFACTORISER DYNAMIQUEMENT L'AFFICHAGE DES FILTRES
  return (
    <main>
      <section className="flex flex-col justify-center text-center">
        <div className="flex flex-col w-full gap-7 justify-center items-center">
          <div className="font-bold my-4">
            <h3>Filtres recherche</h3>
          </div>
          {/* ----- FILTRE VILLE ----- */}
          <div className="flex flex-row flex-wrap space-x-6 items-center justify-center">
            <div className="">
              <label htmlFor="city">Ville</label>
              <input
                type="text"
                value={city}
                onChange={(e) => {
                  setCity(formatString(e.target.value));
                }}
              />
            </div>
            {/* ----- FILTRE PAYS ----- */}
            <div className="">
              <label htmlFor="country">Pays</label>
              <input
                type="text"
                value={country}
                onChange={(e) => {
                  setCountry(formatString(e.target.value));
                }}
              />
            </div>
            {/* ----- FILTRE SURFACE m² ----- */}
            <div className="">
              <label htmlFor="size">Surface</label>
              <input
                type="range"
                min="0"
                max="500"
                step="20"
                value={size}
                onChange={(e) => {
                  setSize(e.target.value);
                }}
              />
              {size > 0 && <p className="">Supérieur à {size} m²</p>}
            </div>
            {/* ----- FILTRE PRIX ----- */}
            <div className="">
              <label htmlFor="price">Prix</label>
              <input
                type="range"
                min="0"
                max="5000000"
                step="50000"
                value={price}
                onChange={(e) => {
                  setPrice(e.target.value);
                }}
              />
              {price > 0 && <p className="">Supérieur à {price} €</p>}
            </div>
            {/* ----- FILTRE TYPE ANNONCE ----- */}
            <div className="">
              <label htmlFor="type">Vente/Location</label>
              <select
                value={type}
                name="type"
                id="type"
                onChange={handleSelectTypeChange}
              >
                <option value="none">---</option>
                <option value="sell">Vente</option>
                <option value="rent">Location</option>
              </select>
            </div>
          </div>
          <div className="flex flex-row flew-wrap justify-center font-medium gap-2">
            <button
              className="border border-black rounded p-1"
              type="button"
              onClick={handleFilters}
            >
              Appliquer filtres
            </button>
            <button
              className="border border-black rounded p-1"
              type="button"
              onClick={handleReset}
            >
              Réinitialiser
            </button>
          </div>
          <PageSearchBar
            setIsValidate={setIsValidate}
            setTerms={setTerms}
            filters={filters}
            setFilters={setFilters}
          />
        </div>
        <div className="flex flex-row flex-wrap w-screen p-4 justify-center">
          {data && data.map((e) => <OfferCard key={e} />)}
        </div>
      </section>
    </main>
  );
}
