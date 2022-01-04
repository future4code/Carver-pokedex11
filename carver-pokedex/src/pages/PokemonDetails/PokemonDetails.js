import React from "react"
import { MainContainer,HeaderHome,AreaCard,Card,CardImage,CardInfor} from "./Styled";
const PokemonDetails = () => {
  return (
    <MainContainer >
    <HeaderHome>
    <button>Voltar</button>
      Pokemon
      <button>ir para lista</button>
     
    </HeaderHome>
    <AreaCard>
   <Card>
      <CardImage>
      <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png" alt="imagem do pokemon"/>
      <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png" alt="imagem do pokemon"/>
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
