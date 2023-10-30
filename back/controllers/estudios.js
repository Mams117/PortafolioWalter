let estudios = require("../models/estudios");
let estudios1 = require("../models/personales");

const crear = (req, res) => {
  const params = req.body;
  if (!params.texto) {
    return res.status(404).send({
      status: "error",
      mensaje: "no hay datos en la peticion !",
    });
  }
  // instanciamos el objeto
  try {
    let estudiosNuevo = new Publicacion(params);
    estudiosNuevo.Publicacion = req.user.userId;
    estudiosNuevo.Publicacion = req.body.tipo;
    estudiosNuevo.Publicacion = req.body.detalle;
    estudiosNuevo.Publicacion = req.body.fechaFin;
    estudiosNuevo.Publicacion = req.body.notas;
    estudiosNuevo.save();
    return res.status(200).send({
      status: "ok",
      mensaje: "Exitosa",
      estudiosNuevo,
    });
  } catch (error) {
    return res.status(500).send({
      status: "error",
      mensaje: "No fue posible efectuar la operacion !",
      error: error.message,
    });
  }
};
const detalleEstudios = async (req, res) => {
  let idPublicacion = req.params.id;

  try {
    let consulta = await Publicacion.findById(idPublicacion).exec();
    return res.status(200).send({
      status: "ok",
      mensaje: "Estudio encontrado !",
      consulta,
    });
  } catch (error) {
    return res.status(500).send({
      status: "error",
      mensaje: "No es posible ejecutar la operación !",
      error: error.message,
    });
  }
};
const eliminarPublicacion = async (req, res) => {
  let idPublicacion = req.params.id;

  try {
    let consulta = await Publicacion.findOneAndDelete({
      usuario: req.user.userId,
      _id: idPublicacion,
    }).exec();

    return res.status(200).send({
      status: "ok",
      mensaje: "estudio eliminado Correctamente !",
      consulta,
    });
  } catch (error) {
    return res.status(500).send({
      status: "error",
      mensaje: "No es posible ejecutar la operación !",
      error: error.message,
    });
  }
};
module.exports = { crear, detalleEstudios, eliminarPublicacion };
