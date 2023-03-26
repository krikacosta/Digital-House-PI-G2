const {Pedido} = require("../../models")

console.log("página carrinho")
const CarrinhoController = {
    showCarrinhoPage: async (req, res) => {
        const { id } = req.params;

        const carrinho = await Pedido.findByPk(id)

        return res.render("carrinho", {carrinho});
    },

}

module.exports = CarrinhoController;