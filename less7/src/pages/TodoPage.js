import React, {useEffect, useState} from 'react';
import TodoList from "../components/TodoList/TodoList";
import Button from "../components/Button/Button";
import Modal from "../components/Modal/Modal";
import Pagination from "../components/pagination/Pagination";
import axios, {patch} from "axios";
import {createPortal} from "react-dom";
import {date} from "yup";

const TodoPage = () => {
    const [show, setShow] = useState(false);
    const [name, setName] = useState('');
    const [inputValue, setInputValue] = useState('');
    const [todoList, setTodolist] = useState([])
    const [currentID, setCurrentID] = useState(0);
    const [offset, setOffset] = useState(0);
    const [limit, setLimit] = useState(5);

    const page = (offset / Number(limit)) + 1
    const handlePrev = () => {
        setOffset(prevState => prevState - Number(limit))
    }
    const handleNext = () => {
        setOffset(prevState => prevState + Number(limit))

    }
    const Base_URl = `http://localhost:4000/todos`

    const handleShow = (name) => {
        setName(name);
        setShow(prevShow => !prevShow);
    }
    const handleInput = (event) => {
        setInputValue(event.target.value);
    }
    const handleAdd = () => {
        postTodo(
            {
                id: String(Number(todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1)),
                title: inputValue,
                completed: false
            })
        setInputValue("");
    }
    const handleDone = (id) => {
        const todo = todoList.find(todo => todo.id)
        patchTodo(id, !todo.completed)
    }
    const handleDelete = (id) => {
        deleteTodo(id)
        //
        // const newTodo = todoList.filter(todo=> todo.id !== id)
        // setTodolist(newTodo)
    }

    const handleEdit = (todoEdit) => {
        patchTodo(todoEdit.id, todoEdit.title, true)
        setCurrentID(null)

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
    const postTodo = async (data) => {
        await axios.post(Base_URl, data);
        await getTodos().then(data => setTodolist((data)))
    }
    const patchTodo = async (id, info, isTitle = false) => {
        await axios.patch(`${Base_URl}/${id}`, {
            [isTitle ? 'title' : 'completed']: info
        });
        await getTodos().then(data => setTodolist(data))
    }
    const deleteTodo = async (id) => {
        await axios.delete(`${Base_URl}/${id}`);
        await getTodos().then(data => setTodolist(data))
    }
    useEffect(() => {
        getTodos().then(data => setTodolist((data)))
        // fetchUserOne().then(data=> setTodolist(data))
    }, [offset, limit])


    return (
        <div>

            <input type="number" onChange={(event) => setLimit(event.target.value)}/>
            <Pagination page={page} prev={handlePrev} next={handleNext}/>
            <TodoList tasks={todoList}
                      handleDone={handleDone}
                      handleDelete={handleDelete}
                      handleEdit={handleEdit}
                      currentID={currentID}
                      setCurrentID={setCurrentID}/>

            <Button name={'Open'} action={() => handleShow('show')}/>
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