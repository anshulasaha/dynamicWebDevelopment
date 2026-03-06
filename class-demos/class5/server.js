const express = require("express"); //just importing the express library
//const app = express(); //my application is an express aplication

const nedb = require("seald-io/nedb");

const app = express();
const database = new nedb({ filename: "database" });

app.use(express.static("assets"));
app.use(express.urlencoded({ extended: true }));

//database.insert is the only thing that is diffreent so it is like this file that is being CREATED.
//vs like going to another page with /all-posts
