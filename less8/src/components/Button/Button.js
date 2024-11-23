import React from "react";
import classes from "./Button.module.scss";

export default function Button({ action, color, name }) {

  return (
    <div>
      <button className={`${classes[color]} ${classes.btn}`} onClick={action}>{name}</button>
    </div>
  );
}
