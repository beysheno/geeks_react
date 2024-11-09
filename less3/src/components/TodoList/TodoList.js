import React from 'react';
import Todo from "./Todo";
import classes from "./TodoList.module.scss";

const TodoList = ({tasks,handleDone,handleDelete}) => {

    return (
        <ul className={classes.ul}>
            {
                tasks.map(task => <Todo key={task.id} tasks={task} handleDone={handleDone} handleDelete={handleDelete}/>)
            }
        </ul>
    );
};

export default TodoList;