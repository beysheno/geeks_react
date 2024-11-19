import React, {useState} from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Button from "../components/Button/Button";
import Example from "../components/Example/Example";
import Modal from "../components/Modal/Modal";
import Count from "../components/Count/Count";
import TodoList from "../components/TodoList/TodoList";
import todo from "../components/TodoList/Todo";

export default function MainPage() {

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

        <Count>

        </Count>
    </div>
  );
}
