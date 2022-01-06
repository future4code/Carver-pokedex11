<<<<<<< HEAD

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
<<<<<<< HEAD
      <button onClick={()=>goToPokedex(history)}>Pokedex</button>
=======
      <button onClick={()=>goToPokedex}>Pokedex</button>
>>>>>>> eb4de0d12f92b4f7b870fe55dc5125f43731eee6
=======
      <button onClick={()=>goToPokedex(history)}>Pokedex</button>


=======
import React, { useContext } from "react"
>>>>>>> 9da6df6da06fd322d62edf35e16b4bff593067c2
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
<<<<<<< HEAD

>>>>>>> d3a9d9d89903b78625e90377d4983de21f0bf47e
=======
>>>>>>> 9da6df6da06fd322d62edf35e16b4bff593067c2
      </HeaderHome>
      <AreaCard>
    {resultPoke}
      </AreaCard>
    </MainContainer>
  );
}

export default HomePage;