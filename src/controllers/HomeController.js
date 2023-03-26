const { Produto } = require("../../models")

console.log("página home")
const HomeController = {
    showHomePage: async (req, res) => {

        const produtos = await Produto.findAll()

        return res.render("index", {produtos});
    }
    // ,

    // showProduto: async (req, res) => {
    //     const { produto } = req.params;
    //     // console.log("estou na home controller show produto")
    //     // console.log(produto)
    //     const item = await Produto.findByPk(id)


    //     return res.render('produto', { item });
    // }

}

module.exports = HomeController;