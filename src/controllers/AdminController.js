const { Produto } = require("../../models");
const { Categoria } = require("../../models");

console.log("página admin")

const AdminController = {

    listProdutos: async (req, res) => {

        const url = req.originalUrl;
        const produtos = await Produto.findAll()
           
        return res.render('admin/produtos/index', { url, produtos });
    },

    showHome: async (req, res) => {
        // listProdutos: async (req, res) => {
        const url = req.originalUrl;

        // const produtos = await Produto.findAll();
        const produtos = await res.Produto;
        // console.log(produtos)
        // const produtos = Produto.findAll();

        return res.render("admin/produtos", { produtos })
    },

    showCreateProduto: (req, res) => {
        return res.render("admin/produtos/cadastrar")
    },

    storeProduto: async (req, res) => {
        const { categoria_id, nome_produto, descricao, preco, imagem_url, promocao, destaque, estoque, ativo } = req.body;

        await Produto.create({
            CATEGORIA_ID: categoria_id,
            NOME_PRODUTO: nome_produto,
            DESCRICAO: descricao,
            PRECO: preco,
            IMAGEM_URL: imagem_url,
            PROMOCAO: promocao,
            DESTAQUE: destaque,
            ESTOQUE: estoque,
            ATIVO: ativo
        });

        return res.redirect("/admin/produtos")
    },

    showEditProduto: async (req, res) => {
        const { id } = req.params;

        const produtoencontrado = await Produto.findOne({
            where: { id }
        })

        return res.render("admin/produtos/editar", { Produto: produtoencontrado });
    },

    updateProduto: async (req, res) => {
        
        const {categoria_id, nome_produto, descricao, preco, imagem_url, promocao, destaque, estoque, ativo } = req.body;
        const { id } = req.params

        const produtoAtualizado = { 
            CATEGORIA_ID: categoria_id,
            NOME_PRODUTO: nome_produto,
            DESCRICAO: descricao,
            PRECO: preco,
            IMAGEM_URL: imagem_url,
            PROMOCAO: promocao,
            DESTAQUE: destaque,
            ESTOQUE: estoque,
            ATIVO: ativo };
       
        // console.log(produtoAtualizado);
       
        await Produto.update(produtoAtualizado, {
            where: { id }
        } )

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


