const express = require('express');
const app = express();
const path = require('path');
const session = require('express-session')

/* ===== Biblioteca ===== */
app.use(express.json());


/* =========== Routes =========== */
const routerHome = require('./routes/home');
const dadosDePagamento = require('./routes/dadosDePagamento');
const routerenderecoDeEntrega = require('./routes/enderecoDeEntrega');
const routesUsuario = require('./routes/usuario');
const routerPedido = require('./routes/pedido');
const routerPoliticas = require('./routes/politicas');
const routerProduct = require('./routes/product');
const routerSacola = require('./routes/sacola');

/* Log */
let logmiddleware = require('./middlewares/logSite')
app.use(logmiddleware)

app.use(session({secret: 'MeninaDosSapatos'}))

app.use('/', routerHome);
app.use('/dadosDePagamento', dadosDePagamento);
app.use('/enderecoDeEntrega', routerenderecoDeEntrega);
app.use('/Login', routesUsuario);
app.use('/Pedido', routerPedido);
app.use('/Politicas', routerPoliticas);
app.use('/Product', routerProduct);
app.use('/Sacola', routerSacola);

/* ===== EJS ===== */
app.set("view engine", "ejs") 
/* ===== Dependencias e Arquivos ===== */
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, '/public')));

/* ===== Error ===== */

app.listen(3000, () => {console.log('Servidor rodando na porta 3000')});