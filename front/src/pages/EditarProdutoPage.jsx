import { useParams, Link, useNavigate } from "react-router-dom"
import { useState, useEffect } from "react";
import axios from "axios";

function Produto() {

    const { id } = useParams();

    const navigate = useNavigate();

    const [produto, setProduto] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8080/produtos/' + id).then(result => {
            setProduto(result.data);
        })
    }, [id])

    function handleChange(event){
        setProduto({...produto,[event.target.name]:event.target.value});
    }

    function handleSubmit(event) {
        event.preventDefault();
        axios.put('http://localhost:8080/produtos', produto).then(result => {
            navigate('/');
        });
    }
    
    return (
        <div className="container">
            <h1>Editar Produto</h1>
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
                    <Link to={'/'}><button className='btn btn-secondary'>Cancelar</button>&nbsp;&nbsp;&nbsp;</Link>
                    <input type='submit' value="Salvar" className='btn btn-success'></input>&nbsp;

                </div>
            </form>
        </div>
    )
}

export default Produto