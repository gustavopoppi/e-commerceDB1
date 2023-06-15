import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios';

import styled from "styled-components"

const CardProdutosContainer = styled.div`
    .card-container {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: stretch;
    }
    
    .card {
        width: calc(33.33% - 20px);
        border: 1px solid #ccc;
        border-radius: 5px;
        padding: 10px;
        margin: 10px;
        text-align: center;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
    
    .card img {
        width: 100%;
        max-height: 200px;
        object-fit: cover;
        border-radius: 5px;
        margin-bottom: 10px;
    }
    
    .card h3,
    .card p {
        flex-grow: 1;
    }

    a{
        color: black;
    }

`

function CardProdutos() {

    const [produtos, setProdutos] = useState([]);
    const [atualizar, setAtualizar] = useState();

    useEffect(() => {
        axios.get("http://localhost:8080/produtos").then(result => {
            setProdutos(result.data)
        });
    }, [atualizar])

    function excluir(id){
        axios.delete('http://localhost:8080/produtos/' + id).then(result =>{
            setAtualizar(result)
        });
    }

    return (
        <CardProdutosContainer>
            <div class="card-container">
                {produtos.map(serv => (
                    <div class="card">
                        <img src="caminho/para/imagem1.jpg" alt="" />
                        <h3>{serv.nome}</h3>
                        <p>R$ {serv.preco}</p>

                        <div>
                            <Link to={'/produto/' + serv.id}><button className='btn btn-primary'>Alterar</button>&nbsp;</Link>
                            <button onClick={()=>excluir(serv.id)} className='btn btn-danger'>Excluir</button>&nbsp;
                        </div>
                    </div>

                ))}

            </div>
            
        </CardProdutosContainer>
    )
}

export default CardProdutos