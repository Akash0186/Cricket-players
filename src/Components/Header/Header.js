import React from 'react';
import './Header.css';
import logo from '../../images/logo.png';

const Header = () => {
    return (
        <div className='header'>
            <img src={logo} alt=""/>
            <nav>
                <a href='/BPL'>BPL</a>
                <a href='/National Team'>National Team</a>
                <a href='./Under-19'> Under-19</a>
                <a href='./Retired Team'> Retired Team</a>
            </nav>
        </div>
    );
};

export default Header;