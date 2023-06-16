import styled from "styled-components"
import { Link } from "react-router-dom"

const CompraContainer = styled.div`
    .mensagem {
        font-size: 24px;
        text-align: center;
        margin-top: 100px;
    }
`

function CompraFinalizada() {
    return (
        <CompraContainer>
            <div className="mensagem">
                <p>Compra finalizada com sucesso! Obrigado por comprar conosco.</p>
                <Link to={'/'}><button className="btn btn-primary">Voltar ao menu inicial</button></Link>
            </div>
        </CompraContainer>
    )
}

export default CompraFinalizada