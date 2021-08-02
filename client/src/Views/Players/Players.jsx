import { useState, useEffect } from 'react'
import { motion } from 'framer-motion';
import Ranking from '../../Componenets/Ranking/Ranking';
import { Searcher } from '../../Componenets/Searcher/Searcher';
import PaginationUI from '../../Componenets/Pagination/Pagination';
import { getPlayers, getPlayersByName } from '../../services/players';

import './players.scss'

const Players = () => {
    const [players, setPlayers] = useState()
    const [pagination, setPagination] = useState({ current: 1, total: '',isSearch:false,query:'' })

    const fetchPlayers = async (skip) => {
        const fetchedPlayers = await getPlayers(skip * 5, 5)
        setPlayers(fetchedPlayers.players)
        setPagination((prev) => { return { ...prev,current:skip+1, total: fetchedPlayers.totalPages,isSearch:false } })
    }
    const fetchPlayersByName = async (skip,query) => {
        const players = await getPlayersByName(query, skip * 5, 5)
        setPlayers(players.players)
        setPagination(prev=>{return{...prev, current: skip+1, total: players.totalPages,isSearch:true,query }})
        return
    }
    const nextPage = async (page, isSearch) => {
        if (isSearch) {
            fetchPlayersByName(Number(page-1),pagination.query)
            return
        }
        await fetchPlayers(Number(page - 1))
    }

    useEffect(() => {
        fetchPlayers(0)
    }, [])


    if (!players) {
        return <h1>cargando</h1>
    }
    return (
        <motion.div exit={{ opacity: 0 }} className='jugadores-container' >
            <Searcher fetchPlayersByName={fetchPlayersByName} fetchPlayers={fetchPlayers} />
            <h4>RANKING JUGADORES:</h4>
            {!players[0]
                ? <div>
                    <h5>Sin resultados...</h5>
                </div>
                : <Ranking info={{ isPlayer: true, arr: players }} />
            }
            <PaginationUI pagination={pagination} nextPage={nextPage} />
        </motion.div>

    )
}

export default Players