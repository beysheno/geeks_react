import React from 'react';
import Button from "../button/Button";
import classes from "./BookList.module.scss";

const BookList = ({books,handleRemove}) => {
    return (
        <div>
            <div className={classes.content}>

                <div className={classes.block}>
                    <h3 className={classes.name}>Название</h3>
                    {books.map((book) => (
                        <div className={classes.books} key={book.id}>
                            <div className={classes.title}>{book.title}</div>
                            <Button name={'Удалить'} color={'delete'} action={() => handleRemove(book.id)}/>
                        </div>
                    ))}
                </div>


            </div>
        </div>
    );
};

export default BookList;