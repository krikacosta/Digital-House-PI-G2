const Servico = require("../model/Servico")

console.log("página novo produco")
const NovoProdutoController = {
    showNovoProdutoPage: (req, res) => {
        return res.render("NovoProduto");
    },

}

module.exports = NovoProdutoController;