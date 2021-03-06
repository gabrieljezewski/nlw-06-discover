const { open } = require("sqlite")
const Database = require("../db/config")                                        //Importando banco de dados

module.exports = {
    async create(req, res) {
        const db = await Database()
        const pass = req.body.password
        let roomID

        //Criando numeros randomicos de 0 a 9 para o id da sala
        for(var i = 0; i < 6; i++){
            i == 0 ? roomID = Math.floor(Math.random() * 10).toString() :
            roomID += Math.floor(Math.random() * 10).toString()
        }      

        //Inserindo no bd
        await db.run(`INSERT INTO rooms (
                id,
                pass
            ) VALUES (
                ${parseInt(roomID)},
                ${pass}
            )`)
        
        //Encerrando a conexão com db
        await db.close()

        res.redirect(`/room/${roomID}`)
    },

    async open(req, res){
        const db = await Database()
        const roomId = req.params.room
        const questions = await db.all(`SELECT * FROM questions WHERE room = ${roomId} and read = 0`)
        const questionsRead = await db.all(`SELECT * FROM questions WHERE room = ${roomId} and read = 1`)
        let isNoQuestions

        if(questions.length ==0){
            if(questionsRead.length == 0){
                isNoQuestions = true
            }
        }

        res.render("room", {roomId: roomId, questions: questions, questionsRead: questionsRead, isNoQuestions: isNoQuestions})
    },

    enter(req, res){
        const roomId = req.body.roomId

        res.redirect(`/room/${roomId}`)
    }
}