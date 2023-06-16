import { Link } from 'react-router-dom'
import { FaShoppingCart } from "react-icons/fa";
import { HeaderContainer } from './HeaderStyled'
import { useEffect, useState } from 'react';
import axios from 'axios';

function Header() {

    const [qtdItensCarrinho, setQtdItensCarrinho] = useState(0)
    const [atualizar, setAtualizar] = useState();

    useEffect(() => {
        axios.get("http://localhost:8080/carrinho").then(carrinho => {
            setQtdItensCarrinho(carrinho.data.length)
            setAtualizar(carrinho)
        });
    }, [atualizar])

    return (
        <HeaderContainer>
            <div className="container">
                <div className='logo'>
                    LOGOMARCA
                </div>

                <nav>
                    <ul>
                        <li><Link to="/"><a>Home</a></Link></li>
                        <li>
                            <div className='cart-icon'>
                                <Link to={"/carrinho"}>
                                    <FaShoppingCart></FaShoppingCart>
                                    <span className='cart-count'>{qtdItensCarrinho}</span>
                                </Link>
                            </div>
                        </li>
                    </ul>
                </nav>
            </div>
        </HeaderContainer>
    )
}

export default Header