import React,{useEffect,useState } from "react";
import axios from "axios";
import GlobalStateContext from "./GlobalStateContext";
import { useRequestData } from "../../hooks/useRequest";
import { BASE_URL } from "../../constants/urls";


const GlobalState =(props)=>{
    const detaisPoke=[]
    let pokemon = useRequestData(`${BASE_URL}?offset=20&limit=20`)


   ///get poke detais
    const getDetaisPoke= async(url)=>{
        try {
            const detais= await axios.get(url)
           
           detaisPoke.push(detais.data)
          
        }
        catch(erro){
            console.log(erro)
        }
    }

    const urlPoke= pokemon&&pokemon.map((pk)=>{
      

        getDetaisPoke(pk.url)
      
    })



    return(
        <GlobalStateContext.Provider value={detaisPoke}>
        {props.children}
        </GlobalStateContext.Provider>
    )

}
export default GlobalState
