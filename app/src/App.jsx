import React from "react";
import { useState, useEffect } from "react";
import Input from "./pageComponents/input.jsx";
import ToDoList from "./pageComponents/toDoList.jsx";
import Buttons from "./pageComponents/buttons.jsx";
import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";

export default function App() {
  let localStorage = JSON.parse(window.localStorage.getItem("item"));
  let tmpItems = [];
  if (localStorage) {
    tmpItems = localStorage;
  }
  const [item, setItem] = useState(tmpItems);
  const [page, setPage] = useState("All");
  

  useEffect(() => {
    window.localStorage.setItem("item", JSON.stringify(item));
  }, [item]);

  
  console.log(item.length);
  let amountOfItems = item.length;

  return (
    <div className="container">
      <div className='row'>
        <h1 className=" col-12 my-2 text-center ">TO-DO-LIST</h1>
        <h4 className='col-12 my-2 text-center'>
          We all know you just put these in here then forget about them and never
          do them ;)
        </h4>
        </div>
        <div className=''>
          <div className='col-12 text-center'>


        <Input item={item} setItem={setItem} />
          </div>
          <div className='col-8 offset-2 text-center'>
          <ToDoList
            item={item}
            setItem={setItem}
            amountOfItems={amountOfItems}
            page={page}
            setPage={setPage}
            />
            </div>
          </div>
        <Buttons item={item} setItem={setItem} setPage={setPage} page={page} />
      </div>
    
  );
}

// active={active} completed={completed} setActive={setActive} setCompleted={setCompleted}
