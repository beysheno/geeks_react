import React from 'react';
import classes from "./Modal.module.scss";

const PokemonModal = ({children, handleShowModal, name}) => {
    return (
        <div className={classes.modal}>

            <div className={classes.wrapper}></div>
            <div className={classes.content}>
                <button onClick={()=> handleShowModal(name)}>X</button>
                {children}
            </div>
        </div>
    );
};

export default PokemonModal;