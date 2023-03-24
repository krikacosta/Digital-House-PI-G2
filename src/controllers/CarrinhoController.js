const {Pedido} = require("../../models")

console.log("página carrinho")
const CarrinhoController = {
    showCarrinhoPage: (req, res) => {
        return res.render("carrinho");
    },

}

module.exports = CarrinhoController;