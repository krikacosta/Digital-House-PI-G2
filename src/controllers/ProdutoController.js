const Servico = require("../model/Servico")

console.log("página produto")
const ProdutoController = {
    showProdutoPage: (req, res) => {
        return res.render("produto");
    },

}

module.exports = ProdutoController;