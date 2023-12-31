// router de personales
const express = require("express");
const router = express.Router();
const multer = require("multer");
const personalesControlador = require("../controllers/personales");
//const authenticator = require("../controllers/authenticator");

//configuracion de subidad de archivos

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./images/img");
  },
  filename: (req, file, cb) => {
    cb(null, "avatar-" + Date.now() + "-" + file.originalname);
  },
});

const uploads = multer({ storage });

router.post("/personales/registrar", personalesControlador.registrar);
router.get("/personales/login", personalesControlador.login);
router.get("/personales/listar", personalesControlador.listar);

router.post(
  "/personales/upload/:id",
  uploads.single("file0"),
  personalesControlador.upload
);
router.put("/personales/editar/:id", personalesControlador.editar);
router.post("/personales/login", personalesControlador.login);
router.post("/personales/borrarUno/:id", personalesControlador.borrarUno);
module.exports = router;
