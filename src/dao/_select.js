const db = require('./_database');

async function querySelect(){
    await db.connect();
    
    let result;
    result = await db.query('SELECT * FROM aluno');
    console.log(result.rows);

    await db.end();
}

querySelect();