import React from "react";
import teamData from "../data/oladipo.json";
import { Link } from "react-router-dom";
import { Card, CardContent, Typography, Button } from "@material-ui/core";
import PlayerAppBar from "./PlayerAppBar";

// Page displaying all the previous scouting reports of the player

function PreviousScouting() {
  const { scoutingReports } = teamData;

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
        Scouting Reports
      </Typography>

      {/* There is a separate button that brings the user to add scouting report page. */}

      <div
        style={{
          paddingBottom: "5vh",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Link to="/scouting">
          <Button
            variant="contained"
            style={{
              backgroundColor: "#ff6e40",
              color: "white",
              fontWeight: "bold",
              borderRadius: "10px",
            }}
          >
            Add Scouting Report
          </Button>
        </Link>
      </div>

      {/* This is to display the scouting reports that are in the json file. */}

      {scoutingReports &&
        scoutingReports.map((report, index) => (
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Card
              key={index}
              variant="outlined"
              style={{
                marginBottom: "1rem",
                backgroundColor: "#1e3d59",
                borderRadius: "20px",
                marginTop: "1rem",
                maxWidth: "30%",
              }}
            >
              <CardContent style={{ color: "white" }}>
                <Typography
                  variant="h5"
                  component="h2"
                  style={{ fontWeight: "bold" }}
                >
                  {report.player}
                </Typography>
                <Typography>
                  {report.date.substring(0, 10)} - {report.team}
                </Typography>
                <Typography
                  variant="body2"
                  component="p"
                  style={{ fontWeight: "bold" }}
                >
                  {report.report}
                </Typography>
              </CardContent>
            </Card>
          </div>
        ))}
    </div>
  );
}

export default PreviousScouting;
