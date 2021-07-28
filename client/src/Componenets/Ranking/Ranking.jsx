import zoro from '../../assets/images/ojo_izquierdo_zoro_one_piece.jpg_743561205.jpg'

import './ranking.scss'

const Ranking = ({home,players,teams}) => {

    const rankingToShow=()=>{
        if(players){
            return home?players.players.slice(0,3):players.players
        }
        return home?teams.players.slice(0,3):teams.players
    }


    return (
        <div className="ranking-container">
            <h4>{players?'TOP JUGADORES:':'TOP EQUIPOS:'}</h4>
            {rankingToShow().map((player,key) => (
                <article key={key}>
                    <div className='ranking-avatar'>
                        <img src={zoro} alt="avatar" />
                    </div>
                    <div className='ranking-info-player-container'>
                        <div className="ranking-position">
                            <p>{player?player.rank:teams.rank}</p>
                            <p>POS</p>
                        </div>
                        <hr />
                        <div className="ranking-info-player">
                            <p className='name'>{player.username}</p>
                            <div className="ranking-subinfo-player">
                                <p>{player.team}</p>
                                <hr />
                                <p>{player.court}</p>
                            </div>
                        </div>
                    </div>
                </article>
            ))}
        </div>
    )
}

export default Ranking