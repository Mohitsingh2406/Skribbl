import React from "react";
import Header from "./components/Header";
import PlayerSetup from "./components/PlayerSetup";
import Sections from "./components/Sections";
import Game from "./components/Game";

export default function App() {
  const [route, setRoute] = React.useState("home");
  const [playerName, setPlayerName] = React.useState("mohit");

  if (route === "game") {
    return (
      <div className="min-h-screen flex flex-col items-center">
        <Header />
        <Game playerName={playerName} onExit={() => setRoute("home")} />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col items-center">
      <Header />
      <PlayerSetup onPlay={(name) => { setPlayerName(name || "Player"); setRoute("game"); }} />
      <Sections />
    </div>
  );
}
