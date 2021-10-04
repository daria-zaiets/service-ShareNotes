import { NavLink } from 'react-router-dom';
import './Header.css';
import img from './logo.svg';
function Header() {
    return (
        <header className='general-header'>
            <nav className='header-nav inner-container'>
                <ul className='menu-header-nav'>
                    <li className='item-header-nav logo-box'>   
                        <NavLink exact to='/'> 
                            <span>SHARE <img src={img} alt='logo' className='logo-img'/> NOTES</span>
                        </NavLink>  
                    </li>
                    <li className='item-header-nav'>
                        <NavLink to='/note'> Note </NavLink>
                    </li>
                    <li className='item-header-nav'>
                        <NavLink to='/create'> Create </NavLink>
                    </li>
                    <li className='item-header-nav'>
                        <NavLink to='/about'> About </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;