import { Link } from 'react-router-dom';
import { CardProdutosContainer } from '../componentes/Conteudo/CardProdutoStyled'

function Carrinho() {
    return (
        <CardProdutosContainer>
            <h1 className='p-5'>Carrinho de compras</h1>
            <div className="card-container">
                <div class="card">
                    <img src="caminho/para/imagem1.jpg" alt="" />
                    <h3>Nome Produto</h3>
                    <p>R$ Preço</p>
                    <p>Quantidade: 2</p>
                    <p>Valor Total: R$ 777</p>

                    <div>
                        <select name="quantidade" id="quantidades">
                            <option value="" disabled selected>Qtd:</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                        </select>&nbsp;&nbsp;&nbsp;
                        <button className='btn btn-link'>Excluir</button>&nbsp;
                    </div>
                </div>
            </div>
        </CardProdutosContainer>
    )
}

export default Carrinho;