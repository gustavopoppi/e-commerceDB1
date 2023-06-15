import { Link } from 'react-router-dom'
import { FaShoppingCart } from "react-icons/fa";
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
                        <li><Link to={"/carrinho"}><FaShoppingCart/></Link></li>                                                
                    </ul>
                </nav>
            </div>
        </HeaderContainer>
    )
}

export default Header