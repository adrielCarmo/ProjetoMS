import express from 'express';
import path from 'path';

const app = express();

/*
    - CONFIGURANÇÃO DO PARSER (CONVERSOR) - CRIPTOGRAFIA POST
*/
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));

/*
    - FUNÇÕES - CONEXÃO COM O DATABASE VIA POOL DE CONEXÕES:
*/
const pool = require('./dao/conexao');

function enviarMensagem(nome, email, mensagem) {

    // INSERINDO MSG NO DATABASE:

    pool.query('INSERT INTO mensagem (nome, email, mensagem) VALUES ($1, $2, $3)', [nome, email, mensagem])
        .then(res => console.log('FUNCIONOU!'))
        .catch(err => console.log('ERRO: ' + err));

    // ENVIAR UM E-MAIL:

    // enviarEmail();
}

/*
function enviarEmail(nome, email, mensagem) {
    const request = require('request');

    request.post(process.env.TRUSTIFI_URL + '/api/i/v1/email', {
        headers: {
            'x-trustifi-key': process.env.TRUSTIFI_KEY,
            'x-trustifi-secret': process.env.TRUSTIFI_SECRET
        },
        json: { "recipients": [{ "email": "test@trustificorp.org" }], "title": "Title", "html": "Body" }
    }, (err, res, body) => {
        console.log(body);
    });
}
*/

/*
    - CONFIGURAÇÕES ESTÁTICAS:
*/

app.use('/bscss', express.static('./node_modules/bootstrap/dist/css'));
app.use('/bsjs', express.static('./node_modules/bootstrap/dist/js'));
app.use('/jquery', express.static('./node_modules/jquery/dist'));
app.use('/popperjs', express.static('./node_modules/popper.js/dist/umd'));
app.use('/public', express.static(__dirname + '/public'));
app.use('/dao', express.static(__dirname + '/src/dao'));
app.use('/language', express.static(__dirname + '/src/views/language'));

/*
    - CONFIGURAÇÃO DAS PÁGINAS:
*/

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

/*
    - ROTAS DE TESTE:
*/
app.get('/teste', function (req, resp) {
    resp.render('teste');
});

/*
    - VARIÁVEL DE IDIOMA PÁG.:
*/
let idioma;

/*
    - ROTAS DA APLICAÇÃO:
*/

app.get('/', function (req, resp) {
    resp.redirect('/inicio/br');
});

app.get('/inicio', function (req, resp) {
    resp.redirect('/inicio/br');
});

app.get('/inicio/br', function (req, resp) {
    idioma = "br";
    resp.render('paginaInicio', { idioma });
});

app.get('/inicio/en', function (req, resp) {
    idioma = "en";
    resp.render('paginaInicio', { idioma });
});

app.get('/neabi', function (req, resp) {
    resp.redirect('/neabi/br');
});

app.get('/neabi/br', function (req, resp) {
    idioma = "br";
    resp.render('neabi', { idioma });
});

app.get('/neabi/en', function (req, resp) {
    idioma = "en";
    resp.render('neabi', { idioma });
});

app.get('/professores', function (req, resp) {
    resp.redirect('/professores/br');
});

app.get('/professores/br', function (req, resp) {
    idioma = "br";
    resp.render('professores', { idioma });
});

app.get('/professores/en', function (req, resp) {
    idioma = "en";
    resp.render('professores', { idioma });
});

app.get('/estudantes', function (req, resp) {
    resp.redirect('/estudantes/br');
});

app.get('/estudantes/br', function (req, resp) {
    idioma = "br";
    resp.render('estudantes', { idioma });
});

app.get('/estudantes/en', function (req, resp) {
    idioma = "en";
    resp.render('estudantes', { idioma });
});

app.get('/milton-santos', function (req, resp) {
    resp.redirect('milton-santos/br');
});

app.get('/milton-santos/br', function (req, resp) {
    idioma = "br";
    resp.render('milton-santos', { idioma });
});

app.get('/milton-santos/en', function (req, resp) {
    idioma = "en";
    resp.render('milton-santos', { idioma });
});

app.get('/enviarMensagem/br', function (req, resp) {
    resp.redirect('/contato/br');
});

app.get('/enviarMensagem/en', function (req, resp) {
    resp.redirect('/contato/en');
});

app.get('/contato', function (req, resp) {
    resp.redirect('/contato/br');
});

app.get('/contato/br', function (req, resp) {
    idioma = "br";
    resp.render('contato', { idioma });
});

app.get('/contato/en', function (req, resp) {
    idioma = "en";
    resp.render('contato', { idioma });
});

app.post('/enviarMensagem/br', function (req, resp) {
    idioma = "br";
    let msgRetorno = "Mensagem enviada com sucesso!";
    enviarMensagem(req.body.nome, req.body.email, req.body.mensagem);
    resp.render('contato', { idioma, msgRetorno});
});

app.post('/enviarMensagem/en', function (req, resp) {
    idioma = "en";
    let msgRetorno = "Message sent successfully!";
    enviarMensagem(req.body.nome, req.body.email, req.body.mensagem);
    resp.render('contato', { idioma, msgRetorno});
});

export default app;