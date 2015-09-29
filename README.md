Primeros pasos:
1 - Corre el comando npm install para instalar las dependencias necesarias.
2 - Corre el comando node seed para crear la db y cargar un usuario y un post
3 - Corre el comando npm start para incializar el servidor

Para ver el sistema corriendo ingresa a http://localhost:3000/

La carpeta public contiene el frontend

Rutas de interes

-----   Ruta Publica                --------------------------------------
GET     localhost:3000              ->  Carpeta publica

-----   Ruta Login                  --------------------------------------
POST    localhost:3000/login        ->  Autentificacion

-----   REST User                   --------------------------------------
GET     localhost:3000/user         ->  Obtener todos los usuarios
GET     localhost:3000/user/:id     ->  Obtener el usuarios con dicha id
POST    localhost:3000/user         ->  Crear un usuario
PUT     localhost:3000/user/:id     ->  Actualizar un usuario
DELETE  localhost:3000/user/:id     ->  Borrar un usuario

-----   REST Post                   --------------------------------------
GET     localhost:3000/post         ->  Obtener todos los posts
GET     localhost:3000/post/:id     ->  Obtener el post con dicha id
POST    localhost:3000/post         ->  Crear un post
PUT     localhost:3000/post/:id     ->  Actualizar un post
DELETE  localhost:3000/post/:id     ->  Borrar un post