const express = require('express');
const AdminController = require("../controllers/AdminController");
const router = express.Router();



// router.get("/produtos/index", AdminController.showHome)
router.get("/admin/produtos/", AdminController.listProdutos);
router.get("/admin/produtos/cadastrar", AdminController.showCreateProduto);
router.post("/admin/produtos/cadastrar", AdminController.storeProduto);
router.get("/admin/produtos/:id/editar", AdminController.showEditProduto);
router.put("/admin/produtos/:id/editar", AdminController.updateProduto);
router.post('/admin/produtos/:id/deletar', AdminController.deleteProduto);

module.exports = router;