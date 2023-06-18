import React, { useState } from "react";
import playerData from "../data/oladipo.json";
//import '../App.css';
import { makeStyles } from "@material-ui/core/styles";
import {
  Typography,
  Card,
  CardContent,
  CardMedia,
  Grid,
} from "@material-ui/core";

// Page displayed at the player home page
// Page will display the player bio in a card design

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    backgroundColor: "#f5f0e1",
  },
  playerBioCard: {
    display: "flex",
    justifyContent: "center",
    marginTop: "10%",
    marginBottom: "9%",
    marginLeft: "12%",
    maxWidth: "70%",
    padding: "3%",
    backgroundColor: "#1e3d59",
    color: "black",
    borderRadius: "20px",
  },
  playerBioImage: {
    width: "25%",
    height: "auto",
    marginBottom: theme.spacing(2),
    marginRight: theme.spacing(15),
  },
}));

function PlayerBio() {
  const { bio } = playerData;
  const player = bio[0];
  const classes = useStyles();

  return (
    <div>
      <Card className={classes.playerBioCard}>
        <CardMedia
          component="img"
          src={player.photoUrl}
          alt="Player"
          className={classes.playerBioImage}
        />
        <CardContent style={{ color: "white" }}>
          <Grid container direction="column" spacing={2}>
            <Grid item>
              <Typography variant="h3" style={{ fontWeight: "bold" }}>
                {player.name}
              </Typography>
            </Grid>
            <Grid item>
              <Typography>Height: {player.height} inches</Typography>
            </Grid>
            <Grid item>
              <Typography>Weight: {player.weight} pounds</Typography>
            </Grid>
            <Grid item>
              <Typography>Position: {player.position}</Typography>
            </Grid>
            <Grid item>
              <Typography>Years Pro: {player.yearsPro}</Typography>
            </Grid>
            <Grid item>
              <Typography>
                Drafted: {player.draftYear} Round {player.round}, Pick{" "}
                {player.pick}
              </Typography>
            </Grid>
            <Grid item>
              <Typography>
                Hometown: {player.homeTown}, {player.homeState},{" "}
                {player.homeCountry}
              </Typography>
            </Grid>
            <Grid item>
              <Typography>
                Birth Date: {player.birthDate.substring(0, 10)}
              </Typography>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </div>
  );
}

export default PlayerBio;
