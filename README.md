# Workshop: Taller Node.js + AngularJS 

El repositorio consiste en una pequeña aplicación web desarrollada utilizando Node.js como backend y AngularJS como frontend siendo la arquitectura REST el mediador entre ambas partes. Se logro persistir los datos utilizando una base de datos orientada a documentos llamada NeDB.

### Instalación

Es necesario tener bower instalado globalmente.

```sh
$ npm install -g bower
```

```sh
$ git clone https://github.com/Manumental32/workshopBlog.git
$ cd workshopBlog
$ npm install
$ cd public
$ bower install
$ cd ..
$ node seed
$ npm start
```

### API REST

Home
```sh
GET     localhost:3000              ->  Sitio Principal
```

Login
```sh
POST    localhost:3000/login        ->  Autentificación
```

User (CRUD de usuarios)
```sh
GET     localhost:3000/user         ->  Obtener todos los usuarios
GET     localhost:3000/user/:id     ->  Obtener el usuarios con dicha id
POST    localhost:3000/user         ->  Crear un usuario
PUT     localhost:3000/user/:id     ->  Actualizar un usuario
DELETE  localhost:3000/user/:id     ->  Borrar un usuario
```

Post (CRUD de posts)
```sh
GET     localhost:3000/post         ->  Obtener todos los posts
GET     localhost:3000/post/:id     ->  Obtener el post con dicha id
POST    localhost:3000/post         ->  Crear un post
PUT     localhost:3000/post/:id     ->  Actualizar un post
DELETE  localhost:3000/post/:id     ->  Borrar un post
```
