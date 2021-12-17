const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const FormularioQuejasReclamos = new Schema({
    tiposolicitud: {
        type: "string",
        required: true
    },

    fechasolicitud: {
        type: "date",
        required: true,
        default: new Date
    },
    nompreapellido: {
        type: "string",
        required: true
    },
    tipodocumento: {
        type: "string",
        required: true
    },
    numdocumento: {
        type: "number",
        required: true
    },
    numcuenta: {
        type: "number",
        required: true
    },
    tipocuenta: {
        type: "string",
        required: true
    },
    fechatrans: {
        type: "date",
        required: true,
        default: new Date
    },
    numtrans: {
        type: "number",
        required: true
    },
    descripciontrans: {
        type: "string",

        required: true
    },
    descripsoli: {
        type: "string",
        required: true
    }
})

module.exports = mongoose.model("datospersonales", FormularioQuejasReclamos) 
