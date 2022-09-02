//import styled from "@emotion/styled/types/base";
import Buscar from "../ui/buscar";
import Navegacion from "./Navegacion";
import Link from "next/link";
import styled from "@emotion/styled";
import { css } from "@emotion/react"
import Boton from '../ui/Boton'
const Header = () => {

    const ContenedorHeader = styled.div`
        max-width:1200px;
        margin: 0 auto;
        @media(min-width:768px){
            margin: 0 auto; 
            display: flex;
            justify-content: space-between;
            width: 95%
        }
    `
    const Logo = styled.p`
        color: var(--naranja);
        font-size: 4rem;
        line-heigth: 0;
        font-weight: 700;
        font-family:'Roboto Slab', serif;
        margin-right:2rem;
    `

    return (
        <header
            // Solo se usa una vez por eso no se hizo uso de componente

            css={css`
                border-bottom: 2px solid #e1e1e1;
                padding: 1rem 0;
            `}
        >
            <ContenedorHeader className="">
                <div className="">
                    <Link href="/">
                        <Logo>P</Logo>
                    </Link>
                    <Buscar />
                    <Navegacion />
                </div>
                <div className="">
                    <p>Hola: Sobrino</p>

                    <Boton
                        
                    >Cerrar Sesion</Boton>

                    <Link href="/">
                        <Boton
                            bgColor="true"
                        >
                            Login
                        </Boton>
                    </Link>
                    <Link href="/crear-cuenta">
                        <Boton
                            bgColor="true"
                        >
                            Crear Cuenta
                        </Boton>
                    </Link>
                </div>
            </ContenedorHeader>
        </header>
    );
}

export default Header;