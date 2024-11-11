import React, {useState} from 'react';
import Todo from "./Todo";
import classes from "./TodoList.module.scss";

const TodoList = ({tasks,handleDone,handleDelete,handleEdit,currentID,setCurrentID}) => {

    return (
        <ul className={classes.ul}>
            {
                tasks.map(task => <Todo
                    key={task.id}
                    tasks={task}
                    handleDone={handleDone}
                    handleDelete={handleDelete}
                    handleEdit={handleEdit}
                    setCurrentID={setCurrentID}
                    isEdit={currentID === task.id}
                />)
            }
        </ul>
    );
};

export default TodoList;