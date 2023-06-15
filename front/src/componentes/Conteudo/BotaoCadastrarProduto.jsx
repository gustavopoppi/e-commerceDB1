import { Link } from 'react-router-dom'

function ListaCadastrarProduto() {
    return (
        <div className='d-flex justify-content-between mb-2'>
            <h1>Lista de Produtos Cadastrados</h1>
            <Link to="/cadastroProdutos"><button className='btn btn-primary'>Cadastrar Produto</button></Link>
        </div>
    )
}

export default ListaCadastrarProduto