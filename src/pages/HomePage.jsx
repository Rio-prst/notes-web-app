import React from 'react';
import NotesList from '../components/NotesList.jsx';
import {getNotes, deleteNote, archiveNote, addNote} from '../utils/index.js';
import SearchBar from '../components/SearchBar.jsx';
import {Plus} from 'lucide-react';
import { useSearchParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

function HomePageWrapper() {
    const [searchParams, setSearchParams] = useSearchParams();

    const searchKeyword = searchParams.get('keyword');

    function changeSearchParams(keyword) {
        setSearchParams({keyword});
    }

    return <HomePage defaultKeyword={searchKeyword} keywordChange={changeSearchParams}/>
}

class HomePage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            notes: getNotes(),
            searchKeyword: props.defaultKeyword || '',
        };

        this.onSearchHandler = this.onSearchHandler.bind(this);
        this.onDeleteHandler = this.onDeleteHandler.bind(this);
        this.onArchivedHandler = this.onArchivedHandler.bind(this);
        this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
    }

    onSearchHandler(keyword) {
        this.setState(() => {
            return {
                searchKeyword: keyword
            }
        });

        this.props.keywordChange(keyword);
    }

    onDeleteHandler(id) {
        deleteNote(id);
        
        this.setState(() => {
            return {
                notes: getNotes()
            }
        });
    }

    onArchivedHandler(id) {
        archiveNote(id);

        this.setState(() => {
            return {
                notes: getNotes()
            }
        });
    }

    onAddNoteHandler({title, body}) {
        addNote({title, body});

        this.setState(() => {
            return {
                notes: getNotes()
            }
        });
    }

    render() {
        const filteredNotes = this.state.notes.filter((note) => {
            return note.title.toLowerCase().includes(
                this.state.searchKeyword.toLowerCase()
            );
        });

        const activeNotes = filteredNotes.filter((note) => !note.archived);
        const isEmpty = activeNotes.length === 0;

        return (
            <>
            <div className='notes-app'>
                <hr />
                <h2>Catatan Aktif</h2>
                <div className='search-bar-container'>
                    <SearchBar keyword={this.state.searchKeyword} keywordChange={this.onSearchHandler}/>
                </div>
                <NotesList notes={activeNotes}/>
                {isEmpty ? (
                    <div className='add-note__button-wraper'>
                        <Link to='/add'>
                            <button className='add-note__button center' onClick={this.onToggleModel}><Plus/></button>
                        </Link>
                    </div>
                ) : (
                    <Link to='/add'>
                        <button className='add-note__button bottom' onClick={this.onToggleModel}><Plus/></button>
                    </Link>
                )}
            </div> 
            </>
        );
    }
}

export default HomePageWrapper;