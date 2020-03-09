var express = require("express");
var app = express();

var Precio = require("../models/precio");

//=========================================================
// Select by accionKey and  de last 7
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
  }).sort({index:-1}).limit(7);
});

//=========================================================
// guardar precio
//=========================================================
app.post("/guardar/", (req, res)=>{

  var body = req.body;
  var pagina = new Precio({
    index: body.index,
    accionKey: body.accionKey,
    precio: body.precio,
    lastPrecio: body.lastPrecio
  });

  pagina.save((err, precioGuardado)=>{
    if (err) {
      return res.status(400).json({
        ok: false,
        mensaje: "Error guardar precio",
        errors: err
      });
    }

    res.status(201).json({
      ok: true,
      precio: precioGuardado
    });
  });
});

//=========================================================
// Select by accionKey and  de last
//=========================================================
app.post("/last/",(req, res)=>{

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
  }).sort({index:-1}).limit(1);
});
module.exports = app;
