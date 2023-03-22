const express = require('express');
const AdminController = require("../controllers/AdminController");

const router = express.Router();

router.get("/produtos/index", AdminController.listProdutos);
router.get("/produtos/create", AdminController.showCreateProduto);
router.post("/produtos/create", AdminController.storeProduto);
router.get("/produtos/:id/edit", AdminController.showEditProduto);
router.put("/produtos/:id/edit", AdminController.updateProduto);
router.delete("/produtos/:id/delete", AdminController.deleteProduto);

module.exports = router;