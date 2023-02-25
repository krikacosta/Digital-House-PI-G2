const Servico = require("../model/Servico")

console.log("página alterar dado cliente")
const AlterarDadoClienteController = {
    showAlterarDadoClientePage: (req, res) => {
        return res.render("alterarDadoCliente");
    },

}

module.exports = AlterarDadoClienteController;