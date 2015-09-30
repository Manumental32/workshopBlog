//  Cargamos los modulos necesarios
var http = require('http');
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var bodyParser = require('body-parser');
var Datastore = require('nedb');

// Cargamos los manejadores de rutas
var indexRoutes = require('./routes/index');
var userRoutes = require('./routes/users');
var postRoutes = require('./routes/posts');

//  Inicializamos la aplicacion
var app = express();

// Configuramos la aplicacion
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(bodyParser.json());

// Cargamos la base de datos orientada a documentos
var db = {};
db.users = new Datastore({ filename: path.join(__dirname, 'db', 'users.db'), autoload: true });
db.posts = new Datastore({ filename: path.join(__dirname, 'db', 'posts.db'), autoload: true });

//  Configuramos las rutas cargadas previamente en la aplicacion
app.use( express.static('public'));
app.use('/', indexRoutes(db));
app.use('/user', userRoutes(db));
app.use('/post', postRoutes(db));

//  Capturamos los errores de tipo 404
app.use(function(req, res, next) {
	var err = new Error('Recurso no encontrado');
	err.status = 404;
	next(err);
});

//  Respuesta a un error
app.use(function(err, req, res, next) {
	res.status(err.status || 500);
	res.json({
		message: err.message,
		error: {}
	});
});

//  Creamos el servidor http
var server = http.createServer(app);

//  Escuchamos el puerto 300
server.listen(3000);

//	Cuando el servidor esta listo escuchara las peticiones entrantes
server.on('listening', onListening);

//  Escuchamos el servidor
function onListening() {
	console.log('Escuchando el puerto ' + server.address().port);
}