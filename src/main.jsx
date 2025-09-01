import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles/index.css";

// Importa o i18n para poder acessar o idioma
import i18n from "./i18n";

// Define o atributo lang no <html> com o idioma atual
document.documentElement.lang = i18n.language;

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
