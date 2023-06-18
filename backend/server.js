const express = require("express");
const app = express();
const fs = require("fs");
const path = require("path");
const cors = require("cors");

require("dotenv").config();

const PORT = process.env.PORT || 5000;

// Server side configuration of the website

app.use(express.json());
app.use(cors());
app.use(express.static(path.join(__dirname, "..", "build")));

// This gets the scouting report data from the json file

app.get("/scouting", (req, res) => {
  const data = fs.readFileSync(
    path.join(__dirname, "..", "src", "data", "oladipo.json"),
    "utf8"
  );
  const parsedData = JSON.parse(data);
  const scoutingReports = parsedData.scoutingReports;

  res.json(scoutingReports);
});

// This posts the new scouting report to the json file

app.post("/scouting", (req, res) => {
  const data = fs.readFileSync(
    path.join(__dirname, "..", "src", "data", "oladipo.json"),
    "utf8"
  );
  const parsedData = JSON.parse(data);
  const scoutingReports = parsedData.scoutingReports;

  const newReport = {
    player: req.body.player,
    date: new Date().toISOString(),
    team: req.body.team,
    report: req.body.report,
  };

  scoutingReports.push(newReport);

  const updatedData = JSON.stringify(parsedData, null, 2);

  fs.writeFileSync(
    path.join(__dirname, "..", "src", "data", "oladipo.json"),
    updatedData,
    "utf8"
  );

  res.status(201).json({ message: "Scouting Reports updated successfully" });
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "build", "index.html"));
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
