import { useEffect,useState } from 'react'

import zoro from '../../assets/images/ojo_izquierdo_zoro_one_piece.jpg_743561205.jpg'

import './ranking.scss'

const Ranking = ({info}) => {

    const [isPlayer, setIsPlayer] = useState()


    useEffect(() => {

        if(info?.arr[0]){
            setIsPlayer(info.setIsPlayer)
        }

    }, [info])

    return (
        <div className="ranking-container">
            {info.arr.map((item,key) => (
                <article key={item.id}>
                    <div className='ranking-avatar'>
                        <img src={zoro} alt="avatar" />
                    </div>
                    <div className='ranking-info-item-container'>
                        <div className="ranking-position">
                            <p>{key+1}</p>
                            <p>POS</p>
                        </div>
                        <hr />
                        <div className="ranking-info-item">
                            <p className='name'>{item.username}</p>
                            <div className="ranking-subinfo-item">
                                <p>{item.team?item.team:'Sin equipo'}</p>
                                <hr />
                                <p>{item.court?item.court:'sin asignar'}</p>
                            </div>
                        </div>
                    </div>
                </article>
            ))}
        </div>
    )
}

export default Ranking