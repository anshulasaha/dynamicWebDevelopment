const express = require("express");
const nedb = require("@seald-io/nedb");
const path = require("path");

const app = express();

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

const database = new nedb({
  filename: path.join(__dirname, "database.txt"),
  autoload: true,
});

let serialNumber = 1;

database.count({}, (err, count) => {
  if (err) {
    console.log("Error counting existing entries:", err);
    return;
  }

  serialNumber = count + 1;
  console.log("Next serial number will be:", serialNumber);
});

app.get("/test", (req, res) => {
  res.send("server working");
});

app.post("/add-care", (req, res) => {
  const dataToBeAdded = {
    serialNumber: serialNumber,
    careOne: req.body.careOne,
    careTwo: req.body.careTwo,
  };

  database.insert(dataToBeAdded, (err, dbData) => {
    if (err) {
      console.log("Database insert error:", err);
      return res.status(500).send("Database error");
    }

    serialNumber++;
    console.log("Added entry:", dbData);
    res.redirect("/guestbook.html");
  });
});

app.get("/all-entries", (req, res) => {
  let query = {};

  database.find(query, (err, dbData) => {
    if (err) {
      console.log(err);
      res.status(500).json({ error: "Database error" });
      return;
    }

    res.json({ entries: dbData });
  });
});

app.get("/", (req, res) => {
  res.sendFile("index.html", { root: "./public" });
});

app.listen(8000, () => {
  console.log("server running on 8000");
});
