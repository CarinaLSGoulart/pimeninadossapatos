const express = require('express');
const path = require('path');
const produtoController = require('./src/controllers/produtoController');

const app = express();
const produtoRouter = require('./src/routes/produtoRoutes');
const estoqueRouter = require('./src/routes/estoqueRoutes');

app.use(express.json());
app.use('/produto', produtoRouter);
app.use('/estoque', estoqueRouter);

app.use(function (err, req, res, next){

    res.locals.message = err.message;
    res.locals.error = req.app.get("env") === "development" ? err : {};

    res.status(err.stauts || 500);
    res.json(err);
});

app.listen('3001', () => console.log('Servidor rodando na porta 3001'))

module.exports = app;