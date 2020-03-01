var express = require("express");
var app = express();

var Monedero = require("../models/monedero");

//=========================================================
// Select by paginaKey
//=========================================================
app.post("/",(req, res)=>{

  var body = req.body;

  Monedero.find({paginaKey: body.paginaKey},(err, paginaBD)=>{
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
