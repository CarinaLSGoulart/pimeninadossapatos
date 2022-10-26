const fs = require ('fs') /* modulo para escrever em algum arquivo */
const path = require ('path')

const logpath = path.join(__dirname,'../log.txt' )
const log = fs.readFileSync(logpath, 'utf-8')

function logSite(req, res, next){
    fs.appendFileSync(logpath, "O usuario entrou na rota" + req.url + "/n")
    next();
}

module.exports = logSite;