var mongoose = require("mongoose");

var Schema = mongoose.Schema;
var paginaSchema = new Schema({
  usuario: {type: String, required: [true, "La pagina es necesaria"]},
  paginaKey: {type: String, required: [true, "La key es necesaria"]},
  accionKey: {type: String, required: [true, "El nombre es necesaria"]},
  precioBuy: {type: Number, required: [true, "El cuenta es necesaria"]},
  cantidad: {type: Number, required: [true, "La cantidad es necesaria"]}
});

module.exports = mongoose.model("Pagina", paginaSchema);
