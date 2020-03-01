var express = require("express");
var app = express();

var Accion = require("../models/accion");

//=========================================================
// Select by pagina
//=========================================================
app.post("/",(req, res)=>{

  var body = req.body;

  Accion.find({paginaKey: body.paginaKey},(err, accionBD)=>{
    if(err){
      return res.status(500).json({
        ok: false,
        mensaje: "Error al buscar accion",
        errors: err
      });
    }

    if(!accionBD){
      return res.status(200).json({
        ok: false,
        mensaje: "No hay registro",
        errors: err
      });
    }

    res.status(200).json({
      ok: true,
      acion: accionBD,
      id: accionBD._id,
    });
  });
});
module.exports = app;
