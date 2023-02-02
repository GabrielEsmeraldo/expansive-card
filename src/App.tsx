import { Fragment, useState } from "react"
import Card from "./component/Card"
import { Container } from "./styles/App"
import GlobalStyle from "./styles/GlobalStyle"

const App = () => {

  return (
    <Fragment>
      <GlobalStyle />
      <Container>
        <Card
          title='Título principal'
          paragraph='texto do parágrafotexto do parágrafotexto do parágrafotexto 
          do parágrafotexto do parágrafotexto do parágrafotexto do parágrafotexto
           do parágrafotexto do parágrafotexto do parágrafo'
        />
        <Card
          title='Título dois'
          paragraph='texto do parágrafotexto do parágrafotexto do parágrafotexto 
          do parágrafotexto do parágrafotexto do parágrafotexto do parágrafotexto
           do parágrafotexto do parágrafotexto do parágrafo'
        />
        <Card
          title='Título quatro'
          paragraph='texto do parágrafotexto do parágrafotexto do parágrafotexto 
          do parágrafotexto do parágrafotexto do parágrafotexto do parágrafotexto
           do parágrafotexto do parágrafotexto do parágrafo'
        />
        <Card
          title='Título três'
          paragraph='texto do parágrafotexto do parágrafotexto do parágrafotexto 
          do parágrafotexto do parágrafotexto do parágrafotexto do parágrafotexto
           do parágrafotexto do parágrafotexto do parágrafo'
        />
        
      </Container>
    </Fragment>

  )
}

export default App
