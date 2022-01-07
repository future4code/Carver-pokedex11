import React from "react"
import { MainContainer, HeaderHome, AreaCard, Card, StyledButton1, StyledButton2, CardButtons, CardImage } from "./Styled";
import { TiDeleteOutline } from "react-icons/ti"
import { ImInfo } from 'react-icons/im'
import { goToHomePage } from "../../route/coordinator"
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import GlobalStateContext from "../../context/GlobalContext/GlobalStateContext";
import { useContext } from "react/cjs/react.development";

const Pokedex = () => {
<<<<<<< HEAD
  const history = useHistory()

  const [detaisPokemons, poke, setPoke] = useContext(GlobalStateContext)

  const deletePoke = ( name, photo, id) => {
    const indexPoke = detaisPokemons.findIndex((pokes) => { return pokes.name === name })
    detaisPokemons[indexPoke].isPokedex = false
    const newPokedex = poke.findIndex((pokes) => { return pokes.name === name })
    poke[newPokedex].id = true
    const copy = [...poke]
    setPoke(copy)
   console.loge(poke)
  }
  const pokedex = poke && poke.map((pokes) => {
    
      if (pokes.id == false) {
=======
  const [detais, poke,setPoke] = useContext(GlobalStateContext)
  const history = useHistory()

  const removePoke = (name) => {
    const indexPoke = detais.findIndex((pokes) => { return pokes.name === name })
    detais[indexPoke].isPokedex = false
    const indexPokedex = poke.findIndex((pokes) => { return pokes.name === name })
    const remove=poke.splice(indexPokedex,1)
    const copie=[...poke]
    setPoke(copie)
}

  const pokedex = poke.map((pokes) => {
  
   if(pokes.isPokedex){
>>>>>>> cf07ecaa18db7660dbee0c88da3132ed334b63b5
    return (
      <Card key={pokes.name}>
        <CardImage>
          <img src={pokes.photo} alt={pokes.name} />
          <p>{pokes.name}</p>
        </CardImage>
        <CardButtons>
<<<<<<< HEAD
          <StyledButton2 onClick={()=> deletePoke(pokes.name, pokes.sprites.front_default, pokes.id)}><TiDeleteOutline size="2.8em" /> </StyledButton2>
          <StyledButton1 onClick={""}><ImInfo size="2.3em" /></StyledButton1>
        </CardButtons>
      </Card>
    )
      }
=======
          <StyledButton2 onClick={()=>removePoke(pokes.name,pokes.isPokedex)}><TiDeleteOutline size="2.8em" /> </StyledButton2>
          <StyledButton1><ImInfo size="2.3em" /></StyledButton1>
        </CardButtons>
      </Card>
    )
   }
>>>>>>> cf07ecaa18db7660dbee0c88da3132ed334b63b5
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