// router de personales
const express = require("express");
const router = express.Router();
const multer = require("multer");
const personalesControlador = require("../controllers/personales");
const authenticator = require("../controllers/authenticator");

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
