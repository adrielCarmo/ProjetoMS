const pool = require('./conexao');

async function createTable(){
    await pool.connect();
    
    /**
     * Criação da tabela de mensagem
     */
    await pool.query(`
        CREATE TABLE mensagem(
        id serial PRIMARY KEY,
        nome VARCHAR(300),
        email VARCHAR(300),
        mensagem VARCHAR(600)
    )`);

    console.log('Tabela mensagem criada!!!');

    await pool.end();
}

createTable();