import { motion } from 'framer-motion';
import Ranking from '../../Componenets/Ranking/Ranking';
    
import info from '../../utils/info.json'

import './players.scss'

const Players = () => {

    const players = info
    
    return (
        <motion.div exit={{ opacity: 0 }} className='jugadores-container' >
            <Ranking home={false} players={players}/>
        </motion.div>

    )
}

export default Players