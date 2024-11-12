import React from "react";
import classes from "./Button.module.scss";

export default function Button({ action, color, name }) {

  return (
    <div className={`${classes[color]} ${classes.btn}`}>
      <button onClick={action}>{name}</button>
    </div>
  );
}
