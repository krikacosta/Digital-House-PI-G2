const Servico = require("../model/Servico")

console.log("página area cliente")
const AreaClienteController = {
    showAreaClientePage: (req, res) => {
        return res.render("areaCliente");
    },

}

module.exports = AreaClienteController;