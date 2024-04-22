const express = require('express');//requiero express
const app = express();//inicializo express
const PORT=process.env.PORT||3000;//defino el puerto de esta forma para que pueda luego exportarlo para la conexión base de datos

const {dbConnection}= require("./src/config/db.js") //requiero connexión database 


const {router} =require ("./src/routes/mainRoutes.js")//requiero el router desde mainRoutes
dbConnection() //invoco la función antes de cualquier middleware para que no se reconecte a cada request
app.disable('x-powered-by');//practica de seguridad para que no recibir ataques en cabeceras de express
app.use(express.json());//Sirve como un middleware para todas las rutas, only parses JSON and only looks at requests where the Content-Type header matches the type option
app.use(express.urlencoded({extended:true})); //Sirve como un middleware para todas las rutas, only parses urlencoded bodies and only looks at requests where the Content-Type header matches the type option. This parser accepts only UTF-8 encoding of the body .
//{extended:true} sirve para corregir el error body-parser deprecated undefined extended: provide extended option

app.use('/', router); //Esto me permite utilizar el enrutador al entrar a la pagína principal
    

  app.listen(PORT,()=>//Escucho al servidor 
  console.log(`Express escuchando en el http:localhost:${PORT}`))//copiando y pegando el codigo de consola en internet cargaré la ruta en local host