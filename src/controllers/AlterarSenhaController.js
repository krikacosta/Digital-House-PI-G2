const { Usuario } = require("../../models")

console.log("página alterar senha")
const AlterarSenhaController = {
    showAlterarSenhaPage: (req, res) => {
        return res.render("alterarSenha");
    },

}

module.exports = AlterarSenhaController;