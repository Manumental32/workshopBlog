//  Rutas del /post
module.exports = function(db){

    //  Cargamos los modulos
    var express = require('express');

    //  Inicializamos el enrutador
    var router = express.Router();

    // Respuesta al GET /post (Obtenemos todos los posts)
    router.get('/', function (req, res, next) {
        db.posts.find(
            req.params
        ,   function(err, docs)
            {
                if (err)
                    next(err);

                res.json(docs);
            }
        );
    });

    // Respuesta al GET /post/:id (Obtenemos el post con la id pasada como parametro)
    router.get('/:id', function (req, res, next) {
        db.posts.findOne(
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

    // Respuesta al POST /post (creamos un nuevo posts)
    router.post('/', function (req, res) {
        db.posts.insert(
            req.body,
            function(err, docs)
            {
                if (err)
                    next(err);

                res.json(docs);
            }
        );
    });

    // Respuesta al PUT /post/:id (Actualizamos el post segun la id pasada como parametro)
    router.put('/:id', function (req, res) {
        db.posts.update(
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

    // Respuesta al DELETE /post (borramos un post segun la id pasada como paramentro)
    router.delete('/:id', function (req, res) {
        db.posts.remove(
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