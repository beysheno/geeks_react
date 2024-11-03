import React from 'react';
import classes from "./Modal.module.scss";
import Input from "../Input/Input";
import Button from "../Button/Button";

const Modal = ({children, handleShow, name,handleInput}) => {
    return (
        <div>

            <div className={classes.wrapper}></div>
            <div className={classes.content}>
                <Button name={'Close'} action={ ()=> handleShow(name)} color={'error'} />
                {children}
                <Input action={handleInput} type="text" placeholder="Enter text" />
            </div>
        </div>
    );
};

export default Modal;