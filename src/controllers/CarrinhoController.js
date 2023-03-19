const Servico = require("../model/Servico")

console.log("página carrinho")
const CarrinhoController = {
    showCarrinhoPage: (req, res) => {
        return res.render("carrinho");
    },

}

module.exports = CarrinhoController;