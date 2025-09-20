import React from 'react';
import Navigation from './Navigation';

function NotesAppHeader() {
    return (
        <header>
            <div className='title-and-tagline'>
                <h1>My Memo</h1>
                <p>Manage your notes easely</p>
            </div>
            <Navigation/>
        </header>
    );
}

export default NotesAppHeader;