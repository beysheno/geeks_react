import React, {useState} from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Button from "../components/Button/Button";
import Example from "../components/Example/Example";
import Modal from "../components/Modal/Modal";
import Count from "../components/Count/Count";
import List from "../components/List/List";

export default function MainPage() {
    const [show, setShow ] = useState(false);
    const [show2, setShow2 ] = useState(false);
    const [name, setName] = useState('');
    const [inputValue, setInputValue] = useState('');
    const handleShow = (name) =>{
        setName(name);
        if(name === 'show') setShow(prevShow => !prevShow);
        if(name === 'show2') setShow2(prevShow => !prevShow);
    }
    const handleInput = (event)=>{
        setInputValue(event.target.value);
    }
    const tasks = [
        {
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
        },
        {
            id:4,
            title: 'go shopping',
            completed: false,
        },
        {
            id:5,
            title: 'train',
            completed: false,
        }
    ]
  return (
    <div>
      {/*<Header />*/}
      {/*<h2 className="btn">MainPage</h2>*/}
      {/*<Button action={"Open"} color={"primary"} />*/}
      {/*<Button action={"Close"} color={"error"} />*/}
      {/*<Button action={"Save"} color={"secondary"} />*/}
      {/*  <Example name={"Aziret"}>*/}
      {/*      <div style={{backgroundColor:"blueviolet"}}>*/}
      {/*          <p style={{color:'red'}}>name: Aziret</p></div>*/}

      {/*  </Example>*/}
      {/*  <Footer />*/}
        <List tasks={tasks} />
        inputValue: {inputValue}

        <Button name={'Open'} action={()=>handleShow('show')}/>
        <Button name={'Open'} action={()=>handleShow('show2')}/>
        {
            show && <Modal
                handleShow={handleShow}
                name={name}
                handleInput={handleInput}>
                <h1>Hello</h1>
            </Modal>
        }
        {
            show2 && <Modal
                handleShow={handleShow}
                name={name}
                handleInput={handleInput}>
                <h1>Hello2</h1>
            </Modal>
        }
        <Count>

        </Count>
    </div>
  );
}
