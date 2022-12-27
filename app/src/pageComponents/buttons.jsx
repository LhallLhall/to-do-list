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
        <div className=" row mt-3 ">
            
            <div className='col-4 d-flex justify-content-end'>
            <button 
            className='btn btn-secondary'
            onClick={() => {
                // all()
                props.setPage('All')
            
            }}>All</button>
            </div>

            <div className='col-4 d-flex justify-content-center'>
            <button 
            className='btn btn-secondary'
            onClick={() => {
                // active()
                props.setPage('Active')
                }}>Active</button>
            </div>

            <div className='col-4 '>
            <button 
            className='btn btn-secondary d-flex justify-content-start'
            onClick={() => {
                // Completed()
                props.setPage('Completed')
            }}>Completed</button>
            </div>
            
            {/* <div>
                <button onClick={() => {
                    megaDelete()
                }}>Delete Completed
                </button>
            </div> */}
        </div>
    )
}