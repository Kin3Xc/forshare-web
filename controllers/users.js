// cntrolador de usuarios

// librerias
var mongoose = require('mongoose');
var User = require('../models/users');

//para crear el token uso este service
var service = require('../service/token');
var bcrypt = require('bcrypt');
var request = require('request');
var qs = require('querystring');
var config = require('../config');


// regstro de usuarios - se crea token
exports.signup = function(req, res){
	// OJO FALTAN LAS VALIDACIONES DE LOS DATOS

	var user = new User({
		name: req.body.name,
		email: req.body.email,
		username: req.body.username,
		password: req.body.password
	});

	console.log(user);

	// guardo el usuario
	user.save(function(err){
		console.log(err);
		if (err) {return res.send({message: 'Error al almacenar los datos de l empresa'}) }//Si hubo error

		console.log(user);
		return res // si todo esta bien
			.status(200)
			.send({user: user, token: service.createToken(user)});
	});
};



// login de usuario
exports.login = function(req, res){
	// user
	User.findOne({ user: req.body.user }, function(err, user){
		if (err) next(err);
		if(!user) {return res.status(401).send({message: 'No existe ese usuario'})}
		// aqui viene comprobacion de contraseña bcrypt

		if (req.body.password === null) { return res.status(401).send({message:'Ingrese su password'})}

		user.comparePassword(req.body.password, function(err, entra){
			if (err) throw err;
			if(!entra){return res.status(401).send({message: "Contraseña incorrecta"})}
			return res
				.status(200)
				.send({token: service.createToken(user) });
		});
	});
};
