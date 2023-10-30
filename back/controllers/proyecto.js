let estudios = require("../models/proyectos");

const crearProyectos = async (req, res) => {
  let data = {
    tipo: req.body.tipo,
    detalle: req.body.detalle,
    fechaFin: req.body.fechaFin,
    notas: req.body.notas,
  };
  const params = req.body;
  if (!params.texto) {
    return res.status(404).send({
      status: "error",
      mensaje: "no hay datos en la peticion !",
    });
  }
  // instanciamos el objeto
  try {
    let proyectosNuevo = new Publicacion(params);
    proyectosNuevo.Publicacion = req.user.userId;
    proyectosNuevo.Publicacion = req.body.tipo;
    proyectosNuevo.Publicacion = req.body.detalle;
    proyectosNuevo.Publicacion = req.body.fechaFin;
    proyectosNuevo.Publicacion = req.body.notas;
    proyectosNuevo = data;
    proyectosNuevo.save();
    return res.status(200).send({
      status: "ok",
      mensaje: "Exitosa",
      proyectosNuevo,
    });
  } catch (error) {
    return res.status(500).send({
      status: "error",
      mensaje: "No fue posible efectuar la operacion !",
      error: error.message,
    });
  }
};
const detalleProyectos = async (req, res) => {
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
const eliminarProyectos = async (req, res) => {
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
module.exports = { crearProyectos, detalleProyectos, eliminarProyectos };
