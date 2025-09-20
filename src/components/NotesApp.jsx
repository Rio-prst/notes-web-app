import React from 'react';
import {Routes, Route} from 'react-router-dom';
import HomePage from '../pages/HomePage';
import DetailNotePage from '../pages/DetailNotePage';
import ArchivedNotesPage from '../pages/ArchivedNotesPage';
import NotesAppHeader from './NotesAppHeader';
import AddNotePage from '../pages/AddNotePage';
import NotFoundPage from '../pages/NotFoundPage';

function NotesApp() {
    return (
        <div className='notes-app'>
            <NotesAppHeader/>
            <main>
                <Routes>
                    <Route path='/' element={<HomePage/>}/>
                    <Route path='/add' element={<AddNotePage/>}/>
                    <Route path='/archive' element={<ArchivedNotesPage/>}/>
                    <Route path='/notes/:id' element={<DetailNotePage/>}/>
                    <Route path='*' element={<NotFoundPage/>}/>
                </Routes>
            </main>
        </div>
    )
}

export default NotesApp;