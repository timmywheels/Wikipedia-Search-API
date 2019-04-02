const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const ejs = require('ejs');
const $ = require('jquery');
var urlencodedParser = bodyParser.urlencoded({ extended: false });

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));
app.use('public/assets', express.static('assets'));

app.set("view engine", "ejs");

app.get('/', function(req, res) {
    res.render('index');
});




function submit() {
    const wikiQuery = document.getElementById('query').value;
    var api = "https://cors-anywhere.herokuapp.com/https://en.wikipedia.org/w/api.php?action=opensearch&search=" + wikiQuery + "&format=json&callback=?";


    fetch(api).then(function(response) {
            return response.json();
        })
        .then(function(myJson) {
            console.log(JSON.stringify(myJson));
        });
}


app.listen(process.env.PORT, process.env.IP, function() {
    console.log("Now listening for requests");
});
