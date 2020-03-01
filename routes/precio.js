var express = require("express");
var app = express();

var Precio = require("../models/precio");

//=========================================================
// Select by accionKey
//=========================================================
app.post("/",(req, res)=>{

  var body = req.body;

  Precio.find({accionKey: body.accionKey},(err, precioBD)=>{
    if(err){
      return res.status(500).json({
        ok: false,
        mensaje: "Error al buscar precio",
        errors: err
      });
    }

    if(!precioBD){
      return res.status(200).json({
        ok: false,
        mensaje: "No hay registro",
        errors: err
      });
    }

    res.status(200).json({
      ok: true,
      acion: precioBD,
      id: precioBD._id,
    });
  });
});
module.exports = app;
