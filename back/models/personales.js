const { Schema, model } = require("mongoose");
const mongoosePaginate = require("mongoose-paginate-v2");

const personalesSchema = Schema(
  {
    nombre: {
      type: String,
      required: true,
    },
    apellidos: {
      type: String,
      required: true,
    },
    fechaNacimiento: {
      type: Date,
    },
    direccion: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    telefono: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      require: true,
    },
  },
  { collection: "personales" }
);
personalesSchema.plugin(mongoosePaginate);
module.exports = model("personales", personalesSchema, "personales");
