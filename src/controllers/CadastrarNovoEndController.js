const { Endereco } = require("../../models")

console.log("página cadastrar endereço")
const CadastrarNovoEndController = {
    showCadastrarNovoEndPage: (req, res) => {
        return res.render("cadastrar_novoend");
    },

}

module.exports = CadastrarNovoEndController;