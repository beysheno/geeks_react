import React, {useEffect, useState} from 'react';
import TodoList from "../components/TodoList/TodoList";
import Button from "../components/Button/Button";
import Modal from "../components/Modal/Modal";
import Pagination from "../components/pagination/Pagination";
import axios from "axios";
import {createPortal} from "react-dom";

const TodoPage = () => {
    const [show, setShow ] = useState(false);
    const [name, setName] = useState('');
    const [inputValue, setInputValue] = useState('');
    const [todoList, setTodolist] = useState([])
    const [currentID, setCurrentID] = useState(0);
    const [offset, setOffset] = useState(0);
    const [limit, setLimit] = useState(5);

    const page = (offset/Number(limit))+1
    const handlePrev=()=>{
        setOffset(prevState => prevState-Number(limit))
    }
    const handleNext=()=>{
        setOffset(prevState => prevState+Number(limit))

    }
    const Base_URl = `http://localhost:4000/todos?_limit=${limit}&_start=${offset}`

    const handleShow = (name) =>{
        setName(name);
        setShow(prevShow => !prevShow);
    }
    const handleInput = (event)=>{
        setInputValue(event.target.value);
    }
    const handleAdda = () => {
        setTodolist(prevState => [...prevState,{
            id: todoList.length === 0 ? 1 : todoList[todoList.length-1].id+1,
            title: inputValue,
            completed: false,
        }
        ])
        setInputValue("");
    }
    const handleDone = (id) =>{
        todoList.map((todo)=>{
            if(id === todo.id){
                return todo.completed = ! todo.completed
            }
        })
        setTodolist([...todoList])
    }
    const handleDelete = async (id) =>{
        const response = await axios.delete(`http://localhost:4000/${id}`)
        //
        // const newTodo = todoList.filter(todo=> todo.id !== id)
        // setTodolist(newTodo)
    }

    const handleEdit = (todoEdit) =>{
        todoList.map((todo)=>{
            if (todoEdit.id === todo.id) return todo.title = todoEdit.title
        })
        setCurrentID(null)
        setTodolist([...todoList])
    }



    // const fetchUserOne = async () => {
    //     const response = await fetch(`https://jsonplaceholder.typicode.com/todos?_limit=${limit}&_start=${offset}`)
    //     return  await response.json();
    //
    // }
    const getTodos = async () => {
        const response = await axios(Base_URl);
        return response.data;
    }
    const handleAdd = async () => {
        const response = await axios.post(Base_URl, {
            id: todoList.length === 0 ? 1 : todoList[todoList.length-1].id+1,
            title: inputValue,
            completed: false,
        });
        await getTodos().then(data => setTodolist((data)))
    }
    const putAxios = async (id) => {
        const response = await axios.patch(`${Base_URl}/${id}`, inputValue);
    }
    useEffect(() => {
        getTodos().then(data => setTodolist((data)))
        // fetchUserOne().then(data=> setTodolist(data))
    },[offset, limit])



    return (
        <div>

            <input type="number" onChange={(event)=> setLimit(event.target.value) }/>
            <Pagination page={page} prev={handlePrev} next={handleNext}/>
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
                    handleInput={handleInput}
                    inputValue={inputValue}>
                    <h1>Hello</h1>
                </Modal>
            }
        </div>
    );
};

export default TodoPage;