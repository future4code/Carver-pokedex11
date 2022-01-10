import React from "react"
import { MainContainer, HeaderHome, AreaCard, Card, StyledButton1, StyledButton2, CardButtons, CardImage } from "./Styled";
import { TiDeleteOutline } from "react-icons/ti"
import { ImInfo } from 'react-icons/im'
import { goToHomePage, goToPokemonDetails } from "../../route/coordinator"
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import GlobalStateContext from "../../context/GlobalContext/GlobalStateContext";
import { useContext } from "react/cjs/react.development";

const Pokedex = () => {
  const [detais, poke, setPoke] = useContext(GlobalStateContext)
  const history = useHistory()

  const removePoke = (name) => {
    const indexPoke = detais.findIndex((pokes) => { return pokes.name === name })
    detais[indexPoke].isPokedex = false
    const indexPokedex = poke.findIndex((pokes) => { return pokes.name === name })
    const remove = poke.splice(indexPokedex, 1)
    const copie = [...poke]
    setPoke(copie)
  }

  const pokedex = poke && poke.map((pokes) => {
  
   if(pokes.isPokedex){
    return (
      <Card key={pokes.name}>
        <CardImage>
          <img src={pokes.photo && pokes.photo} alt={pokes.name} />
          <p>{pokes.name && pokes.name}</p>
        </CardImage>
        <CardButtons>
          <StyledButton2 onClick={()=>removePoke(pokes.name,pokes.isPokedex)}><TiDeleteOutline size="2.8em" /> </StyledButton2>
          <StyledButton1 onClick={()=>goToPokemonDetails(history, pokes.name) }><ImInfo size="2.3em" /></StyledButton1>
        </CardButtons>
      </Card>
    )
   }
  })

  return (
    <MainContainer >
      <HeaderHome>
        Pokedex
        <button onClick={() => goToHomePage(history)}>voltar</button>
      </HeaderHome>
      <AreaCard>
        {pokedex}
      </AreaCard>
    </MainContainer>
  );
}

export default Pokedex;