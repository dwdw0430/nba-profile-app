import React from "react";
import teamData from "../data/miamiHeat.json";
import { List, ListItem, ListItemText, Typography } from "@material-ui/core";
import TeamAppBar from "./TeamAppBar";

// Page displaying current injuries of the team

function Injury() {
  const { curInjuries } = teamData;

  return (
    <div>
      <TeamAppBar />
      <div style={{ padding: "5vh" }}>
        <Typography
          variant="h4"
          style={{
            display: "flex",
            justifyContent: "center",
            fontWeight: "bold",
            color: "#1e3d59",
          }}
        >
          Injury Report
        </Typography>
        <List>
          {curInjuries.map((injury, index) => (
            <ListItem key={index}>
              <ListItemText
                primary={injury.name}
                secondary={`${injury.team} - ${injury.update}`}
              />
              <ListItemText primary={injury.description} />
            </ListItem>
          ))}
        </List>
      </div>
    </div>
  );
}

export default Injury;
