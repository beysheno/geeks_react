import React, {useState} from 'react';
import Button from "../Button/Button";
import classes from "./TodoList.module.scss";

const Todo = ({tasks,handleDone, handleDelete,handleEdit, setCurrentID, isEdit}) => {
    const [inputValue, setInputValue] = useState(tasks.title);
    return (
        <>
        <li className={`${classes.li} ${tasks.completed && classes.done}`}>
           <div className={classes.info}>
               <p>id: {tasks.id}</p>
               <p>Title: {tasks.title}</p>
               <p>completed: {tasks.completed ? 'true' : 'false'}</p>
           </div>
           <div className={classes.btns}>
               <Button name={'Edit'} action={()=>{setCurrentID(tasks.id)}} color={'primary'} />
               <Button name={'Done'} action={()=>{ handleDone(tasks.id) }} color={'secondary'} />
               <Button name={'Delete'} action={()=>{handleDelete(tasks.id)}} color={'error'} />
           </div>
        </li>
            {isEdit && <div className={classes.li}>
                <input type={'text'} onChange={(e) => setInputValue(e.target.value)} value={inputValue}/>
                <Button name={"Save"} color={'primary'} action={()=> handleEdit({
                    ...tasks,
                    title: inputValue,
                })}/>
                <Button name={"Cancel"} color={'error'} action={()=>{setCurrentID(null)}} />
            </div>}

        </>

    );
};

export default Todo;