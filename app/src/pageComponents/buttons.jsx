export default function Buttons (props) {
    console.log(props)

    function megaDelete () {
        console.log('is this working???')
        props.item.forEach((item) => {

            if (item.activeStatus === false){
                item.activeStatus = null
                console.log(item.activeStatus)
            }})
        
    }
        function forSureDelete () {
            for (let i = 0; i < props.item.length; i++){
                if (props.item.activeStatus === null){
                    
                }
            }
        }



    
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
            <div>
                <button onClick={() => {
                    megaDelete()
                }}>Delete Completed
                </button>
            </div>
        </div>
    )
}