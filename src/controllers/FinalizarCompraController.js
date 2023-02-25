const Servico = require("../model/Servico")

console.log("página finalizarCompra")

const FinalizarCompraController = {
    showFinalizarCompraPage: (req, res) => {
        return res.render("finalizar_compra");
    },

}

module.exports = FinalizarCompraController;