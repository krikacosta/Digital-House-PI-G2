const { Usuario }  = require("../../models")

console.log("página alterar dado cliente")
const AlterarDadoClienteController = {
    showAlterarDadoClientePage: async (req, res) => {
        const cliente = await Cliente.findAll()
        return await res.render("alterarDadoCliente", {cliente});
    },

}

module.exports = AlterarDadoClienteController;