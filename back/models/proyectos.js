const { Schema, model } = require("mongoose");
const mongoosePaginate = require("mongoose-paginate-v2");

const proyectosSchema = Schema(
  {
    nombre: {
      type: String,
      required: true,
    },
    detalle: {
      type: String,
      required: true,
    },
    link: {
      type: String,
      required: true,
    },
    usuario: {
      type: Schema.ObjectId,
      ref: "personales",
    },
  },
  { collection: "proyecto" }
);
proyectosSchema.plugin(mongoosePaginate);
module.exports = model("proyectos", proyectosSchema, "proyectos");
