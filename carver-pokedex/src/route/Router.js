import React from 'react'
import { BrowserRouter, Switch, Route } from "react-router-dom"
import HomePage from '../pages/HomePage/HomePage'
import Pokedex from '../pages/Pokedex/Pokedex'
import PokemonDetails from '../pages/PokemonDetails/PokemonDetails'
import ErrorPage from '../pages/ErrorPage/ErrorPage'


const Router = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/">
                    <HomePage/>
                </Route>
                <Route exact path="/pokedex">
                    <Pokedex />
                </Route>
                <Route exact path="/pokemon/:id">
                    <PokemonDetails />
                </Route>
                <Route>
                    <ErrorPage />
                </Route>
            </Switch>
        </BrowserRouter>
    )
}
export default Router;