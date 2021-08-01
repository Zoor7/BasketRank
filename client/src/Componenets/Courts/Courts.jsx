import { useState, useEffect } from 'react'
import { getCourts } from '../../services/courts'


import './courts.scss'

export default function Courts() {

    const [courts, setCourts] = useState([])

    useEffect(() => {
        const fetchCourts = async () => {
            const fetchedCourts = await getCourts()
            setCourts(fetchedCourts)
        }
        fetchCourts()

    }, [])

    return (
        <div className='courts-container'>

            <h2>Selecciona la pista:</h2>
            <div className="court-list">
                {courts.map((court) =>
                    <button className='court-item' key={court.id}>
                        <h1>{court.name}</h1>
                        <p>{court.city}</p>
                    </button>)}
            </div>

        </div>
    )
}
