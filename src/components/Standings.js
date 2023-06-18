import React, { useState } from "react";
import teamData from "../data/miamiHeat.json";
import {
  Select,
  MenuItem,
  TableCell,
  TableHead,
  TableBody,
  Table,
  TableRow,
  Typography,
  makeStyles,
} from "@material-ui/core";
import TeamAppBar from "./TeamAppBar";

// Page displaying the standings of the team's conference

const useStyles = makeStyles((theme) => ({
  tableHeader: {
    fontWeight: "bold",
    color: "white",
    fontSize: "16px",
  },
  thisTeam: {
    backgroundColor: "#ff6e40",
  },
}));

function Standings() {
  const { standings } = teamData;
  const { depthChart } = teamData;
  const [selectedDivision, setSelectedDivision] = useState("");
  const [filteredStandings, setFilteredStandings] = useState(standings);
  const classes = useStyles();

  // This is to filter the teams by division.
  const divisions = [...new Set(standings.map((team) => team.Division))];

  const handleDivisionChange = (event) => {
    const division = event.target.value;
    setSelectedDivision(division);

    if (division === "") {
      setFilteredStandings(standings);
    } else {
      setFilteredStandings(
        standings.filter((team) => team.Division === division)
      );
    }
  };

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
          style={{ fontWeight: "bold", color: "#1e3d59", marginBottom: "1rem" }}
        >
          Standings
        </Typography>
        <Select
          value={selectedDivision}
          onChange={handleDivisionChange}
          style={{
            width: "20vh",
            marginBottom: "1rem",
            color: "#1e3d59",
            fontWeight: "bold",
          }}
          displayEmpty
        >
          <MenuItem value="" style={{ fontWeight: "bold" }}>
            All Divisions
          </MenuItem>
          {divisions.map((division) => (
            <MenuItem
              key={division}
              value={division}
              style={{ fontWeight: "bold" }}
            >
              {division}
            </MenuItem>
          ))}
        </Select>
      </div>

      {filteredStandings.length > 0 ? (
        <Table>
          <TableHead
            style={{ position: "sticky", top: 0, backgroundColor: "#1e3d59" }}
          >
            <TableRow>
              <TableCell className={classes.tableHeader}>Rank</TableCell>
              <TableCell className={classes.tableHeader}>Team</TableCell>
              <TableCell className={classes.tableHeader}>W</TableCell>
              <TableCell className={classes.tableHeader}>L</TableCell>
              <TableCell className={classes.tableHeader}>GB</TableCell>
              <TableCell className={classes.tableHeader}>Win%</TableCell>
              <TableCell className={classes.tableHeader}>Last10</TableCell>
              <TableCell className={classes.tableHeader}>Home</TableCell>
              <TableCell className={classes.tableHeader}>Away</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {/* This part enables the highlighting of the team in the standings.
                It is compared with the team nickname in the depth chart data, and
                if they match, then that team is highlighted in the standings table. */}

            {filteredStandings.map((team) => (
              <TableRow
                key={team.Team_id}
                className={
                  team.Team_abr === depthChart[0].players[0].team
                    ? classes.thisTeam
                    : ""
                }
              >
                <TableCell>{team.Po_rank}</TableCell>
                <TableCell style={{ fontWeight: "bold" }}>
                  {team.Team_name} {team.Team_NickName}
                </TableCell>
                <TableCell>{team.Wins}</TableCell>
                <TableCell>{team.Losses}</TableCell>
                <TableCell>{team.League_Game_behind}</TableCell>
                <TableCell>{team.Win_pct}</TableCell>
                <TableCell>{team.Last10}</TableCell>
                <TableCell>
                  {team.HomeWins}-{team.HomeLosses}
                </TableCell>
                <TableCell>
                  {team.AwayWins}-{team.AwayLosses}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      ) : (
        <Typography
          variant="h5"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "10vh",
            fontWeight: "bold",
            color: "#1e3d59",
          }}
        >
          No game logs available for the selected season.
        </Typography>
      )}
    </div>
  );
}

export default Standings;
