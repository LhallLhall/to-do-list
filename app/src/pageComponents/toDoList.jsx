import ToDoItem from './toDoItem.jsx'
export default function ToDoList (props){

    let completedFilter = props.item.filter(x => x.activeStatus == false).length
    let activeFilter = props.item.filter(x => x.activeStatus == true).length

    let amount
    let text
    if (props.page === 'Active'){
        amount = activeFilter
        text = 'To-Do\'s Left'
        // console.log(amount)
    } else if (props.page === 'Completed'){
        amount = completedFilter
        text = 'To-Do\'s Completed'
    } else {
        amount = props.item.length
        text = 'Total To-Do\'s'
    }
    return (
        <div>
            <h5>{amount} {text}</h5>
            <ToDoItem amountOfItems={props.amountOfItems} item={props.item} setItem={props.setItem} page={props.page} setPage={props.setPage}/>
            
            
        </div>
    )
}