import { useLoaderData } from "react-router-dom";
import image from "../assets/w1900xh1900-anini-beach-front-home-hawaii-4.jpg";

function OfferPage() {
  const { title, description, size, coordinates, city, country, type, price } =
    useLoaderData();

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-semibold mb-4 text-center">{title}</h1>
        <img src={image} alt="offer's property" />
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <p>{description}</p>
          <div className="my-5">
            <span className="text-lg text-gray-800">
              C'est un bien en <b>{type === "sell" ? "vente" : "location"}</b>
            </span>
          </div>
          <div className="grid grid-cols-2 gap-8">
            <span>
              <b>Superficie:</b> {size}m²
            </span>
            <span>
              <b>Prix:</b> {price}€
            </span>
            <span>
              <b>Ville:</b> {city}
            </span>
            <span>
              <b>Ville:</b> {country}
            </span>
          </div>
          <iframe
            className="my-10 mx-auto w-72 h-72 md:w-3/4 md:h-96"
            title="Maps Embed Location"
            style={{ border: 0 }}
            src={`https://www.google.com/maps/embed/v1/view?key=${
              import.meta.env.VITE_GOOGLE_API
            }&center=${coordinates.x},${coordinates.y}&zoom=18
              &maptype=satellite`}
          />
        </div>
      </div>
    </div>
  );
}

export default OfferPage;
