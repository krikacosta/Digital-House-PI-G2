const { Ususario } = require("../../models")

console.log("Cadadastro Cliente")
const cadastroClienteController = {
    showProdutoPage: (req, res) => {
        return res.render("cadastroCliente");
    },

}

module.exports = cadastroClienteController;