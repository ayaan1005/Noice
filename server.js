const discord = require("discord.js");
const client = new discord.Client();

var express = require("express");
var app = express();
var path = require("path");
var bodyParser = require("body-parser")

app.use(bodyParser.urlencoded({extended: true}));
app.set("views", path.join(__dirname, "/views"));
app.set("view engine", "ejs")
app.use(express.static("public"));

app.get("/", function(req, res) {
  res.render("index", {client: client})
  res.sendStatus(200)
});
app.listen(3000)
app.get("/commands", (request, response) => {
  response.sendFile(__dirname + "/views/commands.html");
});



client.on("ready", () => {
  console.log("I am Looking Forward to this :D")
})

client.login("Njk4NDk3MTkyOTM1MTYxODY2.XpGsNA.iqh_67zYjmtMvYP9MVhou-0tFzA")