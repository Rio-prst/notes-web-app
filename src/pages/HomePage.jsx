import React, {useState, useEffect, useContext} from 'react';
import NotesList from '../components/NotesList.jsx';
import {getActiveNotes, deleteNote, archiveNote} from '../utils/network-data.js';
import SearchBar from '../components/SearchBar.jsx';
import {Plus} from 'lucide-react';
import { useSearchParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import LocaleContext from '../context/LocaleContext.js';
import { translation } from '../utils/localeContent.js';

function HomePage() {
    const [searchParams, setSearchParams] = useSearchParams();
    const [notes, setNotes] = useState([]);
    const [keyword, setKeyword] = useState(() => {
        return searchParams.get('keyword') || ''
    });
    const [loading, setLoading] = useState(true);
    const {locale} = useContext(LocaleContext);

    useEffect(() => {
        async function fetchNotes() {
            setLoading(true);
            const {data} = await getActiveNotes();
            setNotes(data);
            setLoading(false);
        }
        fetchNotes();
    }, []);

    function onSearchHandler(newKeyword) {
        setKeyword(newKeyword);
        setSearchParams({keyword: newKeyword});
    }

    async function onDeleteHandler(id) {
        await deleteNote(id);
        const {data} = await getActiveNotes(id);
        setNotes(data);
    }

    async function onArchivedHandler(id) {
        await archiveNote(id);
        const {data} = await getActiveNotes();
        setNotes(data);
    }

    const filteredNotes = notes.filter((note) => 
        note.title.toLowerCase().includes(keyword.toLowerCase())
    );

    const activeNotes = filteredNotes.filter((note) => !note.archived);
    const isEmpty = activeNotes.length === 0;

    return (
        <>
            <div className='notes-app'>
                <hr />
                <h2>{translation[locale].activeNotes}</h2>
                <div className='search-bar-container'>
                    <SearchBar keyword={keyword} keywordChange={onSearchHandler}/>
                </div>
                {loading ? (
                    <p className='loading'>Loading ...</p>
                ) : isEmpty ? (
                    <p className='active-list-empty'>{translation[locale].isEmpty}</p>
                ) : (
                    <NotesList notes={activeNotes} onArchived={onArchivedHandler} onDelete={onDeleteHandler} isArchived={false}/>
                )}

                <Link to='/add'>
                    <button className={`add-note__button ${isEmpty ? 'center' : 'bottom'}`}><Plus/></button>
                </Link>
            </div>
        </>
    )
}

export default HomePage;