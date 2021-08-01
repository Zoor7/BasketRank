import { useState } from 'react'
import { motion } from 'framer-motion';
import PlayerStats from '../../Componenets/PlayerStats/PlayerStats';
import Ranking from '../../Componenets/Ranking/Ranking';
import info from '../../utils/info.json'

import './home.scss'
import NoSesion from '../noSesion/NoSesion';
import GameButton from '../../Componenets/GameButton/GameButton';


const Home = () => {

    const players = info.players.slice(0,3)
    const [isLogged, setIsLogged] = useState(true)



    return (
        <motion.div exit={{ opacity: 0 }} className='home-container'>
            {isLogged
                ? <div>
                    <PlayerStats />
                    <GameButton />
                    <div className='home-rankings'>
                        <div>
                            <h4>TOP JUGADORES:</h4>
                            <Ranking home={true} info={{isPlayer:true,arr:players}} />
                            <a href="/jugadores">más...</a>
                        </div>
                        <div>
                            <h4>TOP EQUIPOS:</h4>
                            <Ranking home={true} info={{isPlayer:true,arr:players}} />
                            <a href="/equipos">más...</a>
                        </div>

                    </div>
                </div>
                : <NoSesion />
            }
        </motion.div>
    )
}

export default Home