import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup'

import * as yup from "yup";

const schema = yup.object({
    nome: yup.string().required("Primeiro nome é obrigatório."),
    preco: yup.number().positive("Deve ser um número positivo.").required().typeError("Valor do Produto é obrigatório."),
    quantidade: yup.number().positive("Deve ser um número positivo.").integer("Deve ser um número inteiro.").required().typeError("Quantidade de estoque é obrigatório."),
  }).required();

function Formulario() {

    const { register, handleSubmit: onSubmit, formState:{ errors } } = useForm({
        resolver: yupResolver(schema)
      });

    const [produto, setProduto] = useState({nome:'', preco:'', quantidade:'', imagem:''});

    const navigate = useNavigate();

    function handleChange(event){
        setProduto({...produto,[event.target.name]:event.target.value});
    }

    const handleSubmit = (data) => {
        produto.nome = data.nome;
        produto.preco = data.preco;
        produto.quantidade = data.quantidade;
        produto.imagem = 'imagem'/*data.imagem[0].name*/
        
        axios.post('http://localhost:8080/produtos', produto).then(result => {
            navigate('/');
        });
    }

    return (
        <div className="container p-5">
            <h1>Cadastrar Produto</h1>
            <form onSubmit={onSubmit(handleSubmit)}>
                <div className="col-6">
                    <div>
                        <label for="nome" className="form-label">Nome do Produto</label>
                        <input onChange={handleChange} defaultValue={produto.nome} {...register("nome")} type="text" className="form-control" />
                        <p className='text-danger'>{errors.nome?.message}</p>
                    </div>
                    <div className="mt-3">
                        <label for="preco" className="form-label">Valor do Produto</label>
                        <input onChange={handleChange} defaultValue={produto.preco} {...register("preco")} type="number" step="0.01" className="form-control" />
                        <p className='text-danger'>{errors.preco?.message}</p>
                    </div>
                    <div className="mt-3">
                        <label for="quantidade" className="form-label">Quantidade estoque</label>
                        <input onChange={handleChange} defaultValue={produto.quantidade} {...register("quantidade")} type="number" className="form-control" />
                        <p className='text-danger'>{errors.quantidade?.message}</p>
                    </div>
                    <div className="mt-3">
                        <label for="imagem" className="form-label">Imagem</label>
                        <input onChange={handleChange} defaultValue={produto.imagem} {...register("imagem")} type="file" className="form-control" />
                    </div>

                    <br />
                    <input type='submit' value="Cadastrar" className='btn btn-success'></input>
                    
                </div>
            </form>
        </div>
    )
}

export default Formulario