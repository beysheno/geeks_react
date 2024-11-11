import React, {useEffect, useState} from 'react';
import TodoList from "../components/TodoList/TodoList";
import Button from "../components/Button/Button";
import Modal from "../components/Modal/Modal";

const TodoPage = () => {
    const [show, setShow ] = useState(false);
    const [name, setName] = useState('');
    const [inputValue, setInputValue] = useState('');
    const [todoList, setTodolist] = useState([])
    const [currentID, setCurrentID] = useState(0);

    const handleShow = (name) =>{
        setName(name);
        setShow(prevShow => !prevShow);
    }
    const handleInput = (event)=>{
        setInputValue(event.target.value);
    }
    const handleAdd = () => {
        setTodolist(prevState => [...prevState,{
            id: todoList.length === 0 ? 1 : todoList[todoList.length-1].id+1,
            title: inputValue,
            completed: false,
        }
        ])
    }
    const handleDone = (id) =>{
        todoList.map((todo)=>{
            if(id === todo.id){
                return todo.completed = ! todo.completed
            }
        })
        setTodolist([...todoList])
    }
    const handleDelete = (id) =>{
        const newTodo = todoList.filter(todo=> todo.id !== id)
        setTodolist(newTodo)
    }

    const handleEdit = (todoEdit) =>{
        todoList.map((todo)=>{
            if (todoEdit.id === todo.id) return todo.title = todoEdit.title
        })
        setCurrentID(null)
        setTodolist([...todoList])
    }

    useEffect(() => {
        const myLocalStorage = JSON.parse(localStorage.getItem('todo'))
        if(myLocalStorage === null){
            return localStorage.setItem('todo', JSON.stringify(todoList))
        }
        if(myLocalStorage !== 0){
            setTodolist(myLocalStorage)
        }
    },[])
    useEffect(() => {
        localStorage.setItem('todo', JSON.stringify(todoList))
    }, [ todoList ])
    return (
        <div>
            <TodoList tasks={todoList}
                      handleDone={handleDone}
                      handleDelete ={handleDelete}
                      handleEdit={handleEdit}
                      currentID={currentID}
                      setCurrentID={setCurrentID}/>

            <Button name={'Open'} action={()=>handleShow('show')}/>
            {
                show && <Modal
                    handleShow={handleShow}
                    name={name}
                    handleAdd={handleAdd}
                    handleInput={handleInput}>
                    <h1>Hello</h1>
                </Modal>
            }
        </div>
    );
};

export default TodoPage;