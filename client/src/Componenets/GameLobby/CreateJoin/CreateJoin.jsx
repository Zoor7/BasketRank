import './createJoin.scss'

const CreateJoin = ({handleGameStatus}) => {

    const handleClick=(e)=>{
        const value = e.target.value
        handleGameStatus(()=>{return{step:1,option:value==='1'?'crear':'unirse'}})
    }

    return(
        <div className="createJoin-container">
            <button value='1' onClick={(e)=>handleClick(e)}>Crear Partido</button>
            <button value='2' onClick={(e)=>handleClick(e)}>Unirse Partido</button>
        </div>
    )
}

export default CreateJoin