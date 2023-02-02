import { CardBody, CardContainer, CardHeader } from "../styles/Card"
import { ArrowCircleDown } from 'phosphor-react'
import { useState } from "react"

type CardProps = {
    title: string,
    paragraph: string
}

const Card = ({ title, paragraph }: CardProps) => {
    const [open, setOpen] = useState(true)

    function handleClick() {
        setOpen(!open)
    }

    return (
        <CardContainer>
            <CardHeader open={open}>{title} <button onClick={handleClick}><ArrowCircleDown size={36} /></button> </CardHeader>
            <CardBody open={open}>
                <p>{paragraph}</p>
            </CardBody>
        </CardContainer>
    )
}

export default Card