import { Provider } from "react-redux";
import { store } from "./store/store.js";
import { PokemonApp } from "./PokemonApp.jsx";

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <PokemonApp />
    </Provider>
  </StrictMode>
);
