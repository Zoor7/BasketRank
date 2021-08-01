import { useState } from 'react'
import { sliceIntoChunks } from '../../utils/sliceArray'

import './searcher.scss'

export const Searcher = ({ info, setSlicedPlayers, setPagination }) => {

    const savedSlicedArray = info

    const handleChange = (event) => {
        const value= event.target.value.toLowerCase()
        console.log(info);
        const filterArray = info.filter((item) =>item.username.toLowerCase().startsWith(value))
        const slicedArray = sliceIntoChunks(filterArray, 5)
        setPagination((prev) => { return { ...prev, total: slicedArray.length } })
        setSlicedPlayers(slicedArray)

    }


    return (
        <div className='searcher-container'>

            <input type="text" placeholder='Nombre Jugador' onChange={handleChange} />

        </div>
    )
}
