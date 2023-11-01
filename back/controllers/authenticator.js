const jwt = require("jsonwebtoken");

// const authenticator = (req, res, next) => {
//     TODO://Se valida en el header de postman cuando se va a validar pasando su JWT
//   //verifica el token valido en el header de la request, en la propiedad authorization
//   const jwtToken = req.header("Authorization");
//   if (!jwtToken) {
//     return res.status(400).send({
//       resultado: "error",
//       mensaje: "Acceso denegado, No tiene token valido",
//     });
//   }
//   try {
//     const payload = jwt.verify(jwtToken, "SeCrEtO");
//     req.user = payload;
//     next();
//   } catch (error) {
//     return res.status(400).send({
//       error: error.message,
//     });
//   }
// };

// module.exports = authenticator;
