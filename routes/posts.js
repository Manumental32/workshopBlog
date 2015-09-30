//  Configuracion de las rutas en "/post"
module.exports = function(db){

	//  Cargamos express
	var express = require('express');

	//  Inicializamos el enrutador de express
	var router = express.Router();

	// Respuesta a una peticion del tipo GET a la URL "/post"
	router.get('/post', function (req, res, next) {

		//	Buscamos todos los posts
		db.posts.find(
			req.params
		,	function(err, docs)
			{
				//	En caso de que ocurra un error
				if (err)
					next(err);

				//	Devolvemos todos los posts encontrados
				res.json(docs);
			}
		);

	});

	// Respuesta a una peticion del tipo GET a la URL "/post/:id"
	router.get('/post/:id', function (req, res, next) {

		//	Buscamos el post que tenga la id pasada como parametro en la peticion
		db.posts.findOne(
			{
				_id: req.params.id
			}
		,	function(err, docs)
			{
				//	En caso de que ocurra un error
				if (err)
					next(err);

				//	Devolvemos el post encontrado o nada si no se lo encontro
				res.json(docs);
			}
		);

	});

	// Respuesta a una peticion del tipo POST a la URL "/post"
	router.post('/post', function (req, res) {

		//	Creamos un nuevo post con los atributos pasados en el cuerpo de la peticion
		db.posts.insert(
			req.body
		,	function(err, docs)
			{
				//	En caso de que ocurra un error
				if (err)
					next(err);

				//	Devolvemos el post creado
				res.json(docs);
			}
		);

	});

	// Respuesta a una peticion del tipo PUT a la URL "/post/:id"
	router.put('/post/:id', function (req, res) {

		//	Actualizamos el post que tenga la id pasada como parametro con los atributos pasados en el cuerpo de la peticion
		db.posts.update(
			{
				_id: req.params.id
			}
		,	req.body
		,	function(err, num)
			{
				//	En caso de que ocurra un error
				if (err)
					next(err);

				//	Devolvemos el indice del post actualizado
				res.json(num)
			}
		);

	});

	// Respuesta a una peticion del tipo DELETE a la URL "/post/:id"
	router.delete('/post/:id', function (req, res) {

		//	Eliminamos el post que tenga la id pasada como parametro en la peticion
		db.posts.remove(
			{
				_id: req.params.id
			}
		,	{}
		,	function(err, num)
			{
				//	En caso de que ocurra un error
				if (err)
					next(err)

				//	Devolvemos el indice del post antes de ser eliminado
				res.json(num)
			}
		);

	});

	//	Devolvemos el enrutador el cual tendra las nuevas rutas configuradas
	return router;
}