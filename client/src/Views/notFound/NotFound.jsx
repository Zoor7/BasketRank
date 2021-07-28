import notFoundImageMobile from '../../assets/images/404court.jpg' 
import notFoundImageDesktop from '../../assets/images/404basket3.webp'

import useWindowSize from '../../Hooks/useWindowSize'

import './notFound.scss'

const NotFound = () => {

    const {width}= useWindowSize()

    return(
        <div className='notFound-container'>
            <img src={width>=700?notFoundImageDesktop: notFoundImageMobile} alt='404'></img>

        </div>
    )

    
}

export default NotFound