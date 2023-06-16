import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { CardProdutosContainer } from '../componentes/Conteudo/CardProdutoStyled'
import axios from 'axios';

function Carrinho() {

    const [produtosCarrinho, setProdutosCarrinho] = useState([]);
    const [valorTotalCarrinho, setValorTotalCarrinho] = useState(0);
    const [selectedOption, setSelectedOption] = useState(1);
    const [atualizar, setAtualizar] = useState();

    useEffect(() => {
        axios.get("http://localhost:8080/carrinho").then(carrinho => {
            setProdutosCarrinho(carrinho.data)
        });
    }, [atualizar])

    function excluir(id) {
        axios.delete('http://localhost:8080/carrinho/' + id).then(carrinho => {
            setAtualizar(carrinho)
        });
    }

    //TODO GUSTAVO REFATORAR ESSE CÓDUIGO TODO, ESTÁ IGUAL A DO CARDPRODUTO
    function getQuantidadeEstoqueProduto(produto) {
        const result = [];

        for (let index = 0; index < produto.quantidade; index++) {
            result.push(<option value={index + 1}>{index + 1}</option>)
        }

        return result;
    }

    const handleSelectChange = (event) => {
        setSelectedOption(event.target.value);
    };

    return (
        <CardProdutosContainer>
            <div className='d-flex justify-content-between mb-2'>
                <h1>Lista de Produtos Cadastrados</h1>
                <div>
                    <p>Valor Total: R$ {valorTotalCarrinho}</p>
                    <Link to="/"><button className='btn btn-primary'>Finalizar Compra</button></Link>
                </div>
            </div>
            <div className="card-container">
                {produtosCarrinho.map(carrinho => (
                    <div class="card">
                        <img src="caminho/para/imagem1.jpg" alt="" />
                        <h3></h3>
                        <p>R$ {carrinho.produto.preco}</p>
                        <p>Quantidade: {carrinho.quantidade}</p>
                        <p>Valor Total: R$ {carrinho.valorTotal}</p>

                        <div>
                            <select onChange={handleSelectChange} name="quantidade" id="quantidades">
                                {getQuantidadeEstoqueProduto(carrinho.produto)}
                            </select>&nbsp;&nbsp;&nbsp;
                            <button onClick={() => excluir(carrinho.id)} className='btn btn-link'>Excluir</button>&nbsp;
                        </div>
                    </div>
                ))}
            </div>
        </CardProdutosContainer>
    )
}

export default Carrinho;