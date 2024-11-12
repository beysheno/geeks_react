import React, {useEffect, useState} from 'react';
import Button from "../../components/button/Button";
import classes from "./MainPage.module.scss";
import Input from "../../components/input/Input";
import BookList from "../../components/bookList/BookList";

const MainPage = () => {
    const [books, setBooks] = useState([]);
    const [inputValue, setInputValue] = useState("");

    const handleInputChange = (event) => {
        setInputValue(event.target.value)
    }
    const handleAdd = ()=>{
        setBooks(prevState => [
            ...prevState,
            {
                id: books.length === 0 ? 1 : books[books.length - 1].id + 1,
                title: inputValue,
            }
        ]);
        setInputValue("");

    }
    const handleRemove = (id)=>{
        setBooks(books.filter((book)=>book.id !== id))
    }
    useEffect(() => {
        const myLocalStorage = JSON.parse(localStorage.getItem("books"))
        if (myLocalStorage === null) {
            localStorage.setItem("books", JSON.stringify(books));
        }
        if (myLocalStorage !== null) {
            setBooks(myLocalStorage)
        }
    },[])
    useEffect(() => {
        localStorage.setItem('books', JSON.stringify(books));
    }, [books]);
    return (
        <div className={classes.mainPage}>
            <div className={classes.title}>
                <img src="../../../src/img/icon.svg" alt=""/>
                <p>Добавить книгу</p>
            </div>
            <div className={classes.components}>
                <p>Название:</p>
                <Input placeholder={'Введите название'} text={'text'} value={inputValue} action={handleInputChange} />
                <Button color={'add'} name={"Добавить"} action={handleAdd}/>
            </div>
            <BookList books={books} handleRemove={handleRemove}/>
        </div>
    );
};

export default MainPage;