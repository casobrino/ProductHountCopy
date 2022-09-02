import React from 'react'
import styled from "@emotion/styled"

const Boton = styled.a`
    font-weigth:700;
    text-transformation: uppercase;
    border: 1px solid #d1d1d1;
    padding: .8rem 2rem;
    margin-right: 1rem;
    background-color: ${props => props.bgColor ? '#DA552F' : 'white'};
    color: ${props => props.txColor ? 'white' : '#000'};
    &:last-of-type{
        margin-right:0;
    }
`
export default Boton;