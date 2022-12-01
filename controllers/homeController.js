const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../database/produtos.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const maisVendidos = products.filter(function(product){
    return product.category == 'mais vendidos'
})

const promocao = products.filter(function(product){
    return product.category == 'promocao'
})

const homeController = {
    home: (req, res) => {
        res.render('home',{
            promocao,
            maisVendidos,
            toThousand
        })
    }
}

module.exports = homeController;         