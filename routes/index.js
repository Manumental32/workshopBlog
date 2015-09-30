//  Configuracion de las rutas en  "/"
module.exports = function(db) {

	//  Cargamos express
	var express = require('express');

	//  Inicializamos el enrutador de express
	var router = express.Router();

	// Respuesta a una peticion del tipo POST a la URL "/login"
	router.post('/login', function(req, res, next){

		//	Buscamos el usuario
		db.users.findOne(
			{
				username: req.body.username
			,	password: req.body.password
			}
		,	function (err, user)
			{
				//	En caso de que ocurra un error
				if (err)
					return next(err);

				//	Si no se encontro el usuario
				if (!user)
					return res.json({
						message: "Usuario o contraseña incorrecta",
						error: 404
					});

				//	Si se encontro el usuario lo devolvemos bajo el formato JSON
				res.json(user)
			}
		);

	});

	//	Devolvemos el enrutador el cual tendra las nuevas rutas configuradas
	return router;
}