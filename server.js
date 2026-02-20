const express = require("express");
const app = express();

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

let moments = [];

// test
app.get("/test", (req, res) => {
  res.send("server working");
});

app.post("/add-moment", (req, res) => {
  moments.push({
    event: req.body.event,
    felt: req.body.felt,
    rating: req.body.rating,
  });

  res.redirect("/journal.html");
});

app.get("/all-moments", (req, res) => {
  res.json({ moments: moments });
});

app.listen(8000, () => {
  console.log("server running on 8000");
});
