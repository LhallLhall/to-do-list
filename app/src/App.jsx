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
    <div>
      <h1>TO-DO-LIST</h1>
      <h4>
        We all know you just put these in here then forget about them and never
        do them
      </h4>
      <Input item={item} setItem={setItem} />
      <ToDoList
        item={item}
        setItem={setItem}
        amountOfItems={amountOfItems}
        page={page}
        setPage={setPage}
      />
      <Buttons item={item} setItem={setItem} setPage={setPage} page={page} />
    </div>
  );
}

// active={active} completed={completed} setActive={setActive} setCompleted={setCompleted}
