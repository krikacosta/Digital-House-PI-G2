const { Produto } = require("../../models")
const { Categoria } = require("../../models")

console.log("página home")
const HomeController = {
    showHomePage: async (req, res) => {

        const produtos = await Produto.findAll()

        return res.render("index", {produtos});
    },

    showCategoriaPage: async (req, res) => {

        const url = req.originalUrl
        const produtos = await Produto.findAll()
        const lista_categoria = await Categoria.findAll()

        return res.render("index", {produtos, lista_categoria, url});
    }

}

module.exports = HomeController;