import React from "react";
import classes from "./Button.module.css";

export default function Button({ action, color }) {
  return (
    <div>
      <button className={`${(classes[color], classes.btn)}`}>{action}</button>
    </div>
  );
}
