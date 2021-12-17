const express = require('express');
// puerto
const port = 8080;
const mongoose = require("mongoose");

//modelos/squemas
const usuarios = require("./models/usuariosModels")
const datospersonales = require("./models/bvqrformsmodel")

//aplicacion express
const app = express();



const cors = require('cors');
app.use(cors())
app.use(express.json())

//coneccion con la base de datos
mongoose.connect("mongodb://127.0.0.1:27017/banca")
    .then(res => console.log("conectado a base de datos"))
    .catch(error => console.log(error));


//RUTA DE BIENVENIDA
app.get("/", (req, res) => {
    res.send("hello word")
});


//RUTA PARA REGISTRO DE USUARIOS QUE ESTA EN LA VISTA (RegistroCliente.jsx)
app.post("/usuario/save", function (req, res) {
    const data = req.body;
    const user = new usuarios(data);
    user.save(function (error) {
        if (error) {
            res.send({ estado: "error", msg: "ERROR: usuario no guardado" });
            return false;
        }

        res.send({ estado: "ok", msg: "producto guardado" });
    })


});

//RUTA PARA EL REGISTRO DE LOS DATOS PERSONALES QUE ESTA EN LA VISTA (AddDatosPersonales.jsx)
app.post("/guardar/datos", function (req, res) {
    const datos = req.body;
    const userdate = new datospersonales(datos);
    userdate.save(function (error) {
        if (error) {
            res.send({ estado: "error", msg: "ERROR datos no guardado" });
            console.log(error);
            return false;
        }
        res.send({ estado: "ok", msg: "datos almacenados" });
    })
});




//ejecucion del servidor
app.listen(port, () => console.log(`hola mundo servidor ejecutandose en el puerto ${port}`));