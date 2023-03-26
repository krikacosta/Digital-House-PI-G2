// const {Pedido} = require("../../models")

console.log("página carrinho")
const CarrinhoController = {

        showCarrinhoPage: (req, res) => {
            console.log("show carrinho do produto ", typeof(produto))
            const carrinho = req.body;

            console.log("show carrinho ", carrinho)
    
            let total = 0;
    
            // if (!carrinho) {
            //     return res.render('carrinho', { carrinho: [], total });
            // }
    
            // carrinho.forEach(produto => {
            //     total += Number(produto.produto_preco);
            // });
    
            return res.render('carrinho', {carrinho});
        },

    // showCarrinhoPage: async (req, res) => {
    // showCarrinhoPage: (req, res) => {
        // const { carrinho } = req.params;

        // const carrinho = await Pedido.findByPk(id)

        // return res.render("carrinho", {carrinho});
    // },
    addCart: (req, res) => {
        
        const {produto_id, produto_nome, produto_img, produto_preco, produto_tamanho, produto_cor} = req.body;
        const produto = [produto_id, produto_nome, produto_img, produto_preco, produto_tamanho, produto_cor];
        for(let element of produto) { 
            console.log("teste" , element)
            
        };

        console.log("show add produto ", typeof(produto))

        return res.redirect('/carrinho')
    }

}

module.exports = CarrinhoController;