const express = require('express')
const app = express()
const path = require('path')

const routerHome = require('./routes/home')
const routerfeminino = require('./routes/feminino')





app.use('/', routerHome);
app.use('/', routerfeminino);



app.set("view engine", "ejs") /* indicação do EJS */
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, '/public')));
app.listen(3000, () => {console.log('Servidor rodando na porta 3000')})