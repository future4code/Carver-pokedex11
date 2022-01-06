import axios from "axios";
import { useState, useEffect } from "react";


export function useRequestData(path) {
    const [data,setData]=useState([])
        const receiveData = () => {
        axios.get(`${path}`)
            .then((ans) => {   
               setData(ans.data.results)
            }).catch((err) => {
                console.log(err)
            })
    }
    useEffect(() => {
        receiveData()
    }, [])

    return data
}