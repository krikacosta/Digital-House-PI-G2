
const Servico = require("../model/Servico")

console.log("Cadadastro Cliente")
const cadastroClienteController = {
    showProdutoPage: (req, res) => {
        return res.render("cadastroCliente");
    },

}

module.exports = cadastroClienteController;