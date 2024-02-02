import React from "react";
import ReactDOM from "react-dom/client";
import axios from "axios";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import HomePage from "./pages/HomePage";
import SearchPage from "./pages/SearchPage";
import OfferPage from "./pages/OfferPage";
import APropos from "./pages/APropos";
import MentionsLegales from "./pages/MentionsLegales";
import CGU from "./pages/CGU";
import NotFound from "./pages/NotFound";

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/accueil",
        element: <HomePage />,
      },
      {
        path: "/recherche",
        element: <SearchPage />,
      },
      {
        path: "/annonce/:id",
        element: <OfferPage />,
        loader: ({ params }) => {
          const offer = axios
            .get(`${import.meta.env.VITE_API_URL}/search/${params.id}`)
            .then((res) => res.data);
          return offer;
        },
      },
      {
        path: "/apropos",
        element: <APropos />,
      },
      {
        path: "/mentions-legales",
        element: <MentionsLegales />,
      },
      {
        path: "/cgu",
        element: <CGU />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
