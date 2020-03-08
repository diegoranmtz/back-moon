var express = require("express");
var app = express();

var Pagina = require("../models/pagina");

//=========================================================
// Select by user
//=========================================================
app.post("/guardar/", (req, res)=>{

  var body = req.body;
  var pagina = new Pagina({
    usuario: body.usuario,
    paginaKey: body.paginaKey,
    accionKey: body.accionKey,
    precioBuy: body.precioBuy,
    cantidad: body.cantidad
  });

  pagina.save((err, hospitalGuardado)=>{
    if (err) {
      return res.status(400).json({
        ok: false,
        mensaje: "Error guardar pagina",
        errors: err
      });
    }

    res.status(201).json({
      ok: true,
      pagina: hospitalGuardado
    });
  });
});

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
//=========================================================
// Select by accionKey and User
//=========================================================
app.post("/accionUser/",(req, res)=>{

  var body = req.body;

  Pagina.find({usuario: body.usuario, accionKey: body.accionKey},(err, paginaBD)=>{
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

//=========================================================
// Actualizar pagina
//=========================================================
app.put("/:id", (req, res)=>{

  var id = req.params.id;
  var body = req.body;

  Pagina.findById(id, (err, pagina)=>{

    if (err) {
      return res.status(200).json({
        ok: false,
        mensaje: "Error al buscar pagina",
        errors: err
      });
    }

    if(!pagina){
      return res.status(200).json({
        ok: false,
        mensaje: "La página con id "+id+" no existe",
        errors: {mesage: "No existe una página con ese ID"}
      });
    }

    pagina.precioBuy = body.precioBuy;
    pagina.cantidad = body.cantidad;

    pagina.save((err, paginaGuardado)=>{

      if (err) {
        return res.status(400).json({
          ok: false,
          mensaje: "Error al actualizar pagina",
          errors: err
        });
      }

      res.status(200).json({
        ok: true,
        mensaje: paginaGuardado
      });
    });
  });
});

//=========================================================
// Borrar pagina
//=========================================================
app.delete("/:id", (req, res)=>{

  var id = req.params.id;

  Pagina.findByIdAndRemove(id, (err, paginaBorrado)=>{

    if (err) {
      return res.status(500).json({
        ok: false,
        mensaje: "Error al borrar pagina",
        errors: err
      });
    }

    if (!paginaBorrado) {
      return res.status(400).json({
        ok: false,
        mensaje: "El pagina no existe",
        errors: {message: " El pagina con ese id no existe"}
      });
    }

    res.status(200).json({
      ok: true,
      hospital: paginaBorrado
    });
  });
});
module.exports = app;
