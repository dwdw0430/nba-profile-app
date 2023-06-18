import React from "react";
import logo from "./logo.svg";
import "./App.css";

import playerData from "./data/oladipo.json";

import { Link } from "react-router-dom";

import {
  AppBar,
  Tabs,
  Tab,
  Typography,
  Card,
  CardContent,
  Grid,
  CardMedia,
} from "@material-ui/core";

//For the NBA logo on the home page
import NBAlogo from "./image/nba-logo-transparent.png";

// Home Page of the website
// Main navigation bar on the top, two buttons each leading to player and team page
// Website uses three main colors: white, #ff6e40, and #1e3d59

function Home() {
  const { bio } = playerData;
  return (
    <div>
      <AppBar position="static" style={{ backgroundColor: "#ff6e40" }}>
        <Tabs indicatorColor="primary" centered style={{ color: "white" }}>
          <Tab label="NBA Profile" component={Link} to="/" />
        </Tabs>
      </AppBar>
      <div style={{ overflow: "hidden" }}>
        <Grid
          container
          justify="center"
          alignItems="center"
          style={{ height: "75vh" }}
          spacing={5}
        >
          <Grid item>
            <Card
              variant="outlined"
              style={{
                backgroundColor: "#1e3d59",
                maxWidth: "300px",
                borderRadius: "15px",
              }}
            >
              <CardContent>
                <Link
                  to="/team"
                  style={{
                    textDecoration: "none",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <CardMedia
                    component="img"
                    src={NBAlogo}
                    alt="NBA logo"
                    style={{ width: "23%", height: "auto", margin: "auto" }}
                  />
                  <Typography
                    variant="h5"
                    align="center"
                    style={{
                      color: "white",
                      fontWeight: "bold",
                      paddingTop: "3vh",
                    }}
                  >
                    Team Profile
                  </Typography>
                  <Typography
                    variant="body1"
                    align="center"
                    style={{ color: "white" }}
                  >
                    Explore Team Information and Stats
                  </Typography>
                </Link>
              </CardContent>
            </Card>
          </Grid>

          <Grid item>
            <Card
              variant="outlined"
              style={{
                backgroundColor: "#1e3d59",
                maxWidth: "300px",
                borderRadius: "15px",
              }}
            >
              <CardContent>
                <Link
                  to="/player"
                  style={{
                    textDecoration: "none",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <CardMedia
                    component="img"
                    src={bio[0].photoUrl}
                    alt="Player"
                    style={{ width: "70%", height: "auto", margin: "auto" }}
                  />
                  <Typography
                    variant="h5"
                    align="center"
                    style={{
                      color: "white",
                      fontWeight: "bold",
                      paddingTop: "3vh",
                    }}
                  >
                    Player Profile
                  </Typography>
                  <Typography
                    variant="body1"
                    align="center"
                    style={{ color: "white" }}
                  >
                    View Player Profile and Statistics
                  </Typography>
                </Link>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default Home;
