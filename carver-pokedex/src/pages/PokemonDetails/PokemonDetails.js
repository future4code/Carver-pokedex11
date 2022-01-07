import React, { useEffect, useState } from "react"
import axios from "axios"
import { MainContainer, HeaderHome, AreaCard, Card, CardImage, CardInfor, PowerContainer } from "./Styled"
import { useHistory, useParams } from "react-router-dom"
import { goToPokedex, goBack } from "../../route/coordinator"
import { BASE_URL } from "../../constants/urls"


const PokemonDetails = () => {

  const history = useHistory()
  const params = useParams()
  const [pokemonDetails, setPokemonDetails] = useState({})
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    getPokemonDetails()
  }, [])

  const getPokemonDetails = () => {
    axios.get(`${BASE_URL}${params.name}`, {})
      .then((res) => {
        setPokemonDetails(res.data)
        setIsLoading(false)
        console.log(res.data)
      })
      .catch((err) => {
        console.log(err.response)
      })
  }

  return (
    <MainContainer >
      <HeaderHome>
        <button onClick={() => goBack(history)}>Voltar</button>
        <h1>{pokemonDetails.name && pokemonDetails.name.toUpperCase()}</h1>
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
                return <div>{type.type.name}</div>;
              })}no
              <h1>Poderes</h1>
              {pokemonDetails && pokemonDetails.stats.map((stat) => {
                return (
                  <div>
                    <strong>{stat.stat.name}:</strong>
                    {stat.base_stat}
                  </div>
                );
              })}
            </div>
            <div>
              <h1>Principais ataques</h1>
              {pokemonDetails && pokemonDetails.moves.slice(0, 10).map((move) => {
                return <div>{move.move.name}</div>;
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
