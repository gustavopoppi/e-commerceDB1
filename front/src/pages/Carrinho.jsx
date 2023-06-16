import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { CardProdutosContainer } from '../componentes/Conteudo/CardProdutoStyled'
import axios from 'axios';


function Carrinho() {

    const [produtosCarrinho, setProdutosCarrinho] = useState([]);
    const [valorTotalCarrinho, setValorTotalCarrinho] = useState(0);
    const [selectedOption, setSelectedOption] = useState(1);
    const [atualizar, setAtualizar] = useState();

    const navigate = useNavigate();
    let totalCarrinho = 0;

    useEffect(() => {
        axios.get("http://localhost:8080/carrinho").then(carrinho => {
            setProdutosCarrinho(carrinho.data)
            atualizaValorPelaTotalPelaRequisicao(true)
        });
    }, [atualizar])

    function excluir(id) {
        axios.delete('http://localhost:8080/carrinho/' + id).then(carrinho => {            
            setAtualizar(carrinho)
        });
        atualizaValorPelaTotalPelaRequisicao(true)
    }

    //TODO GUSTAVO REFATORAR ESSE CÓDUIGO TODO, ESTÁ IGUAL A DO CARDPRODUTO
    function getQuantidadeEstoqueProduto(produto) {
        const result = [];

        for (let index = 0; index < produto.quantidade; index++) {
            result.push(<option value={index + 1}>{index + 1}</option>)
        }

        return result;
    }

    const handleSelectChange = (event, carrinho) => {
        setSelectedOption(event.target.value);
        carrinho.quantidade = event.target.value;
        carrinho.valorTotal = carrinho.produto.preco * carrinho.quantidade;

        atualizaValorPelaTotalPelaRequisicao(false)
    };

    function atualizaValorPelaTotalPelaRequisicao(atualizaPelaRequisicao) {
        if (atualizaPelaRequisicao) {
            axios.get("http://localhost:8080/carrinho").then(carrinho => {
                carrinho.data.map(result => totalCarrinho += result.valorTotal)
                setValorTotalCarrinho(totalCarrinho)
            })
        }
        else {
            produtosCarrinho.map(result => totalCarrinho += result.valorTotal);
            setValorTotalCarrinho(totalCarrinho);
        }
    }

    function finalizarCompra() {
        produtosCarrinho.map(produto => {
            axios.post('http://localhost:8080/compra/', produto).then(
                console.log()
                // navigate('/compraFinalizada')
            )
        })
    }

    return (
        <CardProdutosContainer>
            <div className='d-flex justify-content-between mb-2'>
                <h1>Lista de Produtos Cadastrados</h1>
                <div>
                    <p>Valor Total: R$ {valorTotalCarrinho}</p>
                    <button onClick={() => finalizarCompra()} className='btn btn-primary'>Finalizar</button>
                </div>
            </div>
            <div className="card-container">
                {produtosCarrinho.map(carrinho => (
                    <div class="card">
                        <img src="caminho/para/imagem1.jpg" alt="" />
                        <h3>{carrinho.produto.nome}</h3>
                        <p>R$ {carrinho.produto.preco}</p>
                        <p>Quantidade: {carrinho.quantidade}</p>
                        <p>Valor Total: R$ {carrinho.valorTotal}</p>

                        <div>
                            <select onChange={event => handleSelectChange(event, carrinho)} name="quantidade" id="quantidades">
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