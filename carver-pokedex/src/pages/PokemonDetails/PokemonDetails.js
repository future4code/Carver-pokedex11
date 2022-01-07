import React, { useContext, useEffect, useState } from "react"
import axios from "axios"
import { MainContainer, HeaderHome, AreaCard, Card, CardImage, CardInfor, StyledButton, ButtonsContainer } from "./Styled"
import { useHistory, useParams } from "react-router-dom"
import { goToPokedex, goBack } from "../../route/coordinator"
import { BASE_URL } from "../../constants/urls"
import GlobalStateContext from "../../context/GlobalContext/GlobalStateContext"
import { MdCatchingPokemon } from "react-icons/md"
import { TiDeleteOutline } from "react-icons/ti"


const PokemonDetails = () => {

  const history = useHistory()
  const params = useParams()
  const [pokemonDetails, setPokemonDetails] = useState({})
  const [isLoading, setIsLoading] = useState(true)
  const [detaisPokemons, poke, setPoke, pokedex, setPokedex] = useContext(GlobalStateContext)
  const isPokedex = null
  // const [button, setButton] = useState(isPokedex ? "Remover" : "Adicionar")

  useEffect(() => {
    getPokemonDetails()
  }, [])

  const getPokemonDetails = () => {
    axios.get(`${BASE_URL}${params.name}`, {})
      .then((res) => {
        setPokemonDetails(res.data)
        setIsLoading(false)
      })
      .catch((err) => {
        alert("Ocorreu um erro, tente novamente mais tarde!")
      })
  }

  String.prototype.capitalize = function () {
    return this.charAt(0).toUpperCase() + this.substr(1)
  }

  const addPoke = (name, photo) => {
    const indexPoke = detaisPokemons.findIndex((pokes) => { return pokes.name === name })
    detaisPokemons[indexPoke].isPokedex = true
    const newPokedex = [...poke, { name, photo }]
    setPoke(newPokedex)
  }

  const removePoke = (name, photo) => {

  }

  // const buttonAction = () => {
  //   if (isPokedex === false){
  //     addPoke(pokemonDetails.name, pokemonDetails.sprites.front_default)
  //     setButton("Adicionar")
  //   } else {
  //     setButton("Remover")
  //   }
  // }

  return (
    <MainContainer >
      <HeaderHome>
        <button onClick={() => goBack(history)}>Voltar</button>
        <h1>{pokemonDetails.name && pokemonDetails.name.capitalize()}</h1>
        <button onClick={() => goToPokedex(history)}>Ir para Pokedex</button>
      </HeaderHome>
      {!isLoading ? (<AreaCard key={pokemonDetails.name}>
        <Card>
          <CardImage>
            <img src={pokemonDetails && pokemonDetails.sprites.front_default} alt="imagem do pokemon de frente" />
            <img src={pokemonDetails && pokemonDetails.sprites.back_default} alt="imagem do pokemon de costas" />
          </CardImage>
          <CardInfor>
            <div>
              <h1>Tipo</h1>
              {pokemonDetails && pokemonDetails.types.map((type) => {
                return <div>{type.type.name.capitalize()}</div>;
              })}
              <h1>Poderes</h1>
              {pokemonDetails && pokemonDetails.stats.map((stat) => {
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
          <ButtonsContainer>
            {isPokedex ?
              <StyledButton onClick={() => removePoke()}>
                <TiDeleteOutline size="2.8em" /></StyledButton> :
              <StyledButton onClick={() => addPoke(pokemonDetails.name, pokemonDetails.sprites.front_default)}>
                <MdCatchingPokemon size="2.5em" /></StyledButton>}
          </ButtonsContainer>
        </Card>
      </AreaCard>
      ) : (
        <h2>Carregando...</h2>
      )}
    </MainContainer>
  );
}

export default PokemonDetails;
