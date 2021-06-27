const express = require('express')      //Importando os módulos do express
const route = require('./route')        //Importando conteúdo do arquivo routes.js
const path = require('path')            //Pega o caminho do projeto no computador

const server = express()                //inicia o express e guardando no server

server.set('view engine', 'ejs')

server.use(express.static("public"))

server.set('views', path.join(__dirname, 'views'))      //Informando o caminho da pasta views para a pasta /src encontrar o arquivo     

server.use(express.urlencoded({extended: true}))        //Pegando o conteúdo do formulário, decodificar e passar pro controller

server.use(route)

server.listen(3000, () => console.log("Rodando"))