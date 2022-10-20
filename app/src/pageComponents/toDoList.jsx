import ToDoItem from './toDoItem.jsx'
export default function ToDoList (props){
    console.log(props.item.length)
    // let amountOfItems = props.item.length
    return (
        <div>
            <h5>{props.amountOfItems} To-Do's Left</h5>
            <ToDoItem item={props.item} setItem={props.setItem}>
            
            </ToDoItem>
            
        </div>
    )
}