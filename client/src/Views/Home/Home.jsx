import { useState } from 'react'
import { motion } from 'framer-motion';
import PlayerStats from '../../Componenets/PlayerStats/PlayerStats';
import Ranking from '../../Componenets/Ranking/Ranking';
import info from '../../utils/info.json'

import './home.scss'
import NoSesion from '../noSesion/NoSesion';


const Home = () => {

    const players = info
    const [isLogged, setIsLogged] = useState(false)



    return (
        <motion.div exit={{ opacity: 0 }} className='home-container'>
            {isLogged
                ? <div>
                    <PlayerStats />
                    <div className='home-rankings'>
                        <Ranking home={true} players={players} />
                        <Ranking home={true} teams={players} />
                    </div>
                </div>
                : <NoSesion />
            }
        </motion.div>
    )
}

export default Home