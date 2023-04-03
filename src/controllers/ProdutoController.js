const {Produto} = require("../../models")
const {Categoria} = require("../../models")
const {Estoque} = require("../../models")

console.log("página produto")
const ProdutoController = {
    showProdutoPage: async (req, res) => {
        const { id } = req.params;

        const produto = await Produto.findByPk(id)

        const produtos = await Produto.findAll()

        const estoque_produtos = await Estoque.findAll()

        const lista_categorias = await Categoria.findAll()

        return res.render('produto', { produto, produtos, estoque_produtos, lista_categorias });
       
    }

}

module.exports = ProdutoController;
