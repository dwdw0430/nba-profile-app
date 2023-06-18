import React from "react";
import teamData from "../data/miamiHeat.json";
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
import TeamAppBar from "./TeamAppBar";

// Page displaying past results of the team

const useStyles = makeStyles((theme) => ({
  tableHeader: {
    fontWeight: "bold",
    color: "white",
    fontSize: "16px",
  },
}));

function Schedule() {
  const { schedule } = teamData;
  const classes = useStyles();

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
        Schedule
      </Typography>

      <Table>
        <TableHead
          style={{ backgroundColor: "#1e3d59", position: "sticky", top: 0 }}
        >
          <TableRow>
            <TableCell className={classes.tableHeader}>Date</TableCell>
            <TableCell className={classes.tableHeader}>Time</TableCell>
            <TableCell className={classes.tableHeader}>Season Type</TableCell>
            <TableCell className={classes.tableHeader}>Home Team</TableCell>
            <TableCell className={classes.tableHeader}>Away Team</TableCell>
            <TableCell className={classes.tableHeader}>Score</TableCell>
            <TableCell className={classes.tableHeader}>Outcome</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {schedule.map((game, index) => (
            <TableRow key={index}>
              <TableCell>{game.date.substring(0, 10)}</TableCell>
              <TableCell>{game.timeEst}</TableCell>
              <TableCell>{game.seasonType}</TableCell>
              <TableCell>{game.homeTeam}</TableCell>
              <TableCell>{game.awayTeam}</TableCell>
              <TableCell>{`${game.homePts}-${game.awayPts}`}</TableCell>
              <TableCell>{game.outcome}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

export default Schedule;
