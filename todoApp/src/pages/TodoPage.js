import React from "react";
import TodoList from "../components/TodoList/TodoList";
import classes from "./TodoPage.module.scss";


export default function TodoPage() {
  return (
    <div className={classes.todoPage}>
      <TodoList/>
    </div>
  );
}
