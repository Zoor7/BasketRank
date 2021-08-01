import { useEffect,useState } from 'react'

import zoro from '../../assets/images/ojo_izquierdo_zoro_one_piece.jpg_743561205.jpg'

import './ranking.scss'

const Ranking = ({home,info}) => {

    const [loading, setLoading] = useState(true)
    const [isPlayer, setIsPlayer] = useState()

    useEffect(() => {

        if(info?.arr[0]){
            setIsPlayer(info.setIsPlayer)
            setLoading(false)
        }

    }, [info])

    if(loading){
        return <h1>Cargando</h1>
    }
    return (
        <div className="ranking-container">
            {info.arr.map((item,key) => (
                <article key={key}>
                    <div className='ranking-avatar'>
                        <img src={zoro} alt="avatar" />
                    </div>
                    <div className='ranking-info-item-container'>
                        <div className="ranking-position">
                            <p>{item.rank}</p>
                            <p>POS</p>
                        </div>
                        <hr />
                        <div className="ranking-info-item">
                            <p className='name'>{item.username}</p>
                            <div className="ranking-subinfo-item">
                                <p>{item.team}</p>
                                <hr />
                                <p>{item.court}</p>
                            </div>
                        </div>
                    </div>
                </article>
            ))}
        </div>
    )
}

export default Ranking