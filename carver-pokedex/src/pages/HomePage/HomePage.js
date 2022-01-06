
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
      <button onClick={()=>goToPokedex(history)}>Pokedex</button>


import { goToHomePage, goToPokedex,goToPokemonDetails } from '../../route/coordinator'
import { MainContainer, HeaderHome, Card, CardImage, CardButtons, AreaCard, StyledButton1, StyledButton2 } from "./Styled";
import { MdCatchingPokemon } from 'react-icons/md'
import { ImInfo } from 'react-icons/im'
import { useHistory } from "react-router-dom";
import { useState } from "react"; 
import GlobalState from "../../context/GlobalContext/GlobalState";
import GlobalStateContext from "../../context/GlobalContext/GlobalStateContext";

const HomePage = () => {
  const history = useHistory()
  const detaisPokemons = useContext(GlobalStateContext)
  let [pokedex, setPokedex] = useState([])
  console.log("detais",detaisPokemons)
 
   
    const resultPoke = detaisPokemons && detaisPokemons.map((res) => {
      console.log(res.sprites.front_default)
      return (
        <Card>
          <CardImage>
            <img src={res.sprites.front_default} alt={res.name}/>
            <p>{res.name}</p>
          </CardImage>
          <CardButtons>
            <StyledButton2 ><MdCatchingPokemon size="2.5em" /> </StyledButton2>
            <StyledButton1 onClick={()=> goToPokemonDetails(history,res.name) } ><ImInfo size="2.2em" /></StyledButton1>
          </CardButtons>
        </Card>)
    })
 


  return (
    <MainContainer >
      <HeaderHome>
        Lista de Pokemons
        <button onClick={() => goToPokedex(history)}>Pokedex</button>

      </HeaderHome>
      <AreaCard>
    {resultPoke}
      </AreaCard>
    </MainContainer>
  );
}

export default HomePage;