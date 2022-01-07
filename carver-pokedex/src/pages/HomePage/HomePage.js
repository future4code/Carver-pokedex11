import React, { useContext, useEffect, useState } from "react"
import { goToHomePage, goToPokedex, goToPokemonDetails } from '../../route/coordinator'
import { MainContainer, HeaderHome, Card, CardImage, CardButtons, AreaCard, StyledButton1, StyledButton2 } from "./Styled";
import { MdCatchingPokemon } from 'react-icons/md'
import { ImInfo } from 'react-icons/im'
import { useHistory } from "react-router-dom";

import GlobalStateContext from "../../context/GlobalContext/GlobalStateContext";


const HomePage = () => {
    const history = useHistory()

    const [detaisPokemons, poke, setPoke] = useContext(GlobalStateContext)

<<<<<<< HEAD
  const addPoke = (name, photo, id) => {
    const indexPoke = detaisPokemons.findIndex((pokes) => { return pokes.name === name })
    detaisPokemons[indexPoke].isPokedex = true
    const newPokedex = [...poke, { name, photo, id }]
    setPoke(newPokedex)

  }
  
  const resultPoke = detaisPokemons.map((res) => {
console.log(res)
    if (res.isPokedex == false) {
      return (
        <Card key={res.name}>
          <CardImage>
            <img src={res.sprites.front_default} alt={res.name} />
            <p>{res.name}</p>
          </CardImage>
          <CardButtons>
            <StyledButton2 onClick={() => addPoke(res.name, res.sprites.front_default, res.isPokedex)}  ><MdCatchingPokemon size="2.5em" /> </StyledButton2>
            <StyledButton1 onClick={() => goToPokemonDetails(history, res.name)} ><ImInfo size="2.2em" /></StyledButton1>
          </CardButtons>
        </Card>)
=======


    const addPoke = (name, photo, isPokedex) => {
        const indexPoke = detaisPokemons.findIndex((pokes) => { return pokes.name === name })
        detaisPokemons[indexPoke].isPokedex = true
        const newPokedex = [...poke, { name, photo,isPokedex:true }]
        setPoke(newPokedex)

>>>>>>> cf07ecaa18db7660dbee0c88da3132ed334b63b5
    }

    const resultPoke = detaisPokemons.map((res) => {

        if (res.isPokedex == false) {
            return (
                <Card key={res.name} >
                    <CardImage >
                        <img src={res.sprites.front_default} alt={res.name} />
                        <p> {res.name} </p>
                    </CardImage >
                    <CardButtons >
                        <StyledButton2 onClick={() => addPoke(res.name, res.sprites.front_default)} >
                            < MdCatchingPokemon size="2.5em" />
                        </StyledButton2>
                        <StyledButton1 onClick={() => goToPokemonDetails(history, res.name, res.isPokedex)} >
                            < ImInfo size="2.2em" />
                        </StyledButton1>
                    </CardButtons >
                </Card>)
        }

    })


    return (
        <MainContainer >
            <HeaderHome >
                Lista de Pokemons
                <button onClick={() => goToPokedex(history)} > Pokedex </button>
            </HeaderHome>
            <AreaCard >
                {resultPoke}
            </AreaCard>
        </MainContainer>
    );
}
export default HomePage