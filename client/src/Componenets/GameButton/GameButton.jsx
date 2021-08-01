import {useState,useEffect} from 'react'

import {useHistory} from 'react-router-dom'

import './GameButton.scss'

const GameButton = () => {

    const [status, setStatus] = useState()
    const history = useHistory()

    const handleClick=()=>{
        history.push('/partido')

    }

    useEffect(() => {

        setStatus('Jugar')
        
    }, [])

    
    return(
        <div className="gamebtn-container">
            <button onClick={handleClick}>{status}</button>
        </div>
    )
}

export default GameButton