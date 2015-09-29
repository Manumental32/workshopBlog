//  Rutas del /post
module.exports = function(db){

    //  Cargamos los modulos
    var express = require('express');

    //  Inicializamos el enrutador
    var router = express.Router();

    // Respuesta al GET /user (Obtenemos todos los users)
    router.get('/', function (req, res, next) {
    db.users.find(
        req.params
        ,   function(err, docs)
        {
          if (err)
            next(err);

          res.json(docs);
        }
    );
    });

    // Respuesta al GET /user/:id (Obtenemos el user con la id pasada como parametro)
    router.get('/:id', function (req, res, next) {
    db.users.findOne(
        {
          _id: req.params.id
        },
        function(err, docs)
        {
          if (err)
            next(err);

          res.json(docs);
        }
    );
    });

    // Respuesta al POST /user (creamos un nuevo user)
    router.post('/', function (req, res) {
    db.users.insert(
        req.body,
        function(err, docs)
        {
          if (err)
            next(err);

          res.json(docs);
        }
    );
    });

    // Respuesta al PUT /user/:id (Actualizamos el user segun la id pasada como parametro)
    router.put('/:id', function (req, res) {
    db.users.update(
        {
          _id: req.params.id
        },
        req.body,
        function(err, num)
        {
          if (err)
            next(err);

          res.json(num)
        }
    );
    });

    // Respuesta al DELETE /user (borramos un user segun la id pasada como paramentro)
    router.delete('/:id', function (req, res) {
    db.users.remove(
        {
          _id: req.params.id
        }
        ,   {}
        ,   function(err, num)
        {
          if (err)
            next(err)

          res.json(num)
        }
    );
    });

    return router;
}