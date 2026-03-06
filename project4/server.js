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

  res.redirect("/journal.html"); //this kinf of takes you back to the initial route after filling out the form because after pushing the
  //data is it going back to the first file (because filling out the form is just front end changing)
});

app.get("/all-moments", (req, res) => {
  res.json({ moments: moments });
});

//right after we do const express and const app
app.listen(8000, () => {
  console.log("server running on 8000");
});
