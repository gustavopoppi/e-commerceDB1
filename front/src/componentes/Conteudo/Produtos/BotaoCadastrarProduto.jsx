import { Link } from 'react-router-dom'

function ListaCadastrarProduto() {
    return (
        <div className='d-flex justify-content-between mb-2'>
            <h2>Lista de Produtos</h2>
            <button className='btn btn-primary'><Link to="/cadastroProdutos">Cadastrar Produto</Link></button>
        </div>
    )
}

export default ListaCadastrarProduto