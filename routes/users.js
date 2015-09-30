//  Configuracion de las rutas en "/user"
module.exports = function(db){

	//  Cargamos express
	var express = require('express');

	//  Inicializamos el enrutador de express
	var router = express.Router();

	// Respuesta a una peticion del tipo GET a la URL "/user"
	router.get('/user', function (req, res, next) {

		//	Buscamos todos los usuarios
		db.users.find(
			req.params
		,	function(err, docs)
			{
				//	En caso de que ocurra un error
				if (err)
					next(err);

				//	Devolvemos todos los usuarios encontrados
				res.json(docs);
			}
		);

	});

	// Respuesta a una peticion del tipo GET a la URL "/user/:id"
	router.get('/user/:id', function (req, res, next) {

		//	Buscamos el usuario que tenga la id pasada como parametro en la peticion
		db.users.findOne(
			{
				_id: req.params.id
			}
		,	function(err, docs)
			{
				//	En caso de que ocurra un error
				if (err)
					next(err);

				//	Devolvemos el usuario encontrado o nada si no se lo encontro
				res.json(docs);
			}
		);

	});

	// Respuesta a una peticion del tipo POST a la URL "/user"
	router.post('/user', function (req, res) {
		
		//	Creamos un nuevo usuario con los atributos pasados en el cuerpo de la peticion
		db.users.insert(
			req.body
		,	function(err, docs)
			{
				//	En caso de que ocurra un error
				if (err)
					next(err);

				//	Devolvemos todos el usuario creado
				res.json(docs);
			}
		);

	});

	// Respuesta a una peticion del tipo PUT a la URL "/user/:id"
	router.put('/user/:id', function (req, res) {
		
		//	Actualizamos el usuario que tenga la id pasada como parametro con los atributos pasados en el cuerpo de la peticion
		db.users.update(
			{
				_id: req.params.id
			}
		,	req.body
		,	function(err, num)
			{
				//	En caso de que ocurra un error
				if (err)
					next(err);

				//	Devolvemos el indice del usuario actualizado
				res.json(num)
			}
		);

	});

	// Respuesta a una peticion del tipo DELETE a la URL "/user/:id"
	router.delete('/user/:id', function (req, res) {
		
		//	Eliminamos el usuario que tenga la id pasada como parametro en la peticion
		db.users.remove(
			{
				_id: req.params.id
			}
		,	{}
		,	function(err, num)
			{
				//	En caso de que ocurra un error
				if (err)
					next(err)

				//	Devolvemos el indice del usuario antes de ser eliminado
				res.json(num)
			}
		);

	});

	//	Devolvemos el enrutador el cual tendra las nuevas rutas configuradas
	return router;
}