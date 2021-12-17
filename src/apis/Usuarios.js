const express = require('express');
const cors = require('cors');


const app = express()
const port = 8080;




app.use(cors());
app.use(express.json()); //middleware  par convertir a json 

// API endpoint, rutas, api rest

app.get("/", function (req, res){
    res.send("bienvenidos a la plataforma")
});



/**
 * ruta para guardar los datos del usuario que vienen del componente RegistroClientes.jsx
 * recibir los datos de usuario y guardarlos en el array Usuarios
 *responder por consola y mostrar el array de json 
 */

 //guardado en array
// app.post('/usuarios/guardar', (req, res) => {
//     const user = req.body;
//     console.log(user);
//     Usuarios.push(user)
//     res.send('usuario agregado')
// })

Usuarios = [];

app.post("/guardar", (req, res) =>{
    //caputar los datos que vienen del cliente
    const {username, contraseña, contraseñaconf} = req.body
    //crear json son los datos caputurados
    const user = {nombre: username, contra: contraseña, contraconf: contraseñaconf}
    console.log(Usuarios)
    //guardar esos datos en un array
    Usuarios.push(user)
    //responder al cliente
    res.send("usuario agregado");
    
})



app.post('/datosUsuario/guardar', (req, res) => {
    const DateUser = req.body;
    console.log(DateUser);

})

app.listen(port, () => console.log(`hola word aplicacion ejecutandose en el puerto ${port}`));
