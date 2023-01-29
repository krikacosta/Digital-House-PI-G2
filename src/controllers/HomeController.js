const Servico = require("../model/Servico")

console.log("página home")
const HomeController = {
    showHomePage: (req, res) => {
        return res.render("index");
    },

}

module.exports = HomeController;