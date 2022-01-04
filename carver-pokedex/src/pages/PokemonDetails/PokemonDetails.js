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
    axios.get(`${BASE_URL}/pokemon/pikachu`)
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
        <button onClick={goToPokedex}>ir para lista</button>

      </HeaderHome>
      <AreaCard>
        <Card>
          <CardImage>
            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png" alt="imagem do pokemon de frente" />
            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/25.png" alt="imagem do pokemon de costas" />
          </CardImage>
          <CardInfor>
            <div>
              <h1>Poderes</h1>
              <p>1dddddd</p>
              <p>1dddddd</p>
              <p>1dddddd</p>
              <p>1dddddd</p>
              <p>1dddddd</p>
              <p>1dddddd</p>
            </div>
            <div>
              <h1>Tipo</h1>
              <p>2dddd</p>
              <p>2dddd</p>
            </div>
            <div>
              <h1>Principais ataques</h1>
              <p>12222</p>
              <p>12222</p>
              <p>12222</p>
              <p>12222</p>
              <p>12222</p>
            </div>
          </CardInfor>
        </Card>
      </AreaCard>
    </MainContainer>
  );
}

export default PokemonDetails;
