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
        <div className="my-2">
            
            <input ref={inputName} placeholder='Type To-Do Here' type='text' name='name' id='input'></input>
            <button className='btn btn-primary ms-2' onClick={submit} >Add To-Do</button>
            <div>
            </div>
        </div>
    )
}