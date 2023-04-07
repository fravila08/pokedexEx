import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import { ErrorPage } from "./Pages/ErrorPage";
import { getPokemon, HomePage } from "./Pages/HomePage";
import { getPokemonDetails, PokemonPage } from "./Pages/PokemonPage";
import { PokemonTeamPage } from "./Pages/PokemonTeamPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
        loader: getPokemon,
      },
      {
        path: "/pokemon/:id/",
        element: <PokemonPage />,
        loader: getPokemonDetails,
      },
      {
        path: "/team/",
        element: <PokemonTeamPage />,
      },
    ],
  },
]);

export default router;
