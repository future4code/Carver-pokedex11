import React, { useContext, useEffect, useState } from "react"
import { MainContainer, HeaderHome, AreaCard, Card, CardImage, CardInfor, StyledButton, ButtonsContainer, ButtonGoBack } from "./Styled"
import GlobalStateContext from "../../context/GlobalContext/GlobalStateContext"
import { MdCatchingPokemon } from "react-icons/md"
import { TiDeleteOutline } from "react-icons/ti"
import { goBack } from "../../route/coordinator"
import { useHistory, useParams } from "react-router-dom"

const PokemonDetails = () => {
  const history = useHistory()
  const params = useParams()

  const [pokemonDetails, setPokemonDetails] = useState({})
  const [isLoading, setIsLoading] = useState(true)
  const [detaisPokemons, poke, setPoke,] = useContext(GlobalStateContext)
  const [isPokedex, setIsPokedex] = useState(null)


  useEffect(() => {
    getPokemonDetails()
  }, [])

  const getPokemonDetails = () => {
    const detais = detaisPokemons.filter((poke) => {
      return poke.name == params.name
    })
    console.log(detais[0])
    setPokemonDetails(detais[0])
    setIsLoading(!isLoading)
  }

  String.prototype.capitalize = function () {
    return this.charAt(0).toUpperCase() + this.substr(1)
  }

  console.log(pokemonDetails.isPokedex)

  const addPoke = (name, photo) => {
    const indexPoke = detaisPokemons.findIndex((pokes) => { return pokes.name === name })
    detaisPokemons[indexPoke].isPokedex = true
    const newPokedex = [...poke, { name, photo, isPokedex: true }]
    setPoke(newPokedex)

    setIsPokedex(true)
  }

  const removePoke = (name) => {
    const indexPoke = detaisPokemons.findIndex((pokes) => { return pokes.name === name })
    detaisPokemons[indexPoke].isPokedex = false
    const indexPokedex = poke.findIndex((pokes) => { return pokes.name === name })
    const remove = poke.splice(indexPokedex, 1)
    const copie = [...poke]
    setPoke(copie)
    setIsPokedex(false)
  }


  return (
    <MainContainer >
      <HeaderHome key={pokemonDetails.name}>
        <ButtonGoBack onClick={() => goBack(history)}>Voltar</ButtonGoBack>
        <h1>{pokemonDetails.name && pokemonDetails.name.capitalize()}</h1>
        <ButtonsContainer>
          {pokemonDetails.isPokedex ?
            <StyledButton onClick={() => removePoke(pokemonDetails.name, pokemonDetails.sprites.front_default)}>
              <TiDeleteOutline size="2.8em" /></StyledButton> :
            <StyledButton onClick={() => addPoke(pokemonDetails.name, pokemonDetails.sprites.front_default)}>
              <MdCatchingPokemon size="2.5em" /></StyledButton>}
        </ButtonsContainer>
      </HeaderHome>
      {!isLoading ?
        (<AreaCard>
          <Card>
            <CardImage>
              <img src={pokemonDetails && pokemonDetails.sprites.front_default} alt="imagem do pokemon de frente" />
              <img src={pokemonDetails && pokemonDetails.sprites.back_default} alt="imagem do pokemon de costas" />
            </CardImage>
            <CardInfor>
              <div>
                <h1>Tipo</h1>
                {pokemonDetails && pokemonDetails.types.map((type) => {
                  console.log(type)
                  return <div>{type.type.name.capitalize()}</div>;
                })}
                <h1>Poderes</h1>
                {pokemonDetails && pokemonDetails.stats.map((stat) => {
                  console.log(stat)
                  return (
                    <div>
                      <strong>{stat.stat.name.capitalize()}:</strong>
                      {stat.base_stat}
                    </div>
                  );
                })}
              </div>
              <div>
                <h1>Principais ataques</h1>
                {pokemonDetails && pokemonDetails.moves.slice(0, 10).map((move) => {
                  return <div>{move.move.name.capitalize()}</div>;
                })}
              </div>
            </CardInfor>

          </Card>
        </AreaCard>
        ) : (
          <h2>Carregando...</h2>
        )}
    </MainContainer>
  );
}

export default PokemonDetails;
