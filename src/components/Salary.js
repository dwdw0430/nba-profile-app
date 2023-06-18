import React, { useState } from "react";
import {
  makeStyles,
  Typography,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Select,
  MenuItem,
} from "@material-ui/core";
import teamData from "../data/miamiHeat.json";
import TeamAppBar from "./TeamAppBar";

// Page displaying the salary cap status of the team

const useStyles = makeStyles((theme) => ({
  tableHeader: {
    fontWeight: "bold",
    color: "white",
    fontSize: "16px",
  },
}));

// This function is to correctly display the format of money in dollar value

function formatMoney(value) {
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });
  return formatter.format(value);
}

function Salary() {
  const { salaries } = teamData;
  const [selectedPlayer, setSelectedPlayer] = useState("");
  const classes = useStyles();

  // This is to get unique player names for the dropdown
  const playerNames = [...new Set(salaries.map((salary) => salary.name))];

  // This filters the salary according to the selected player
  const filteredSalaries = selectedPlayer
    ? salaries.filter((salary) => salary.name === selectedPlayer)
    : salaries;

  const handlePlayerSelect = (event) => {
    setSelectedPlayer(event.target.value);
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
          style={{ marginBottom: "1rem", fontWeight: "bold", color: "#1e3d59" }}
        >
          Salary
        </Typography>
        <Select
          value={selectedPlayer}
          onChange={handlePlayerSelect}
          style={{
            marginBottom: "1rem",
            width: "25vh",
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

      {/* This is for when the filtered salary is empty.
          When it is empty, it will just print out a statement.
          When it is not empty, it will render the data. */}

      {filteredSalaries.length > 0 ? (
        <Table>
          <TableHead
            style={{ position: "sticky", top: "0", backgroundColor: "#1e3d59" }}
          >
            <TableRow>
              <TableCell className={classes.tableHeader}>Player</TableCell>
              <TableCell className={classes.tableHeader}>Age</TableCell>
              <TableCell className={classes.tableHeader}>2022/23</TableCell>
              <TableCell className={classes.tableHeader}>2023/24</TableCell>
              <TableCell className={classes.tableHeader}>2024/25</TableCell>
              <TableCell className={classes.tableHeader}>2025/26</TableCell>
              <TableCell className={classes.tableHeader}>2026/27</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredSalaries.map((salary, index) => (
              <TableRow key={index}>
                <TableCell style={{ fontWeight: "bold" }}>
                  {salary.name}
                </TableCell>
                <TableCell>{Math.floor(salary.age)}</TableCell>
                <TableCell>{formatMoney(salary.cap1)}</TableCell>
                <TableCell>{formatMoney(salary.cap2)}</TableCell>
                <TableCell>{formatMoney(salary.cap3)}</TableCell>
                <TableCell>{formatMoney(salary.cap4)}</TableCell>
                <TableCell>{formatMoney(salary.cap5)}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      ) : (
        <Typography>
          No salary data available for the selected player.
        </Typography>
      )}
    </div>
  );
}

export default Salary;
