//  Cargamos los modulos que necesita nuestra aplicacion
var http = require('http');
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var bodyParser = require('body-parser');
var Datastore = require('nedb');

//	Cargamos las rutas de nuestra aplicacion
var indexRoutes = require('./routes/index');
var userRoutes = require('./routes/users');
var postRoutes = require('./routes/posts');

//  Inicializamos la aplicacion
var app = express();

//	Configuramos la aplicacion
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(bodyParser.json());

// Cargamos la base de datos orientada a documentos
var db = {};
db.users = new Datastore({ filename: path.join(__dirname, 'db', 'users.db'), autoload: true });
db.posts = new Datastore({ filename: path.join(__dirname, 'db', 'posts.db'), autoload: true });

//  Configuramos las rutas cargadas previamente
app.use(express.static('public'));
app.use(indexRoutes(db));
app.use(userRoutes(db));
app.use(postRoutes(db));

//  En caso de que ocurra un error del tipo 404 - Not Found manejamos el error
app.use(function(req, res, next) {
	var err = new Error('Recurso no encontrado');
	err.status = 404;
	next(err);
});

//	En caso de que ocurra un error, configuramos la respuesta
app.use(function(err, req, res, next) {
	res.status(err.status || 500);
	res.json({
		message: err.message,
		error: {}
	});
});

//  Creamos el servidor http
var server = http.createServer(app);

//  Inicializamos el servidor en el puerto 3000
server.listen(3000, function() {
	console.log('Escuchando el puerto ' + server.address().port);
});