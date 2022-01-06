import React from "react"
import {goToPokedex} from '../../route/coordinator'
import { MainContainer,HeaderHome,Card,CardImage,CardButtons, AreaCard, StyledButton1,StyledButton2} from "./Styled";
import {MdCatchingPokemon} from 'react-icons/md'
import {ImInfo} from 'react-icons/im'
import { useHistory } from "react-router-dom";


const HomePage = () => {
  const history = useHistory()
  console.log(history)
  
  return (
    <MainContainer >
      <HeaderHome>
      Lista de Pokemons
<<<<<<< HEAD
      <button onClick={()=>goToPokedex(history)}>Pokedex</button>
=======
      <button onClick={()=>goToPokedex}>Pokedex</button>
>>>>>>> eb4de0d12f92b4f7b870fe55dc5125f43731eee6
      </HeaderHome>
     <AreaCard>
     <Card>
        <CardImage>
        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png" alt="imagem do pokemon"/>
        </CardImage>
        <CardButtons>
        <StyledButton2><MdCatchingPokemon size="2.5em"/> </StyledButton2>
        <StyledButton1><ImInfo size="2.2em" /></StyledButton1>
        </CardButtons>
      </Card> 
    
      </AreaCard>
    </MainContainer>
  );
}

export default HomePage;