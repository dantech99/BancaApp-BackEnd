const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const UsuarioModelo = new Schema({
    username: {
        type: "string",
        unique: true,
        required: true
    },
    contraseña: {
        type: "string",
        required: true
    },
    contraseñaconfirm: {
        type: "string",
        required: true
    }
});

module.exports = mongoose.model("usuarios", UsuarioModelo)