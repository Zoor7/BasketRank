import { useState,useEffect,useContext } from 'react'
import { motion } from 'framer-motion';
import PlayerStats from '../../Componenets/PlayerStats/PlayerStats';
import Ranking from '../../Componenets/Ranking/Ranking';
import NoSesion from '../noSesion/NoSesion';
import GameButton from '../../Componenets/GameButton/GameButton';
import { getPlayers } from '../../services/players';

import './home.scss'
import UserContext from '../../context/userContext';

const Home = () => {

    const [players, setPlayers] = useState()
    const [isLogged, setIsLogged] = useState()

    const{userState}=useContext(UserContext)

    useEffect(() => {
        const fetchPlayers = async () => {
            const fetchedPlayers = await getPlayers(0, 3)
            setPlayers(fetchedPlayers.players)
        }
        fetchPlayers()
    }, [])
    
    useEffect(() => {
        setIsLogged(userState.id)
    }, [userState])


    if(!players){
        return <h1>loading</h1>
    }
    return (
        <motion.div exit={{ opacity: 0 }} className='home-container'>
            {isLogged
                ? <div>
                    <PlayerStats />
                    <GameButton />
                    <div className='home-rankings'>
                        <div>
                            <h4>TOP JUGADORES:</h4>
                            <Ranking home={true} info={{ isPlayer: true, arr: players }} />
                            <a href="/jugadores">más...</a>
                        </div>
                        <div>
                            <h4>TOP EQUIPOS:</h4>
                            <Ranking home={true} info={{ isPlayer: true, arr: players }} />
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