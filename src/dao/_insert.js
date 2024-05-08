const db = require('./_database');

async function queryInsert(){
    await db.connect();
    
    const querySql = "INSERT INTO aluno (nome) VALUES ($1)";   
    //const querySql = "INSERT INTO aluno (nome,curso) VALUES ($1,$2)";   
    await db.query(querySql,['Fábio']);
    await db.query(querySql,['Fábio Luiz']);
    await db.query(querySql,['Fábio Luiz Faria']);
    //await db.query(querySql,['Fábio Luiz','Informática']);

    console.log('Dados Inseridos');

    await db.end();
}

queryInsert();