const Servico = require("../model/Servico")

console.log("página cadastrar endereço")
const CadastrarNovoEndController = {
    showCadastrarNovoEndPage: (req, res) => {
        return res.render("cadastrar_novoend");
    },

}

module.exports = CadastrarNovoEndController;