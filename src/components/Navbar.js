import { NavLink } from 'react-router-dom'
import './navbar.scss'
import { Accounts } from './svgs/Accounts'
import { Home } from './svgs/Home'
import { Messages } from './svgs/Messages'
import { Photos } from './svgs/Photos'
import { Settings } from './svgs/Settings'
export function Navbar() {
    return (
        <nav className="navbar-container">
            <ul className="list" >
                <li>
                    <NavLink to="/home">
                        <div className='icon' ><Home /> </div>
                        <div className='text' >Home</div>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/accounts">
                        <div className='icon' ><Accounts /> </div>
                        <div className='text' >Accounts</div>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/messages">
                        <div className='icon' ><Messages /> </div>
                        <div className='text' >Messages</div>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/photos">
                        <div className='icon' ><Photos /> </div>
                        <div className='text' >Photos</div>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/settings">
                        <div className='icon' ><Settings /> </div>
                        <div className='text' >Settings</div>
                    </NavLink>
                </li>
                <div className='indicator' />
            </ul>

        </nav>
    )
}