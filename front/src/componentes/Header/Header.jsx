import { Link } from 'react-router-dom'

import { HeaderContainer } from './HeaderStyled'

function Header() {
    return (
        <HeaderContainer>
            <div className="container">
                <div className='logo'>
                    LOGOMARCA
                </div>

                <nav>
                    <ul>
                        <li><Link to="/"><a>Home</a></Link></li>
                        <li><Link to="/cadastroProdutos">Produtos</Link></li>
                    </ul>
                </nav>

            </div>
        </HeaderContainer>
    )
}

export default Header