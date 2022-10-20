import React from 'react'
import {useState} from 'react'
import Input from './pageComponents/input.jsx'
import ToDoList from './pageComponents/toDoList.jsx'
import './style.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.js'


export default function App () {
    const [item, setItem] = useState([])

    let amountOfItems = item.length



    return (
        <div>
            <h1>TO-DO-LIST</h1>
            <h4>We all know you just put these in here then forget about them and never do them</h4>
            <Input item={item} setItem={setItem} />
            <ToDoList item={item} setItem={setItem} amountOfItems={amountOfItems}/>
            

        </div>
    )
}