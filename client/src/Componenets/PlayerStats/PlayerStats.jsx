import kd from '../../assets/images/kd.jpg'
import './playerStats.scss'

const PlayerStats = () => {
    return (
        <div className="player-container">
            <div className='player-main'>
                <h4>TUS STATS:</h4>
                <div className='avatar'>
                    <img alt='avatar' src={kd}></img>
                </div>
                <div className='player-stats'>
                    <article>
                        <p>Rank</p>
                        <p>8</p>
                    </article>
                    <article>
                        <p>Games</p>
                        <p>5</p>
                    </article>
                    <article>
                        <p>Wins</p>
                        <p>1</p>
                    </article>
                </div>
            </div>
        </div>
    )

}

export default PlayerStats