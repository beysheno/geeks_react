import React, {useEffect, useState} from 'react';
import classes from "./Todolist.module.scss";
import Todo from "../Todo/Todo";

const TodoList = () => {
    const [todolist, setTodolist] = useState([])
    const [inputValue, setInputValue] = useState('')
    const [currentID, setCurrentID] = useState(0);

    const inputHandler = (e) => {
        setInputValue(e.target.value)
    }
    const addHandler = () => {
        if (inputValue.trim() === '') return;
        setTodolist(prevState => [...prevState,{
            id: todolist.length === 0 ? 1 : todolist[todolist.length-1].id+1,
            title: inputValue,
        }
        ])
    setInputValue("");
    }
    const removeHandler = (id) => {
        setTodolist(todolist.filter((todo)=> todo.id !== id))
    }
    const editHandler = (todoEdit) => {
        todolist.map((todo)=>{
            if(todoEdit.id === todo.id) return todo.title = todoEdit.title
        })
        setCurrentID(null)
        setTodolist([...todolist])
    }
    const clearHandler = () => {
        setTodolist([])
    }
    useEffect(() => {
        const myLocal = JSON.parse(localStorage.getItem('todo'))
        if (myLocal === null) {
            localStorage.setItem('todo', JSON.stringify(todolist))
        }
        if (myLocal!== 0 ){
            setTodolist(myLocal)
        }
    }, [])
    useEffect(() => {
        localStorage.setItem('todo', JSON.stringify(todolist))
    },[todolist])
    return (
        <div className={classes.todoList}>
            <h2 className={classes.title}>TO DO</h2>
            <div className={classes.todos}>
                <input type="text" className={classes.input} placeholder={'Enter a task '} value={inputValue} onChange={inputHandler} />
                <div className={classes.btns}>
                    <button
                        className={`${classes.btn} 
                        ${todolist.length > 0 ? classes.addWithClear : classes.btn}
                        `}
                        disabled={inputValue.trim() === ''}
                        onClick={() => addHandler()}
                    >
                        {todolist.length > 0 ? "Add" : "Add task"}
                    </button>
                    {todolist.length > 0 &&
                        <button className={classes.clearBtn} onClick={clearHandler}>
                            Clear All
                    </button>}
                </div>

            </div>
            {todolist.map(todo => <Todo
                todo={todo}
                removeHandler={removeHandler}
                editHandler={editHandler}
                key={todo.id}
                setCurrentID={setCurrentID}
                isEdit={currentID === todo.id}
            />)}

        </div>
    );
};

export default TodoList;