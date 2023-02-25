
const Servico = require("../model/Servico")

console.log("Login Cliente")
const loginClienteController = {
    showProdutoPage: (req, res) => {
        return res.render("loginCliente");
    },

}

module.exports = loginClienteController;