var express = require("express");
var app = express();

var Pagina = require("../models/pagina");

//=========================================================
// Select by user
//=========================================================
app.post("/",(req, res)=>{

  var body = req.body;

  Pagina.find({usuario: body.usuario},(err, paginaBD)=>{
    if(err){
      return res.status(500).json({
        ok: false,
        mensaje: "Error al buscar usuario",
        errors: err
      });
    }

    if(!paginaBD){
      return res.status(200).json({
        ok: false,
        mensaje: "No hay registro",
        errors: err
      });
    }

    res.status(200).json({
      ok: true,
      acion: paginaBD,
      id: paginaBD._id,
    });
  });
});
module.exports = app;
