const express = require('express');
const router = express.Router();
const AdminController = require("../controllers/AdminController");


// router.get("/produtos/index", AdminController.showHome)
router.get("/produtos/index", AdminController.listProdutos);
router.get("/produtos/cadastrar", AdminController.showCreateProduto);
router.post("/produtos/cadastrar", AdminController.storeProduto);
router.get("/produtos/:id/editar", AdminController.showEditProduto);
router.put("/produtos/:id/editar", AdminController.updateProduto);
router.delete("/produtos/:id/deletar", AdminController.deleteProduto);

module.exports = router;