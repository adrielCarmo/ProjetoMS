const db = require('./_database');

async function queryDelete(){
    await db.connect();
    
    await db.query('DELETE FROM aluno WHERE id = 1');

    console.log('Exclusão realizada');

    await db.end();
}

queryDelete();