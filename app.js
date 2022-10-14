const express = require('express');
const app = express();
const path = require('path');

/* ===== Biblioteca ===== */
app.use(express.json());


/* =========== Routes =========== */
const routerHome = require('./routes/home.js');
const routerDadosDePagamentos = require('./routes/dadosDePagamento.js');
const routerenderecoDeEntrega = require('./routes/enderecoDeEntrega.js');
const routerFeminino = require('./routes/feminino.js');
const routerLogin = require('./routes/login.js');
const routerPedido = require('./routes/pedido.js');
const routerPerfil = require('./routes/perfil.js');
const routerPoliticas = require('./routes/politicas.js');
const routerProduct = require('./routes/product.js');
const routerSacola = require('./routes/sacola.js');


app.use('/', routerHome);
app.use('/', routerDadosDePagamentos);
app.use('/', routerenderecoDeEntrega);
app.use('/', routerFeminino);
app.use('/', routerLogin);
app.use('/', routerPedido);
app.use('/', routerPerfil);
app.use('/', routerPoliticas);
app.use('/', routerProduct);
app.use('/', routerSacola);

/* ===== EJS ===== */
app.set("view engine", "ejs") 
/* ===== Dependencias e Arquivos ===== */
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, '/public')));

/* ===== Error ===== */

app.listen(3000, () => {console.log('Servidor rodando na porta 3000')});