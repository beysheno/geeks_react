import React, {useState} from 'react';
import TodoList from "../components/TodoList/TodoList";
import Button from "../components/Button/Button";
import Modal from "../components/Modal/Modal";

const TodoPage = () => {
    const [show, setShow ] = useState(false);
    const [name, setName] = useState('');
    const [inputValue, setInputValue] = useState('');
    const [todoList, setTodolist] = useState([{
        id:1,
        title: 'code',
        completed: true,
    },
        {
            id:2,
            title: 'eat',
            completed: false,
        },
        {
            id:3,
            title: 'sleep',
            completed: true,
        }])
    const handleShow = (name) =>{
        setName(name);
        setShow(prevShow => !prevShow);
    }
    const handleInput = (event)=>{
        setInputValue(event.target.value);
    }
    const handleAdd = () => {
        setTodolist(prevState => [...prevState,{
            id:todoList[todoList.length-1].id+1,
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
    return (
        <div>
            <TodoList tasks={todoList}
                      handleDone={handleDone}
                      handleDelete ={handleDelete}/>

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