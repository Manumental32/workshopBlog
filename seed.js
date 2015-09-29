/**
 * Created by nguidi on 25/09/2015.
 */
//  Cargamos los modulos necesarios
var path = require('path');         //  Gestion de directorios
var Datastore = require('nedb');    //  Base de datos orientada a documentos

//  Cargamos la base de datos
var db = {};
db.users = new Datastore({ filename: path.join(__dirname, 'db', 'users.db'), autoload: true });
db.posts = new Datastore({ filename: path.join(__dirname, 'db', 'posts.db'), autoload: true });

//  Borramos los users existentes y creamos uno nuevo
db.users.remove(
    {}
,   {
    multi: true
}
,   function(err, count)
    {
        if (err)
            throw err;

        db.users.insert(
            [
                {
                    username: 'user',
                    password: 'password'
                }
            ]
            ,   function(err, docs)
            {
                if (err)
                    throw err;

                console.log("Usuario creado");
            }
        );
    }
);

//  Borramos los posts existenes y creamos uno nuevo
db.posts.remove(
    {}
,   {
        multi: true
    }
,   function(err, count)
    {
        if (err)
            throw err;

        db.posts.insert(
            [
                {
                    title: 'Post Loco',
                    content: '<p>Contenido HTML del Post Loco</p>'
                }
            ]
            ,   function(err, docs)
            {
                if (err)
                    throw err;

                console.log("Post creado");
            }
        );
    }
);
