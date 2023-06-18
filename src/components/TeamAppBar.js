import React from "react";
import { Link } from "react-router-dom";
import { AppBar, Tabs, Tab } from "@material-ui/core";

// Navigation Bar for the Team Profile Pages

function TeamAppBar() {
  return (
    <div>
      <AppBar position="static" style={{ backgroundColor: "#ff6e40" }}>
        <Tabs indicatorColor="primary" style={{ color: "white" }}>
          <Tab label="Team Profile" component={Link} to="/team" />
          <Tab label="Schedule" component={Link} to="/schedule" />
          <Tab label="Upcoming Games" component={Link} to="/nextgames" />
          <Tab label="Team Stats" component={Link} to="/teamstats" />
          <Tab label="Salary" component={Link} to="/salary" />
          <Tab label="Injury Report" component={Link} to="/injury" />
          <Tab label="Standings" component={Link} to="/standings" />
          <Tab
            label="Player Profile"
            component={Link}
            to="/player"
            style={{ marginLeft: "auto" }}
          />
          <Tab label="Home" component={Link} to="/" />
        </Tabs>
      </AppBar>
    </div>
  );
}

export default TeamAppBar;
