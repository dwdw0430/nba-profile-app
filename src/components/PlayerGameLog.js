import React, { useState } from "react";
import playerData from "../data/oladipo.json";

import {
  Select,
  MenuItem,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Typography,
  makeStyles
} from "@material-ui/core";
import PlayerAppBar from "./PlayerAppBar";

// Page displaying player's game log

const useStyles = makeStyles((theme) => ({
  tableHeader: {
    fontWeight: 'bold', 
    color: 'white', 
    fontSize: "16px"
  }
}));

function PlayerGameLog() {
  const { gameLog } = playerData;
  const [selectedSeason, setSelectedSeason] = useState("");
  const [filteredGameLogs, setFilteredGameLogs] = useState([]);
  const uniqueSeasons = [];
  const classes = useStyles();

  // This is to filter out any duplicate seasons and get unique seasons

  gameLog.forEach((game) => {
    if (!uniqueSeasons.includes(game.season)) {
      uniqueSeasons.push(game.season);
    }
  });

  // This will be run when the user selects a season from the dropdown

  const handleSeasonSelect = (e) => {
    const season = e.target.value;
    setSelectedSeason(season);

    const filteredLogs = gameLog.filter(
      (game) => game.season === parseInt(season)
    );
    setFilteredGameLogs(filteredLogs);
  };

  return (
    <div>
      <PlayerAppBar />

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          height: "10vh",
          padding: "5vh",
        }}
      >
        <Typography variant="h4" style={{fontWeight: 'bold', color: "#1e3d59", marginBottom: '1rem'}}>Game Log</Typography>
        <Select
          value={selectedSeason}
          onChange={handleSeasonSelect}
          style={{ width: "20vh", marginBottom: "1rem", color: "#1e3d59", fontWeight: 'bold'}}
          displayEmpty
        >
          <MenuItem value="" style={{fontWeight: 'bold'}}>
            Select a Season
          </MenuItem>

          // Each value on the dropdown will be values of the uniqueSeasons array

          {uniqueSeasons.map((season) => (
            <MenuItem key={season} value={season} style={{fontWeight: 'bold'}}>
              {season}
            </MenuItem>
          ))}
        </Select>
      </div>

      {/* This is for when the filtered game log is empty.
          When it is empty, it will just print out a statement.
          When it is not empty, it will render the data. */}

      {filteredGameLogs.length > 0 ? (
        <Table>
          <TableHead style={{position: 'sticky', top: 0, backgroundColor: "#1e3d59"}}>
            <TableRow>
              <TableCell className={classes.tableHeader}>Game Date</TableCell>
              <TableCell className={classes.tableHeader}>Game</TableCell>
              <TableCell className={classes.tableHeader}>Minutes Played</TableCell>
              <TableCell className={classes.tableHeader}>Points</TableCell>
              <TableCell className={classes.tableHeader}>Rebounds</TableCell>
              <TableCell className={classes.tableHeader}>Assists</TableCell>
              <TableCell className={classes.tableHeader}>Steals</TableCell>
              <TableCell className={classes.tableHeader}>Blocks</TableCell>
              <TableCell className={classes.tableHeader}>Turnovers</TableCell>
              <TableCell className={classes.tableHeader}>Fouls</TableCell>
              <TableCell className={classes.tableHeader}>+/-</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredGameLogs.map((game) => (
              <TableRow key={game.gameId}>
                <TableCell>{game.date.substring(0, 10)}</TableCell>
                <TableCell>{game.isHomeIndicator} {game.opponent}</TableCell>
                <TableCell>{game.timePlayed}</TableCell>
                <TableCell>{game.pts}</TableCell>
                <TableCell>{game.reb}</TableCell>
                <TableCell>{game.ast}</TableCell>
                <TableCell>{game.stl}</TableCell>
                <TableCell>{game.blk}</TableCell>
                <TableCell>{game.tov}</TableCell>
                <TableCell>{game.pf}</TableCell>
                <TableCell>{game.plusMinus}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      ) : (
        <Typography variant= "h5"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "10vh",
            fontWeight: "bold",
            color: "#1e3d59"
          }}
        >
          No game logs available for the selected season.
        </Typography>
      )}
    </div>
  );
}

export default PlayerGameLog;

