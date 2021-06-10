import React from "react";
import { Game } from "./components/Game";
import { BordContextProvider } from "./context/BordContext";

export const App = () => {
  return (
    <div
      className="App container mx-auto px-2 flex items-center justify-center"
      style={{ height: window.innerHeight }}
    >
      <BordContextProvider>
        <Game />
      </BordContextProvider>
    </div>
  );
};
