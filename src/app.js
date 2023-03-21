//Importações
const express = require('express');
const path = require('path');
const homeRouter = require('./routes/home');
const produtoRouter = require('./routes/produto');
const cadastroClienteRouter = require('./routes/cadastroCliente');
const consultar_pedidosRouter = require('./routes/consultar_pedidos');
const loginClienteRouter = require('./routes/loginCliente');
const alterarDadoClienteRouter = require('./routes/alterarDadoCliente');
const areaClienteRouter = require('./routes/areaCliente');
const novoProdutoRouter = require('./routes/novoProduto');
const editarProdutoRouter = require('./routes/editarProduto');
const alterarSenhaRouter = require('./routes/alterarSenha');
const carrinhoRouter = require('./routes/carrinho');
const finalizarCompraRouter = require('./routes/finalizarCompra');
const cadastrarNovoEndRouter = require('./routes/cadastrarNovoEnd');
const adminRouter = require('./routes/admin');


//Variaveis
const app = express();
const port = 3030;

//Configurações / Middlewares
app.set('view engine', 'ejs');
app.set("views", path.resolve("src", "views"));
app.use(express.static(path.resolve("src", "public")));

//Rotas
app.use(homeRouter);
app.use(produtoRouter);
app.use(cadastroClienteRouter);
app.use(consultar_pedidosRouter);
app.use(loginClienteRouter);
app.use(alterarDadoClienteRouter)
app.use(areaClienteRouter)
app.use(novoProdutoRouter)
app.use(editarProdutoRouter)
app.use(alterarSenhaRouter)
app.use(carrinhoRouter);
app.use(finalizarCompraRouter);
app.use(cadastrarNovoEndRouter);
app.use(adminRouter);


//Escuta do Servidor Funcionando
app.listen(port, () => console.log(`Servidor funcionando na porta ${port}`))
// npm run dev -> nodemon | npm start -> node
