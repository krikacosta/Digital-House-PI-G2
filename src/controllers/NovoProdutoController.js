const {Produto} = require("../../models")

console.log("página novo produto")
const NovoProdutoController = {
    showNovoProdutoPage: (req, res) => {
        return res.render("novoProduto");
    },

}

module.exports = NovoProdutoController;