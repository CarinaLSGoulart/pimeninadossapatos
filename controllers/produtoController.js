const path = require('path')
const fs = require('fs')

const produtoFilePath = path.join(__dirname, '../database/produtos.json')
const produto = JSON.parse(fs.readFileSync(produtoFilePath, 'utf-8'))

let feminino = []
produto.produtos.forEach((produto) => {    
  produto.modelos.forEach(function(modelo){  
        feminino.push(modelo)      
    })
})

const produtoController = {
    produto: (req, res) => {
        res.render('produto')
    },
    feminino: (req, res) => {
        if (req.session.userLogged){
            res.render('feminino', {
                feminino
            })
        }else{
            res.redirect('/')
        }
    }
}

module.exports = produtoController;