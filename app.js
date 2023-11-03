var express = require("express");
var app = express();

app.get("/", function (req, res) {
  res.send("<html><body>PRIMEIRA PÁGINA USANDO EXPRESS</body></html>");
});

app.get("/noticiasEsporte", function (req, res) {
  res.send(
    "<html><body>Página referente as notícias de esporte.</body></html>"
  );
});

app.get("/noticiasModa", function (req, res) {
  res.send("<html><body>Página referente as notícias de moda.</body></html>");
});

app.listen(3000, function () {
  console.log("ESTÁ OUVINDO EXPRESS - SERVER ");
});
