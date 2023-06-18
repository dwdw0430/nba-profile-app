import logo from "./logo.svg";
import "./App.css";
import React from "react";
import Player from "./Player";
import Team from "./Team";
import Home from "./Home";
import PlayerBio from "./components/PlayerBio";
import PlayerGameLog from "./components/PlayerGameLog";
import PlayerStats from "./components/PlayerStats";
import Scouting from "./components/Scouting";
import Schedule from "./components/Schedule";
import TeamStats from "./components/TeamStats";
import Injury from "./components/Injury";
import PreviousScouting from "./components/PreviousScouting";
import PlayerAwards from "./components/PlayerAwards";
import Salary from "./components/Salary";
import NextGames from "./components/NextGames";
import Standings from "./components/Standings";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// Routing for the website

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/player" element={<Player />} />
        <Route path="/playerbio" element={<PlayerBio />} />
        <Route path="/gamelog" element={<PlayerGameLog />} />
        <Route path="/team" element={<Team />} />
        <Route path="/playerstats" element={<PlayerStats />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/teamstats" element={<TeamStats />} />
        <Route path="/injury" element={<Injury />} />
        <Route path="/scouting" element={<Scouting />} />
        <Route path="/previousreports" element={<PreviousScouting />} />
        <Route path="/awards" element={<PlayerAwards />} />
        <Route path="/salary" element={<Salary />} />
        <Route path="/nextgames" element={<NextGames />} />
        <Route path="/standings" element={<Standings />} />
      </Routes>
    </>
  );
}

export default App;
