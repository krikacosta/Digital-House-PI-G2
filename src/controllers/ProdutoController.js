const {Produto} = require("../../models")

console.log("página produto")
const ProdutoController = {
    showProdutoPage: async (req, res) => {
        return await res.render("produto");
    },

}

module.exports = ProdutoController;