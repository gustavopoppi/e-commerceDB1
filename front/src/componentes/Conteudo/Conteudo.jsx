import CardProdutos from "./CardProdutos"
import BotaoCadastrarProdutos from "./BotaoCadastrarProduto"

function Conteudo() {
    return (
        <div className='p-5'>
            <BotaoCadastrarProdutos />
            <CardProdutos />            
        </div>
    )
}

export default Conteudo