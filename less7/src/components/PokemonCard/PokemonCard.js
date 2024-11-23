import React, {useEffect, useState} from 'react'
import classes from "./PokemonCard.module.scss";
import PokemonModal from "../pokemonModal/PokemonModal";



const PokemonCard = ({pokemon} ) => {
    const [pokemonData, setPokemonData] = useState([null]);
    const [showModal, setShowModal] = useState(false);


    const getPokemon= async (url)=>{
        const res =  await fetch(url);
        return await res.json()
    }
    useEffect(()=>{
        const url = pokemon.url
        getPokemon(url).then(pokemonData => setPokemonData(pokemonData))
    },[pokemon])

    const handleShowModal = () => {
        setShowModal(!showModal);
    }
    return (
        <div className={classes.pokemonCard}>
            <div className={classes.pokemonInfo}>
                <img src={pokemonData?.sprites?.other?.dream_world?.front_default}/>
                <h3>{pokemon.name}</h3>
            </div>

            <button className={classes.btn} onClick={setShowModal }>
                Подробнее
            </button>
            {showModal && (
                <PokemonModal showModal={showModal} handleShowModal={handleShowModal}>
                    <div className={classes.pokemonInfo}>
                        <div className={classes.modal}>
                            <img src={pokemonData?.sprites?.other?.dream_world?.front_default}/>
                            <h3>{pokemon.name}</h3>
                            <div className={classes.abilities}><strong>Abilities: </strong>
                                {pokemonData.abilities.slice(0, 3).map((value) => value.ability.name).join(', ')}
                            </div>
                            <div className={classes.abilities}><strong>Stats: </strong>
                                {pokemonData.stats.map((value) => value.stat.name).join(', ')}
                            </div>
                            <div className={classes.abilities}><strong>Types: </strong>
                                {pokemonData.types.map((value) => value.type.name).join(', ')}
                            </div>
                            <div className={classes.abilities}><strong>Some-moves: </strong>
                                {pokemonData.moves.slice(0, 5).map((value) => value.move.name).join(', ')}
                            </div>
                        </div>

                    </div>
                </PokemonModal>
            )}
        </div>
    );
};

export default PokemonCard;