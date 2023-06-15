import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Formulario() {

    const [produto, setProduto] = useState({nome:'', preco:'', quantidade:'', imagem:''});

    const navigate = useNavigate();

    function handleChange(event){
        setProduto({...produto,[event.target.name]:event.target.value});
    }

    function handleSubmit(event){
        event.preventDefault();
        axios.post('http://localhost:8080/produtos', produto).then(result => {
            navigate('/');
        });
    }

    return (
        <div className="container">
            <h1>Cadastrar Produto</h1>
            <form onSubmit={handleSubmit}>
                <div className="col-6">
                    <div>
                        <label for="nome" className="form-label">Nome do Produto</label>
                        <input onChange={handleChange} defaultValue={produto.nome} name="nome" type="text" className="form-control" />
                    </div>
                    <div className="mt-3">
                        <label for="preco" className="form-label">Valor do Produto</label>
                        <input onChange={handleChange} defaultValue={produto.preco} name="preco" type="number" step="0.01" className="form-control" />
                    </div>
                    <div className="mt-3">
                        <label for="quantidade" className="form-label">Quantidade estoque</label>
                        <input onChange={handleChange} defaultValue={produto.quantidade} name="quantidade" type="number" className="form-control" />
                    </div>
                    <div className="mt-3">
                        <label for="imagem" className="form-label">Imagem</label>
                        <input onChange={handleChange} defaultValue={produto.imagem} name="imagem" type="file" className="form-control" />
                    </div>

                    <br />
                    <input type='submit' value="Cadastrar" className='btn btn-success'></input>
                    
                </div>
            </form>
        </div>
    )
}

export default Formulario