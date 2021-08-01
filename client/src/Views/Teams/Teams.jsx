import { motion } from 'framer-motion';
import Ranking from '../../Componenets/Ranking/Ranking';

import './teams.scss'

const Teams = () => {
    return(
        <motion.div exit={{ opacity: 0 }} className="teams-container">
            <h4>RANKING EQUIPOS:</h4>
            <Ranking/>
        </motion.div>
    )
}

export default Teams