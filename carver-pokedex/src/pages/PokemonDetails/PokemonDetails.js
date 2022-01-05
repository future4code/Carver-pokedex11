import React, { useEffect, useState } from "react"
import axios from "axios"
import { MainContainer, HeaderHome, AreaCard, Card, CardImage, CardInfor } from "./Styled"
import { useHistory, useParams } from "react-router-dom"
import { goToPokedex } from "../../route/coordinator"
import { BASE_URL } from "../../constants/urls"


const PokemonDetails = () => {
  const history = useHistory()
  const params = useParams()
  const [capturedPokemon, setCapturedPokemon] = useState({})

  const getPokemonDetails = () => {
    axios.get(`${BASE_URL}/pokemon/pikachu`, {})
      .then((res) => {
        setCapturedPokemon(res.data)
        console.log(res.data)
      })
      .catch((err) => {
        console.log(err.response)
      })
  }
  useEffect(() => {
    getPokemonDetails()
  }, [])

  const goBack = () => {
    history.goBack()
  }

  return (
    <MainContainer >

      <HeaderHome>
        <button onClick={goBack}>Voltar</button>
        Pokemon
        <button onClick={() =>goToPokedex(history)}>ir para lista</button>

      </HeaderHome>
      <AreaCard>
        <Card>
          <CardImage>
            <img src={capturedPokemon.sprites.front_default} alt="imagem do pokemon de frente" />
            <img src={capturedPokemon.sprites.back_default} alt="imagem do pokemon de costas" />
          </CardImage>
          <CardInfor>
            <div>
              <h1>Poderes</h1>
              {capturedPokemon && capturedPokemon.stats.map((stat) => {
            return (
              <div>
                <span>
                  <b>{stat.stat.name}: </b>
                </span>
                <span>{stat.base_stat}</span>
              </div>
            );
          })}
            </div>
            <div>
              <h1>Tipo</h1>
              {capturedPokemon && capturedPokemon.types.map((type) => {
            return <div>{type.type.name}</div>;
          })}
            </div>
            <div>
              <h1>Principais ataques</h1>
              {capturedPokemon && capturedPokemon.moves.slice(0, 10).map((move) => {
            return <div>{move.move.name}</div>;
          })}
            </div>
          </CardInfor>
        </Card>
      </AreaCard>
    </MainContainer>
  );
}

export default PokemonDetails;
