import React, {useContext} from 'react';
import { Link } from 'react-router-dom';
import {House, FileArchive, LogOut, Languages, Sun, Moon} from 'lucide-react';
import LocaleContext from '../context/LocaleContext';
import ThemeContext from '../context/ThemeContext';

function Navigation({logout, name}) {
    const {toggleLocale} = useContext(LocaleContext);
    const {theme, toggleTheme} = useContext(ThemeContext);
    const iconColor = theme === 'dark' ? 'white' : '#333';
    const textColor = theme === 'dark' ? 'white' : '#333';

    return (
        <nav className='navigation'>
            <ul>
                <li><Link to = '/'><House color={iconColor}/></Link></li>
                <li><Link to='archive'><FileArchive color={iconColor}/></Link></li>
                <li><button onClick={toggleLocale}><Languages color={iconColor}/></button></li>
                <li><button onClick={toggleTheme}>{theme === 'dark' ? <Sun color={iconColor}/> : <Moon color={iconColor}/>}</button></li>
                <li>
                    <button onClick={logout}>
                        <span style={{ color: textColor }}>{name}</span>
                        <LogOut color={iconColor}/>
                    </button>
                </li>
            </ul>
        </nav>
    );
}

export default Navigation;