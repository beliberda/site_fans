import React from 'react'
import './style.css';

import { ReactComponent as Set } from '../../assets/img/set.svg';
import { ReactComponent as LogOut } from '../../assets/img/log-out.svg';

import Logo from '../../assets/img/Logo_placeholder.png';
import Ava from '../../assets/img/ava.jpg';
import { Link } from 'react-router-dom';

function Header() {

    return (
        <header className='header'>
            <div className='header__wrapper'>
                <Link to='/'><img src={Logo} width='180px' height='48px' alt='foto' /> </Link>

                <div className='header__user'>
                    <img src={Ava} width='32px' height='32px' alt='ava' />
                    <p className='header__name'>John Doe</p>
                    <Set />
                    <LogOut />
                </div>
            </div>
        </header>
    )
}

export default Header;
