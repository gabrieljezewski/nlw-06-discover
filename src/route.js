const express = require('express')                                                            //Importando o express
const QuestionController = require('./controllers/QuestionController')                        //Passando o arquivo do questioncontroller para a rota
const RoomController = require('./controllers/RoomController')

const route = express.Router()                                                                //Informando que a const route guarda todas as funcionalidades de rotas que o express tem

route.get('/', (req, res) => res.render("index", {page: 'enter-room'}))                       //Cria a rota para o domínio ou página dependendo do que inserir em '/'
route.get('/create-pass', (req, res) => res.render("index", {page: 'create-pass'}))

route.post('/create-room', RoomController.create)
route.get('/room/:room', RoomController.open)
route.post('/enterroom', RoomController.enter)

route.post('/question/:room/:question/:action', QuestionController.index)                     //Criando a rota e variáveis da página room, pra quando clicar em check ou delete 
route.post('/question/create/:room', QuestionController.create)

module.exports = route