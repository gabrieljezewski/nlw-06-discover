const Database = require("./config")                //importando o banco

const initDb = {                                    //Responsável por quem vai iniciar o bd
    async init(){                                   //Como é usado abaixo o comando await, precisa estar com o async na criação da function
        const db = await Database()                 //comando await significa que ele só vai deixar excutar a linha de baixo, depois que finalizar toda sua consulta primeiro

        await db.exec(`CREATE TABLE rooms (
            id INTEGER ´PRIMARY KEY,
            pass TEXT
        )`);

        await db.exec(`CREATE TABLE questions (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            title TEXT,
            read INT,
            room INT
        )`)

        await db.close()
    }
}

initDb.init();