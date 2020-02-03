var mongoose = require("mongoose");
var uniqueValidator = require("mongoose-unique-validator");

var Schema = mongoose.Schema;
var usuarioSchema = new Schema({

  name: {type: String, required: [true, "El nombre es necesario"]},
  account: {type: String, unique:true, required: [true, "El usuario es necesario"]},
  password: {type: String, required: [true, "La contraseña es necesaria"]},
});

usuarioSchema.plugin(uniqueValidator, {message:"{PATH} debe de ser unico"});

module.exports = mongoose.model("Usuario", usuarioSchema);
