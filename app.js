const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const ejs = require('ejs');
const $ = require('jquery');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.set("view engine", "ejs");

app.use("/", express.static("views"));




app.listen(process.env.PORT, process.env.IP, function() {
    console.log("Now listening for requests");
});


