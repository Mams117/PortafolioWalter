const express = require("express");
const cors = require("cors");
const conexion = require("./models/conexion");

//inicia base de datos
conexion();
//creamos el server node
const app = express();
const puerto = 3900;

//setting cors :: middleware para evitar error de rutas cruzadas

app.use(cors());
//convertir body de las peticiones a json
app.use(express.json());
//recibir body de los formularios
app.use(express.urlencoded({ extended: true }));

//rutas con MVC
const rutasEstudios = require("./routes/estudios");
const rutasPersonales = require("./routes/personales");
const rutasProyectos = require("./routes/proyectos");

app.use("/api", rutasEstudios);
app.use("/api", rutasPersonales);
app.use("/api", rutasProyectos);

app.listen(puerto, () => {
  console.log("server ejecutandose", puerto);
});
