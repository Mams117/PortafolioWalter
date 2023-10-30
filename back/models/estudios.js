const { Schema, model } = require("mongoose");
const mongoosePaginate = require("mongoose-paginate-v2");

const estudiosSchema = Schema(
  {
    tipo: {
      type: String,
      required: true,
    },
    detalle: {
      type: String,
      required: true,
    },
    fechaFin: {
      type: Date,
      required: true,
    },
    notas: {
      type: String,
      required: true,
    },
    usuario: {
      type: Schema.ObjectId,
      ref: "personales",
    },
  },
  { collection: "estudios" }
);
estudiosSchema.plugin(mongoosePaginate);
module.exports = model("estudios", estudiosSchema, "estudios");
