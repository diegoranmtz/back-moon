var express = require("express");
var app = express();
var bcrypt = require("bcryptjs");

var Usuario = require("../models/usuario");

app.post("/",(req, res)=>{

  var body = req.body;

  Usuario.findOne({account: body.account},(err, usuarioDB)=>{
    if(err){
      return res.status(500).json({
        ok: false,
        mensaje: "Error al buscar usuario",
        errors: err
      });
    }

    if(!usuarioDB){
      return res.status(200).json({
        ok: false,
        mensaje: "Credenciales incorrectas -cuenta",
        errors: err
      });
    }

    if (body.password !== usuarioDB.password) {
      return res.status(200).json({
        ok: false,
        mensaje:"Credenciales incorrectas - password",
        errors: err
      });
    }

     usuarioDB.password = ':)';

    res.status(200).json({
      ok: true,
      usuario: usuarioDB,
      id: usuarioDB._id,
    });
  });
});
module.exports = app;
