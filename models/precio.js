var mongoose = require("mongoose");

var Schema = mongoose.Schema;
var precioSchema = new Schema({

  index: {type: String, required: [true, "Index es necesario"]},
  key: {type: String, required: [true, "La accion es necesaria"]},
  precio: {type: Number, required: [true, "El precio es necesario"]},
  lastPrecio: {type: Number, required: [true, "El lastPrecio es necesario"]}
});

module.exports = mongoose.model("Precio", precioSchema);
