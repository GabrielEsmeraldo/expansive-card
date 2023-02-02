import styled from "styled-components";

type CardBodyProps = {
    open: boolean
}

type CardHeaderProps = {
    open: boolean
}


export const CardContainer = styled.div`
    width: 300px;
    background-color: gray;
    transition: 0.3s;
`

export const CardHeader = styled.header<CardHeaderProps>`
    width: 100%;
    height: 100px;
    background-color: red;

    svg {
        transform: ${props => props.open ? 'rotate(180deg)' : 'rotate(0deg)'};
        transition-duration: 0.3s;
    }
`

export const CardBody = styled.div<CardBodyProps>`
    height: ${props => props.open ? '200px' : '0px'};
    transition-duration: 0.3s;

    p{
        font-size: ${props => props.open ? '16px' : '0px'};
        transition: all 0.1s;
    }
`