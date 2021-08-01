import { useEffect, useState } from 'react'
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import {
    NavLink,
    useLocation
} from "react-router-dom";
import { AiFillHome, AiOutlineHome, AiOutlineMenu } from 'react-icons/ai';
import { RiBasketballFill, RiBasketballLine } from 'react-icons/ri';
import { BsFillPersonFill, BsPerson, BsChat, BsFillChatFill } from 'react-icons/bs';
import { GiBasketballJersey } from 'react-icons/gi';

import useWindowSize from '../../Hooks/useWindowSize';

import './header.scss'

const Header = () => {
    const windowSize = useWindowSize()
    const location = useLocation()
    const [drawerIsOpen, setDrawerIsOpen] = useState(false)

    const handleDrawerOpening = () => {
        setDrawerIsOpen(!drawerIsOpen)
    }

    const header = () => {
        return (
            <div className='header-content'>
                <h2>BasketRank</h2>
                <nav>
                    <ul>
                        <li>
                            <NavLink activeClassName='active-nav-link' className='nav-link' to='/' exact>
                                {location.pathname === '/' ? <AiFillHome size='1.3rem' /> : <AiOutlineHome size='1.3rem' />}
                                <p>Inicio</p>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink activeClassName='active-nav-link' className='nav-link' to='/jugadores'>
                                {location.pathname === '/jugadores' ? <RiBasketballFill size='1.3rem' /> : <RiBasketballLine size='1.3rem' />}
                                <p>Jugadores</p>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink activeClassName='active-nav-link' className='nav-link' to='/equipos'>
                                <GiBasketballJersey size='1.3rem' />
                                <p>Equipos</p>
                            </NavLink>
                        </li>
                        <hr />
                        <li>
                            <NavLink activeClassName='active-nav-link' className='nav-link' to='/perfil'>
                                {location.pathname === '/perfil' ? <BsFillPersonFill size='1.3rem' /> : <BsPerson size='1.3rem' />}
                                <p>Perfil</p>
                            </NavLink>
                        </li>
                        {true
                            ? <li>
                                <NavLink activeClassName='active-nav-link' className='nav-link' to='/chats'>
                                    {location.pathname === '/chats' ? <BsFillChatFill size='1.2rem' /> : <BsChat size='1.2rem' />}
                                    <p>Chats</p>
                                </NavLink>
                            </li>
                            : null
                        }
                    </ul>
                </nav>
            </div>
        )
    }

    return (
        <div>
            {windowSize.width >= 800
                ? header()
                : (<div className='header-mobile'>
                    <h3>BasketRank</h3>
                    <AiOutlineMenu onClick={handleDrawerOpening} />
                    <SwipeableDrawer
                        anchor={"left"}
                        style={{width:'50%'}}
                        open={drawerIsOpen}
                        onClose={handleDrawerOpening}
                        onOpen={handleDrawerOpening}>
                        {header()}
                    </SwipeableDrawer>
                </div>)

            }
        </div>

    )
}

export default Header