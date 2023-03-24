const {Produto} = require("../../models")

console.log("página editar produto")
const EditarProdutoController = {
    showEditarProdutoPage: (req, res) => {
        return res.render("editarProduto");
    },

}

module.exports = EditarProdutoController;