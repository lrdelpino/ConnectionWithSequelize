Es necesaria la última versión estable de Node.js. La misma puede descargarse en el siguiente link:

https://nodejs.org/es/

Una vez clonado el respositorio, ejecutar el comando

npm install

Luego de hacerlo se debe usar el comando

node db.js

con este se hace la creacion de la base y de la tabla shippings y se crean los registros predefenidos

los endpoints son los siguientes:

GET http://localhost:3000/api/shippings/
Trae tos los registros de la tabla shippings

POST http://localhost:3000/api/shippings/
Se crea un registro en la tabla shippings

GET http://localhost:3000/api/shippings/:id
Busca un shipping especifico por id en la base de datos

PUT http://localhost:3000/api/shippings/:id
Busca un registro por id y luego lo modifica

Delete http://localhost:3000/api/shippings/:id
Busca un registro por id y luego lo modifica
