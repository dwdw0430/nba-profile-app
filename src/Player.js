import React from "react";
import logo from "./logo.svg";
import "./App.css";
import PlayerBio from "./components/PlayerBio";
import PlayerAppBar from "./components/PlayerAppBar";

// Player Profile Home Page
// Consists of player navigation bar and player bio

function Player() {
  return (
    <>
      <PlayerAppBar />

      <div>
        <PlayerBio />
      </div>
    </>
  );
}

export default Player;
