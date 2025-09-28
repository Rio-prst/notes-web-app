import React, {useState, useEffect, useContext} from 'react';
import ArchivedList from '../components/ArchivedList.jsx';
import {getArchivedNotes, deleteNote, unarchiveNote} from '../utils/network-data.js';
import SearchBar from '../components/SearchBar.jsx';
import { useSearchParams } from 'react-router-dom';
import LocaleContext from '../context/LocaleContext.js';
import { translation } from '../utils/localeContent.js';

function ArchivedPage() {
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
            const {data} = await getArchivedNotes();
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
        const {data} = await getArchivedNotes(id);
        setNotes(data);
    }

    async function onUnarchivedHandler(id) {
        await unarchiveNote(id);
        const {data} = await getArchivedNotes();
        setNotes(data);
    }

    const filteredNotes = notes.filter((note) => 
        note.title.toLowerCase().includes(keyword.toLowerCase())
    );

    const archivedNotes = filteredNotes.filter((note) => note.archived);

    return (
        <section>
            <hr />
            <h2>{translation[locale].archivedNotes}</h2>
            <div className='search-bar-container'>
                <SearchBar keyword={keyword} keywordChange={onSearchHandler} />
            </div>
            {loading ? (
                <p className='loading'>Loading ...</p>
            ) : (
                <ArchivedList notes={archivedNotes} onDelete={onDeleteHandler} onUnarchived={onUnarchivedHandler} isArchived={true}/>
            )}
        </section>
    )
}   

export default ArchivedPage;