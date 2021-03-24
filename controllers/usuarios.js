const { response, request } = require('express');

const Usuario = require('../models/usuario');

const usuariosGet = (req = request, res = response) => {
    const { q, nombre = "No name", apiKey } = req.query;
    res.json({
        msg: 'get API - controlador',
        q,
        nombre,
        apiKey
    });
}

const usuariosPost = async(req, res = response) => {
    const body = req.body;

    const usuario = new Usuario(body);

    await usuario.save();

    res.status(201).json({
        usuario
    });
}

const usuariosPut = (req, res = response) => {
    const { id } = req.params;
    res.json({
        msg: 'put API - controlador',
        id
    });
}

const usuariosPatch = (req, res = response) => {
    res.json({
        msg: 'patch API - controlador'
    });
}

const usuariosDelete = (req, res = response) => {
    res.json({
        msg: 'delete API - controlador'
    });
}

module.exports = {
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosPatch,
    usuariosDelete
}