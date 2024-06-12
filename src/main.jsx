import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./styles/index.css";
import "./styles/reset.css";
import { WeatherContextProvider } from "./context/weatherContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <WeatherContextProvider>
    <App />
  </WeatherContextProvider>
);
