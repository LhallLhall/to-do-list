export default function Buttons (props) {
    console.log(props)

    // let array = props.item 
    
    return(
        <div className="">
            <div>
            
            <button onClick={() => {
                // all()
                props.setPage('All')
            
            }}>All</button>
            
            <button onClick={() => {
                // active()
                props.setPage('Active')
                }}>Active</button>
            
            <button onClick={() => {
                // Completed()
                props.setPage('Completed')
            }}>Completed</button>
            </div>
            
        </div>
    )
}