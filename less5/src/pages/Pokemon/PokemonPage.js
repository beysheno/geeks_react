import React, {useEffect, useState} from 'react';
import classes from "./PokemonPage.module.scss";
import PokemonCard from "../../components/PokemonCard/PokemonCard";
import Pagination from "../../components/pagination/Pagination";

export const getPokemons = async () => {
    try {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon');
        return response.json();
    } catch (error) {
        console.error(error);
    }

}
const PokemonPage = () => {
    const [pokemons, setPokemons] = useState([]);
    useEffect(() => {
        getPokemons()
        .then(data => setPokemons(data.results));
        console.log(pokemons);
    },[])
    return (
        <div className={classes.pokemonPage}>
            <div className={classes.title}>
                <h2>Pokemons</h2>
            </div>
            <div className={classes.pokemonsList}>
                {pokemons.map((pokemon, index) => (
                    <PokemonCard key={index} pokemon={pokemon} />
                ))}
            </div>
         <Pagination className={classes.pagination}/>
        </div>
    );
};

export default PokemonPage;