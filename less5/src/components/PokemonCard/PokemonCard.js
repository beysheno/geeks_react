import React, {useEffect, useState} from 'react'
import classes from "./PokemonCard.module.scss";


export const getPokemon= async (url)=>{
    const res =  await fetch(url);
    return await res.json()
}

const PokemonCard = ({pokemon} ) => {
    const [pokemonData, setPokemonData] = useState([null]);

    useEffect(()=>{
        const url = pokemon.url
        getPokemon(url).then(pokemonData => setPokemonData(pokemonData))
    },[])

    return (
        <div className={classes.pokemonCard}>
            <div className={classes.pokemonInfo}>
                <img src={pokemonData?.sprites?.other?.dream_world?.front_default}/>
                <h3>{pokemon.name}</h3>
            </div>
            <button className={classes.btn}>
                Подробнее
            </button>
        </div>
    );
};

export default PokemonCard;