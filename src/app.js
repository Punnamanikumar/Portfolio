const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const sendMail = require("./email");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

const publicDirectoryPath = path.join(__dirname, "../public");
app.use(express.static(publicDirectoryPath));

app.set("view engine", "hbs");
const viewsDirectoryPath = path.join(__dirname, "../views");

app.get("/", (req, res) => {
  res.sendFile(viewsDirectoryPath + "/index.html");
});

app.post("/", (req, res) => {
  console.log(req.body);
  const { subject, text } = req.body;
  sendMail(subject, text, (err, data) => {
    if (err) res.sendFile(viewsDirectoryPath + "/failure.html");
    else res.sendFile(viewsDirectoryPath + "/sucess.html");
  });
});

app.listen(process.env.PORT || 3000, () => {
  console.log("Server Started");
});
