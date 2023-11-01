let Publicacion = require("../models/proyectos");

const crearProyectos = async (req, res) => {
  const params = req.body;
  // instanciamos el objeto
  try {
    let proyectosNuevo = new Publicacion(params);

    // proyectosNuevo.Publicacion = req.body.nombre;
    // proyectosNuevo.Publicacion = req.body.detalle;
    // proyectosNuevo.Publicacion = req.body.link;
    // proyectosNuevo = data;
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
      _id: idPublicacion,
    }).exec();

    return res.status(200).send({
      status: "ok",
      mensaje: "proyecto eliminado Correctamente !",
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
