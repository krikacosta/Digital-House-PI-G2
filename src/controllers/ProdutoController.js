const {Produto} = require("../../models")
const {Categoria} = require("../../models")
const {Estoque} = require("../../models")

console.log("página produto")
const ProdutoController = {
    showProdutoPage: async (req, res) => {
        const { id } = req.params;
        console.log("estou na Produto controller show produto page")
        console.log(id)
        console.log(Categoria)
        const produto = await Produto.findByPk(id)

        const produtos = await Produto.findAll()

        itens = []
        produtos.forEach(element => {
            itens.push(element)
        });

        itens.forEach(item => {
            console.log(item)
        })

        // console.log(itens[1])
        // const categoria = await Categoria.findByPk(id)
        let tamanhos = []

        // const identificaEstoque = await Estoque.findAll({
        //       produto_id: 1,
        //   })
          

        // const {tamanho} = await Estoque.findByPk(id)

        // console.log(identificaEstoque)


        return res.render('produto', { produto, produtos });
        // const produto = await Produto.findbyPK(produto.ID)
        // return res.render("produto",{produto});
    }

}

module.exports = ProdutoController;




