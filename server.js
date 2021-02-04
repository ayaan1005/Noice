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
  res.sendFile(__dirname + "/views/embed.html")
});
app.listen(3000) 
app.get("/commands", (request, response) => {
  response.sendFile(__dirname + "/views/commands.html");
});
app.get("/contact-us", (request, response) => {
  response.sendFile(__dirname + "/views/contact-us.html");
});
app.get("/js/embedg/fields.js", (request, response) => {
  response.sendFile(__dirname + "/js/embedg/fields.js");
});
app.get("/js/embedg/json_code.js", (request, response) => {
  response.sendFile(__dirname + "/js/embedg/json_code.js");
});
app.get("/js/embedg/preview.js", (request, response) => {
  response.sendFile(__dirname + "/js/embedg/preview.js");
});
app.get("/js/embedg/save_retieve.js", (request, response) => {
  response.sendFile(__dirname + "/js/embedg/save_retieve.js");
});
app.get("/js/embedg/webhook.js", (request, response) => {
  response.sendFile(__dirname + "/js/embedg/webhook.js");
});
app.get("/assest/css/style.min.css", (request, response) => {
  response.sendFile(__dirname + "/assest/css/style.min.css");
});
app.get("/assest/css/contact.css", (request, response) => {
  response.sendFile(__dirname + "/assest/css/contact.css");
});
app.get("/community", (request, response) => {
   response.redirect("https://discord.gg/qBbgnxs")
});
app.get("/dashboard", (request, response) => {
   response.redirect("https://alix-gg.glitch.me/")
});
app.get("/invite", (request, response) => {
   response.redirect("https://discord.com/oauth2/authorize?client_id=693846748824862770&scope=bot&permissions=2081815807")
});
app.get('/:input', function(req, res) {
  console.log(req.params.input);
  res.redirect("https://discord.com")
});
app.get("*", (request, response) => {
  response.sendFile(__dirname + "/views/404.html");
});



client.on("ready", () => {
  console.log("I am Looking Forward to this :D")
})

client.login("NzI3NzgxNDg2Njg1NzE2NDgy.Xvw1Uw.CBnniJXewshrHmXnVek_nqpqxlc")