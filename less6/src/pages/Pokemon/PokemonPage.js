import React, {useEffect, useState} from 'react';
import classes from "./PokemonPage.module.scss";
import PokemonCard from "../../components/PokemonCard/PokemonCard";
import Pagination from "../../components/pokemonPagination/Pagination";


const PokemonPage = () => {
    const [pokemons, setPokemons] = useState([]);
    const [offset, setOffset] = useState(0);

    const limit = 12
    const page = (offset / Number(limit))+1


    const handlePrev = () =>{
            setOffset(prevState => prevState-Number(limit))
    }
    const handleNext = () =>{
        setOffset(prevState => prevState+Number(limit))
    }
    const getPokemons = async () => {

        try {
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`);
            return await response.json();
        } catch (error) {
            console.error(error);
        }


    }
    useEffect(() => {
        getPokemons()
        .then(data => setPokemons(data.results));
    },[offset])
    return (
        <div className={classes.pokemonPage}>
            <div className={classes.title}>
                <h2>Pokemon</h2>
            </div>
            <div className={classes.pokemonsList}>
                {pokemons.map((pokemon, index) => (
                    <PokemonCard key={index} pokemon={pokemon}  />
                ))}
            </div>
         <Pagination className={classes.pagination} prev={handlePrev} next={handleNext} page={page} />
        </div>
    );
};

export default PokemonPage;