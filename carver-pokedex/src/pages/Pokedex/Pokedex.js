import React from "react"
import { MainContainer,HeaderHome,AreaCard,Card,StyledButton1,StyledButton2,CardButtons,CardImage} from "./Styled";
import {TiDeleteOutline} from "react-icons/ti"
import {ImInfo} from 'react-icons/im'
import {goToHomePage} from "../../route/coordinator"
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
<<<<<<< HEAD
=======
import GlobalStateContext from "../../context/GlobalContext/GlobalStateContext";
import { useContext } from "react/cjs/react.development";
>>>>>>> 6de4f9671359b8bce21548ccfa54aa82805a2f21

const Pokedex = () => {
  const [detais,poke]=useContext(GlobalStateContext)
  const history=useHistory()

  const pokedex= poke&&poke.map((pokes)=>{
  
    return (
      <Card key={pokes.name}>
      <CardImage>
      <img src={pokes.photo} alt={pokes.name}/>
      <p>{pokes.name}</p>
      </CardImage>
      <CardButtons>
      <StyledButton2><TiDeleteOutline size="2.8em"/> </StyledButton2>
      <StyledButton1><ImInfo size="2.3em"/></StyledButton1>
      </CardButtons>
    </Card> 
    )
  })
  return (
    <MainContainer >
      <HeaderHome>
        Pokedex
        <button onClick={()=>goToHomePage(history)}>voltar</button>
      </HeaderHome>
      <AreaCard>
    {pokedex}
      </AreaCard>
    </MainContainer>
  );
}

export default Pokedex;