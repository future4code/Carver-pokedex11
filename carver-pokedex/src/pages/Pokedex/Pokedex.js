import React from "react"
import { MainContainer,HeaderHome,AreaCard,Card,StyledButton1,StyledButton2,CardButtons,CardImage} from "./Styled";
import {TiDeleteOutline} from "react-icons/ti"
import {ImInfo} from 'react-icons/im'
const Pokedex = () => {
  return (
    <MainContainer >
      <HeaderHome>
        Pokedex
        <button>voltar</button>
      </HeaderHome>
      <AreaCard>
     <Card>
        <CardImage>
        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png" alt="imagem do pokemon"/>
        </CardImage>
        <CardButtons>
        <StyledButton2><TiDeleteOutline size="2.8em"/> </StyledButton2>
        <StyledButton1><ImInfo size="2.3em"/></StyledButton1>
        </CardButtons>
      </Card> 
      </AreaCard>
    </MainContainer>
  );
}

export default Pokedex;