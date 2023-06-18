import React, { useState } from "react";
import playerData from "../data/oladipo.json";
import PlayerAppBar from "./PlayerAppBar";
import {
  makeStyles,
  Table,
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Typography,
} from "@material-ui/core";

// Page displaying the statistics of the player by season

const useStyles = makeStyles((theme) => ({
  tableHeader: {
    fontWeight: "bold",
    color: "white",
    fontSize: "16px",
  },
}));

function PlayerStats() {
  const { traditionalPerGame } = playerData;
  const classes = useStyles();

  return (
    <div>
      <PlayerAppBar />
      <Typography
        variant="h4"
        style={{
          padding: "5vh",
          fontWeight: "bold",
          display: "flex",
          justifyContent: "center",
          color: "#1e3d59",
        }}
      >
        Player Statistics
      </Typography>
      <TableContainer style={{ paddingTop: "3vh" }}>
        <Table>
          <TableHead style={{ backgroundColor: "#1e3d59" }}>
            <TableRow>
              <TableCell className={classes.tableHeader}>Season</TableCell>
              <TableCell className={classes.tableHeader}>Team</TableCell>
              <TableCell className={classes.tableHeader}>GP</TableCell>
              <TableCell className={classes.tableHeader}>MP</TableCell>
              <TableCell className={classes.tableHeader}>FGM</TableCell>
              <TableCell className={classes.tableHeader}>FGA</TableCell>
              <TableCell className={classes.tableHeader}>FG%</TableCell>
              <TableCell className={classes.tableHeader}>3PM</TableCell>
              <TableCell className={classes.tableHeader}>3PA</TableCell>
              <TableCell className={classes.tableHeader}>3P%</TableCell>
              <TableCell className={classes.tableHeader}>2PM</TableCell>
              <TableCell className={classes.tableHeader}>2PA</TableCell>
              <TableCell className={classes.tableHeader}>2P%</TableCell>
              <TableCell className={classes.tableHeader}>eFG%</TableCell>
              <TableCell className={classes.tableHeader}>FTM</TableCell>
              <TableCell className={classes.tableHeader}>FTA</TableCell>
              <TableCell className={classes.tableHeader}>FT%</TableCell>
              <TableCell className={classes.tableHeader}>ORB</TableCell>
              <TableCell className={classes.tableHeader}>DRB</TableCell>
              <TableCell className={classes.tableHeader}>TRB</TableCell>
              <TableCell className={classes.tableHeader}>AST</TableCell>
              <TableCell className={classes.tableHeader}>STL</TableCell>
              <TableCell className={classes.tableHeader}>BLK</TableCell>
              <TableCell className={classes.tableHeader}>TOV</TableCell>
              <TableCell className={classes.tableHeader}>PF</TableCell>
              <TableCell className={classes.tableHeader}>PTS</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {traditionalPerGame.map((data, index) => (
              <TableRow key={index}>
                <TableCell>{data.Season}</TableCell>
                <TableCell>{data.team}</TableCell>
                <TableCell>{data.GP}</TableCell>
                <TableCell>{data.MP}</TableCell>
                <TableCell>{data.FGM}</TableCell>
                <TableCell>{data.FGA}</TableCell>
                <TableCell>{data["FG%"]}</TableCell>
                <TableCell>{data["3PM"]}</TableCell>
                <TableCell>{data["3PA"]}</TableCell>
                <TableCell>{data["3P%"]}</TableCell>
                <TableCell>{data["2PM"]}</TableCell>
                <TableCell>{data["2PA"]}</TableCell>
                <TableCell>{data["2P%"]}</TableCell>
                <TableCell>{data["eFG%"]}</TableCell>
                <TableCell>{data.FTM}</TableCell>
                <TableCell>{data.FTA}</TableCell>
                <TableCell>{data["FT%"]}</TableCell>
                <TableCell>{data.ORB}</TableCell>
                <TableCell>{data.DRB}</TableCell>
                <TableCell>{data.TRB}</TableCell>
                <TableCell>{data.AST}</TableCell>
                <TableCell>{data.STL}</TableCell>
                <TableCell>{data.BLK}</TableCell>
                <TableCell>{data.TOV}</TableCell>
                <TableCell>{data.PF}</TableCell>
                <TableCell>{data.PTS}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default PlayerStats;
