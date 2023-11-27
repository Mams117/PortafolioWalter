let usuario = require("../models/personales");
let bcrypt = require("bcrypt");
let jasonWebToken = require("jsonwebtoken");

//Funciones

const registrar = async (req, res) => {
  try {
    let datos = req.body;

    //crea el objeto

    const usuarioNuevo = new usuario(datos);
    //validacion para que no se repitan los usuarios
    let consultaUsuarios = await usuario
      .find({
        $or: [
          {
            email: usuarioNuevo.email.toLowerCase(),
            telefono: usuarioNuevo.telefono.toLowerCase(),
          },
        ],
      })
      .exec();
    // encriptar y salvar
    if (consultaUsuarios.length >= 1) {
      return res.status(400).json({
        mensaje: "ya existe el email o el telefono",
      });
    } else {
      //encriptar y salvar
      let password = await bcrypt.hash(usuarioNuevo.password, 10);
      usuarioNuevo.password = password;
      usuarioNuevo.save();
      return res.status(200).send({
        mensaje: "Insertado con exito",
      });
    }
  } catch (error) {
    return res.status(404).send({
      nombreError: error.name,
      Mensaje: "Error en la consulta : " + error.message,
    });
  }
};
const login = async (req, res) => {
  //datos de la peticion (body)
  let data = req.body;

  //validamos que la data esté completa
  if (!data.email || !data.password) {
    res.status(400).send({
      resultado: "error",
      mensaje: "faltan datos por enviar del formulario ! ",
    });
  }

  // buscar en la bd el usuario  y validar
  let consulta = await Perfil.findOne({ email: data.email }).exec();
  if (consulta == null) {
    return res.status(400).send({
      resultado: "error",
      mensaje: "Usuario no existe en la BD",
      consulta,
    });
  } else {
    let pwd = bcrypt.compareSync(data.password, consulta.password);
    if (!pwd) {
      return res.status(400).send({
        resultado: "error",
        mensaje: "Password Erronea !",
      });
    }
  }

  //generamos el token  --- sencillo

  const token = jwt.sign(
    {
      userId: consulta._id,
      email: consulta.email,
    },
    "tokenGenerado",
    {
      expiresIn: "1d",
    }
  );

  //resultado final del método
  return res.status(200).send({
    resultado: "success",
    mensaje: " Ingreso exitoso !",
    user: {
      id: consulta._id,
      email: consulta.email,
      token: token,
    },
  });
};
const listar = async (req, res) => {
  try {
    let limite = req.params.limite;
    let consulta = await Perfil.find({}).sort({ _id: -1 }).limit(limite).exec();
    return res.status(200).send({
      longitud_resultado: consulta.length,
      resultado: consulta,
    });
  } catch (error) {
    return res.status(404).send({
      nombreError: error.name,
      Mensaje: "Error en la consulta : " + error.message,
    });
  }
};
const editar = async (req, res) => {
  try {
    let id = req.params.id;
    let data = req.body;

    let consulta = await Perfil.findOneAndUpdate({ _id: id }, data).exec();
    return res.status(200).send({
      resultado: "success",
      consulta,
    });
  } catch (error) {
    return res.status(404).send({
      nombreError: error.name,
      Mensaje: "Error en la actualizacion : " + error.message,
    });
  }
};
const borrarUno = async (req, res) => {
  try {
    //obtener el id
    let id = req.params.id;
    consulta = await Perfil.findOneAndDelete(id).exec();
    return res.status(200).send({
      resultado: "success",
    });
  } catch (error) {
    return res.status(404).send({
      nombreError: error.name,
      Mensaje: "Error en la consulta : " + error.message,
    });
  }
};
const upload = async (req, res) => {
  try {
    // id de perfil
    let id = req.params.id;
    //cargar nombre del archivo
    let imagen = req.file.originalname;
    //sacar extension de archivo
    const imagenExtension = imagen.split(".");
    const extension = imagenExtension[1];
    if (extension != "png" && extension != "jpeg" && extension != "jpg") {
    } else {
      await Perfil.findOneAndUpdate(
        { id: id },
        { foto: req.file.filename },
        { new: true }
      );
      return res.status(200).send({
        status: "exitoso",
        mensaje: "subida de imagenes exitosa",
        files: req.file,
      });
    }
  } catch (error) {
    return res.status(404).send({
      nombreError: error.name,
      Mensaje: "Error  : " + error.message,
    });
  }
};
module.exports = { registrar, login, listar, editar, borrarUno, upload };
