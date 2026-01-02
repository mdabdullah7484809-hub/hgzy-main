import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./routes/routes";
import LanguageProvider from "./Components/Context/LanguageContext";
import { GameProvider } from "./context/GameContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <LanguageProvider>
      <GameProvider>
         <RouterProvider router={router} />
      </GameProvider>
    </LanguageProvider>
  </React.StrictMode>
);
