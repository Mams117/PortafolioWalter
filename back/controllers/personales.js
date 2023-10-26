let estudios = require("../models/estudios");
let bcrypt = require("bcrypy");
let jasonWebToken = require("jsonwebtoken");

//Funciones

const registrar = async (req, res) => {
  try {
    let datos = req.body;

    //crea el objeto

    const usuarioNuevo = new usuario(datos);

    //validacion para que no se repitan los usuarios
    let consultaUsuarios = await Perfil.find({
      $or: [
        {
          email: usuarioNuevo.email.toLowerCase(),
          telefono: usuarioNuevo.telefono.toLowerCase(),
        },
      ],
    }).exec();
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
      return res.status(200).json({
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
module.exports = { registrar, login };
