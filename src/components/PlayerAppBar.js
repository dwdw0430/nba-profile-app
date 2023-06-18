import React from "react";
import { Link } from "react-router-dom";
import { AppBar, Tabs, Tab } from "@material-ui/core";

// Navigation Bar for the Player Profile Pages

function PlayerAppBar() {
  return (
    <div>
      <AppBar position="static" style={{ backgroundColor: "#ff6e40" }}>
        <Tabs
          indicatorColor="primary"
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
          }}
        >
          <Tab label="Player Profile" component={Link} to="/player" />
          <Tab label="Stats" component={Link} to="/playerstats" />
          <Tab label="Game Log" component={Link} to="/gamelog" />
          <Tab label="Awards" component={Link} to="/awards" />
          <Tab
            label="Scouting Reports"
            component={Link}
            to="/previousreports"
          />
          <Tab label="Add Scouting Report" component={Link} to="/scouting" />
          <Tab
            style={{ marginLeft: "auto" }}
            label="Team Profile"
            component={Link}
            to="/team"
          />
          <Tab label="Home" component={Link} to="/" />
        </Tabs>
      </AppBar>
    </div>
  );
}

export default PlayerAppBar;
