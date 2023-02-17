//Importações
const express = require('express');
const path = require('path');

const homeRouter = require('./routes/home');
const produtoRouter = require('./routes/produto');
const alterarDadoClienteRouter = require('./routes/alterarDadoCliente');
const areaClienteRouter = require('./routes/areaCliente');
//Variaveis
const app = express();
const port = 3000;

//Configurações / Middlewares
app.set('view engine', 'ejs');
app.set("views", path.resolve("src", "views"));
app.use(express.static(path.resolve("src", "public")));

//Rotas
app.use(homeRouter);
app.use(produtoRouter);
app.use(alterarDadoClienteRouter)
app.use(areaClienteRouter)

//Escuta do Servidor Funcionando
app.listen(port, () => console.log(`Servidor funcionando na porta ${port}`))
// npm run dev -> nodemon | npm start -> node
