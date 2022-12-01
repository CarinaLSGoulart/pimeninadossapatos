const express = require('express');
const path = require('path');

const fs = require('fs');
const createError = require('http-errors');


/* ==== Express ==== */
const app = express();


const session = require('express-session')


/* ===== Biblioteca ===== */
app.use(express.json());

/* ===== Middleware require ===== */
const verifyUserLogged = ('./middlewares/verifyUserLogged.js')

/* ===== Log - antes das rotas (app.use) ===== */
const logmiddleware = require('./middlewares/logSite')
app.use(logmiddleware);


/* =========== Routes =========== */
const routesHome = require('./routes/home');
const dadosDePagamento = require('./routes/dadosDePagamento');
const routerenderecoDeEntrega = require('./routes/enderecoDeEntrega');
const routerFeminino = require('./routes/feminino');
const routerPromocoes = require ("./routes/promocoes")
const routerLogin = require('./routes/login');
const routerPedido = require('./routes/pedido');
const routerPerfil = require('./routes/perfil');
const routerPoliticas = require('./routes/politicas');
const routerProdutos = require('./routes/produtos');
const routerSacola = require('./routes/sacola');
const { use } = require('./routes/home');
const routesUsuario = require('./routes/usuario');
const routesPedido = require('./routes/pedido');
const routesPoliticas = require('./routes/politicas');
const routesProduto = require('./routes/produto');
const routesFeminino = require('./routes/feminino');
const routesSacola = require('./routes/sacola');
const routesCadastro = require('./routes/usuario')



app.use(session({secret: 'MeninaDosSapatos'}))

app.use('/', routesHome);
app.use('/dadosDePagamento', dadosDePagamento);
app.use('/enderecoDeEntrega', routerenderecoDeEntrega);
app.use('/feminino', routerFeminino);
app.use('/promocoes', routerPromocoes)
app.use('/login', routerLogin);
app.use('/pedido', routerPedido);
app.use('/Perfil', routerPerfil);
app.use('/politicas', routerPoliticas);
app.use('/produtos', routerProdutos);
app.use('/sacola', routerSacola);
app.use('/Login', routesUsuario);
app.use('/Pedido', routesPedido);
app.use('/Politicas', routesPoliticas);
app.use('/Produto', routesProduto);
app.use('/Sacola', routesSacola);
app.use('/feminino', routesFeminino);
app.use('/cadastro', routesCadastro);


/* ===== EJS ===== */
app.set("view engine", "ejs") 

/* ===== Dependencias e Arquivos ===== */
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, '/public')));

/* JSON */
app.use(express.json());

/* ==== Interação front */



/* ===== Error ===== */
app.use((req, res, next) => next(createError(404)));

app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.path = req.path;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

app.listen(3333, () => {console.log('Servidor rodando na porta 3333')});