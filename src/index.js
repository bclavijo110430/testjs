const express = require("express");
const app = express();

app.post("/servicename/ac-azure-ot-configServerpoc", function (req, res) {
  res.send("se recibio el mensaje ");
  console.log("se recibió un mensaje");
});

app.listen(3000, function () {
  console.log("Tu aplicación está viva por el puerto 3000!");
});
