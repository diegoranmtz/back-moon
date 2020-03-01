var mongoose = require("mongoose");

var Schema = mongoose.Schema;
var monederoSchema = new Schema({

  paginaKey: {type: String, unique:true, required: [true, "La pagina es necesaria"]},
  name: {type: String, unique:true, required: [true, "El nombre es necesario"]}
});

module.exports = mongoose.model("Monedero", monederoSchema);
