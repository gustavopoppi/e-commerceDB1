import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios';

import { CardProdutosContainer } from './CardProdutoStyled'

function CardProdutos() {

    const [produtos, setProdutos] = useState([]);
    const [atualizar, setAtualizar] = useState();

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

    function getQuantidadeEstoqueProduto(produto){
        const result = [];

        for (let index = 0; index < produto.quantidade; index++) {
            console.log("entrou no segundo for");
            result.push(<option value={index + 1}>{index + 1}</option>)
        }

        return result;
    }

    return (
        <CardProdutosContainer>
            <div className="card-container">
                {produtos.map(produto => (
                    <div class="card">
                        <img src="caminho/para/imagem1.jpg" alt="" />
                        <h3>{produto.nome}</h3>
                        <p>R$ {produto.preco}</p>
                        <p>{produto.quantidade}</p>
                        <div className='mb-2'>
                            <select name="quantidade" id="quantidades">
                                {getQuantidadeEstoqueProduto(produto)}
                            </select>&nbsp;
                            <button className='btn btn-warning btn-sm'>Adicionar ao carrinho</button>
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