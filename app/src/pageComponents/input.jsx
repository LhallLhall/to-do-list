import React from 'react'
import { useId } from 'react'

export default function Input (props){
    

    let inputName = React.useRef(null)
    let activeStatus = true;
    let id = Date.now()
    
    console.log(props)
    
    const submit = () => {

        let input = inputName.current.value
        props.setItem([...props.item, {input, activeStatus, id}])
        inputName.current.value = null
    
    }

    
    
    return(
        <div className="">
            
            <input ref={inputName} placeholder='Type To-Do Here' type='text' name='name' id='input'></input>
            <button onClick={submit} >click</button>
            <div>
            </div>
        </div>
    )
}