const express = require("express"); //just importing the express library
const app = express(); //my application is an express aplication

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

//right after we do const express and const app
app.listen(8000, () => {
  console.log("server running on 8000");
});
