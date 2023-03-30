const { Produto } = require("../../models");
// const { Categoria } = require("../../models");

console.log("página admin")

const AdminController = {

    listProdutos: async (req, res) => {

        // showHome: async (req, res) => {
        const url = req.originalUrl;
        const produtos = await Produto.findAll(
            // {
            //     include: {
            //         model: Categoria,
            //         as: 'categoria'
            //     }
            // }
        )
       // console.log(produtos)



        return res.render('admin/produtos/index', { url, produtos });
    },

    showHome: async (req, res) => {
        // listProdutos: async (req, res) => {
        const url = req.originalUrl;

        // const produtos = await Produto.findAll();
        const produtos = await res.Produto;
        console.log(produtos)
        // const produtos = Produto.findAll();

        return res.render("admin/produtos", { produtos })
    },

    showCreateProduto: (req, res) => {
        return res.render("admin/produtos/cadastrar")
    },

    storeProduto: async (req, res) => {
        const { CATEGORIA_ID, NOME_PRODUTO, DESCRICAO, PRECO, IMAGEM_URL, PROMOCAO, DESTAQUE, SEM_ESTOQUE, ATIVO } = req.body;

        const produto = { CATEGORIA_ID, NOME_PRODUTO, DESCRICAO, PRECO, IMAGEM_URL, PROMOCAO, DESTAQUE, SEM_ESTOQUE, ATIVO };

        console.log(produto);

        await Produto.create(produto);

        return res.redirect("/admin/produtos")
    },

    showEditProduto: async (req, res) => {
        const { id } = req.params;

        const produtoencontrado = await Produto.findOne({
            where: {
                id
            }
        })

        return res.render("admin/produtos/editar", { Produto: produtoencontrado });
    },

    updateProduto: (req, res) => {
        const { ID, CATEGORIA_ID, NOME_PRODUTO, DESCRICAO, PRECO, IMAGEM_URL, PROMOCAO, DESTAQUE, SEM_ESTOQUE, ATIVO } = req.body;

        const produtoAtualizado = { ID, CATEGORIA_ID, NOME_PRODUTO, DESCRICAO, PRECO, IMAGEM_URL, PROMOCAO, DESTAQUE, SEM_ESTOQUE, ATIVO };

        Produto.update(ID, produtoAtualizado);

        return res.redirect("/admin/produtos")
    },

    deleteProduto: async (req, res) => {
        const { id } = req.params
        await Produto.destroy({
            where: { id }
        })
        return res.redirect('/admin/produtos')
    }
};

module.exports = AdminController;


