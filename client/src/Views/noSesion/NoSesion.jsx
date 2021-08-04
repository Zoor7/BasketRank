import {useContext} from 'react'

import useWindowSize from '../../Hooks/useWindowSize';
import { motion } from 'framer-motion';

import ruckerpark from '../../assets/images/ruckerpark.jpg'
import giannis from '../../assets/images/giannis.jpg'
import booker from '../../assets/images/db.jpg'

import './noSesion.scss'
import { saveUser } from '../../services/userStorage';
import UserContext from '../../context/userContext';
import { ADD_USER } from '../../context/reducers/userReducer';

const NoSesion = () => {


    const { width } = useWindowSize()
    const{userDispatch}=useContext(UserContext)


    const handleSesion=async()=>{

        userDispatch({type:ADD_USER,payload:{id:true}})
        saveUser({user:true})
    }

    return (
        <motion.div exit={{ opacity: 0 }} className="noSesion-container">

            <div className="noSesion-info">
                <h1>BasketRank</h1>
                <p>Puntua tus partidos, entra en el ranking, conoce jugadores y queda con ellos para jugar.</p>
                <div className='noSesion-btn-container'>
                    <button onClick={handleSesion}>Iniciar Sesion</button>
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