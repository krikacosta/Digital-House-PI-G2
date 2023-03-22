const Produto = require("../model/Produto");


console.log("página admin")

const AdminController = {
    listProdutos: (req, res) => {
        const produto = Produto.findAll();
        // const produtos = Produto.findAll();

        return res.render("admin/produtos/index", { produto })
    },

    showCreateProduto: (req, res) => {
        return res.render("admin/produtos/cadastrar")
    },

    storeProduto: (req, res) => {
        const { CATEGORIA_ID, NOME_PRODUTO, DESCRICAO, PRECO, IMAGEM_URL, PROMOCAO, DESTAQUE, SEM_ESTOQUE, ATIVO } = req.body;

        console.log(req.body)

        const produto = { CATEGORIA_ID, NOME_PRODUTO, DESCRICAO, PRECO, IMAGEM_URL, PROMOCAO, DESTAQUE, SEM_ESTOQUE, ATIVO }

        Produto.create(produto);

        return res.redirect("/admin/produtos")
    },

    showEditProduto: (req, res) => {
        const { ID } = req.params;

        const produto = Produto.findByPk(id);

        return res.render("admin/produtos/editar", { produto })
    },

    updateProduto: (req, res) => {
        const { ID, CATEGORIA_ID, NOME_PRODUTO, DESCRICAO, PRECO, IMAGEM_URL, PROMOCAO, DESTAQUE, SEM_ESTOQUE, ATIVO } = req.body;

        const produtoAtualizado = { ID, CATEGORIA_ID, NOME_PRODUTO, DESCRICAO, PRECO, IMAGEM_URL, PROMOCAO, DESTAQUE, SEM_ESTOQUE, ATIVO };

        Produto.update(ID, produtoAtualizado);

        return res.redirect("/admin/produtos")
    },

    deleteProduto: (req, res) => {
        const { ID } = req.params;

        Produto.destroy(ID);

        return res.redirect("/admin/produtos");
    }
}

module.exports = AdminController;