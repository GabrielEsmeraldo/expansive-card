import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    gap: 2rem;
`

export const Button = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 500px;
    height: 500px;
    font-weight: 700;
    font-size: 36px;
    background-color: ${props => props.color && [props.color]};
    font-family: monospace;
`