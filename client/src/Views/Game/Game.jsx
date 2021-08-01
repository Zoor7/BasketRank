import { useState, useEffect } from 'react'
import Courts from '../../Componenets/Courts/Courts'
import CreateJoin from '../../Componenets/GameLobby/CreateJoin/CreateJoin'


import './game.scss'

const Game = () => {
    const [status, setStatus] = useState({ step: 0, option: '',court:''})



    useEffect(() => {
        
    }, [])


    return (
        <div className="game-container">
            {status.step === 0
                ? <CreateJoin handleGameStatus={setStatus} />
                : null}
            {status.step === 1
                ? <Courts />
                : null}
            {/* {status.step===2} */}

        </div>
    )
}

export default Game