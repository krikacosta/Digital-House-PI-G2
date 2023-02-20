
const Servico = require("../model/Servico")

console.log("Consultar Pedidos")
const consultar_pedidosController = {
    showProdutoPage: (req, res) => {
        return res.render("consultar_pedidos");
    },

}

module.exports = consultar_pedidosController;