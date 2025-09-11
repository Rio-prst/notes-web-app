import React from 'react';
import NotesList from './NotesList.jsx';
import {getInitialData} from '../utils/index.js';
import NotesAppHeader from './NotesAppHeader.jsx';
import ArchivedList from './ArchivedList.jsx';
import AddNoteModel from './AddNoteModel.jsx';
import {Plus} from 'lucide-react';

class NotesApp extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            notes: getInitialData(),
            searchKeyword: '',
            isModalOpen: false
        };

        this.onSearchHandler = this.onSearchHandler.bind(this);
        this.onDeleteHandler = this.onDeleteHandler.bind(this);
        this.onArchivedHandler = this.onArchivedHandler.bind(this);
        this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
        this.onToggleModel = this.onToggleModel.bind(this);
    }

    onSearchHandler(keyword) {
        this.setState({searchKeyword: keyword});
    }

    onDeleteHandler(id) {
        const notes = this.state.notes.filter((note) => note.id !== id);
        this.setState({notes});
    }

    onArchivedHandler(id) {
        this.setState((prevState) => ({
            notes: prevState.notes.map((note) => note.id === id? {...note, archived: !note.archived}: note)
        }));
    }

    onAddNoteHandler({title, body}) {
        this.setState((prevState) => {
            return {
                notes: [
                    ...prevState.notes,
                    {
                        id: +new Date(),
                        title,
                        body,
                        createdAt: new Date().toISOString(),
                        archived: false
                    },
                ]
            }
        });
        this.onToggleModel();
    }

    onToggleModel() {
        this.setState((prevState) => {
            return {
                isModalOpen: !prevState.isModalOpen
            }
        });
    }

    render() {
        const {notes, searchKeyword, isModalOpen} = this.state;

        const filteredNotes = notes.filter((note) => 
            note.title.toLowerCase().includes(searchKeyword.toLowerCase())
        );

        const activeNotes = notes.filter((note) => !note.archived);
        const isEmpty = activeNotes.length === 0;

        return (
            <>
            <div className={isModalOpen ? 'notes-app-blur' : 'notes-app'}>
                <NotesAppHeader onSearch={this.onSearchHandler}/>
                <hr />
                <NotesList notes={filteredNotes} onArchived={this.onArchivedHandler} onDelete={this.onDeleteHandler}/>

                {isEmpty ? (
                    <div className='add-note__button-wraper'>
                        <button className='add-note__button center' onClick={this.onToggleModel}><Plus/></button>
                    </div>
                ) : (
                    <button className='add-note__button bottom' onClick={this.onToggleModel}><Plus/></button>
                )}

                <ArchivedList notes={filteredNotes} onArchived={this.onArchivedHandler} onDelete={this.onDeleteHandler}/>
            </div> 

            {isModalOpen && (
                <AddNoteModel
                onClose={this.onToggleModel}
                addNote={this.onAddNoteHandler}
                />
            )}
            </>
        );
    }
}

export default NotesApp;
