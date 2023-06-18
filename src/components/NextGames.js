import React from "react";
import teamData from "../data/miamiHeat.json";
import { Typography, Card, CardContent } from "@material-ui/core";
import TeamAppBar from "./TeamAppBar";

// Page displaying upcoming league games in a card design

function NextGames() {
  const { next5 } = teamData;

  return (
    <div>
      <TeamAppBar />
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
        Next Games
      </Typography>
      {next5.map((game, index) => (
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Card
            key={index}
            variant="outlined"
            style={{
              marginBottom: "1rem",
              maxWidth: "100%",
              marginTop: "1rem",
              borderRadius: "20px",
              backgroundColor: "#1e3d59",
              width: "20%",
            }}
          >
            <CardContent style={{ color: "white" }}>
              <Typography variant="h6" component="h2">
                {`${game.homeTeam} vs ${game.awayTeam}`}
              </Typography>
              <Typography>
                {`${game.date.substring(0, 10)} - ${game.timeEst}`}
              </Typography>
              <Typography variant="body2" component="p">
                {`Status: ${game.gameStatus}`}
              </Typography>
              <Typography variant="body2" component="p">
                {`Period: ${game.period}`}
              </Typography>
              <Typography variant="body2" component="p">
                {`Win Probability: ${game.winProb}%`}
              </Typography>
            </CardContent>
          </Card>
        </div>
      ))}
    </div>
  );
}

export default NextGames;
