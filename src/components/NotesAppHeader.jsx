import React from 'react';
import SearchBar from './SearchBar';

function NotesAppHeader({onSearch}) {
    return (
        <header>
            <div className='title-and-tagline'>
                <h1>My Memo</h1>
                <p>Manage your notes easely</p>
            </div>
            <SearchBar onSearch={onSearch}/>
        </header>
    );
}

export default NotesAppHeader;