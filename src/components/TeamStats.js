import React, { useState } from "react";
import teamData from "../data/miamiHeat.json";
import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Select,
  MenuItem,
  Typography,
  makeStyles,
} from "@material-ui/core";
import TeamAppBar from "./TeamAppBar";
import "../App.css";

// Page displaying statistics of every player on the team

const useStyles = makeStyles((theme) => ({
  tableHeader: {
    fontWeight: "bold",
    color: "white",
    fontSize: "16px",
  },
}));

function TeamStats() {
  const { boxScorePerGame } = teamData;
  const [selectedPlayer, setSelectedPlayer] = useState("");
  const classes = useStyles();

  // This is to filter player for the dropdown

  const handlePlayerFilter = (event) => {
    setSelectedPlayer(event.target.value);
  };

  const filteredData = selectedPlayer
    ? boxScorePerGame.filter((data) => data.name === selectedPlayer)
    : boxScorePerGame;

  const playerNames = Array.from(
    new Set(boxScorePerGame.map((data) => data.name))
  );

  return (
    <div>
      <TeamAppBar />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          height: "10vh",
          padding: "5vh",
        }}
      >
        <Typography
          variant="h4"
          style={{ fontWeight: "bold", color: "#1e3d59" }}
        >
          Player Stats
        </Typography>
        <Select
          value={selectedPlayer}
          onChange={handlePlayerFilter}
          style={{
            width: "25vh",
            marginBottom: "20px",
            marginTop: "20px",
            color: "#1e3d59",
            fontWeight: "bold",
          }}
          displayEmpty
        >
          <MenuItem value="" style={{ fontWeight: "bold" }}>
            All Players
          </MenuItem>
          {playerNames.map((name) => (
            <MenuItem key={name} value={name} style={{ fontWeight: "bold" }}>
              {name}
            </MenuItem>
          ))}
        </Select>
      </div>

      <Table>
        <TableHead
          style={{ backgroundColor: "#1e3d59", position: "sticky", top: 0 }}
        >
          <TableRow>
            <TableCell className={classes.tableHeader}>Player Name</TableCell>
            <TableCell className={classes.tableHeader}>GP</TableCell>
            <TableCell className={classes.tableHeader}>MP</TableCell>
            <TableCell className={classes.tableHeader}>FGM</TableCell>
            <TableCell className={classes.tableHeader}>FGA</TableCell>
            <TableCell className={classes.tableHeader}>FG%</TableCell>
            <TableCell className={classes.tableHeader}>3PM</TableCell>
            <TableCell className={classes.tableHeader}>3PA</TableCell>
            <TableCell className={classes.tableHeader}>3P%</TableCell>
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
          {filteredData.map((data, index) => (
            <TableRow key={index}>
              <TableCell style={{ fontWeight: "bold" }}>{data.name}</TableCell>
              <TableCell>{data.gp}</TableCell>
              <TableCell>{data.mp}</TableCell>
              <TableCell>{data.fgm}</TableCell>
              <TableCell>{data.fga}</TableCell>
              <TableCell>{data["fg%"]}</TableCell>
              <TableCell>{data.tpm}</TableCell>
              <TableCell>{data.tpa}</TableCell>
              <TableCell>{data["tp%"]}</TableCell>
              <TableCell>{data["eFG%"]}</TableCell>
              <TableCell>{data.ftm}</TableCell>
              <TableCell>{data.fta}</TableCell>
              <TableCell>{data["ft%"]}</TableCell>
              <TableCell>{data.oreb}</TableCell>
              <TableCell>{data.dreb}</TableCell>
              <TableCell>{data.reb}</TableCell>
              <TableCell>{data.ast}</TableCell>
              <TableCell>{data.stl}</TableCell>
              <TableCell>{data.blk}</TableCell>
              <TableCell>{data.tov}</TableCell>
              <TableCell>{data.pf}</TableCell>
              <TableCell>{data.ppg}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

export default TeamStats;
