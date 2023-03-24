
const { Usuario } = require("../../models")

console.log("Login Cliente")
const loginClienteController = {
    showProdutoPage: (req, res) => {
        return res.render("loginCliente");
    },

}

module.exports = loginClienteController;