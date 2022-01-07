import React, { useEffect, useState } from "react";
import axios from "axios";
import GlobalStateContext from "./GlobalStateContext";
import { BASE_URL } from "../../constants/urls";

const GlobalState = (props) => {
    const [pokedex, setPokedex] = useState([])

    const [data, setData] = useState([])
    const [pokeDetais, setPokeDetais] = useState([])



    useEffect(() => {
        axios.get(`${BASE_URL}?offset=20&limit=20`)
            .then((ans) => {
                setData(ans.data.results)
            }).catch((err) => {
                alert("Alguma coisa de errado aconteceu, por favor, tente novamente")
            })
    }, [])

    useEffect(() => {

        const getDetails = async () => {
            const newDetails = []
            for (let pokemon of data) {
                try {
                    const { data } = await axios.get(pokemon.url)
                    const newData = { ...data, isPokedex: false }
                    newDetails.push(newData)
                } catch (error) {
                    alert("Alguma coisa de errado aconteceu, por favor, tente novamente")
                }
            }
            setPokeDetais(newDetails)
        }
        getDetails()

    }, [data])

    return (
        <GlobalStateContext.Provider value={[pokeDetais, pokedex, setPokedex]} >
            {props.children}
        </GlobalStateContext.Provider>
    )

}
export default GlobalState