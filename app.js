const express = require('express');
const app = express();
const path = require('path');

/* ===== Biblioteca ===== */
app.use(express.json());


/* =========== Routes =========== */
const routerHome = require('./routes/home');
const dadosDePagamento = require('./routes/dadosDePagamento');
const routerenderecoDeEntrega = require('./routes/enderecoDeEntrega');
const routerFeminino = require('./routes/feminino');
const routerLogin = require('./routes/login');
const routerPedido = require('./routes/pedido');
const routerPerfil = require('./routes/perfil');
const routerPoliticas = require('./routes/politicas');
const routerProduct = require('./routes/product');
const routerSacola = require('./routes/sacola');

/* Log - antes das rotas (app.use)*/
let logmiddleware = require('./middlewares/logSite')
app.use(logmiddleware)

app.use('/', routerHome);
app.use('/dadosDePagamento', dadosDePagamento);
app.use('/enderecoDeEntrega', routerenderecoDeEntrega);
app.use('/Feminino', routerFeminino);
app.use('/Login', routerLogin);
app.use('/Pedido', routerPedido);
app.use('/Perfil', routerPerfil);
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