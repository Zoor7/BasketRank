import { useEffect, useState } from 'react'

import './searcher.scss'

export const Searcher = ({fetchPlayersByName,fetchPlayers}) => {

    const [query, setQuery] = useState('')


    useEffect(() => {
        const timeOutId = setTimeout(() => search(query), 700);
        return () => clearTimeout(timeOutId);
    }, [query])

    const search = async (query) => {
        if (query !== '') {
            fetchPlayersByName(0,query)
            return
        }
        fetchPlayers(0)
    }


    return (
        <div className='searcher-container'>
            <input type="text" placeholder='Nombre Jugador' onChange={event => setQuery(event.target.value)} />
        </div>
    )
}
