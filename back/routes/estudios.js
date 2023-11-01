const express = require("express");
const router = express.Router();
const multer = require("multer");
const estudiosControlador = require("../controllers/estudios");
//const authenticator = require("../controllers/authenticator");

//configuracion de subidad de archivos

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./uploads/avatars/");
  },
  filename: (req, file, cb) => {
    cb(null, "avatar-" + Date.now() + "-" + file.originalname);
  },
});

const uploads = multer({ storage });

router.post("/estudios/crear", estudiosControlador.crear);
router.get(
  "/estudios/detalleEstudios/:id",
  estudiosControlador.detalleEstudios
);
router.post(
  "/estudios/eliminarEstudios/:id",
  estudiosControlador.eliminarEstudios
);
module.exports = router;
