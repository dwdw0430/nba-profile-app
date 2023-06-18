import React from "react";
import { Typography } from "@material-ui/core";
import playerData from "../data/oladipo.json";
import PlayerAppBar from "./PlayerAppBar";

// Page displaying player awards

function PlayerAwards() {
  const { awards } = playerData;
  return (
    <div>
      <PlayerAppBar />
      <Typography
        variant="h4"
        style={{
          display: "flex",
          justifyContent: "center",
          padding: "5vh",
          fontWeight: "bold",
          color: "#1e3d59",
        }}
      >
        Awards
      </Typography>
      {awards.map((award, index) => (
        <div
          key={index}
          style={{ display: "flex", justifyContent: "center", padding: "3vh" }}
        >
          <Typography
            variant="h5"
            style={{ fontWeight: "bold", color: "#1e3d59" }}
          >
            {award.season} {award.award}
          </Typography>
        </div>
      ))}
    </div>
  );
}

export default PlayerAwards;
