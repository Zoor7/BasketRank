import { useState, useEffect } from 'react'


import { motion } from 'framer-motion';
import Ranking from '../../Componenets/Ranking/Ranking';
import { Searcher } from '../../Componenets/Searcher/Searcher';

import info from '../../utils/info.json'

import './players.scss'
import PaginationUI from '../../Componenets/Pagination/Pagination';
import { sliceIntoChunks } from '../../utils/sliceArray';

const Players = () => {
    const [slicedPlayers, setSlicedPlayers] = useState()
    const [pagination, setPagination] = useState({ current: 0, total: '' })

    useEffect(() => {
        const slicedArray = sliceIntoChunks(info.players, 5)
        setSlicedPlayers(slicedArray)
        setPagination((prev) => { return { ...prev, total: slicedArray.length } })
    }, [])


    if (!slicedPlayers) {
        return <h1>cargando</h1>
    }
    return (
        <motion.div exit={{ opacity: 0 }} className='jugadores-container' >
            <Searcher info={info.players} setSlicedPlayers={setSlicedPlayers} setPagination={setPagination} />
            <h4>RANKING JUGADORES</h4>
            {!slicedPlayers[0]
                ? <div>
                    <h5>Sin resultados...</h5>
                </div>
                : <Ranking home={false} info={{ isPlayer: true, arr: slicedPlayers[pagination.current] }} />
            }
            <PaginationUI setPagination={setPagination} pages={pagination.total} />
        </motion.div>

    )
}

export default Players