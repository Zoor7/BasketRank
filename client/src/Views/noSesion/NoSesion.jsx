import UseWindowSize from '../../Hooks/useWindowSize';
import { motion } from 'framer-motion';

import ruckerpark from '../../assets/images/ruckerpark.jpg'
import giannis from '../../assets/images/giannis.jpg'
import booker from '../../assets/images/db.jpg'

import './noSesion.scss'

const NoSesion = () => {


    const { width } = UseWindowSize()

    return (
        <motion.div exit={{ opacity: 0 }} className="noSesion-container">

            <div className="noSesion-info">
                <h1>BasketRank</h1>
                <p>Puntua tus partidos, entra en el ranking, conoce jugadores y queda con ellos para jugar.</p>
                <div className='noSesion-btn-container'>
                    <button>Iniciar Sesion</button>
                </div>
            </div>

            <div className="noSesion-images">

                {width >= 800
                    ? <div>
                        <img src={giannis} alt="giannis" />
                        <img src={ruckerpark} alt="rucker" />
                        <img src={booker} alt="booker" />
                    </div>
                    :<img src={giannis} alt="giannis" />
                }
            </div>

        </motion.div >
    )

}

export default NoSesion