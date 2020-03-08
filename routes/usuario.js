var express = require("express");
var app = express();


var Usuario = require("../models/usuario");


//=========================================================
// Crear un nuevo usuario
//=========================================================
app.post("/", (req, res)=>{

  var body = req.body;
  var usuario = new Usuario({
    name: body.name,
    account: body.account,
    password: body.password
  });

  usuario.save((err, usuarioGuardado)=>{
    if(err){
      return res.status(200).json({
        ok: false,
        mensaje: "Error guardar usuario",
        errors: err
      });
    }

    res.status(201).json({
      ok: true,
      usuario: usuarioGuardado
    });
  });
});

//=========================================================
// Select by account
//=========================================================
app.post("/user/",(req, res)=>{

  var body = req.body;

  Usuario.find({account: body.account},(err, usuarioBD)=>{
    if(err){
      return res.status(500).json({
        ok: false,
        mensaje: "Error al buscar usuario",
        errors: err
      });
    }

    if(!usuarioBD){
      return res.status(200).json({
        ok: false,
        mensaje: "No hay registro",
        errors: err
      });
    }

    res.status(200).json({
      ok: true,
      acion: usuarioBD,
      id: usuarioBD._id,
    });
  });
});

module.exports = app;
