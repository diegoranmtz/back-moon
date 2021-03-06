var express = require("express");
var mongoose = require("mongoose");
var bodyParser = require("body-parser");

// Inicializar variables
var app = express();

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "POST, GET, PUT, DELETE, OPTIONS");
  next();
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

var accionRoutes = require("./routes/accion");
var loginRoutes = require("./routes/login");
var monederoRoutes = require("./routes/monedero");
var paginaRoutes = require("./routes/pagina");
var precioRoutes = require("./routes/precio");
var usuarioRoutes = require("./routes/usuario");

mongoose.connection.openUri("mongodb://localhost:27017/moon",(err,res)=>{
  if (err) throw err;

  console.log("Base de datos: \x1b[32m%s\x1b[0m", "online");
});

app.use("/accion", accionRoutes);
app.use("/login", loginRoutes);
app.use("/monedero", monederoRoutes);
app.use("/pagina", paginaRoutes);
app.use("/precio", precioRoutes);
app.use("/usuario", usuarioRoutes);

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
