import React from 'react';
import Button from "../Button/Button";
import classes from "./TodoList.module.scss";
import classNames from "classnames";

const Todo = ({tasks,handleDone, handleDelete}) => {
    return (
        <li className={classNames({[classes.done]: tasks.completed})}>
           <div className={classes.info}>
               <p>id: {tasks.id}</p>
               <p>Title: {tasks.title}</p>
               <p>completed: {tasks.completed ? 'true' : 'false'}</p>
           </div>
           <div className={classes.btns}>
               <Button name={'Edit'} action={()=>{}} color={tasks.completed ? 'disabled' : 'primary'} />
               <Button name={'Done'} action={()=>{ handleDone(tasks.id) }} color={tasks.completed ? 'secondaryCompleted' : 'secondary'} />
               <Button name={'Delete'} action={()=>{handleDelete(tasks.id)}} color={tasks.completed ? 'disabled' : 'error'} />
           </div>
        </li>
    );
};

export default Todo;