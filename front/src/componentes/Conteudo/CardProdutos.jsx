import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios';

import { CardProdutosContainer } from './CardProdutoStyled'

function CardProdutos() {

    const [produtos, setProdutos] = useState([]);
    const [atualizar, setAtualizar] = useState();

    const [selectedOption, setSelectedOption] = useState(1);

    useEffect(() => {
        axios.get("http://localhost:8080/produtos").then(result => {
            setProdutos(result.data)
        });
    }, [atualizar])

    function excluir(id) {
        axios.delete('http://localhost:8080/produtos/' + id).then(result => {
            setAtualizar(result)
        });
    }

    function adicionarCarrinho(produto) {
        if (produto.opcaoSelecionada == null)
            produto.opcaoSelecionada = 1;

        produto.idProduto = produto.id;
        produto.produto = produto;
        produto.valorTotal = produto.preco * produto.opcaoSelecionada;
        produto.quantidade = produto.opcaoSelecionada;
        axios.post('http://localhost:8080/carrinho', produto).then(result => {
            console.log(result);
        })
    }

    function getQuantidadeEstoqueProduto(produto) {
        const result = [];

        for (let index = 0; index < produto.quantidade; index++) {
            result.push(<option value={index + 1}>{index + 1}</option>)
        }

        return result;
    }

    const handleSelectChange = (event, produto) => {
        produto.opcaoSelecionada = event.target.value;
        setSelectedOption(event.target.value);
    };

    return (
        <CardProdutosContainer>
            <div className="card-container">
                {produtos.map(produto => (                    
                    <div class="card">
                        <img src="caminho/para/imagem1.jpg" alt="" />
                        <h3>{produto.nome}</h3>
                        <p>R${(produto.opcaoSelecionada == null) ? (produto.preco * 1) : (produto.preco * produto.opcaoSelecionada)}</p>
                        <p hidden>{produto.quantidade}</p>
                        <div className='mb-2'>
                            <select onChange={event => handleSelectChange(event, produto)} name="" id="">
                                {getQuantidadeEstoqueProduto(produto)}
                            </select>&nbsp;
                            <Link to={'/carrinho/'}><button onClick={() => adicionarCarrinho(produto)} className='btn btn-warning btn-sm'>Adicionar ao carrinho</button></Link>
                        </div>
                        <div>
                            <Link to={'/produto/' + produto.id}><button className='btn btn-primary btn-sm'>Alterar</button>&nbsp;</Link>
                            <button onClick={() => excluir(produto.id)} className='btn btn-danger btn-sm'>Excluir</button>&nbsp;
                        </div>
                    </div>

                ))}

            </div>
        </CardProdutosContainer>
    )
}

export default CardProdutos