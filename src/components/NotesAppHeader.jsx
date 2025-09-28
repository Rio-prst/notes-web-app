import React, {useContext} from 'react';
import Navigation from './Navigation';
import LocaleContext from '../context/LocaleContext';
import { translation } from '../utils/localeContent';
import ThemeContext from '../context/ThemeContext';

function NotesAppHeader({authedUser, onLogout}) {
    const {locale} = useContext(LocaleContext);
    const {theme} = useContext(ThemeContext)

    return (
        <header className={theme}>
            <div className='title-and-tagline'>
                <h1>My Memo</h1>
                <p>{translation[locale].tagline}</p>
            </div>
            {authedUser && (
                <Navigation logout={onLogout} name={authedUser.name}/>
            )}
        </header>
    );
}

export default NotesAppHeader;