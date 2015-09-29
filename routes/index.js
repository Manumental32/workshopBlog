//  Rutas del /
module.exports = function(db) {

    //  Cargamos los modulos
    var express = require('express');

    //  Inicializamos el enrutador
    var router = express.Router();

    // Respuesta al GET /
    router.get('/', express.static('public'));

    // Respuesta al POST /login (Autentificacion del usuario)
    router.post('/login', function(req, res, next){

        db.users.findOne(
            {
                username: req.body.username
            ,   password: req.body.password
            }
        ,   function (err, user)
            {
                if (err)
                    return next();

                if (!user)
                    return res.json({
                        message: "Usuario o contraseña incorrecta",
                        error: 404
                    });

                res.json(user)
            }
        );

    });

    return router;
}