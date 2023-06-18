import React, { useState, useEffect } from "react";
import teamData from "../data/oladipo.json";
import { Link } from "react-router-dom";
import { Typography, TextField, Button } from "@material-ui/core";
import PlayerAppBar from "./PlayerAppBar";

// Page enabling user to submit a new scouting report
// This page needs backend to function properly

function Scouting() {
  const [scoutingReports, setScoutingReports] = useState([]);
  const [player, setPlayer] = useState("");
  const [team, setTeam] = useState("");
  const [report, setReport] = useState("");

  useEffect(() => {
    fetch("http://localhost:5000/scouting")
      .then((response) => response.json())
      .then((data) => setScoutingReports(data.scoutingReports || []))
      .catch((err) => console.log(err));
  }, []);

  // When the new report is submitted, this function will run.
  // It will post the new report onto the server side.

  const handleSubmit = (event) => {
    event.preventDefault();

    const newReport = {
      player,
      team,
      report,
    };

    fetch("http://localhost:5000/scouting", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newReport),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("New Report: ", data);
        setScoutingReports([...scoutingReports, data]);
        setPlayer("");
        setTeam("");
        setReport("");
      })
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <PlayerAppBar />

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
        New Report
      </Typography>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "70vh",
          border: "4px solid",
          borderColor: "#1e3d59",
          borderRadius: "10px",
          marginLeft: "30%",
          marginRight: "30%",
        }}
      >
        <form onSubmit={handleSubmit}>
          <TextField
            label="Player"
            value={player}
            onChange={(event) => setPlayer(event.target.value)}
            style={{ width: "100%" }}
            required
          />
          <br />
          <TextField
            label="Team"
            value={team}
            onChange={(event) => setTeam(event.target.value)}
            required
          />
          <br />
          <TextField
            label="Report"
            multiline
            rows={10}
            value={report}
            onChange={(event) => setReport(event.target.value)}
            required
          />
          <div style={{ paddingTop: "5vh" }}>
            <Button
              type="submit"
              variant="contained"
              style={{
                backgroundColor: "#ff6e40",
                color: "white",
                fontWeight: "bold",
                borderRadius: "10px"
              }}
            >
              Add Report
            </Button>
          </div>
          <div style={{ paddingTop: "5vh" }}>
            <Link to="/previousreports">
              <Button
                variant="contained"
                style={{
                  backgroundColor: "#ff6e40",
                  color: "white",
                  fontWeight: "bold",
                  borderRadius: "10px"
                }}
              >
                View Previous Reports
              </Button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Scouting;
