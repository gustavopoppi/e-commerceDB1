import CardProdutos from "./Produtos/CardProdutos"
import BotaoCadastrarProdutos from "./Produtos/BotaoCadastrarProduto"

function Conteudo() {
    return (
        <div className='p-5'>
            <BotaoCadastrarProdutos />
            <CardProdutos />            
        </div>
    )
}

export default Conteudo