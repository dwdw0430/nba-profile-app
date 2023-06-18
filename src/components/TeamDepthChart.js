import React from "react";
import {
  Typography,
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import teamData from "../data/miamiHeat.json";
import playerData from "../data/oladipo.json";

// Page displayed at the team home page
// Page will display the depth chart of the team

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#f5f0e1",
    height: "100vh",
    overflow: "hidden",
  },
  unitsContainer: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
  },
  unit: {
    width: "20%",
    marginLeft: theme.spacing(5),
  },
  playerAvatar: {
    width: theme.spacing(7),
    height: theme.spacing(8),
  },
}));

function TeamDepthChart() {
  const { depthChart } = teamData;
  const { bio } = playerData;
  const classes = useStyles();

  return (
    <div>
      <Typography
        variant="h4"
        component="h2"
        gutterBottom
        style={{
          display: "flex",
          justifyContent: "center",
          padding: "5vh",
          fontWeight: "bold",
          color: "#1e3d59",
        }}
      >
        {bio[0].currentTeam} DEPTH CHART
      </Typography>
      <div className={classes.unitsContainer}>
        {depthChart.map((unit) => (
          <div key={unit.unit} className={classes.unit}>
            <Typography
              variant="h5"
              component="h3"
              gutterBottom
              style={{ color: "#1e3d59" }}
            >
              Unit {unit.unit}
            </Typography>
            <List>
              {unit.players.map((player) => {
                if (!player) {
                  return null;
                }
                return (
                  <ListItem key={player.nbaId}>
                    <ListItemAvatar>
                      <Avatar
                        src={player.photoUrl}
                        alt={player.name}
                        className={classes.playerAvatar}
                      />
                    </ListItemAvatar>
                    <ListItemText
                      style={{ color: "#1e3d59" }}
                      primary={player.name}
                      secondary={`Position: ${player.position}`}
                    />
                  </ListItem>
                );
              })}
            </List>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TeamDepthChart;
