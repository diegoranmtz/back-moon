var mongoose = require("mongoose");

var Schema = mongoose.Schema;
var accionSchema = new Schema({

  paginaKey: {type: String, unique:true, required: [true, "La pagina es necesaria"]},
  name: {type: String, unique:true, required: [true, "La accion es necesaria"]}
});

module.exports = mongoose.model("Accion", accionSchema);
