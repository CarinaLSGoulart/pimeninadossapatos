const path = require('path')
const fs = require('fs')

const productsFilePath = path.join(__dirname, '../database/produtos.json')
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'))

let feminino = []
products.produtos.forEach((product) => {    
  product.modelos.forEach(function(modelo){  
        feminino.push(modelo)      
    })
})


const productController = {
    product: (req, res) => {
        res.render('product')
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

module.exports = productController;