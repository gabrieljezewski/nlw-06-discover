const sqlite3 = require("sqlite3");                         //Importando módulo do sqlite3
const { open } = require("sqlite")                          //Importando apenas a função open do sqlite

module.exports = () => 
    open({
        filename: './src/db/rocketq.sqlite',                 //Definindo o caminho e nome do banco de dados
        driver: sqlite3.Database,
    });