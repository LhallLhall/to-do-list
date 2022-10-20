import React from 'react'

// import { useId } from 'react'
export default function ToDoItem(props){
    
    console.log(props.item)

    function complete (individualItem, i) {
        individualItem.activeStatus = false
        let art = document.getElementById("flexCheckDefault" + i)
        let classAdd = document.getElementById('id' + i)
        classAdd.classList.add('text-decoration-line-through')
        art.setAttribute('disabled', '')
        
        // console.log(listId)
        console.log(individualItem)
    }


    function remove (individualItem) {
        console.log(individualItem)
        
    }

    
    return (
        <>
          <div className=''>
            {props.item.map((item,i)  => (
                
              <div className="row" key={item.id}>
                <div className="col-1">
                <input onClick={() => complete(item, i)} className="form-check-input me-3" type="checkbox" value="" id={"flexCheckDefault" + i}/>
                </div>
                <div className="col-1">
                <h5 id={'id' + i}>{item.input}{' '}</h5>
                </div>
                <div className="col-1">
                <button onClick={() => {
                    item.activeStatus = false
                    console.log(item.id)
                    props.setItem(props.item.filter(a => a.id !== item.id
                    )
                  );
                }}>
                  Delete
                </button>
                </div>
              </div>
            ))}
          </div>
          <div>
            <button>All</button>
            <button>Active</button>
            <button>Completed</button>
            </div>
        </>
      );
        
        

}