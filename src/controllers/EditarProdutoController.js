const Servico = require("../model/Servico")

console.log("página editar produco")
const EditarProdutoController = {
    showEditarProdutoPage: (req, res) => {
        return res.render("editarProduto");
    },

}

module.exports = EditarProdutoController;